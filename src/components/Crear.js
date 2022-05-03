import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';


export const Crear = ({setListadoState}) => {

  const tituloComponente = 'Añadir pelicula';

  //const titulo = 'Añadir película';

  const [peliState,setPeliState] = useState({
    titulo: '',
    descripcion: ''
  });

  const{titulo, descripcion} = peliState;

  const conseguirDatosForm = e =>{
    e.preventDefault();
    

    //Conseguir datos del formulario 
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;
    

    //Crear objeto de la peli a guardar
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    };
    

    
    //GUARDAR ESTADO
    setPeliState(peli);

     //Actualizar el estado del listado principal
    setListadoState(elementos =>{
      return [...elementos, peli];
    });

    //Guardar en almacenamiento local 
    GuardarEnStorage('pelis', peli);
    // GuardarEnStorage('copia_datos',peli)

  };



  return (
    <div className="add">
        <h3 className="tittle">{tituloComponente}</h3>
        <p>{(titulo && descripcion) && `Has creado la película:`}
        </p>
        <h3>{titulo}</h3>

        <form onSubmit={conseguirDatosForm}>
          <input type="text"
                id='titulo' 
                name='titulo'
                placeholder="Titulo"/>

          <textarea name="descripcion" 
                    id="descripcion" 
                    placeholder="Descripción"/>

          <input type="submit"
                id='save' 
                value="Guardar"/>
        </form>
    </div>
  )
}
