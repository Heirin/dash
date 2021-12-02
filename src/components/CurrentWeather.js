import React, {useState, useEffect} from "react";


const CurrentWeather =(props)=>{
  const [weather, setWeather] = useState("");

  useEffect(()=>{
    const apiKey = "32b1ef2fde08487f590d2266076d4f88";
    const apiCall = "https://api.openweathermap.org/data/2.5/weather?q="+props.city+"&appid=" + apiKey;
    console.log(apiCall);

    const fetchData = async() => {
      try{
        const response = await fetch(apiCall);
        const json = await response.json();
        console.log(json);
        setWeather(json.weather[0].description);
      }catch(error){
        console.log("error happened here");
        console.error(error);
      }
    }

    fetchData();

  }, []);

  return weather;

}

export default CurrentWeather;

//api-key: 32b1ef2fde08487f590d2266076d4f88
//api call: api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
