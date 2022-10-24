const form = document.forms[0];
let units = form.units.value;
let markers = [];
markers = ["C", "m/s"];

let cityId = {
    kiev: "703448",
    london: "2643743",
    ny: "5128638",
    munich: "2867714"
}

let urlBuilder = new UrlBuilder;

assamble(units);

function assamble(units) {
    kievWeatherData = new DataService(
        urlBuilder.getWeatherUrl(cityId.kiev, units),
        urlBuilder.getForecastUrl(cityId.kiev, units),
        markers
    );
    londonWeatherData = new DataService(
        urlBuilder.getWeatherUrl(cityId.london, units),
        urlBuilder.getForecastUrl(cityId.london, units),
        markers
    );
    nyWeatherData = new DataService(
        urlBuilder.getWeatherUrl(cityId.ny, units),
        urlBuilder.getForecastUrl(cityId.ny, units), markers
    );
    munichWeatherData = new DataService(
        urlBuilder.getWeatherUrl(cityId.munich, units),
        urlBuilder.getForecastUrl(cityId.munich, units),
        markers
    );

    weatherView = new DomWeatherView();

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