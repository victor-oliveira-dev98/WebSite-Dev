import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import PokeNext from "../assets/img/Projects/pokenextProject.png";
import UniLife from "../assets/img/Projects/unilifeProject.png";
import TypeFormProject from "../assets/img/Projects/projectTypeAnimation.png";
import RocketNFTs from "../assets/img/Projects/projectRocktNfts.png";
import RegressiveRocket from "../assets/img/Projects/projectRegressiveRocket.png";
import MemoryGame from "../assets/img/Projects/projectMemoryGame.png";
import CatchthePokemon from "../assets/img/Projects/projectCatchThePokemon.png";
import GPT3 from "../assets/img/Projects/projectGPT3.png";
import NoticeBoard from "../assets/img/Projects/projectNoticeBoard.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [

    {
      title: "PokeDex",
      description: "PokeDex using Next.JS",
      imgUrl: PokeNext,
      linkUrl: "https://pokenext-one-puce.vercel.app"
    },
  
    {
      title: "Business Startup",
      description: "Design & Development - HTML, CSS and JS",
      imgUrl: UniLife,
      linkUrl: "https://studio-uni-life.vercel.app"
    },
    {
      title: "Typeform Coppy",
      description: "complex animations with CSS.",
      imgUrl: TypeFormProject,
      linkUrl: "https://typeform-project.vercel.app"
    },
    {
      title: "Rocket NFTs",
      description: "Financial management system in production.",
      imgUrl: RocketNFTs,
      linkUrl: "https://rocket-nf-ts.vercel.app"
    },
    {
      title: "gpt-3-project-studies",
      description: "Application created for study",
      imgUrl: GPT3,
      linkUrl: "https://gpt-3-project-studies.vercel.app"
    },
    {
      title: "MemoryGame - Pokemons",
      description: "Real project for solar energy company",
      imgUrl: MemoryGame,
      linkUrl: "https://memory-game-rho-one.vercel.app"
    },
    {
      title: "Regressive Rocket",
      description: "CSS, HTML and JS to create a countdown rocket;",
      imgUrl: RegressiveRocket,
      linkUrl: "https://regressive-rocket.vercel.app"
    },

    {
      title: "Catch the Pokemon",
      description: "A site created by study for a distance university.",
      imgUrl: CatchthePokemon,
      linkUrl: "https://catch-the-pokemon.vercel.app"
    },
    {
      title: "study application",
      description: " HTML, CSS and NODEJS",
      imgUrl: NoticeBoard,
      linkUrl: "https://notice-board-beta.vercel.app"
    },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                The portfolio of completed projects tends to grow more and more. 
                With the creation of projects using JavaScript and with libraries and frameworks such as NextJS and ReactJS.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}