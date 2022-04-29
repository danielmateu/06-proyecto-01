export const GuardarEnStorage = (clave, elemento)=>{
    //Consegir los elementos del localStorage 
    let elementos = JSON.parse(localStorage.getItem(clave));

    console.log(elementos);

    //Comprobar si es un array para añadir el obbjeto

    if(Array.isArray(elementos)){
      //Añadir un elemento nuevo
      elementos.push(elemento);
    }else{
      //Crear un array con la peli nueva
      elementos = [elemento];
    }

    //Guardar en el localStorage

    localStorage.setItem(clave,JSON.stringify(elementos));

    //Devolver Objeto

    return elemento;

    //GUARDAR EN ALMACENAMIENTO LOCAL (Local Storage)
    // localStorage.setItem('pelis', JSON.stringify([peli]));
  }