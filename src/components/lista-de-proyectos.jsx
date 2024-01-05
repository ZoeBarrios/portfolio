import { PROYECTOS } from "../../Proyects";
import Proyecto from "./proyecto";
import "../stylesheets/proyectos-estilos.css";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";
import { TRADUCTION } from "../utils/language";

export default function ListaDeProyectos({ filter = [] }) {
  let proyectosMostrar = PROYECTOS;
  const { language } = useContext(LanguageContext);

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
        <h1 className="no-proyects">
          {Object.values(TRADUCTION[language].PROYECTS.NO_PROYECTS)}
        </h1>
      )}
    </div>
  );
}
