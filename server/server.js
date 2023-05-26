//requiring vital packages
const express = require('express');
const db = require('./config/connection');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const {typeDefs, resolvers } = require('./schemas');
//PLACEHOLDER - DOES NOT EXIST YET
const {authMiddleware } = require('./utils/auth');
const auth = require('./utils/auth');

//instance of express and port with port number 
const app = express();
const PORT = process.env.PORT || 3001;

//TODO- require routes

//init Apollo server

const server = new ApolloServer ({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the 'build' directory inside the 'client' folder
app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));



// Route all other requests to the React app's 'index.html' file
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});

const startApolloServer = async () => {
    await server.start();
    server.applyMiddleware({ app });
    
    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      })
    })
    };

startApolloServer();