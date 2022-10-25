class DomWeatherView {

    constructor(data, city) {
        this.data = data;
        this.city = city;
        this.output = document.querySelectorAll("#output");
    }

    showWeather(obj) {
        let element = document.createElement("div");
        let city = document.createElement("div");
        let cityH2 = document.createElement("h2");
        let weather = document.createElement("div");
        let weatherItems = document.createElement("ul");
        let temp = document.createElement("li");
        let description = document.createElement("li");
        let icon = document.createElement("li");
        let iconImg = document.createElement("img");
        let options = document.createElement("div");
        let showMore = document.createElement("p");
        let showForecast = document.createElement("p");
        element.className = "element";
        city.className = "city";
        weather.className = "weather"
        options.className = "options";
        options.id = obj.id;
        showMore.innerHTML = "Show more"
        showForecast.innerHTML = "Show forecast";
        output.append(element);
        element.append(city);
        cityH2.innerHTML = obj.city;
        city.append(weather);
        weather.append(weatherItems);
        temp.innerHTML = obj.temp;
        description.innerHTML = obj.weatherDescription;
        weatherItems.append(cityH2, temp, description, icon);
        iconImg.src = obj.iconLink;
        icon.append(iconImg)
        element.append(options);
        options.append(showMore, showForecast)
        options.addEventListener("click", (e) => {
            if (e.target.innerHTML === "Show more") {
                if (showForecast.innerHTML === "Hide forecast") {
                    e.target.parentNode.nextSibling.remove();
                    showForecast.innerHTML = "Show forecast"
                }
                let detailedWeather = new DetailedData(urlBuilder.getWeatherUrl(e.target.parentElement.id, units));
                detailedWeather.getWeatherDetailed().then((obj) => {
                    let detailedView = new ShowDetailed(obj, e);
                    detailedView.showDetailed();
                    showMore.innerHTML = "Show less";
                })
            } else if (e.target.innerHTML === "Show less") {
                // detailedView.hideDetailed();
                e.target.parentNode.nextSibling.remove()
                showMore.innerHTML = "Show more";
            } else if (e.target.innerHTML === "Show forecast") {
                if (showMore.innerHTML === "Show less") {
                    e.target.parentNode.nextSibling.remove();
                    showMore.innerHTML = "Show more"
                }
                let forecast = new ForecastData(urlBuilder.getForecastUrl(e.target.parentElement.id, units));
                forecast.getForecast().then((obj) => {
                    let forecastView = new ShowForecast(obj, e);
                    forecastView.showForecast();
                    showForecast.innerHTML = "Hide forecast"
                })
            } else if (e.target.innerHTML === "Hide forecast") {
                e.target.parentNode.nextSibling.remove()
                showForecast.innerHTML = "Show forecast"
            }
        })
    }

    clearWeather() {
        document.querySelectorAll('[class="element"]').forEach(element => {
            element.remove()
        });
    }
}