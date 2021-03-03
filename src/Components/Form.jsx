import React from "react";

const From = (props) =>{
    return(
        <form onSubmit={props.weatherMethod}>
            <input type="text" name="city" placeholder="Город"/>
            <button>Получить погоду</button>
        </form>
    )
}

export default From;