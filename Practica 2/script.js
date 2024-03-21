//Hacemos un bloque de código que nos permita darle al botón "Mostrar más"
// el cual nos permitirá evidentemente mostrar información adicional
// de dicho párrafo


// Empezamos con Neon

// La idea es coger los elementos del DOM para poder manipularlos en el .JS
var ocultarTexto_btn = document.getElementById("ocultarTexto_btn");
var ocultarTexto = document.getElementById("ocultarTexto");

// Añadimos un evento en JavaScript que va a simular un "onclick" con "click" en cada botón
// Referenciamos a la función que más tarde va a ser creada
ocultarTexto_btn.addEventListener("click", toggleTexto);

// Esta función, básicamente lo que hace es que una vez le demos al botón "mostrar más"
// se expanda el contenido de la misma
// A su vez con el If y Else, estoy diciendo que quiero modificar directamente el HTML
// una vez el botón sea presionado para que su contenido cambie de "mostrar más" a "mostrar menos"
function toggleTexto(){
    ocultarTexto.classList.toggle("mostrar");

    if(ocultarTexto.classList.contains("mostrar")){
        ocultarTexto_btn.innerHTML = "Mostrar menos";
    } else{
        ocultarTexto_btn.innerHTML = "Mostrar más";

    }
}

// Repetimos proceso con 3 veces más para mostrar información distinta cada vez


// Viper

var ocultarTexto_btnV = document.getElementById("ocultarTexto_btnV");
var ocultarTextoV = document.getElementById("ocultarTextoV");


ocultarTexto_btnV.addEventListener("click", toggleTextoV);

function toggleTextoV(){
    ocultarTextoV.classList.toggle("mostrar");

    if(ocultarTextoV.classList.contains("mostrar")){
        ocultarTexto_btnV.innerHTML = "Mostrar menos";
    } else{
        ocultarTexto_btnV.innerHTML = "Mostrar más";

    }
}


// Sova

var ocultarTexto_btnS = document.getElementById("ocultarTexto_btnS");
var ocultarTextoS = document.getElementById("ocultarTextoS");


ocultarTexto_btnS.addEventListener("click", toggleTextoS);

function toggleTextoS(){
    ocultarTextoS.classList.toggle("mostrar");

    if(ocultarTextoS.classList.contains("mostrar")){
        ocultarTexto_btnS.innerHTML = "Mostrar menos";
    } else{
        ocultarTexto_btnS.innerHTML = "Mostrar más";

    }
}


// Cypher


var ocultarTexto_btnC = document.getElementById("ocultarTexto_btnC");
var ocultarTextoC = document.getElementById("ocultarTextoC");


ocultarTexto_btnC.addEventListener("click", toggleTextoC);

function toggleTextoC(){
    ocultarTextoC.classList.toggle("mostrar");

    if(ocultarTextoC.classList.contains("mostrar")){
        ocultarTexto_btnC.innerHTML = "Mostrar menos";
    } else{
        ocultarTexto_btnC.innerHTML = "Mostrar más";

    }
}



/*Registro*/ 
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contraseña = document.getElementById("contraseña").value;
    let valid = true;
  
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("contraseñaError").innerHTML = "";
  
    if (name === "") {
      document.getElementById("nameError").innerHTML = "Por favor ingrese su nombre";
      valid = false;
    }
  
    if (email === "") {
      document.getElementById("emailError").innerHTML = "Por favor ingrese su correo electrónico";
      valid = false;
    } else if (!validateEmail(email)) {
      document.getElementById("emailError").innerHTML = "Por favor ingrese un correo electrónico válido";
      valid = false;
    }
  
    if (contraseña === "") {
      document.getElementById("contraseñaError").innerHTML = "Por favor ingrese su contraseña";
      valid = false;
    }
    
    if (valid == true) {
      location.href = "PaginaValorant.html";
      alert("Bienvenido/a, " + name + "!")
      

    }
    
    return valid;
    
  }

  
  /* */
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  /*Encuesta*/
  function mostrarEncuesta() {
    console.log("MostrarEncuesta")
    var mensaje = document.getElementById("mensaje");
    var encuesta = document.getElementById("encuesta");
    mensaje.addEventListener("click", function() {
      mensaje.style.display = "none";
      encuesta.style.display = "block";
    });
  }
  
  function valoracion(valor) {
    alert("Has valorado con " + valor + " estrellas");
  }
  
  function contacto() {
    alert("Nos pondremos en contacto contigo pronto");
  }
  
  function enviarRespuestas() {
    var comentario = document.getElementById("comentario").value;
    if (comentario !== "") {
      alert("Tus respuestas se han enviado satisfactoriamente. ¡Muchas gracias!");
      document.getElementById("encuesta").style.display = "none";
      document.getElementById("resultados").style.display = "block";
    } else {
      alert("Por favor, completa al menos un apartado antes de enviar la encuesta");
    }
  }
  
  document.addEventListener("DOMContentLoaded", mostrarEncuesta);
  /*Notificacion*/
  document.addEventListener("DOMContentLoaded", function() {
    mostrarNotificacion();
  });
  
  function mostrarNotificacion() {
    var notificacion = document.createElement("div");
    notificacion.classList.add("notificacion");
    notificacion.innerHTML = `
      <div class="mensaje">¡Unete a nosotros en el apartado de Registro y sube de rango hasta convertirte en uno de los mejores!</div>
      <div class="emoji">🎮</div>
    `;
    document.body.appendChild(notificacion);
    
    setTimeout(function() {
      notificacion.style.display = "none";
    }, 2000); // Oculta la notificación después de 2 segundos
  }
  // cambio de tema de claro a oscuro y viceversa y cambiar el texto del boton

function cambiarFondo() {

    document.body.classList.toggle('tema-oscuro');
   
    var isDarkMode = document.body.classList.contains('tema-oscuro');
};

// Este Javascript es solo y exclusivamente 

var main_img = document.querySelector('.main_img')
var thumbnails = document.querySelectorAll('.thumbnail')


thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function(){
        var active = document.querySelector('.active')
        active.classList.remove('active')
        thumb.classList.add('active')
        main_img.src = thumb.src
    })
})