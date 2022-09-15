const form = document.forms[0];
let units = form.units.value;
let markers = [];
markers = ["C", "m/s"];

let kievWeatherUrl,
    kievForecastUrl,
    kievWeatherData,
    londonWeatherUrl,
    londonForecastUrl,
    londonWeatherData,
    nyWeatherUrl,
    nyForecastUrl,
    nyWeatherData,
    munichWeatherUrl,
    munichForecastUrl,
    munichWeatherData,
    dataView;

assamble(units);

function assamble(units) {
    kievWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f&units=${units}`;
    kievForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?id=703448&appid=bf35cac91880cb98375230fb443a116f&units=${units}`;
    londonWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f&units=${units}`;
    londonForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=bf35cac91880cb98375230fb443a116f&units=${units}`;
    nyWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f&units=${units}`;
    nyForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?id=5128638&appid=bf35cac91880cb98375230fb443a116f&units=${units}`;
    munichWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?id=2867714&appid=bf35cac91880cb98375230fb443a116f&units=${units}`;
    munichForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?id=2867714&appid=bf35cac91880cb98375230fb443a116f&units=${units}`;

    kievWeatherData = new DataService(
        kievWeatherUrl,
        kievForecastUrl,
        markers
    );
    londonWeatherData = new DataService(
        londonWeatherUrl,
        londonForecastUrl,
        markers
    );
    nyWeatherData = new DataService(nyWeatherUrl, nyForecastUrl, markers);
    munichWeatherData = new DataService(
        munichWeatherUrl,
        munichForecastUrl,
        markers
    );

    weatherView = new WeatherView();

    weatherView.showWeather(kievWeatherData);
    weatherView.showWeather(londonWeatherData);
    weatherView.showWeather(nyWeatherData);
    weatherView.showWeather(munichWeatherData);
}

form.addEventListener("change", function () {
    units = form.units.value;
    if (units == "metric") {
        markers = ["C", "m/s"];
    } else if (units == "imperial") {
        markers = ["F", "mph"];
    }

    assamble(units);

    weatherView.clearWeather();
});