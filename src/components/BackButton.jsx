export default function BackButton() {
  const handleReturn = () => {
    window.history.back();
  };
  return (
    <button className="back-button" onClick={handleReturn}>
      <i className="fa-solid fa-arrow-right fa-rotate-180"></i>
    </button>
  );
}
