class ShowDetailed {

    constructor(data, e) {
        this.data = data;
        this.e = e;
        console.log(this.data);
        console.log(this.e.target.parentNode);
    }

    showDetailed() {
        let detailedOutput = document.createElement("table");
        console.log(this.data);
        (this.e.target.parentNode).parentNode.append(detailedOutput)
        for (const key in this.data) {
            if (Object.hasOwnProperty.call(this.data, key)) {
                const element = this.data[key];
                let tr = document.createElement("tr");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
                td1.innerHTML = `${key}`;
                td2.innerHTML = `${element}`;
                detailedOutput.append(tr);
                tr.append(td1, td2)
            }
        }
    }
}