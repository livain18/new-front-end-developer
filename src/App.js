import { GraphQLClient, ClientContext } from 'graphql-hooks';
import Container from './Container';
import Logo from './Logo';

const client = new GraphQLClient({
  url: process.env.REACT_APP_POKE_ENDPOINT,
});

export default function App() {
  return (
    <ClientContext.Provider value={client}>
      <>
        <Container>
          <Logo />
          {/* Build your app here */}
        </Container>
      </>
    </ClientContext.Provider>
  );
}
