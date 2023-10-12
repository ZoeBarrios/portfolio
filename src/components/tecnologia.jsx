import { TECNOLOGIAS } from "../../Utils";

export default function Tecnologia({ name }) {
  return (
    <div className="tecnologia">
      <img src={TECNOLOGIAS[name]} alt={name} className="tecnologia-img" />
    </div>
  );
}
