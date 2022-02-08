import './App.css'
import {ApolloProvider, useMutation, useQuery, gql} from "@apollo/client"
import client from './client';
import Form from './components/form';

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Form/>
    </div>
    </ApolloProvider>
  );
}

export default App;
