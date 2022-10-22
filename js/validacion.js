const formulario = document.getElementById("userForm");
const Name= document.getElementById("userName");
const lastname= document.getElementById("userLastname");
const mail= document.getElementById("mail");
const tlf= document.getElementById("Tlf");

const regName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regmail =/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regTlf = /^[0-9]$/;

formulario.addEventListener("submit", (e) => {

  e.preventDefault();

  if (!regName.test(Name.value) || !Name.value.trim()) {
    Name.setCustomValidity("Ingresar solo letras");
    console.log("no anda");
   
  }

  if (!regName.test(lastname.value) || !lastname.value.trim()) {
    lastname.setCustomValidity("Ingresar solo letras");
   
  }

  if (!regmail.test(mail.value) || !mail.value.trim()) {
    mail.setCustomValidity("Ingresar un mail válido");

  }

  if (!regTlf.test(tlf.value) || !tlf.value.trim()) {
    tlf.setCustomValidity("Ingresar sólo números");
    
  }
  
});

//validacion mayor de edad

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
