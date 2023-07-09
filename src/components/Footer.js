import { Container, Col, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm/>
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href='https://github.com/victor-oliveira-dev98' target="_blank"> <img src={navIcon1} alt=""/></a>
                            <a href='https://www.linkedin.com/in/victor-hugo-faria-de-oliveira-340b71190/' target="_blank" rel="noreferrer"> <img src={navIcon2} alt=""/></a>
                            <a href='https://www.instagram.com/victor_h.fo/' target="_blank"> <img src={navIcon3} alt=""/></a>
                        </div>
                        <p>CopyRight 2022, All Right Reserved</p>
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}
