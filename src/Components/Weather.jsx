import React from "react";

const Weather = (props) =>{
    return(
        <div>
            {props.city &&
            <div>
                <h1>Температура: {Math.round(props.temp - 273)}</h1>
                <h1>Город: {props.city}</h1>
                <h1>Страна: {props.country}</h1>
                <h1>Восход солнца: {props.sunrise}</h1>
                <h1>Заход солнца: {props.sunset}</h1>
            </div>
            }


            <p>{props.error}</p>

        </div>
    )
}

export default Weather;