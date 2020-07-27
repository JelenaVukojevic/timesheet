import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './containers/Header.js';
import MainSection from './containers/MainSection.js';
import Footer from './components/Footer.js';

const App = () => (
  <Container>
    <Header />
    <MainSection />
    <Footer />
  </Container>
)

export default App;