import React,{ useState } from "react";
// import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
// import { LOGIN } from '../utils/mutations';
// Need to import Auth and apollo react to be able to check credentials 
export const Login = (props) => {

  const [formState, setFormState] = useState({ email: '', password: '' });
  // useMutation(LOGIN )
  // const [login, { error }] = useMutation();

  const onSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const mutationResponse = await login({
    //     variables: { email: formState.email, password: formState.password },
    //   });
    //   const token = mutationResponse.data.login.token;
    //   Auth.login(token);
    // } catch (e) {
    //   console.log(e);
    // }
  }

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
    <div className="form-container">
     <form onSubmit={onSubmit} className="login-form"> 
      <label htmlFor="email">Email:</label>
      <input name="email" onChange={handleChange} type="email" placeholder="Example@gmail.com" id="email"/>
      <label htmlFor="password">Password:</label>
      <input  onChange={handleChange} type="password" placeholder="" name="password" id="password"/>
      {/* {error ? (
          <div>
            <p className="error-text">Incorrect Email or Password, try again?</p>
          </div>
        ) : null} */}
      <button>Login</button>
    </form>
    {/* This will change pages to sign up will have this changed to link with the api later */}
    <button className="link-btn" onClick={() => props.onFormSwitch('SignUp')}> Don't have an account? Sign Up Here</button>
    </div>
   
  )
}