import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row className="footer-box">
                <Col md="4" className="footer-credit">
                  <h3>Designed and Developed by Ricky Deakins</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                  <h3>Copyright © {year} RD</h3>
                </Col>
                <Col md="4" className="footer-body">
                  <ul className="footer-icons">
                    <li className="social-icons">
                      <a
                        href="https://github.com/Rdeaki"
                      >
                        <AiFillGithub />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://instagram.com/Ricky.Deakins"
                      >
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://www.linkedin.com/in/Ricky-Deakins/"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;