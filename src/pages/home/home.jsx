import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import style from "./home.module.scss";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Home page</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;