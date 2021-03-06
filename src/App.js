import { Listado } from "./components/Listado";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { useState } from "react";


function App() {

  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
        {/*  CABECERA */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>Mis Pelis</h1>
        </header>
        {/*  BARRA DE NAVEGACION  */}
        <nav className="nav">
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/">Peliculas</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contacto</a></li>
                
            </ul>
        </nav>

        {/*  SECCION  */}
        <section className="content">
            {/*  AQUI VAN LAS PELIS  */}
            <Listado listadoState={listadoState} setListadoState={setListadoState}/>
        </section>

        {/*  BARRA LATERA */}

        <aside className="lateral">
            <Buscador listadoState={listadoState} setListadoState={setListadoState}/>

            <Crear setListadoState = {setListadoState} />
        </aside>
        {/* PIE DE PAGINA */}
        <footer className="footer">
            &copy; Máster en Javascript ES12 - <a href="/">www.danielmateuweb.es</a>
        </footer>
    </div>
  );
}

export default App;
