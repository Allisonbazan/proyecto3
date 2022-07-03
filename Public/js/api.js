const ID = 15 //Digimon Inicial que se muestra en la pantalla
let VarOpt = ''
const APIDigimon = 'https://digimon-api.vercel.app/api/digimon/';

export const getDigimon = async () => {
    try{
        const getDigimonApi = await fetch(APIDigimon)
        const data = await getDigimonApi.json();

        for (const property in data) {
            VarOpt = VarOpt+`<option value="${property}">${data[property].name}</option>`
        }
        document.getElementById("digimonName").innerHTML = data[`${ID}`].name
        document.getElementById("digimonLevel").innerHTML = '<h6><strong> LEVEL: </strong> </h6>'+data[`${ID}`].level
        document.getElementById("digimonImage").innerHTML = `<img src="${data[`${ID}`].img}" class="card-img-top" alt="">`
        document.getElementById("digimonOpt").innerHTML = VarOpt
        document.getElementById("digimonOpt").value = `${ID}` 
        return data  

    }catch{
        console.log("Hay error en la llamada al api")
    }
}