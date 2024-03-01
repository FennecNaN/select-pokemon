const container = document.querySelector(".container");
const boton = document.getElementById("get-pokemon")


/* CREAR DIV ANTES DE EJECUTAR TODO PARA LUEGO UNA VEZ QUE METAMOS LOS ELEMENTOS
EN EL DOM HACER EL INNER HTML Y BORRAR LO QUE TENGA EL DIV*/

const divPokemon = document.createElement("div");
divPokemon.setAttribute("id", "displayPokemon")
container.appendChild(divPokemon)


boton.addEventListener("click", eventoClick)

// PREGUNTAR () //

function eventoClick () {
  const pokemonSelect = document.getElementById('pokemon-select').value
  console.log(pokemonSelect)
  busqueda(pokemonSelect)
}

function busqueda(pokemon){
  fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la solicitud al servidor");
    }
    return response.json();
  })
  .then((data) => {
    getPokemon(data);
    
    
  })
  .catch((error) => {
    console.error("Error al obtener datos de la API!!!:", error);
  });
}


function getPokemon(element){
  const nombre= element.name
  const altura = element.height
  const peso = element.weight
  const img = element.sprites.other["official-artwork"].front_default; // PREGUNTAR //
  const tipoData = element.types
  const tipos= []

  tipoData.forEach(element => {
    tipos.push(element.type.name)
  });

  console.log(nombre);
  console.log(altura);
  console.log(peso);
  console.log(tipoData)
  console.log(tipos)
  console.log(img)

// SE PODRIA HACER DIRECTAMENTE CON UN RETURN Y QUE SALGAN LOS DATOS EN SHOWPOKEMON? //

  showPokemon(nombre, altura, peso, tipos, img) 
}

function showPokemon(nombre, altura, peso, tipos, img){
  divPokemon.innerHTML= "" /*BORRAR CONTENEDOR*/
  

  const imgPokemon = document.createElement("img");
  imgPokemon.src = img
  divPokemon.appendChild(imgPokemon)

  
  const hNombre = document.createElement("h3")
  const spanNombre = document.createElement("span");
  spanNombre.innerText = "Name: ";
  const txtNombre = document.createTextNode(nombre)
  hNombre.appendChild(spanNombre);
  hNombre.appendChild(txtNombre)
  divPokemon.appendChild(hNombre)

  const hAltura = document.createElement("h3")
  const spanAltura = document.createElement("span");
  spanAltura.innerText = "Altura: ";
  const txtAltura = document.createTextNode(altura)
  hAltura.appendChild(spanAltura);
  hAltura.appendChild(txtAltura)
  divPokemon.appendChild(hAltura)

  const hPeso = document.createElement("h3")
  const spanPeso = document.createElement("span");
  spanPeso.innerText = "Peso: ";
  const txtPeso = document.createTextNode(peso)
  hPeso.appendChild(spanPeso);
  hPeso.appendChild(txtPeso)
  divPokemon.appendChild(hPeso)

  const hTipos = document.createElement("h3")
  const spanTipos = document.createElement("span");
  spanTipos.innerText = "Tipos: ";
  const txtTipos = document.createTextNode(tipos.join(", "))
  hTipos.appendChild(spanTipos);
  hTipos.appendChild(txtTipos)
  divPokemon.appendChild(hTipos)

  console.log(img)

}















































