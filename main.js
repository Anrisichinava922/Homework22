const icon = document.querySelector('.icon')
const exit = document.querySelector('.exit')
const brgr = document.querySelector('.brgr-menu')

icon.addEventListener('click', () =>{
    brgr.classList.toggle('active')
    icon.classList.toggle('backchange')
})