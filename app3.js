let url = "http://universities.hipolabs.com/search?country=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("#country").value;
    let state = document.querySelector("#state").value;

    let colArr = await getColleges(country);

    show(colArr, state);
});

function show(colArr, state) {
    let list = document.querySelector("#list");
    list.innerText = "";

    for (let col of colArr) {

        if (col["state-province"] &&
            col["state-province"].toLowerCase().includes(state.toLowerCase())) {

            console.log(col.name);

            let li = document.createElement("li");
            li.innerText = col.name;
            list.appendChild(li);
        }
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    }
    catch (e) {
        console.log("error : ", e);
    }
}