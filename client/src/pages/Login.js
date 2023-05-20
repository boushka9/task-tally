import React,{ useState } from "react";
// Need to import Auth and apollo react to be able to check credentials 
export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }
  // this will the the login form that will be called if they user has not been signed in
  // need to add link to data base of users
  return (
    <div className="form-container">
     <form onSubmit={onSubmit} className="login-form"> 
      <label forhtml="email">Email:</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Example@gmail.com"/>
      <label forhtml="password">Password:</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder=""/>
      <button className="login-btn">Login</button>
    </form>
    {/* This will change pages to sign up will have this changed to link with the api later */}
    <button className="link-btn" onClick={() => props.onFormSwitch('SignUp')}> Don't have an account? Sign Up Here</button>
    </div>
   
  )
}

export default Login;