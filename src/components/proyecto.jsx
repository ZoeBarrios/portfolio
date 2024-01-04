import { Link } from "wouter";
import Tecnologia from "./tecnologia";

export default function Proyecto({ id, img, tecnologias, name }) {
  return (
    <div className="proyecto">
      <img src={img} className="img-proyecto" alt={name} />
      <h1>{name}</h1>
      <div className="lista-tecnologias">
        {tecnologias.map((tecnologia) => (
          <Tecnologia name={tecnologia} key={tecnologia} />
        ))}
      </div>
      <Link to={`/proyecto/${id}`} className="link-button">
        Ver mas
      </Link>
    </div>
  );
}
