import React from 'react';
import './App.css';
import Info from "./Components/info";
import From from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "253256ff862ce5d78b05d226fe922077";

class App extends React.Component {
    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }

    let
    gettingWeather = async (event) => {
        event.preventDefault();
        let city = event.target.elements.city.value;

        if (city) {
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric=`);
            const data = await api_url.json();

            let sunset = data.sys.sunset;
            let date = new Date();
            date.setTime(sunset);
            let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            let sunrise = data.sys.sunrise;
            date.setTime(sunrise);
            let sunrise_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: sunrise_date,
                sunset: sunset_date,
                error: ""
            });
        } else {
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                error: "Ошибка: Введите город"
            });

        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="main">


                    <div className="container">
                        <div className="row">
                            <div className="Style.col-xs-5">
                                <Info/>
                            </div>
                            <div>
                                <From weatherMethod={this.gettingWeather}/>
                                <Weather temp={this.state.temp} city={this.state.city} country={this.state.country}
                                         sunrise={this.state.sunrise}
                                         sunset={this.state.sunset} error={this.state.error}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
