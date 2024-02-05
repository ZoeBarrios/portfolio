import { TECNOLOGIAS } from "../../Proyects";

export default function ListaTecnologias({ onClick, deleteFilters }) {
  return (
    <div className="lista-filtros">
      {Object.entries(TECNOLOGIAS).map(([key]) => (
        <button key={key} className="button">
          {TECNOLOGIAS[key].className ? (
            <i
              className={`${TECNOLOGIAS[key].className}  filter-button`}
              onClick={(e) => onClick(e, key)}
            ></i>
          ) : (
            <img
              src={TECNOLOGIAS[key].img}
              alt={key}
              className="filter-button"
              onClick={(e) => onClick(e, key)}
            />
          )}
        </button>
      ))}
      <button onClick={deleteFilters} className="button-delete">
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}
