$("#Registrate").click(function(){
    swal.fire({
        title: "Registrate, es gratis",
        padding: '2rem',
        html:
        '<div class="AlertRegistro">'+
            '<ul>'+
                '<li>'+
                    '<a href="#" class="BotonFacebook"><span><img src="Imagenes/facebook.png" alt="RegistroFacebook"></span>Registrarse con Facebook</a>'+
                '</li>'+
                '<li>'+
                    '<a href="#" class="BotonTwitter"><span><img src="Imagenes/gorjeo.png" alt="RegistroTwitter"></span>Registrarse con Twitter</a>'+
                '</li>'+
                '<li>'+
                    '<a href="#" class="BotonInstagram"><span><img src="Imagenes/instagram.png" alt="RegistroInstagram"></span>Registrarse con Instagram</a></button>'+
                '</li>'+
                '<li>'+
                    '<a href="#" class="BotonGoogle"><span><img src="Imagenes/google.png" alt="RegistroGoole"></span>Registrarse con Google</a></button>'+
                '</li>'+
                '<li>'+
                    '<a href="Login/Registro/Registro.php" class="BotonMail"><span><img src="Imagenes/email.png" alt="RegistroMail"></span>Registrarse con Email</a></button>'+
                '</li>'+
            '</ul>'+
            '<p>Al Registrarte aceptas nuestros terminos y condiciones.</p><br>'+
            '<a href="#" class="Terminos">Terminos y Condiciones</a>'+
            '</div>',
        confirmButtonText: 'Continuar sin registrarse',
        buttonsStyling: true,
        showCloseButton: true,
        closeButtonAriaLabel: 'Cerrar',
        customClass:{
            title: 'TituloAlert',
            closeButton: 'BCerrar',
            confirmButton: 'Continuar',
        }
    })
});