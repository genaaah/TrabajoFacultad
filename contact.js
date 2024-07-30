let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let number = document.getElementById("numero");
let mensaje = document.getElementById("mensaje");
let btn = document.getElementById("enviar");
let parrafo = document.getElementById("warnings");
let informacion = [];

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let warnings = "";
  let entrada = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  parrafo.innerHTML = "";

  if (nombre.value.length < 6) {
    warnings += `El nombre es menor a 6 caracteres <br> <hr>`;
    entrada = true;
  }
  if (apellido.value.length < 6) {
    warnings += `El apellido es menor a 6 caracteres <br> <hr>`;
    entrada = true;
  }
  if (!regexEmail.test(email.value)) {
    warnings += `El mail no es valido <br>`;
    entrada = true;
  }
  if (number.value.length < 10) {
    warnings += `El numero de telefono es incorrecto <br> <hr>`;
    entrada = true;
  }
  if (mensaje.value.length < 3) {
    warnings += `Debe ingresar un mensaje <br>`;
    entrada = true;
  }
  if (entrada) {
    parrafo.innerHTML = warnings;
  } else {
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = email.value;
    informacion[3] = number.value;
    informacion[4] = mensaje.value;
    console.log(informacion);

    let descarga = new Blob([informacion], {
      type: "text/plain;charset=utf-8",
    });

    saveAs(descarga, "InformacionContacto.txt");
  }
});
