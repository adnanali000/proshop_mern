import React from 'react' 
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap'

function App() {
  return (
    <>
    <Header />
    <main className='py-3'>
      <Container>
        Welcome to proshop
      </Container>
    </main>
     <Footer />
    </>
  );
}

export default App;
