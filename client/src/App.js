
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from '././assets/logo-1.png'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NavBar from './components/NavBar';
//import ToDo from './pages/ToDo'
import Footer from './components/Footer'

import React,{ useState } from 'react';
import './App.css';

function App() {
  const [currentForm, setForm] = useState('login');

const toggleForm = (formName) => {
setForm(formName);
}
  return (
    <div className="App">
      {/* <ApolloProvider client={client}> */}
        {/* <Router>
          <header>
            <img className='logo' src={logo} alt='Logo'/>
            <NavBar />
          </header> 
          <Routes> 
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<SignUp />} 
              />
              <Route 
                path="/todos" 
                element={<ToDo />} 
              />
              <Route
                path="/scores" 
                element={<Scores />} 
              />
          </Routes>
      </Router> */}

    {/*  COMMENTED OUT ROUTES TO WORK ON STYLING, COMMENT THEM BACK IN AND DELETE THE HEADER BELOW BC ONE IS ALREADY IN THE ROUTES  */}
        <header>
          <img className='logo' src={logo} alt='Logo'/>
          <NavBar />
        </header> 

        <div className='login-sign'>
           { 
             currentForm === 'Login' ? <Login onFormSwitch={toggleForm}/> : <SignUp onFormSwitch={toggleForm}/>
           }
        </div> 
      <Footer />
     {/* </ApolloProvider> */}
    </div>
  );
}

export default App;
