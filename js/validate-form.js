function esMailValido(mail) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) return true
    return false
}

const form = document.querySelector('#contacto')
const input = document.querySelector('#email-input')

form.onsubmit = function(e){
    e.preventDefault()

    if(esMailValido(input.value)){
        e.target.submit()
    }else{
        input.setCustomValidity('Ingrese una dirección de correo electrónico válida');
        input.style.border = '2px solid red';
        alert('El email no es valido')
    }

}
  