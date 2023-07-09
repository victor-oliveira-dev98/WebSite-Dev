import { Col } from "react-bootstrap";
import {  } from "react-bootstrap-icons";


export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        
        
        <div>
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={linkUrl} target="_blank" rel="noreferrer">learn more</a>          
        </div>
      </div>
    </Col>
  )
}