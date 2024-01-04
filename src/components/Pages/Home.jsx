import { useEffect } from "react";

import Biografia from "../biografia";
import Header from "../Header";
import Proyects from "../Pages/Proyects";
import AboutMe from "./AboutMe";
import Contacto from "./Contacto";

export default function Home() {
  return (
    <div className="home" id="home">
      <div style={{ height: "5.5rem" }}>&nbsp;</div>
      <Header />
      <main className="container">
        <Biografia />

        <section className="sections">
          <AboutMe />

          <Proyects />
          <Contacto />
        </section>
      </main>
    </div>
  );
}
