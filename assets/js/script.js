let menuPrincipal = document.querySelector(".btn_ia"); 
let menuIa = document.querySelector(".menuIa"); 

menuPrincipal.addEventListener("click", (event) => {
    event.preventDefault();
    menuIa.classList.toggle("active");
});



const btn        = document.querySelector('.receita_btn'); 
const popup      = document.querySelector('.receitaPrincipal');
const backdrop   = document.getElementById('backdrop');
const closeBtn   = popup.querySelector('.modal-close');

function openPopup() {
  popup.classList.add('is-open');
  backdrop.style.display = 'block';
  document.body.classList.add('modal-open');
}

function closePopup() {
  popup.classList.remove('is-open');
  backdrop.style.display = 'none';
  document.body.classList.remove('modal-open');
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  openPopup();
});

closeBtn.addEventListener('click', closePopup);
backdrop.addEventListener('click', closePopup);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePopup();
});