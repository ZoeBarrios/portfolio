import { useEffect } from "react";
import "../../stylesheets/contacto.css";
import Hamburger from "../hamburguer";
import useLoader from "../../customHooks/useLoader";
import Loader from "../loader";
import Form from "../form";
function Contacto() {
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
      <Hamburger />
      {!isLoading && (
        <div className="contacto-container">
          <Form />
        </div>
      )}
    </>
  );
}

export default Contacto;
