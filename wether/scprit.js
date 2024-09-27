document.addEventListener("DOMContentLoaded",() => {
const cityInput = document.getElementById("city-input")
const getweatherbtn = document.getElementById("get-weather-button")
const weatherinfo = document.getElementById("wether-info")
const cityNameDisplay= document.getElementById("city-name")
const tempratureDisplay = document.getElementById("temprature")
const descripationDisplay= document.getElementById("descripation")
const errorMassage = document.getElementById("error-massage")


const apikey = "2c374d1ee9e9c048bfe5d557bd9a414d";

getweatherbtn.addEventListener("click",async()=>{
    const city = cityInput.value.trim()
    if(city === "") return;

    try {
        const weatherdata = await fatchWeatherdata(city)
        displayweatherdata(weatherdata);
       
        
        
        
        
    } catch (error) {
        displayError()
    }
})

async function fatchWeatherdata(city){
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
    const response = await fetch(url)
    // console.log(typeof response)
    // console.log( response)

    if(!response.ok){
        throw new Error('City is not found')
    }  
    const data = await response.json()
    return data;
    
}
function displayweatherdata(data){
    console.log(data)
    // cityNameDisplay.innerText = weatherData.name
    // tempratureDisplay.innerText = `Temprature: ${weatherData.main.temp}°C`
    // descripationDisplay.innerText = `Descripation: ${weatherData.weather[0].main}`
    // errorMassage.classList.add('hidden')
    // weatherinfo.classList.remove('hidden')
    const {name, main,weather} = data;
    cityNameDisplay.innerText = name
    tempratureDisplay.innerText = `Temprature: ${main.temp}°C`
    descripationDisplay.innerText = `Weather: ${weather[0].main}`
    errorMassage.classList.add('hidden')
    weatherinfo.classList.remove('hidden')

}
function displayError(){
    weatherinfo.classList.add('hidden')
    errorMassage.classList.remove('hidden')

}



})