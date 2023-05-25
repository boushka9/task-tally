
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from '././assets/logo-1.png';
import Login from './pages/Login';
import Scores from './pages/Scores';
import SignUp from './pages/SignUp';
import NavBar from './components/NavBar';
import TodoList from './pages/ToDo';
import Footer from './components/Footer';
import { setContext } from '@apollo/client/link/context';
import React,{ useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});


// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
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
