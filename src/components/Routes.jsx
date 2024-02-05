import { Route } from "wouter";
import Home from "./Pages/Home";
import ProyectoInfo from "./Pages/InfoProyect";

function Routes() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/proyecto/:id" component={ProyectoInfo} />
    </div>
  );
}

export default Routes;
