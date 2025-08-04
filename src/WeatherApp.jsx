import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from 'react';
export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        temp: 25,
        tempMin: 20,
        tempMax: 30,
        humidity: 60,
        feelsLike: 27,
        weather: "Clear",
});

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}