import React,{ useState } from "react";
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from "../utils/mutations";
import { Link } from 'react-router-dom';

export const SignUp = (props) => {
  // use State will allow change and save the previous data
  const [formState, setFormState] = useState({ username: '', password: '' });
  // Need the the 'ADD_USER' mutation to allow to add a new user
 const [addUser, { error, data }] = useMutation(ADD_USER)
  // The function will retrieve the data provided in the form that will be sent to create a new User
  const onSubmit = async (event) => {
    event.preventDefault();
    // will be uncommented once I link to the dataBase
    try {
      const { data } = await addUser({
        variables: { ...formState },
     
      });
      const token = data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };


// This is in charge of showing the changes in real time with use state
// It will retrieve the input value and name for each 
const handleChange = (event) => {
  const { name, value } = event.target;
  setFormState({
    ...formState,
    [name]: value,
  });
};
// the html that will be returned for a sign up Page
  return (
    <div className="form-container login-sign">
      {/* will call the function to check the credentials provided are correct and will be added to the databases of user */}
      { data ? (
        <Link to='/todos' ></Link>
      ): (
        <form onSubmit={onSubmit} className="signUp-form"> 
      <label forhtml="username">Enter User Name</label>
      {/* the onChange listener will allow reach to display in real time the changes that are occurring */}
      <input name="username" placeholder="TheRealShrimp" value={formState.username} onChange={handleChange}/>
      <label forhtml="password">Password:</label>
      <input value={formState.password} onChange={handleChange} name="password" type="password" placeholder=""/>
      <button className="sign-up">Sign Up</button>
    </form>
      )}
      {error && (
             <div>
             <p className="error-text">{error.message}</p>
           </div>
            )}
     <a href="/">
       <button className="link-btn" >Already have an account? Login In</button>
      </a>       
   
    </div>
    

  )
}

export default SignUp;