import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = 'Editar pelicula';

    const guardarEdicion = (e,id) =>{
        e.preventDefault();
        
        //Conseguir el target del evento
        let target = e.target;
        

        //Buscar indice del objeto de la pelicula a actualizar 
        const pelis_almacenadas = conseguirPeliculas();
        
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

        //Crear Objeto con ese id de ese indice, con titulo y descripcion del formulario 
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        // console.log(indice, peli);

        //Actualizar el elemento con ese indice
        pelis_almacenadas[indice] = peli_actualizada;
        // console.log(pelis_almacenadas);

        //Guardar el nuevo array de objetos en el local storage
        localStorage.setItem('pelis', JSON.stringify(pelis_almacenadas));

        //Actualizar estados
        setListadoState(pelis_almacenadas);
        setEditar(0);


    }

  return (
    <div className = 'edit_form'>
        <hr/>
        <h3 className = 'title'>{titulo_componente}</h3>
        <form onSubmit={e => guardarEdicion(e,peli.id)}>
            <input type="text" 
            className='titulo_editado'
            name='titulo'
            defaultValue={peli.titulo}
            />
            <textarea className='descripcion_editada'
            name='descripcion'
            defaultValue={peli.descripcion}/>
            <input type='submit'
            className='editar'
            value='Actualizar'/>
        </form>
    </div>
  )
}
