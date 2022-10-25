class ShowForecast {
    constructor(data, e) {
        this.data = data;
        this.e = e;
        console.log(this.data);
        console.log(this.e.target.parentNode);
    }

    showForecast() {
        let forecastOutput = document.createElement("div");
        forecastOutput.className = "weather";
        (this.e.target.parentNode).parentNode.append(forecastOutput);
        this.data.forEach(element => {
            let weatherItems = document.createElement("ul");
            forecastOutput.append(weatherItems);
            let date = document.createElement("li")
            date.innerHTML = element.date;
            let temp = document.createElement("li");
            temp.innerHTML = element.temp;
            let description = document.createElement("li");
            description.innerHTML = element.weatherDescription;
            let icon = document.createElement("li");
            weatherItems.append(date, temp, description, icon);
            let iconImg = document.createElement("img");
            iconImg.src = element.iconLink;
            icon.append(iconImg)
        });
    }
}