const btn_menu = document.getElementById('btn_menu');
const carreras = document.querySelector('.oculto2');
const carrousel = document.querySelector('.carrousel');
carrousel.style.backgroundImage = `url('./img/imagen1.jpg')`;

addEventListener('DOMContentLoaded', ()=> {
    let contador = 1;
    setInterval(()=> {
    contador++;
    carrousel.style.backgroundImage = `url('./img/imagen${contador}.jpg')`;
    if(contador == 4){
        contador = 0;
    }
    
    }, 5000)
})

btn_menu.addEventListener('click', ()=> {
carreras.classList.toggle('visible');
})

