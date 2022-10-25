class DomWeatherView {

    constructor(data, city) {
        this.data = data;
        this.city = city;
        this.output = document.querySelectorAll("#output");
    }

    showWeather(obj) {
        let element = document.createElement("div");
        let weather = document.createElement("div");
        let left = document.createElement("div");
        let date = document.createElement("div");
        let cityH2 = document.createElement("h2");
        let description = document.createElement("div");
        let iconImg = document.createElement("img");
        let temp = document.createElement("div");
        let options = document.createElement("div");
        let showMore = document.createElement("p");
        let showForecast = document.createElement("p");
        element.className = "element";
        weather.className = "weather"
        left.className = "left";
        temp.className = "temp";
        options.className = "options";
        options.id = obj.id;
        date.innerHTML = obj.date;
        cityH2.innerHTML = obj.city;
        description.innerHTML = obj.weatherDescription;
        iconImg.src = obj.iconLink;
        temp.innerHTML = obj.temp;
        output.append(element);
        element.append(weather, options);
        weather.append(left, iconImg, temp);
        left.append(date, cityH2, description)
        showMore.innerHTML = "show more ∨"
        showForecast.innerHTML = "∨ show forecast";
        options.append(showMore, showForecast)
        options.addEventListener("click", (e) => {
            if (e.target.innerHTML === "show more ∨") {
                if (showForecast.innerHTML === "∧ hide forecast") {
                    e.target.parentNode.nextSibling.remove();
                    showForecast.innerHTML = "∨ show forecast"
                }
                let detailedWeather = new DetailedData(urlBuilder.getWeatherUrl(e.target.parentElement.id, units));
                detailedWeather.getWeatherDetailed().then((obj) => {
                    let detailedView = new ShowDetailed(obj, e);
                    detailedView.showDetailed();
                    showMore.innerHTML = "show less ∧";
                })
            } else if (e.target.innerHTML === "show less ∧") {
                e.target.parentNode.nextSibling.remove()
                showMore.innerHTML = "show more ∨";
            } else if (e.target.innerHTML === "∨ show forecast") {
                if (showMore.innerHTML === "show less ∧") {
                    e.target.parentNode.nextSibling.remove();
                    showMore.innerHTML = "show more ∨"
                }
                let forecast = new ForecastData(urlBuilder.getForecastUrl(e.target.parentElement.id, units));
                forecast.getForecast().then((obj) => {
                    let forecastView = new ShowForecast(obj, e);
                    forecastView.showForecast();
                    showForecast.innerHTML = "∧ hide forecast"
                })
            } else if (e.target.innerHTML === "∧ hide forecast") {
                e.target.parentNode.nextSibling.remove()
                showForecast.innerHTML = "∨ show forecast"
            }
        })
    }

    clearWeather() {
        document.querySelectorAll('[class="element"]').forEach(element => {
            element.remove()
        });
    }
}