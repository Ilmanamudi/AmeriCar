//reseña

const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");

btn.onclick = () => {
  widget.style.display = "none";
  post.style.display = "block";
  editBtn.onclick = () => {
    widget.style.display = "block";
    post.style.display = "none";

  }
  return false;
}
// menu

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click",()=>{
  navMenu.classList.toggle("nav-menu_visible");
});

//validacion formulario contacto

const inputNacimiento = document.querySelector("#fechaNacimiento")

inputNacimiento.addEventListener("blur", (evento)=>{
    validarNacimiento(evento.target);
});

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = ""
    if(!mayorDeEdad(fechaCliente)){
        mensaje= "Debes tener al menos 18 años de edad";
    }

    input.setCustomValidity(mensaje);

}
function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() +18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
        );


return (diferenciaFechas <=fechaActual);
}