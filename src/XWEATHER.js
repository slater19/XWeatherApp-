import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./wether.css";

  
const Search = ({searchData}) => {
  return (
<div className='search'></div>

  )
}



  const WeatherCard = ({title,data}) => {
    return (
    <div className={styles.weather-card}>
    <h3>{title}</h3>
    <p>{data}</p>
    </div>

    )}

    const XWEATHER = ({city}) => {

      const [isLoading, setIsLoading] = useState(true);
      const [weatherData, setWeatherData] = useState(null);
   
      
      useEffect(() => {
        if(city){
      axios.get('https://api.weatherapi.com/v1/current.json', {
        params: {
          Key: "83b3b4a5c0bf40ee83221418240804",
          q: city
        }
      })
        .then(response=> {
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
    <div className={styles.weather-display}>  
    {isLoading && <p>Loading weather data...</p>} 
    {!isLoading && weatherData && (
      <div className={styles.weather-data}>
      <div className={styles.weather-cards}>
        <WeatherCard data={`${weatherData.current.temp}&degC`} title="Temperature"  />
        <WeatherCard data={`${weatherData.current.Humidity}`} title="Humidity"  />
        <WeatherCard data={`${weatherData.current.Condition}`} title="Condition"  />
        <WeatherCard data={`${weatherData.current.Wind }`} title="Wind Speed"  /></div>
    </div>)
    }
    </div>
  )
}


export { Search, XWEATHER } 