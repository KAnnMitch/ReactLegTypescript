import React, { Component } from 'react';
import Display  from './browser'

type Locate = {
    latitude: number,
    longitude: number,
    weather: any,
};
class Weather extends Component<{}, Locate> {
    constructor(props: any) {
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0,
            weather: 0,
        }
    }
    location = (pos: any) => {
        let crd = pos.coords;
        const lat: number = crd.latitude;
        const lon: number = crd.longitude;
        this.setState({
            latitude: lat,
            longitude: lon
        });
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=imperial&appid=a639ea6215c210d914535d7fdb85c2c9`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                weather: data.main.temp
            })
            console.log('this.state.weather: ', this.state.weather);
        });
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.location);
    }
    render() {
        return (
            <div>
                <Display weather ={this.state.weather} />
            </div>
        )
    }
}
export default Weather;