import { useEffect } from "react";
import useLoader from "../../customHooks/useLoader";
import Hamburger from "../hamburguer";
import Loader from "../Loader";
import Filter from "../filter";

export default function Proyects() {
  const { isLoading, showLoader, hideLoader } = useLoader();
  useEffect(() => {
    showLoader();
    setTimeout(() => {
      hideLoader();
    }, 1000);
  }, []);
  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <div>
          <Hamburger />
          <Filter />
        </div>
      )}
    </>
  );
}
