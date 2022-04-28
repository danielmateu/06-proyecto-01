import React, { useState } from 'react'

export const Crear = () => {

  const tituloComponente = 'Añadir pelicula';
  const [peliState,setPeliState] = useState({
    titulo: '',
    descripcion: ''
  });

  const{titulo, descripcion} = peliState;

  const conseguirDatosForm = e =>{
    e.preventDefault();

    //Conseguir datos formulario 
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    // alert(`Título:${titulo} Descripción:${descripcion}`)

    //Crear objeto de la peli a guardar

    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    };

    setPeliState(peli);

    console.log(peliState);
  };




  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
        <strong>{(titulo && descripcion) && `Has creado la película: ${titulo}`}</strong>
        

        <form onSubmit={conseguirDatosForm} action="">
          <input type="text"
                id='titulo' 
                name="titulo"
                placeholder="Titulo"/>
          <textarea name="descripcion" 
                    id="descripcion" 
                    cols="30" 
                    rows="10" 
                    placeholder="Descripción"/>
          <input type="submit"
                id='save' 
                value="Guardar"/>
        </form>
    </div>
  )
}