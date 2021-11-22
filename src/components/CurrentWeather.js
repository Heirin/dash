import {useState, useEffect} from "react";


const CurrentWeather =(props)=>{
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWeather, setCurrentWeather] = useState("");
  const apiKey = "32b1ef2fde08487f590d2266076d4f88";
  const apiCall = "api.openweathermap.org/data/2.5/weather?q="+props.city+"&appid=" + apiKey;
  console.log(apiCall);
useEffect(()=> {
  fetch(apiCall,{method: 'GET'})
  .then((response) => {
    console.log(response);
    response.json()})
  .then(data => { //denne bodyen kan byttes ut med console.log(data.datetime)
    console.log("current weather:" + data.weather[1]);
    setCurrentWeather(data.weather[1]);
    setIsLoaded(true);
  }
  );
},[]);

  console.log("console-logging current weather:" + currentWeather);

return currentWeather;
}

export default CurrentWeather;

//api-key: 32b1ef2fde08487f590d2266076d4f88
// api call: api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
