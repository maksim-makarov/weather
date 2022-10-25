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
      city: obj.name,
      id: obj.id,
      temp: Math.round(obj.main.temp) + "&#176" + markers[0],
      weatherDescription: obj.weather[0].description,
      iconLink: "https://openweathermap.org/img/wn/" +
        obj.weather[0]["icon"] +
        "@2x.png",
    };
  }

  getForecast() {
    return fetch(this.forecastUrl)
      .then((response) => response.json())
      .then((json) => this.createForecastArr(json.list.filter((e) => e.dt_txt.includes("12:00"))));
  }

  createForecastArr(arr) {
    let forecastArr = [];
    arr.forEach(element => {
      forecastArr.push({
        date: element.dt_txt.slice(0, 11),
        temp: Math.round(element.main.temp) + "&#176" + markers[0],
        weatherDescription: element.weather[0].description,
        iconLink: "https://openweathermap.org/img/wn/" +
          element.weather[0].icon +
          "@2x.png",
      })
    });
    return forecastArr;
  }
}