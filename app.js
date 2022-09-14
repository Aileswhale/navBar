const navbtn = document.querySelector('.nav__btn')
const navlinks = document.querySelector('ul')


navbtn.addEventListener('click', ()=>{
    let action = navlinks.classList.contains('new__nav')
    if (action) {
        navlinks.classList.remove('new__nav')
        navbtn.classList.remove('change')
    }
    else{
        navlinks.classList.add('new__nav')
         navbtn.classList.add('change')
    }
})

