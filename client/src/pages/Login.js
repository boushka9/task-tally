import React,{ useState } from "react";
import { useMutation } from '@apollo/client';
import Auth from "../utils/auth";
import { LOGIN } from '../utils/mutations';
import { Link } from 'react-router-dom';
// Need to import Auth and apollo react to be able to check credentials 
export const Login = (props) => {

  const [formState, setFormState] = useState({ username: '', password: '' });
  // useMutation(LOGIN )
  const [login, { error, data }] = useMutation( LOGIN );

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login({
        variables: { ...formState },
      });
      const token = result.data.login.token;
      Auth.login(token);
      setFormState({ username: '', password: '' }); // Clear form inputs
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // this will the the login form that will be called if they user has not been signed in
  // need to add link to data base of users
  return (
    <div className="form-container login-sign">
      { data ? (
        <Link to='/todos' ></Link>
      ):
      (
        <form onSubmit={onSubmit} className="login-form"> 
      <label htmlFor="username">Username:</label>
      <input name="username" value={formState.username} onChange={handleChange} type="username" placeholder="TheShrimp" />
      <label htmlFor="password">Password:</label>
      <input  onChange={handleChange} type="password" placeholder="" name="password" value={formState.password}/>
      {error ? (
          <div>
            <p className="error-text">Incorrect Email or Password, try again?</p>
          </div>
        ) : null}
      <button>Login</button>
    </form>
      )}

     
    {/* This will change pages to sign up will have this changed to link with the api later */}
    <a href="/signup">
    <button className="link-btn"> Don't have an account? Sign Up Here</button>
    </a>
    </div>
   
  )
}

export default Login;