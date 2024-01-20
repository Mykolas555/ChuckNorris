import React from "react";
import norris from '../../media/pngegg.png'
import { Container, Row, Col } from "reactstrap";
import './home.scss'

const Home = () => {

  return (
    <>
      <Container className="home">
        <Row>
          <Col className="home__content">
            <img src={norris} alt="aaa"/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
