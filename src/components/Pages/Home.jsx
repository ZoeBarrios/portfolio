import { useEffect } from "react";
import useLoader from "../../customHooks/useLoader";
import Loader from "../loader";
import Biografia from "../biografia";
import ButtonsContainer from "../buttons-container";
import Hamburger from "../hamburguer";

export default function Home() {
  const { isLoading, showLoader, hideLoader } = useLoader();
  useEffect(() => {
    showLoader();
    setTimeout(() => {
      hideLoader();
    }, 2000);
  }, []);
  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <div className="container">
          <Hamburger />
          <Biografia />
          <ButtonsContainer />
        </div>
      )}
    </>
  );
}
