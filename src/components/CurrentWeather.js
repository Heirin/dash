import React from "react";


const CurrentWeather =(props)=>{
  
  const apiCall = "https://timezone.abstractapi.com/v1/current_time/?api_key=dee439706fa54b019a4863ee627c2aa4&location=" + props.city;
  return apiCall;
}

export default CurrentWeather;
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
