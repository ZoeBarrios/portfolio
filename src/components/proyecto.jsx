import { Link } from "wouter";
import Tecnologia from "./tecnologia";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";
import { TRADUCTION } from "../utils/language";

export default function Proyecto({ id, img, tecnologias, name }) {
  const { language } = useContext(LanguageContext);
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
        {TRADUCTION[language].BUTTONS.MORE}
      </Link>
    </div>
  );
}
