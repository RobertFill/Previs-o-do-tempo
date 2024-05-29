const search = document.getElementById('btn');
const cityLocation = document.querySelector('#city-location');
const temp = document.querySelector('#temp');
const maxGraus = document.querySelector('#Maxgraus');
const minGraus = document.querySelector('#Mingraus');
const moisture = document.querySelector('#umidade');
const imgeTemp = document.querySelector('#image-temp');

const key = "f23a5b4b33ffc27cfd5de780fce37d7a" //chave da API

async function searchCity(city){ //Async----funçao assincrona//

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json()) //fetch-----busca da API//
    screanDados(dados)
}

search.addEventListener('click', clickBtn); 

function screanDados(dados){
    cityLocation.innerHTML = "Tempo em " + dados.name
    temp.innerHTML = dados.weather[0].description
    maxGraus.innerHTML = "Max: " + Math.floor(dados.main.temp_max) + " C°" //arredondar temp
    minGraus.innerHTML = "Min: " + Math.floor(dados.main.temp_min) + " C°"
    moisture.innerHTML = "umidade: " +  dados.main.humidity + "%"
    imgeTemp.src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
}


function clickBtn(){
    //pegando valor input do html//
    const city = document.querySelector("#input-city").value;
    if(!city){
        cityLocation.innerHTML = "Não Encontrado";
    }else{
        searchCity(city);
    }
    
   
}
document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        clickBtn();
    }
})
