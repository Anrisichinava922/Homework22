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
})



menu2.addEventListener('click', () =>{
    variantebi2.classList.toggle('gamochndi')
    arrow2.classList.toggle('datrialdi')
})



menu3.addEventListener('click', () =>{
    variantebi3.classList.toggle('gamochndi')
    arrow3.classList.toggle('datrialdi')
})



menu4.addEventListener('click', () =>{
    variantebi4.classList.toggle('gamochndi')
    arrow4.classList.toggle('datrialdi')
})




menu5.addEventListener('click', () =>{
    variantebi5.classList.toggle('gamochndi')
    arrow5.classList.toggle('datrialdi')
})



const airchie1 = document.querySelector('.varianti1')
const airchie2 = document.querySelector('.varianti2')
const airchie3 = document.querySelector('.varianti3')
const airchie4 = document.querySelector('.varianti4')
const airchie5 = document.querySelector('.varianti5')
const airchie6 = document.querySelector('.varianti6')
const airchie7 = document.querySelector('.varianti7')
const airchie8 = document.querySelector('.varianti8')
const airchie9 = document.querySelector('.varianti9')
const airchie10 = document.querySelector('.varianti10')
const airchie11 = document.querySelector('.varianti11')
const airchie12 = document.querySelector('.varianti12')
const airchie13 = document.querySelector('.varianti13')
const airchie14 = document.querySelector('.varianti14')
const airchie15 = document.querySelector('.varianti15')




airchie1.addEventListener('click', ()=>{
    airchie1.classList.toggle('gamwvanda')
    airchie2.classList.remove('gamwvanda')
    airchie3.classList.remove('gamwvanda')
})
airchie2.addEventListener('click', ()=>{
    airchie2.classList.toggle('gamwvanda')
    airchie1.classList.remove('gamwvanda')
    airchie3.classList.remove('gamwvanda')
})
airchie3.addEventListener('click', ()=>{
    airchie3.classList.toggle('gamwvanda')
    airchie2.classList.remove('gamwvanda')
    airchie1.classList.remove('gamwvanda')
})
airchie4.addEventListener('click', ()=>{
    airchie4.classList.toggle('gamwvanda')
    airchie5.classList.remove('gamwvanda')
    airchie6.classList.remove('gamwvanda')
})
airchie5.addEventListener('click', ()=>{
    airchie5.classList.toggle('gamwvanda')
    airchie4.classList.remove('gamwvanda')
    airchie6.classList.remove('gamwvanda')
})
airchie6.addEventListener('click', ()=>{
    airchie6.classList.toggle('gamwvanda')
    airchie5.classList.remove('gamwvanda')
    airchie4.classList.remove('gamwvanda')
})
airchie7.addEventListener('click', ()=>{
    airchie7.classList.toggle('gamwvanda')
    airchie8.classList.remove('gamwvanda')
    airchie9.classList.remove('gamwvanda')
})
airchie8.addEventListener('click', ()=>{
    airchie8.classList.toggle('gamwvanda')
    airchie7.classList.remove('gamwvanda')
    airchie9.classList.remove('gamwvanda')
})
airchie9.addEventListener('click', ()=>{
    airchie9.classList.toggle('gamwvanda')
    airchie8.classList.remove('gamwvanda')
    airchie7.classList.remove('gamwvanda')
})
airchie10.addEventListener('click', ()=>{
    airchie10.classList.toggle('gamwvanda')
    airchie11.classList.remove('gamwvanda')
    airchie12.classList.remove('gamwvanda')
})
airchie11.addEventListener('click', ()=>{
    airchie11.classList.toggle('gamwvanda')
    airchie10.classList.remove('gamwvanda')
    airchie12.classList.remove('gamwvanda')
})
airchie12.addEventListener('click', ()=>{
    airchie12.classList.toggle('gamwvanda')
    airchie11.classList.remove('gamwvanda')
    airchie10.classList.remove('gamwvanda')
})
airchie13.addEventListener('click', ()=>{
    airchie13.classList.toggle('gamwvanda')
    airchie14.classList.remove('gamwvanda')
    airchie15.classList.remove('gamwvanda')
})
airchie14.addEventListener('click', ()=>{
    airchie14.classList.toggle('gamwvanda')
    airchie13.classList.remove('gamwvanda')
    airchie15.classList.remove('gamwvanda')
})
airchie15.addEventListener('click', ()=>{
    airchie15.classList.toggle('gamwvanda')
    airchie14.classList.remove('gamwvanda')
    airchie13.classList.remove('gamwvanda')
})