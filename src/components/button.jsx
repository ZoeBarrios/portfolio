function Button({ icon, onClick }) {
  return (
    <div className="img-container" onClick={onClick}>
      <i className={`${icon} icon`}></i>
    </div>
  );
}

export default Button;
