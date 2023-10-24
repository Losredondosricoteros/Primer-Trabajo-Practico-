// Menu hamburguesa
function mostrar(){
    document.getElementById("sliding_menu") .classList.add("open")
}

function ocultar(){
    document.getElementById("sliding_menu") .classList.remove("open")
}



//go top
 window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
      if(document.documentElement.scrollTop > 600){
       document.querySelector('.go-top-container')
        .classList.add('show');
      }else {
        document.querySelector('.go-top-container')
        .classList.remove('show');
     }
    }
        document.querySelector('.go-top-btn')
        .addEventListener('click',() =>{
           window.scrollTo({
           top:0,
            behavior: 'smooth',
     });
  });
  // Validar Formulario
  function validarFormulario() {
    // Obtener los valores ingresados por el usuario y recortar
    
    let usuario = document.getElementById("usuario");
    let pass = document.getElementById("pass");
    let error = false;
    document.getElementById("validar_usuario").innerHTML="";
    document.getElementById("validar_pass").innerHTML="";
    // Verificar si algún campo está en blanco
    if (usuario.value == ""  ) {
        document.getElementById("validar_usuario").innerHTML="Debe completar este campo";
        error = true;
        usuario.focus();
    }

    if (pass.value.length<8) {
      document.getElementById("validar_pass").innerHTML = "Debe completar el clave con 8 carateres como minimo";
      error = true;
      pass.focus();
      error = true
  }

  if (error == false) {
      alert("Dato enviado")
      document.getElementById("usuario").value = ""
      document.getElementById("validar_usuario").innerHTML = "";
      document.getElementById("pass").value = ""
      document.getElementById("validar_pass").innerHTML = "";
  }




  if (error)
      return false;
  else
      return true;
}
  
// Uso de una Api Local 
const { createApp } = Vue
createApp({
    data() {
       return {
           url:'./js/datos.json',
           error: false,
           datos: [],
          
      
    }
   },
    methods: {
      fetchData(url) {
        fetch(url  )
            .then(response => response.json())
            .then(  data => {
                console.log(data)
                this.datos=data.empleados

        
        });
    }
    },
    created() {
      this.fetchData(this.url)
    
   },
}).mount('#app')

