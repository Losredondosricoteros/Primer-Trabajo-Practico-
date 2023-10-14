// Menu hamburguesa
function mostrar(){
    document.getElementById("sliding_menu") .classList.add("open")
}

function ocultar(){
    document.getElementById("sliding_menu") .classList.remove("open")
}

//Validar Formulario
//Tomamos las campos a validar y la volcamos en constantes
const nombreField = document.querySelector("[name=nombre]")
const emailField = document.querySelector("[name=email]")
const telField = document.querySelector("[name=tel]")
const textoField = document.querySelector("[name=texto]")

// Funcion que cambia span para mostrar o quitar el mensaje de error
const setErrors = (message, field, isError = true) => {
    if (isError) {
      field.classList.add("invalid");
      field.nextElementSibling.classList.add("error");
      field.nextElementSibling.innerText = message;
    } else {
      field.classList.remove("invalid");
      field.nextElementSibling.classList.remove("error");
      field.nextElementSibling.innerText = "";
    }
  }

// Funcion que toma el evento de cada campo y se fija si esta vacio borrando estacios al inicio al final
  const validateEmptyField = (message, e) => {
    const field= e.target;
    const fieldValue = e.target.value;        
    if (fieldValue.trim().length === 0) {
        setErrors(message, field);
    } else {
        setErrors("", field, false);
    }
}

// Funcion que Valida el email comparada contra una expresion regular
const validateEmailFormat = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
      setErrors("Por Favor ingrese un email valido", field);
    } else {
      setErrors("", field, false);
    }
  }

//Funcion flecha toma el evento blur que ocurre cuando sale el foco del campo produciendo la validadcion del campo , y enviando el evento y el mensaje a ser mostrado
nombreField.addEventListener("blur" , (e) => validateEmptyField("Ingrese su Nombre",e));
emailField.addEventListener("blur" , (e) => validateEmptyField("Ingrese su email",e ));
telField.addEventListener("blur" , (e) => validateEmptyField("Ingrese su telefono",e));
textoField.addEventListener("blur" , (e) => validateEmptyField("Ingrese un Mensage",e));
emailField.addEventListener("input", validateEmailFormat);


// //Validar Formulario
// let nombre =document.getElementById('nombre');
// let email =document.getElementById('email');
// let pass =document.getElementById('password');
// let error =document.getElementById('error');
// error.style.color = 'red';

// function enviarFormulario(){
//     console.log('Enviando formulario...');

//     let mensajesError = [];
//     if(nombre.value === null  || nombre.value === '' ){
//         mensajesError.push('Ingresa tu nombre');
//     }
//     if(email.value === null  || email.value === '' ){
//         mensajesError.push('Ingresa tu Email');
//     }
//     if(pass.value === null  || pass.value === '' ){
//         mensajesError.push('Ingresa tu password');
//     }
//      error.innerHTML = mensajesError.join(' , ');
//     return false;
// }



