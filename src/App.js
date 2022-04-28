

function App() {
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
            <article className="peli-item">
                <h3 className="title">Desarrollo WEb</h3>
                <p className="description">danielmateu.es</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            <article className="peli-item">
                <h3 className="title">Desarrollo WEb</h3>
                <p className="description">danielmateu.es</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            <article className="peli-item">
                <h3 className="title">Desarrollo WEb</h3>
                <p className="description">danielmateu.es</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            <article className="peli-item">
                <h3 className="title">Desarrollo WEb</h3>
                <p className="description">danielmateu.es</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            <article className="peli-item">
                <h3 className="title">Desarrollo WEb</h3>
                <p className="description">danielmateu.es</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            <article className="peli-item">
                <h3 className="title">Desarrollo WEb</h3>
                <p className="description">danielmateu.es</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            <article className="peli-item">
                <h3 className="title">Desarrollo WEb</h3>
                <p className="description">danielmateu.es</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            <article className="peli-item">
                <h3 className="title">Desarrollo WEb</h3>
                <p className="description">danielmateu.es</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            <article className="peli-item">
                <h3 className="title">Desarrollo WEb</h3>
                <p className="description">danielmateu.es</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            <article className="peli-item">
                <h3 className="title">Desarrollo WEb</h3>
                <p className="description">danielmateu.es</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            <article className="peli-item">
                <h3 className="title">Desarrollo WEb</h3>
                <p className="description">danielmateu.es</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            
        </section>

        {/*  BARRA LATERA */}

        <aside className="lateral">
            <div className="search">
                <h3 className="title">Buscador</h3>
                <form action="">
                    <input type="text"></input>
                    <button className="buscar">Buscar</button>
                </form>
            </div>

            <div className="add">
                <h3 className="title">Añadir Pelicula</h3>
                <form action="">
                    <input type="text" placeholder="Titulo"></input>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Descripción"></textarea>
                    <input type="submit" value="Guardar"></input>
                </form>
            </div>
        </aside>
        {/* PIE DE PAGINA */}
        <footer className="footer">
            &copy; Máster en Javascript ES12 - <a href="/">www.danielmateuweb.es</a>
        </footer>
    </div>
  );
}

export default App;
