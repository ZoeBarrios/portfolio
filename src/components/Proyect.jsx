import { Link } from "wouter";
import Tech from "./Tech";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";
import { TRADUCTION } from "../utils/language";

export default function Proyecto({ id, img, tecnologias, name }) {
  const { language } = useContext(LanguageContext);
  return (
    <div className="proyecto animate__fadeIn">
      <img src={img} className="img-proyecto" alt={name} />
      <h1>{name}</h1>
      <div className="lista-tecnologias">
        {tecnologias.map((tecnologia) => (
          <Tech name={tecnologia} key={tecnologia} />
        ))}
      </div>
      <Link to={`/proyecto/${id}`} className="link-button">
        {TRADUCTION[language].BUTTONS.MORE}
      </Link>
    </div>
  );
}
