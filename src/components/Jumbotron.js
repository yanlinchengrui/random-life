import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <Jumbotron fluid className="App-header" style={{ height: "222px" }}>
      <Container fluid>
        <h1 className="display-4"> Random Life <span role="img" aria-label="smiling face with horns">😈</span> </h1>
        <p className="lead"> PLZ only use this app when you don't know what to choose! </p>
        <p className="ps"> P.S. CLICK TO DELETE </p>
      </Container>
    </Jumbotron>
  );
};

export default Jumbo;