const CWF ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "67412019cbcd881ff79f32f7f95a7499"

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
let weathericon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(CWF + city + `&appid=${apikey}`);
   var data = await response.json();
    console.log(data);


document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";



if(data.weather[0].main == "Clouds"){
    weathericon.src = "icons/images/clouds.png";
}
else if(data.weather[0].main == "Mist"){
    weathericon.src = "icons/images/mist.png";
}
else if(data.weather[0].main == "Clear"){
    weathericon.src = "icons/images/mist.png";
}
else if(data.weather[0].main == "Drizzle"){
    weathericon.src = "icons/images/drizzle.png";
}
else if(data.weather[0].main == "Rain"){
    weathericon.src = "icons/images/rain.png";
}



}

searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})
