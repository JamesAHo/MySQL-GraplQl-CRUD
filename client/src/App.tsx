import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });


  return (
    <div className="App">
     
    </div>
  );
}

export default App;
