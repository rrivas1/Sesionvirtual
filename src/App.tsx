import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Ruteo } from "./app/componentes/utilidades/rutas/Ruteo";

function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
          <Ruteo />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
