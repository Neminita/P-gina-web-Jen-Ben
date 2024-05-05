const direccion = document.getElementById("direccion")
const email = document.getElementById("email")
const password = document.getElementById("password")
const ciudad = document.getElementById("ciudad")
const cpostal = document.getElementById("cpostal")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit",e=>{
    e.preventDefault()
    let warnings = ""
    if(cpo.Value.length <6){
        warnings+= 'El nombre no es valido <br>'
    }
})