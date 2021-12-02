import React, {useState, useEffect} from "react";
import "./Weather.css";

const CurrentWeather =(props)=>{
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(()=>{
    const apiKey = "32b1ef2fde08487f590d2266076d4f88";
    const apiCall = "https://api.openweathermap.org/data/2.5/weather?q="+props.city+"&units=metric"+"&appid=" + apiKey;
    console.log(apiCall);

    const fetchData = async() => {
      try{
        const response = await fetch(apiCall);
        const json = await response.json();
        console.log(json);
        setWeather(json.weather[0].description);
        setTemperature(Math.round(json.main.temp*10)/10);
        setIcon("https://openweathermap.org/img/wn/"+json.weather[0].icon+"@2x.png");
      }catch(error){
        console.log("error happened here");
        console.error(error);
      }
    }

    fetchData();

  }, []);

  return <div className="weather">
  <img src={icon} alt={weather} className="weather-icon"/>
  <p> {temperature} C  </p> <p>{weather}</p></div>;

}

export default CurrentWeather;

//api-key: 32b1ef2fde08487f590d2266076d4f88
//api call: api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
