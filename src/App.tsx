import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Exercises from "./pages/Exercises";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <MyNavbar />
        </Col>
      </Row>

      <Switch>
        <Route path="/exercises">
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Exercises />
            </Col>
          </Row>
        </Route>

        <Route path="/" exact>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Home />
            </Col>
          </Row>
        </Route>
      </Switch>

      <Footer />
    </Container>
  );
}

export default App;
