import React,{ useState } from "react";
// import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
// Need to import the 'ADD_USER' mutation 

export const SignUp = (props) => {
  // use State will allow change and save the previous data
  const [formState, setFormState] = useState({ email: '', password: '' });
  // Need the the 'ADD_USER' mutation to allow to add a new user
  // const [addUser] = useMutation();
  // The function will retrieve the data provided in the form that will be sent to create a new User
  const onSubmit = async (event) => {
    event.preventDefault();
    // will be uncommented once I link to the dataBase
    // const mutationResponse = await addUser({
    //   variables: {
    //     email: formState.email,
    //     password: formState.password,
    //     name: formState.name,
    //   },
    // });
    // // After it creates a new user then it will allow the user to login with a token
    // const token = mutationResponse.data.addUser.token;
    // Auth.login(token);
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
    <form onSubmit={onSubmit} className="signUp-form"> 
      <label forhtml="name">Enter Name</label>
      {/* the onChange listener will allow reach to display in real time the changes that are occurring
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <label forhtml="email">Email:</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Example@gmail.com"/>
      <label forhtml="password">Password:</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder=""/> */}
      <button className="sign-up">Sign Up</button>
    </form>
    {/* This will link to the login page when its clicked */}
    <a href="/">
    <button className="link-btn" >Already have an account? Login In</button>
    </a>
    </div>
    

  )
}

export default SignUp;