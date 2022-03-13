import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./navBar.module.scss";

export const NavBar = () => {
  return (
    <Container>
      <Row>
        <Col centered>
          <Link to="/react-portfolio" className={style.hrefLink}>
            {"Home"}
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
