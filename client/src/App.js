import logo from '././assets/logo-1.png'
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import NavBar from './components/NavBar'

import React,{ useState } from 'react';
import './App.css';

function App() {
  const [currentForm, setForm] = useState('login');

const toggleForm = (formName) => {
setForm(formName);
}
  return (
    <div className="App">
      <header>
        <img className='logo' src={logo} alt='Logo'/>
        <NavBar />
      </header>
      
     <div className='login-sign'>
        { 
          currentForm === 'Login' ? <Login onFormSwitch={toggleForm}/> : <SignUp onFormSwitch={toggleForm}/>
        }
     </div> 

    </div>
  );
}

export default App;

