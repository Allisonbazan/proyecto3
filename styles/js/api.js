const ID = 0
let VarOpt = ''
const APIDigimon = 'https://digimon-api.vercel.app/api/digimon/';
console.log(APIDigimon);

export const getDigimon = async () => {
    try{
        const getDigimonApi = await fetch(APIDigimon)
        const data = await getDigimonApi.json();

        for (const property in data) {
            VarOpt = VarOpt+`<option value="${property}">${data[property].name}</option>`
        }
        document.getElementById("digimonName").innerHTML = data[`${ID}`].name
        document.getElementById("digimonLevel").innerHTML = 'Level: '+data[`${ID}`].level
        document.getElementById("digimonImage").innerHTML = `<img src="${data[`${ID}`].img}" class="card-img-top" alt="">`
        document.getElementById("digimonOpt").innerHTML = VarOpt
        return data  

    }catch{
        console.log("Hay error en la llamada al api")
    }
}