const beGomb = document.getElementsByClassName('bejelentkezes')[0]
const regGomb = document.getElementsByClassName('reg')[0]

beGomb.addEventListener('click', ()=>{
    window.location.href='../login.html'
})

regGomb.addEventListener('click', ()=>{
    window.location.href='../reghtml'
})