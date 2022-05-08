const btnMenu = document.querySelector("#btnMenu");
const menuContenedor = document.querySelector("#menuContenedor");
btnMenu.addEventListener("click", function(){
    if (menuContenedor.clientWidth > 0){
        menuContenedor.style.display = "none";
       
    }
    else{
        menuContenedor.style.display = "block";
    };
})
// constantes para el submenu
const subMenuUl = document.querySelector("#subMenu");
const contacto = document.querySelector("#contacto");
contacto.addEventListener("click", function(){
    if (subMenuUl.clientWidth > 0) {
        subMenuUl.style.display = "none";
    }
    else{
        subMenuUl.style.display = "block";
    }
})
const subMenuUlCatalogo = document.querySelector("#subMenuCatalogo");
const catalogo = document.querySelector("#catalogo");
catalogo.addEventListener("click", function(){
    if (subMenuUlCatalogo.clientWidth > 0) {
        subMenuUlCatalogo.style.display = "none";
    }
    else{
        subMenuUlCatalogo.style.display = "block";
    }
})
// constantes para el submenu de desktop
const iconFlechaContacto = document.querySelector("#contactoDesktop");
const catalogoLink = document.querySelector("#catalogo-link");
const contactoLink = document.querySelector("#contacto-link");
const submenuContacto = document.querySelector("#subMenuDesktop");
const iconFlechaDesktop = document.querySelector("#catalogoDesktop");
const submenuCatalogo = document.querySelector("#subMenuCatalogoDesktop")
iconFlechaContacto.addEventListener("click", function(){
    if (submenuContacto.clientWidth > 0) {
        submenuContacto.style.display = "none";
        
    }
    else{
        submenuContacto.style.display = "block"
       


    }
})
iconFlechaDesktop.addEventListener("click", function(){
    if (submenuCatalogo.clientWidth > 0) {
        submenuCatalogo.style.display = "none"
        
        
    }
    else{
        submenuCatalogo.style.display = "block"
        
    }
})
