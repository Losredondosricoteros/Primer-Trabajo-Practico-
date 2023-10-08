// Menu hamburguesa
function mostrar(){
    document.getElementById("sliding_menu") .classList.add("open")
}

function ocultar(){
    document.getElementById("sliding_menu") .classList.remove("open")
}


//Validar Formulario
let nombre =document.getElementById('nombre');
let email =document.getElementById('email');
let pass =document.getElementById('password');
let error =document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
    console.log('Enviando formulario...');

    let mensajesError = [];
    if(nombre.value === null  || nombre.value === '' ){
        mensajesError.push('Ingresa tu nombre');
    }
    if(email.value === null  || email.value === '' ){
        mensajesError.push('Ingresa tu Email');
    }
    if(pass.value === null  || pass.value === '' ){
        mensajesError.push('Ingresa tu password');
    }
     error.innerHTML = mensajesError.join(' , ');
    return false;
}



