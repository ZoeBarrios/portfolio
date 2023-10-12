import { PROYECTOS } from "../../Utils";
import Proyecto from "./proyecto";
import "../stylesheets/proyectos-estilos.css";

export default function ListaDeProyectos({ filter = [] }) {
  let proyectosMostrar = PROYECTOS;

  if (filter && filter.length == 1) {
    proyectosMostrar = Object.fromEntries(
      Object.entries(proyectosMostrar).filter(([key, value]) => {
        return value.tecnologias.some((t) => t.toLowerCase() == filter);
      })
    );
  } else if (filter && filter.length > 1) {
    const filters = filter.map((f) => f.toLowerCase());
    proyectosMostrar = Object.fromEntries(
      Object.entries(proyectosMostrar).filter(([key, value]) => {
        return filters.every((f) =>
          value.tecnologias.some((t) => t.toLowerCase() == f)
        );
      })
    );
  }

  return (
    <div className="proyectos-container">
      {Object.keys(proyectosMostrar).length != 0 ? (
        Object.entries(proyectosMostrar).map(([key, value]) => (
          <Proyecto
            id={key}
            img={value.img}
            name={value.nombre}
            key={key}
            tecnologias={value.tecnologias}
          />
        ))
      ) : (
        <h1 className="no-proyects">No hay proyectos aun...</h1>
      )}
    </div>
  );
}
