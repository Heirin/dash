import React from "react";


const CurrentWeather =(props)=>{
  const apiCall = "https://timezone.abstractapi.com/v1/current_time/?api_key=dee439706fa54b019a4863ee627c2aa4&location=" + props.city;
  return apiCall;
}

export default CurrentWeather;
//apiKey = https://timezone.abstractapi.com/v1/current_time/?api_key=dee439706fa54b019a4863ee627c2aa4&location=Bergen, Norway
