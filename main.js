//ligthbox
const galeria = document.querySelectorAll('.imagenes');
const lightbox = document.querySelector('.lightbox');
const expandir = document.querySelector('.expandir');
const cerrar = document.querySelector('.cerrar');
const texto = document.querySelector('.light-text');
const leerMas = document.querySelector('.LeerMas');

galeria.forEach(image =>{
    image.addEventListener('click', ()=>{
        addImage(image.getAttribute('src'),image.getAttribute('alt'))
        console.log(image.getAttribute('alt'))     
    })
})
const addImage = (srcImage, altImage)=>{
    lightbox.classList.add('activo');
    expandir.src = srcImage;
    texto.innerHTML = altImage
}
cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('activo');  
})
lightbox.addEventListener('click', ()=>{
    lightbox.classList.remove('activo');  
})

//menu lateral
const menuResponsive = document.querySelector('.ind-responsive');
const botonMenu = document.querySelector('.ind-icon-black');
const botonMenuOcultar = document.querySelector('.ind-icon');
const ocultarGaleria = document.querySelector('.Galeria');
const footer = document.querySelector('.footer');

botonMenu.addEventListener('click', ()=>{
    menuResponsive.classList.add('activo');
    botonMenu.classList.add('desactivo');
    ocultarGaleria.classList.add('desactivado');
    footer.classList.add('active');  
})
botonMenuOcultar.addEventListener('click', ()=>{
    menuResponsive.classList.remove('activo');
    botonMenu.classList.remove('desactivo');
    ocultarGaleria.classList.remove('desactivado');
    footer.classList.remove('active'); 
})

const mediaqueryList = window.matchMedia("(min-width: 1150px)");


mediaqueryList.addEventListener("change", e =>{
    menuResponsive.classList.remove('activo');
    botonMenu.classList.remove('desactivo');
    ocultarGaleria.classList.remove('desactivado');
    footer.classList.remove('active'); 
})

//menu header

const cabeceraResponsive = document.querySelector('.icon-responsive')
const botonMenuCabecera = document.querySelector('.ind-icon-blanco')
const botonMenuCabeceraOcultar = document.querySelector('.ind-icon-negro')

botonMenuCabecera.addEventListener('click', ()=>{
    cabeceraResponsive.classList.add('activo');
    botonMenuCabecera.classList.add('desactivado');
})
botonMenuCabeceraOcultar.addEventListener('click', ()=>{
    cabeceraResponsive.classList.remove('activo');
    botonMenuCabecera.classList.remove('desactivado');
})

//Buscador
