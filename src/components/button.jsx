function Button({ img, url }) {
  const handleClick = () => {
    window.open(url, "_blank");
  };
  return (
    <div className="img-container" onClick={handleClick}>
      <img src={img} className="img"></img>
    </div>
  );
}

export default Button;
