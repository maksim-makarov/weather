class DataService {
  constructor(weatherUrl, forecastUrl, markers) {
    this.weatherUrl = weatherUrl;
    this.forecastUrl = forecastUrl;
    this.markers = markers;
  }

  getWeather() {
    return fetch(this.weatherUrl)
      .then((response) => response.json())
      .then((json) => this.createWeatherObj(json));
  }

  createWeatherObj(obj) {
    return {
      date: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,
      city: obj.name,
      id: obj.id,
      temp: Math.round(obj.main.temp) + "&#176" + markers[0],
      weatherDescription: obj.weather[0].description,
      iconLink: "https://openweathermap.org/img/wn/" +
        obj.weather[0]["icon"] +
        "@2x.png",
    };
  }
}