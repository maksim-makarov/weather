class ShowDetailed {

    constructor(data, e) {
        this.data = data;
        this.e = e;
    }

    showDetailed() {
        let detailedOutput = document.createElement("div");
        let wind = document.createElement("div");
        let windIcon = document.createElement("img");
        let windValue = document.createElement("p");
        let press = document.createElement("div");
        let pressIcon = document.createElement("img");
        let pressValue = document.createElement("p");
        let sunrise = document.createElement("div");
        let sunriseIcon = document.createElement("img");
        let sunriseValue = document.createElement("p");
        let sunset = document.createElement("div");
        let sunsetIcon = document.createElement("img");
        let sunsetValue = document.createElement("p");
        detailedOutput.className = "detailedOutput";
        windIcon.src = "./images/windIcon.png";
        windValue.innerHTML = `${this.data.windDirection} ${this.data.windSpeed}`
        pressIcon.src = "./images/pressIcon.png";
        pressValue.innerHTML = this.data.press;
        sunriseIcon.src = "./images/sunriseIcon.png";
        sunriseValue.innerHTML = this.data.sunrise;
        sunsetIcon.src = "./images/sunsetIcon.png";
        sunsetValue.innerHTML = this.data.sunset;
        wind.append(windIcon, windValue);
        press.append(pressIcon, pressValue);
        sunrise.append(sunriseIcon, sunriseValue);
        sunset.append(sunsetIcon, sunsetValue);
        detailedOutput.append(wind, press, sunrise, sunset);
        (this.e.target.parentNode).parentNode.append(detailedOutput);
    }
}