import { useCallback, useState } from "react";
import Filter from "../filter";
import ProyectsList from "../ProyectsList";

export default function Proyects() {
  const [filters, setFilters] = useState([]);
  const handleSetFilters = useCallback(
    (e, filter) => {
      if (!filters.includes(filter.toLowerCase())) {
        setFilters([...filters, filter.toLowerCase()]);
      } else {
        setFilters(filters.filter((f) => f != filter.toLowerCase()));
      }

      e.target.classList.toggle("filter-button-active");
    },
    [filters]
  );
  const deleteFilters = useCallback(() => {
    setFilters([]);
    const buttons = document.querySelectorAll(".filter-button");
    buttons.forEach((b) => b.classList.remove("filter-button-active"));
  }, []);
  return (
    <>
      <Filter
        deleteFilters={deleteFilters}
        handleSetFilters={handleSetFilters}
      />
      <ProyectsList filter={filters} />
    </>
  );
}
