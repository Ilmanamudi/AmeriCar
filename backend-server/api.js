function render(imagen) {
    let BACKEND_URL = "backend-server";

    let newCar = `<p class="flota-text">${imagen.precio}</p><img src="${BACKEND_URL}${imagen.path}" alt="${imagen.nombre}">
    <p class="flota-text">${imagen.desc}</p>`

    let newId = `${imagen.id}`
    const newDiv = document.createElement("div");
    newDiv.classList.add("flota-item");
    newDiv.setAttribute("id",`${imagen.id}`);
    newDiv.innerHTML = newCar;
    
    const flotaDeAutos = document.getElementById("data-car");
    flotaDeAutos.appendChild(newDiv);
}

let URL = "./backend-server/data.json";

fetch(URL)
    .then(res => res.json())
    .then(data => {
        let imagenes = data.imagenes;
        imagenes.forEach(imagen => render(imagen));

    }); 

