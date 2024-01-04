import { TECNOLOGIAS } from "../../Utils";

export default function Tecnologia({ name }) {
  return (
    <div className="tecnologia">
      {TECNOLOGIAS[name].className ? (
        <i className={`used-tech ${TECNOLOGIAS[name].className}`}></i>
      ) : (
        <img src={TECNOLOGIAS[name].img} alt={name} className="used-tech" />
      )}
    </div>
  );
}
