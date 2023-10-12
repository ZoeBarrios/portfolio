import { PROYECTOS } from "../../../Utils";
import { useRoute } from "wouter";
import "../../stylesheets/proyecto-info.css";
import GitHub from "/img/tecnologias/github.png";
import Web from "/img/tecnologias/web.png";
import Hamburger from "../hamburguer";

export default function ProyectoInfo() {
  const [match, params] = useRoute("/proyecto/:id");
  const id = params.id;

  const { nombre, descripcion, deploy, github, img, tecnologias } =
    PROYECTOS[id];
  return (
    <>
      <Hamburger />
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
          <h2>Sobre el proyecto</h2>
          <p>{descripcion}</p>
          <h2>Tecnologias utilizadas: </h2>
          <ul>
            {tecnologias.map((tecnologia) => (
              <li className="tecnologia" key={tecnologia}>
                {tecnologia}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
