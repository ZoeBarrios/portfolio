import { useContext, useState } from "react";
import ListaDeProyectos from "./lista-de-proyectos";
import ListaTecnologias from "./lista-tecnologias";
import "../stylesheets/filter.css";
import { LanguageContext } from "../contexts/LanguageContext";
import { TRADUCTION } from "../utils/language";

export default function Filter() {
  const [filters, setFilters] = useState([]);
  const { language } = useContext(LanguageContext);

  const handleSetFilters = (e, filter) => {
    if (!filters.includes(filter.toLowerCase())) {
      setFilters([...filters, filter.toLowerCase()]);
    } else {
      setFilters(filters.filter((f) => f != filter.toLowerCase()));
    }

    e.target.classList.toggle("filter-button-active");
  };
  const deleteFilters = () => {
    setFilters([]);
    const buttons = document.querySelectorAll(".filter-button");
    buttons.forEach((b) => b.classList.remove("filter-button-active"));
  };
  return (
    <div id="proyects">
      <section className="filter-container">
        <h1>{TRADUCTION[language].PROYECTS.TITLE}</h1>
        <ListaTecnologias
          onClick={handleSetFilters}
          deleteFilters={deleteFilters}
        />
      </section>

      <ListaDeProyectos filter={filters} />
    </div>
  );
}
