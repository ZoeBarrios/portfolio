import Button from "./button";
import linkedin from "/img/linkedin.png";
import github from "/img/github.png";
import cv from "/img/cv.png";
import "../stylesheets/buttons-container.css";

function ButtonsContainer() {
  function handleDownloadClick() {
    const url = "/BARRIOS_CV.pdf";

    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "BARRIOS_cv.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="buttons-container" id="buttons-container">
      <Button
        img={linkedin}
        onClick={() =>
          handleClick(
            "https://www.linkedin.com/in/zoe-nazarena-barrios-55119525a/"
          )
        }
      />
      <Button
        img={github}
        onClick={() => handleClick("https://github.com/ZoeBarrios")}
      />
      <Button img={cv} onClick={handleDownloadClick} />
    </div>
  );
}

export default ButtonsContainer;
