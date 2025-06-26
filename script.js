//Variaveis
var abrir_menu = document.getElementById('abrir-menu')
var menu = document.getElementById('menu_lateral')
var overlay = document.getElementById('overlay-menu')

//Código
abrir_menu.addEventListener('click', () =>{
    menu.classList.add('abrir');
})
menu.addEventListener('click', () => {
    menu.classList.remove('abrir');
})
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir');
})
//Teste com arrows functions e addEventListener. Código mais moderno e prático!!!
