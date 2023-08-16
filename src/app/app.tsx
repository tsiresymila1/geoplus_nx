import ApolloProvider from './apollo-provider/apollo-provider';
import Router from './router/router';
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  return (
    <ApolloProvider>
      <Router />
    </ApolloProvider>
  );
}

export default App;
