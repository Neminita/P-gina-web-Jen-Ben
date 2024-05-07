document.addEventListener("DOMContentLoaded", () => {
   fetchData() 
})

const fetchData = async ()=> {
    try{
        const res = await fetch('api.json')
        const data = await res.json()
        
        detectarBotones(data)
    } catch (error){
        
    }
    }
var buttonComprar = document.getElementById
    botones.addEventListener('click')
    
