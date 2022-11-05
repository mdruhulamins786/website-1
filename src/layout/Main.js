import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Headers from "../pages/shared/headers/Headers";
import LeftSideNav from "../pages/shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../pages/shared/RightSideNav/RightSideNav";

const Main = () => {
  return (
    <div className="">
      <Headers />
      <Container>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <LeftSideNav />
          </Col>
          <Col lg="7">
            <Outlet />
          </Col>
          <Col lg="3">
            <RightSideNav />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Main;
