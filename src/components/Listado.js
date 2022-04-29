import React, {useState,useEffect } from 'react'

export const Listado = ({listadoState,setListadoState}) => {

    //Mostrar por pantalla de
    // const [listadoState, setListadoState] = useState([])

    useEffect(() => {
        console.log('Componente del listado de peliculas cargado!!!');
        conseguirPeliculas();
    },[]); 

    const conseguirPeliculas = () =>{
        let peliculas = JSON.parse(localStorage.getItem('pelis'));
        
        setListadoState(peliculas);
    };

    const borrarPeli = (id) =>{
        // alert(id);
        
        //Conseguir peliculas almacenadas 

        //Filtrar esas peliculas para que elimine del array la que no quiero

        //Actualizar el estado del listado 

        //Actualizar los datos en el localStorage

        
    }

  return (
    <>
    {listadoState != null ? listadoState.map(peli =>{
        return(
            <article key={peli.id} className="peli-item">
                <h3 key={peli.id} className="title">{peli.titulo}</h3>
                <p key={peli.id} className="description">{peli.descripcion}</p>

                <button className="edit">Editar</button>
                <button className="delete" 
                        onClick={()=>{borrarPeli(peli.id)}}>Borrar</button>
            </article>
        );
        })
        :<h2>No hay peliculas para mostrar</h2>
    }
    </>
  )
}
