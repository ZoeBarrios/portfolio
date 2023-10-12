import { TECNOLOGIAS } from "../../Utils";

export default function ListaTecnologias({ onClick, deleteFilters }) {
  return (
    <div className="lista-filtros">
      {Object.entries(TECNOLOGIAS).map(([key]) => (
        <button key={key} className="button">
          <img
            src={TECNOLOGIAS[key]}
            alt={key}
            className="filter-button"
            onClick={(e) => onClick(e, key)}
          />
        </button>
      ))}
      <button onClick={deleteFilters} className="button-delete">
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"
          alt="delete"
        />
      </button>
    </div>
  );
}
