import { PROYECTOS } from "../../../Proyects";
import { useRoute } from "wouter";
import "../../stylesheets/info-proyect.css";
import GitHub from "/img/tecnologias/github.png";
import Web from "/img/tecnologias/web.webp";
import BackButton from "../BackButton";
import { LanguageContext } from "../../contexts/LanguageContext";
import { useContext } from "react";
import { TRADUCTION } from "../../utils/language";

export default function ProyectoInfo() {
  const [match, params] = useRoute("/proyecto/:id");
  const id = params.id;
  const { language } = useContext(LanguageContext);

  const { nombre, deploy, github, img, tecnologias, color } = PROYECTOS[id];
  return (
    <section style={{ backgroundColor: color }} className="section-proyect">
      <BackButton />
      <div className="info-proyect">
        <img src={img} className="img-proyecto" />

        <section className="info">
          <section className="title-section">
            <h1 style={{ color: color }}>{nombre}</h1>
            <div className="container-links">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                  style={{ backgroundColor: color }}
                >
                  <img src={GitHub} />
                </a>
              )}
              {deploy && (
                <a
                  href={deploy}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                  style={{ backgroundColor: color }}
                >
                  <img src={Web} />
                </a>
              )}
            </div>
          </section>
          <h2 style={{ color: color }}>{nombre}</h2>
          <p>{PROYECTOS[id].descripcion[language]}</p>
          <h2 style={{ color: color }}>
            {TRADUCTION[language].PROYECTS.SECOND_TITLE}:{" "}
          </h2>
          <ul className="list-techs-used">
            {tecnologias.map((tecnologia) => (
              <li className="tecnologia" key={tecnologia}>
                {tecnologia}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
