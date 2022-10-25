class ForecastData {
    constructor(forecastUrl, markers) {
        this.forecastUrl = forecastUrl;
        this.markers = markers;
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