import { useContext } from "react";
import TechsList from "./TechsList";
import "../stylesheets/filter.css";
import { LanguageContext } from "../contexts/LanguageContext";
import { TRADUCTION } from "../utils/language";

export default function Filter({ handleSetFilters, deleteFilters }) {
  const { language } = useContext(LanguageContext);

  return (
    <div id="proyects">
      <section className="filter-container animate__fadeIn">
        <h1>{TRADUCTION[language].PROYECTS.TITLE}</h1>
        <TechsList onClick={handleSetFilters} deleteFilters={deleteFilters} />
      </section>
    </div>
  );
}
