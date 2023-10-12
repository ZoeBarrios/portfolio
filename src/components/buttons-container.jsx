import Button from "./button";
import linkedin from "/img/linkedin.png";
import github from "/img/github.png";
import cv from "/img/cv.png";
import "../stylesheets/buttons-container.css";

function ButtonsContainer() {
  return (
    <div className="buttons-container">
      <Button
        img={linkedin}
        url="https://www.linkedin.com/in/zoe-nazarena-barrios-55119525a/"
      />
      <Button img={github} url="https://github.com/ZoeBarrios" />
      <Button
        img={cv}
        url="https://drive.google.com/file/d/1lHe7iQ_ARbw8ITkrY0EjEeh3e7oYhUwV/view?usp=drive_link"
      />
    </div>
  );
}

export default ButtonsContainer;
