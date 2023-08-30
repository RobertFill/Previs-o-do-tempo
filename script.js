const search = document.getElementById('btn')

const key = "f23a5b4b33ffc27cfd5de780fce37d7a" //chave da API

search.addEventListener('click', clickBtn); 

function screanDados(dados){
    console.log(dados)
    document.querySelector('#city-location').innerHTML = "Tempo em " + dados.name
    document.querySelector('#temp').innerHTML = dados.weather[0].description
    document.querySelector('#Maxgraus').innerHTML = "Max: " + Math.floor(dados.main.temp_max) + " C°" //arredondar temp
    document.querySelector('#Mingraus').innerHTML = "Min: " + Math.floor(dados.main.temp_min) + " C°"
    document.querySelector('#umidade').innerHTML = "umidade: " +  dados.main.humidity + "%"
    document.querySelector('#image-temp').src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
}

async function searchCity(city){ //Async----funçao assincrona//

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json()) //fetch-----busca da API//
    screanDados(dados)
}

function clickBtn(){
    //pegando valor input do html//
    const city = document.querySelector("#input-city").value;
    

    searchCity(city)
   
}