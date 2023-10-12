import { Route } from "wouter";
import Home from "./Pages/Home";
import Proyects from "./Pages/Proyects";
import ProyectoInfo from "./Pages/proyecto-info";
import Contacto from "./Pages/Contacto";

function Routes() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/portfolio" component={Proyects} />
      <Route path="/proyecto/:id" component={ProyectoInfo} />
    </div>
  );
}

export default Routes;
