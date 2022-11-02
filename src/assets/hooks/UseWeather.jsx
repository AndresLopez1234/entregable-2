import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseWeather = () => {
    const [time,setTime]=  useState({})
    const [temperatura, setTemperatura]=  useState()


useEffect(() => {
    function success (pos) {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=663013a59630b421166b4c4e53f51d82`)
        .then(res => {  
            setTime(res.data) 
            const temp = {
                celsius:`${Math.round(res.data.main.temp -273.15)} °C`,
                farenheit:`${Math.round(res.data.main.temp -273.15) * 9/5 + 32 } °F`
            }
            setTemperatura(temp)
        })

    }
    navigator.geolocation.getCurrentPosition(success);
},[])
console.log(time)

 return{time, temperatura}
}

export default UseWeather