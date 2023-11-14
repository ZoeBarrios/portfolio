import { useEffect } from "react";
import useLoader from "../../customHooks/useLoader";
import Loader from "../loader";
import Biografia from "../biografia";
import Header from "../Header";
import Proyects from "../Pages/Proyects";
import AboutMe from "./AboutMe";
import Contacto from "./Contacto";

export default function Home() {
  const { isLoading, showLoader, hideLoader } = useLoader();
  useEffect(() => {
    showLoader();
    setTimeout(() => {
      hideLoader();
    }, 2000);
  }, []);
  return (
    <div className="home" id="home">
      <Header />
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <main className="container">
          <Biografia />

          <section className="sections">
            <AboutMe />
            <Proyects />
            <Contacto />
          </section>
        </main>
      )}
    </div>
  );
}
