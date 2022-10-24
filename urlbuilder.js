class UrlBuilder {
    getWeatherUrl(city, units) {
        return `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=bf35cac91880cb98375230fb443a116f&units=${units}`
    }
    getForecastUrl(city, units) {
        return `https://api.openweathermap.org/data/2.5/forecast?id=${city}&appid=bf35cac91880cb98375230fb443a116f&units=${units}`
    }

}