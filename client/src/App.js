import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';

import React,{ useState } from 'react';
import './App.css';

function App() {
  const [currentForm, setForm] = useState('login');

const toggleForm = (formName) => {
setForm(formName);
}
  return (
    <div className="App">
     { 
     currentForm === 'Login' ? <Login onFormSwitch={toggleForm}/> : <SignUp onFormSwitch={toggleForm}/>
     }
    </div>
  );
}

export default App;

