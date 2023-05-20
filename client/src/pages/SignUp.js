import React,{ useState } from "react";

export const SignUp = (props) => {
  // use State will allow change and save the previous data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
// on Submit handlers will console log the results for now
// this will be change into an Auth for verifications
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, name);
  }
// the html that will be returned for a sign up Page
  return (
    <div className="form-container">
      {/* will call the function to check the credentials provided are correct and will be added to the databases of user */}
    <form onSubmit={onSubmit} className="signUp-form"> 
      <label forhtml="name">Enter Name</label>
      {/* the onChange listener will allow reach to display in real time the changes that are occurring */}
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <label forhtml="email">Email:</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Example@gmail.com"/>
      <label forhtml="password">Password:</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder=""/>
      <button className="sign-up">Sign Up</button>
    </form>
    {/* This will link to the login page when its clicked */}
    <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Already have an account? Login In</button>
    </div>
    

  )
}

export default SignUp;