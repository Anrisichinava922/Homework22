const icon = document.querySelector('.icon')
const exit = document.querySelector('.exit')
const brgr = document.querySelector('.brgr-menu')
const menu = document.querySelector('.item')
const variantebi = document.querySelector('.variantebi')
const arrow1 = document.querySelector('.arrow1')
const menu2 = document.querySelector('.item2')
const variantebi2 = document.querySelector('.variantebi2')
const arrow2 = document.querySelector('.arrow2')
const menu3 = document.querySelector('.item3')
const variantebi3 = document.querySelector('.variantebi3')
const arrow3 = document.querySelector('.arrow3')
const menu4 = document.querySelector('.item4')
const variantebi4 = document.querySelector('.variantebi4')
const arrow4 = document.querySelector('.arrow4')
const menu5 = document.querySelector('.item5')
const variantebi5 = document.querySelector('.variantebi5')
const arrow5 = document.querySelector('.arrow5')

icon.addEventListener('click', () =>{
    brgr.classList.toggle('active')
    icon.classList.toggle('backchange')
})



menu.addEventListener('click', () =>{
    variantebi.classList.toggle('gamochndi')
    arrow1.classList.toggle('datrialdi')
    variantebi2.classList.remove('gamochndi')
    variantebi3.classList.remove('gamochndi')
    variantebi4.classList.remove('gamochndi')
    variantebi5.classList.remove('gamochndi')
    arrow2.classList.remove('datrialdi')
    arrow3.classList.remove('datrialdi')
    arrow4.classList.remove('datrialdi')
    arrow5.classList.remove('datrialdi')

})




menu2.addEventListener('click', () =>{
    variantebi2.classList.toggle('gamochndi')
    arrow2.classList.toggle('datrialdi')
    variantebi.classList.remove('gamochndi')
    variantebi3.classList.remove('gamochndi')
    variantebi4.classList.remove('gamochndi')
    variantebi5.classList.remove('gamochndi')
    arrow1.classList.remove('datrialdi')
    arrow3.classList.remove('datrialdi')
    arrow4.classList.remove('datrialdi')
    arrow5.classList.remove('datrialdi')
})



menu3.addEventListener('click', () =>{
    variantebi3.classList.toggle('gamochndi')
    arrow3.classList.toggle('datrialdi')
    variantebi2.classList.remove('gamochndi')
    variantebi.classList.remove('gamochndi')
    variantebi4.classList.remove('gamochndi')
    variantebi5.classList.remove('gamochndi')
    arrow2.classList.remove('datrialdi')
    arrow1.classList.remove('datrialdi')
    arrow4.classList.remove('datrialdi')
    arrow5.classList.remove('datrialdi')
})



menu4.addEventListener('click', () =>{
    variantebi4.classList.toggle('gamochndi')
    arrow4.classList.toggle('datrialdi')
    variantebi2.classList.remove('gamochndi')
    variantebi3.classList.remove('gamochndi')
    variantebi.classList.remove('gamochndi')
    variantebi5.classList.remove('gamochndi')
    arrow2.classList.remove('datrialdi')
    arrow3.classList.remove('datrialdi')
    arrow1.classList.remove('datrialdi')
    arrow5.classList.remove('datrialdi')
})




menu5.addEventListener('click', () =>{
    variantebi5.classList.toggle('gamochndi')
    arrow5.classList.toggle('datrialdi')
    variantebi2.classList.remove('gamochndi')
    variantebi3.classList.remove('gamochndi')
    variantebi4.classList.remove('gamochndi')
    variantebi.classList.remove('gamochndi')
    arrow2.classList.remove('datrialdi')
    arrow3.classList.remove('datrialdi')
    arrow4.classList.remove('datrialdi')
    arrow1.classList.remove('datrialdi')
})