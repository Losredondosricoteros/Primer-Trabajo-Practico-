// Menu hamburguesa
function mostrar(){
    document.getElementById("sliding_menu") .classList.add("open")
}

function ocultar(){
    document.getElementById("sliding_menu") .classList.remove("open")
}

//Validar Formulario
const nombreField = document.querySelector("[name=nombre]")
const emailField = document.querySelector("[name=email]")
const telField = document.querySelector("[name=tel]")

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

const validateEmptyField = (message, e) => {
    const field= e.target;
    const fieldValue = e.target.value;        
    if (fieldValue.trim().length === 0) {
        setErrors(message, field);
        // field.classList.add("invalid");
        // field.nextElementSibling.classList.add("error");
        // field.nextElementSibling.innerText = message;
    } else {
        setErrors("", field, false);
        // field.classList.remove("invalid");
        // field.nextElementSibling.classList.remove("error");
        // field.nextElementSibling.innerText = "";
    }
}

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
nombreField.addEventListener("blur" , (e) => validateEmptyField("Ingrese su Nombre",e));
emailField.addEventListener("blur" , (e) => validateEmptyField("Ingrese su email",e ));
telField.addEventListener("blur" , (e) => validateEmptyField("ingrese su telefono",e));

emailField.addEventListener("input", validateEmailFormat);


/*expresion regular */

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



