const icon = document.querySelector('.icon')
const exit = document.querySelector('.exit')
const brgr = document.querySelector('.brgr-menu')

icon.addEventListener('click', () =>{
    brgr.classList.toggle('active')
    icon.classList.toggle('backchange')
})

const menu = document.querySelector('.item')
const variantebi = document.querySelector('.variantebi')
const arrow1 = document.querySelector('.arrow1')

menu.addEventListener('click', () =>{
    variantebi.classList.toggle('gamochndi')
    arrow1.classList.toggle('datrialdi')
})


const menu2 = document.querySelector('.item2')
const variantebi2 = document.querySelector('.variantebi2')
const arrow2 = document.querySelector('.arrow2')

menu2.addEventListener('click', () =>{
    variantebi2.classList.toggle('gamochndi')
    arrow2.classList.toggle('datrialdi')
})

const menu3 = document.querySelector('.item3')
const variantebi3 = document.querySelector('.variantebi3')
const arrow3 = document.querySelector('.arrow3')

menu3.addEventListener('click', () =>{
    variantebi3.classList.toggle('gamochndi')
    arrow3.classList.toggle('datrialdi')
})

const menu4 = document.querySelector('.item4')
const variantebi4 = document.querySelector('.variantebi4')
const arrow4 = document.querySelector('.arrow4')

menu4.addEventListener('click', () =>{
    variantebi4.classList.toggle('gamochndi')
    arrow4.classList.toggle('datrialdi')
})


const menu5 = document.querySelector('.item5')
const variantebi5 = document.querySelector('.variantebi5')
const arrow5 = document.querySelector('.arrow5')

menu5.addEventListener('click', () =>{
    variantebi5.classList.toggle('gamochndi')
    arrow5.classList.toggle('datrialdi')
})