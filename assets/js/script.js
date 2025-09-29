let menuPrincipal = document.querySelector(".btn_ia"); 
let menuIa = document.querySelector(".menuIa"); 

menuPrincipal.addEventListener("click", (event) => {
    event.preventDefault();
    menuIa.classList.toggle("active");
});
