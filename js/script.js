// menu

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  
});

//reseña

const btn = document.querySelector(".btn-com");
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


//validacion formulario contacto

const inputNacimiento = document.querySelector("#fechaNacimiento")

inputNacimiento.addEventListener("blur",(evento)=>{
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

/*const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const lastname = document.getElementById("lastname");
const userEmail = document.getElementById("userEmail");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const reglastname = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

    if (!regUserName.test(userName.value)) {
        return console.log("Solo letras");
    }

    if (!regUserEmail.test(userEmail.value)) {
        return console.log("Formato email no válido");
    }

    console.log("Formulario enviado con éxito");
});*/

