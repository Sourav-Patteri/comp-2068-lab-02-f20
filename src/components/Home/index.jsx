import React from 'react';
import Button from 'react-bootstrap/Button';
// You need to import your shared header...
import Header from '../shared/Header';
import './styles.css';

const Home = () => {
  return (
    <>
      {/* You need to use your shared header component... */}
      <Header title="Welcome to Home"/>
      {/* You need a link to your about page as a call to action */}
      <Button href="/about" variant="success"> Click to go to About</Button>
    </>
  );
}
 
export default Home;