
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let API_KEY= "b3900eb8d0cbcddcdb6ec8411be01bfa";
    let API_URL = `https://api.openweathermap.org/data/2.5/weather`;

    let getWeatherInfo = async (event)=>{
        try{
            let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await res.json();
        
            let result={
                city:city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
        
    };


    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event)=>{
       try{
        event.preventDefault();
        setCity("");
        console.log(city);
        let newInfo = await getWeatherInfo(city);
        updateInfo(newInfo);
       }catch(err){
        setError(true);
       }

    }

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="City" label="City Name" variant="outlined" value={city} onChange={handleChange} required />
                <br /> <br />
                <Button variant="contained" type='submit'> Search </Button>
                {error && <p style={{color:"red"}}>City not found !</p>}
            </form>
            
        </div>

    );
    
}