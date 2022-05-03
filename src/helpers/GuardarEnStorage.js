export const GuardarEnStorage = (clave, elemento) =>{

    //Conseguir elementos que ya tenemos en el local storage
    let elementos = JSON.parse(localStorage.getItem(clave));

    // console.log(elementos)
    //Comprobar si es un array 
    if(Array.isArray(elementos)){
      //Añadir dentro del array un elemento nuevo
      elementos.push(elemento);
      
    }else{
      //Crear un array con la elemento nueva
      elementos = [elemento];
      
    }
    
    //Guardar en el localstaorage

    localStorage.setItem(clave, JSON.stringify(elementos));

    //Devolver objeto

    return elemento;
  }

  