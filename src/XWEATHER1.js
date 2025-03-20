import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./wether.css";

  
export const Search = ({searchData}) => {
    const [city, setCity] = useState('');
  const searchData1 = () => {
    searchData(city)
  };
  return (
<div className='weather-search'>
 <input type="text"  placeholder="Enter city name" value={city} onChange={(e)=>setCity(e.target.value)} />
 <button onClick={searchData1}>Search</button>
 </div>
  )
}



 const WeatherCard = ({title,data}) => {
    return (
    <div className="weather-card">
    <h3>{title}</h3>
    <p>{data}</p>
    </div>

    )}

    export  const XWEATHER = ({city}) => {

      const [isLoading, setIsLoading] = useState(false);
      const [weatherData, setWeatherData] = useState(null);
   
      
      useEffect(() => {
        if(city){
            setIsLoading(true)
      axios.get('https://api.weatherapi.com/v1/current.json', {
        params: {
          Key: "83b3b4a5c0bf40ee83221418240804",
          q: city
        }
      })
        .then(response=> {
            console.log(response.data)
            setWeatherData(response.data)
          
        })
        .catch((error)=> {
          console.error("",error);
          alert("Failed to fetch weather data")
        })
        .finally(()=> {
          setIsLoading(false)
          
        })}},[city])

  return (
    <div className='weather-display'>
    {isLoading && <p>Loading data...</p>} 
    {!isLoading && weatherData && (
      <div className="weather-data">
      <div className="weather-cards">
        <WeatherCard data={`${weatherData.current.temp_c}C`} title="Temperature"  />
        <WeatherCard data={`${weatherData.current.humidity}%`} title="Humidity"  />
        <WeatherCard data={`${weatherData.current.condition.text}`} title="Condition"  />
        <WeatherCard data={`${weatherData.current.wind_kph}`}kph title="Wind Speed"  /></div>
   </div>
    )
    }
    </div>
  )
}


