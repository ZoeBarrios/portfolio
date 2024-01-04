import { PROYECTOS } from "../../../Utils";
import { useRoute } from "wouter";
import "../../stylesheets/proyecto-info.css";
import GitHub from "/img/tecnologias/github.png";
import Web from "/img/tecnologias/web.webp";

export default function ProyectoInfo() {
  const [match, params] = useRoute("/proyecto/:id");
  const id = params.id;

  const { nombre, descripcion, deploy, github, img, tecnologias, color } =
    PROYECTOS[id];
  return (
    <section style={{ backgroundColor: color }} className="section-proyect">
      <div className="info-proyect">
        <section className="title-section">
          <h1>{nombre}</h1>
          <div className="container-links">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="link"
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
              >
                <img src={Web} />
              </a>
            )}
          </div>
        </section>

        <img src={img} className="img-proyecto" />
        <section className="info">
          <h2 style={{ color: color }}>Sobre el proyecto</h2>
          <p>{descripcion}</p>
          <h2 style={{ color: color }}>Tecnologias utilizadas: </h2>
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
