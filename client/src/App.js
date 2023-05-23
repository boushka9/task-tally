
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from '././assets/logo-1.png';
import Login from './pages/Login';
import Scores from './pages/Scores';
import SignUp from './pages/SignUp';
import NavBar from './components/NavBar';
import TodoList from './pages/ToDo';
import Footer from './components/Footer';

import React,{ useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [currentForm, setForm] = useState('login');

  const toggleForm = (formName) => {
  setForm(formName);
  }
  
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <header>
            <img className='logo' src={logo} alt='Logo'/>
            <NavBar />
          </header> 
          <Routes> 
              <Route 
                path="/" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<SignUp />} 
              />
              <Route 
                path="/todos" 
                element={<TodoList />} 
              />
              <Route
                path="/scores" 
                element={<Scores />} 
              />
          </Routes>
      </Router>
      {/* <div className='login-sign'>
           { 
             currentForm === 'Login' ? <Login onFormSwitch={toggleForm}/> : <SignUp onFormSwitch={toggleForm}/>
           }
        </div>  */}
      <Footer />
     </ApolloProvider>
    </div>
  );
}

export default App;
