class DetailedData {
    constructor(weatherUrl, markers) {
        this.weatherUrl = weatherUrl;
        this.markers = markers;
    }

    getWeatherDetailed() {
        return fetch(
                this.weatherUrl
            )
            .then((response) => response.json())
            .then((json) => this.createDetailedObj(json));
    }

    createDetailedObj(obj) {
        return {
            windDirection: this.degToCompass(obj.wind.deg),
            windSpeed: obj.wind.speed + markers[1],
            press: obj.main.pressure + " hPa",
            sunrise: (new Date(obj.sys.sunrise * 1000)).getHours() + ":" + (new Date(obj.sys.sunrise * 1000)).getMinutes(),
            sunset: (new Date(obj.sys.sunset * 1000)).getHours() + ":" + (new Date(obj.sys.sunset * 1000)).getMinutes(),

        };
    }

    degToCompass(num) {
        const val = Math.floor((num / 45) + 0.5);
        const arr = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        return arr[(val % 8)]
    }
}