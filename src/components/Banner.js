import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen'; 

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Web Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() *100)
    const period = 2000;

    useEffect(() =>  {
        let ticker = setInterval(() => {
            tick ();
        }, delta)

        return () => { clearInterval (ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText == fullText) {
            setIsDeleting (true);
            setDelta (period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className="tagline"> Welcome to my Portfolio</span>
                            <h1>
                                {`Hi I'm webcoded `} <span className="wrap">{text}</span>
                            </h1>
                            <p> For a long time ago I worked in the field of law. I worked at the 2nd district police station of Goiânia/Brazil as a volunteer. So I worked at the Enel Energy Distribution from goiás for one year. After that I passed the contest for interns of the Court of Justice of the State of Goiás where I worked in the Civil Court, organized crime court and in the 6th court of the public farm. After finishing college I worked as a lawyer, where I started studying Systems Analysis and Development. Now while studying I work as a freelancer in website
development by Wordpress and coding. </p>
                            <a className="text-decoration-none" href="https://api.whatsapp.com/send?phone=5562984097793" target="_blank"> <button onClick> Let's connect <ArrowRightCircle size ={24}/> </button> </a> 
                        </div> }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />

                    </Col>


                </Row>
            </Container>

        </section>
    )
}