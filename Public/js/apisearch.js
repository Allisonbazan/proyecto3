// función para buscar el digimon
import {getDigimon} from './api.js'
const data = await getDigimon();
let indice=0
document.getElementById("digimonSearch").onclick = function() {  
    fun()  
    };  
    function fun() {
        indice=document.getElementById("digimonOpt").value;
        document.getElementById("digimonName").innerHTML = data[`${indice}`].name
        document.getElementById("digimonLevel").innerHTML =  'Level: '+data[`${indice}`].level
        document.getElementById("digimonImage").innerHTML = `<img src="${data[`${indice}`].img}" class="card-img-top" alt="">`
    }