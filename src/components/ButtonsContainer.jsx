import Button from "./Button";
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
        icon="fa-brands fa-linkedin-in"
        onClick={() =>
          handleClick(
            "https://www.linkedin.com/in/zoe-nazarena-barrios-55119525a/"
          )
        }
      />
      <Button
        icon="fa-brands fa-github"
        onClick={() => handleClick("https://github.com/ZoeBarrios")}
      />
      <Button icon="fa-solid fa-file" onClick={handleDownloadClick} />
    </div>
  );
}

export default ButtonsContainer;
