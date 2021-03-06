import {useState, useEffect} from "react";


const CurrentTime =(props)=>{
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const apiCall = "https://timezone.abstractapi.com/v1/current_time/?api_key=dee439706fa54b019a4863ee627c2aa4&location=" + props.city;
useEffect(()=> {
  fetch(apiCall,{method: 'GET'})
  .then((response) => response.json())
  .then(data => { //denne bodyen kan byttes ut med console.log(data.datetime)
    console.log("current time:" + data.datetime)
    setCurrentTime(data.datetime);
    setIsLoaded(true);
  }
  );
},[]);

  console.log("console-logging current time:" + currentTime);

return currentTime;
}

export default CurrentTime;
//apiKey = https://timezone.abstractapi.com/v1/current_time/?api_key=dee439706fa54b019a4863ee627c2aa4&location=Bergen, Norway
// {
// datetime: "2021-11-15 14:48:58",
// timezone_name: "Central European Standard Time",
// timezone_location: "Europe/Oslo",
// timezone_abbreviation: "CET",
// gmt_offset: 1,
// is_dst: false,
// requested_location: "Bergen",
// latitude: 60.3943055,
// longitude: 5.3259192
// }
