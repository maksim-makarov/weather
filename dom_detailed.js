class ShowDetailed {

    showDetailed(data, e) {
        data.getWeatherDetailed().then((obj) => {
            let detailedOutput = document.createElement("table");
            (e.target.parentNode).parentNode.append(detailedOutput)
            for (const key in obj) {
                if (Object.hasOwnProperty.call(obj, key)) {
                    const element = obj[key];
                    let tr = document.createElement("tr");
                    let td1 = document.createElement("td");
                    let td2 = document.createElement("td");
                    td1.innerHTML = `${key}`;
                    td2.innerHTML = `${element}`;
                    detailedOutput.append(tr);
                    tr.append(td1, td2)
                }
            }
        })

    }

    hideDetailed(e) {
        e.target.parentNode.nextSibling.remove()
    }
}