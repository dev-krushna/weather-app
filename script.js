const apikey ="8a38d0b1e06eae23533734ca31b7a7ea";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button")
let weatherIcon =document.querySelector(".W-IMG")

async function checkWeather(city){
    const response =await fetch(apiurl+city+`&appid=${apikey}`);

    var data =await response.json();

document.querySelector(".city").innerHTML=data.name ;
document.querySelector(".temp").innerHTML=data.main.temp+"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity +" %";
document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";
console.log(data);
if(data.weather[0].main =="Clouds"){
    weatherIcon.src="images/clouds.png";
}else if(data.weather[0].main =="Clear"){
    weatherIcon.src="images/clear.png";
}else if(data.weather[0].main =="Drizzle"){
    weatherIcon.src="images/drizzle.png";
}else if(data.weather[0].main =="Mist"){
    weatherIcon.src="images/mist.png";
}else if(data.weather[0].main =="Rain"){
    weatherIcon.src="images/rain.png";
}else if(data.weather[0].main =="Snow"){
    weatherIcon.src="images/show.png";
}else if(data.weather[0].main =="Haze"){
    weatherIcon.src="images/Haze.png";
}  

}


searchBtn.addEventListener("click",()=>
{
    checkWeather(searchBox.value);
})
 