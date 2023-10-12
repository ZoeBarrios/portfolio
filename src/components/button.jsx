function Button({ img, onClick }) {
  return (
    <div className="img-container" onClick={onClick}>
      <img src={img} className="img"></img>
    </div>
  );
}

export default Button;
