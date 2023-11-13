const ham = document.querySelector('#nav-ham')
const nav = document.querySelector('#header-nav')

ham.onclick = () => nav.classList.toggle('none');
