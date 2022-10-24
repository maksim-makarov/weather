class DomWeatherView {

    constructor(data) {
        this.data = data;
        this.output = document.querySelectorAll("#output");
    }

    showWeather(data) {
        data.getWeather().then((obj) => {
            let element = document.createElement("div");
            element.className = "element";
            output.append(element);
            let city = document.createElement("div");
            city.className = "city";
            element.append(city);
            let cityH2 = document.createElement("h2");
            cityH2.innerHTML = obj.city;;
            let weather = document.createElement("div");
            weather.className = "weather"
            city.append(weather);
            let weatherItems = document.createElement("ul");
            weather.append(weatherItems);
            let temp = document.createElement("li");
            temp.innerHTML = obj.temp;
            let description = document.createElement("li");
            description.innerHTML = obj.weatherDescription;
            let icon = document.createElement("li");
            weatherItems.append(cityH2, temp, description, icon);
            let iconImg = document.createElement("img");
            iconImg.src = obj.iconLink;
            icon.append(iconImg)
            let options = document.createElement("div");
            options.className = "options";
            element.append(options);
            let showMore = document.createElement("p");
            showMore.innerHTML = "Show more"
            let showForecast = document.createElement("p");
            showForecast.innerHTML = "Show forecast";
            options.append(showMore, showForecast)
            let detailedWeather = new ShowDetailed(data);
            let forecast = new ShowForecast(data);
            element.addEventListener("click", (e) => {
                if (e.target.innerHTML === "Show more") {
                    if (showForecast.innerHTML === "Hide forecast") {
                        forecast.hideForecast(e);
                        showForecast.innerHTML = "Show forecast"
                    }
                    detailedWeather.showDetailed(data, e);
                    showMore.innerHTML = "Show less"
                } else if (e.target.firstChild.data === "Show less") {
                    detailedWeather.hideDetailed(e);
                    showMore.innerHTML = "Show more"
                } else if (e.target.innerHTML === "Show forecast") {
                    if (showMore.innerHTML === "Show less") {
                        detailedWeather.hideDetailed(e);
                        showMore.innerHTML = "Show more"
                    }
                    forecast.showForecast(data, e);
                    showForecast.innerHTML = "Hide forecast"
                } else if (e.target.innerHTML === "Hide forecast") {
                    forecast.hideForecast(e);
                    showForecast.innerHTML = "Show forecast"
                }
            });
        });
    }

    clearWeather() {
        document.querySelectorAll('[class="element"]').forEach(element => {
            element.remove()
        });
    }

    // showDetailed(data, e) {
    //     data.getWeatherDetailed().then((obj) => {
    //         let detailedOutput = document.createElement("table");
    //         (e.target.parentNode).parentNode.append(detailedOutput)
    //         for (const key in obj) {
    //             if (Object.hasOwnProperty.call(obj, key)) {
    //                 const element = obj[key];
    //                 let tr = document.createElement("tr");
    //                 let td1 = document.createElement("td");
    //                 let td2 = document.createElement("td");
    //                 td1.innerHTML = `${key}`;
    //                 td2.innerHTML = `${element}`;
    //                 detailedOutput.append(tr);
    //                 tr.append(td1, td2)
    //             }
    //         }
    //     })

    // }

    // hideDetailed(e) {
    //     e.target.parentNode.nextSibling.remove()
    // }

    // showForecast(data, e) {
    //     data.getForecast().then((arr) => {
    //         // console.log(arr)
    //         let forecastOutput = document.createElement("div");
    //         forecastOutput.className = "weather";
    //         (e.target.parentNode).parentNode.append(forecastOutput);
    //         arr.forEach(element => {
    //             let weatherItems = document.createElement("ul");
    //             forecastOutput.append(weatherItems);
    //             let date = document.createElement("li")
    //             date.innerHTML = element.date;
    //             let temp = document.createElement("li");
    //             temp.innerHTML = element.temp;
    //             let description = document.createElement("li");
    //             description.innerHTML = element.weatherDescription;
    //             let icon = document.createElement("li");
    //             weatherItems.append(date, temp, description, icon);
    //             let iconImg = document.createElement("img");
    //             iconImg.src = element.iconLink;
    //             icon.append(iconImg)
    //         });
    //     })
    // }

    // hideForecast(e) {
    //     e.target.parentNode.nextSibling.remove()
    // }


}