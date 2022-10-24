import React, {useState} from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useMutation } from '@apollo/client';
import './App.css';
import CreateUser from './components/createUser';
import UserList from './components/UserList';

function App() {



  // make client 
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });


  return (
    <>
    <ApolloProvider client={client}>
      <CreateUser />
      <UserList />
    
    </ApolloProvider>
    </>
  );
}

export default App;
