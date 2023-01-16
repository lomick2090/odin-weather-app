const submitButton = document.querySelector('button');
const searchInput = document.getElementById('city');

async function getSearchData(city) {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=b5a14a7cc940d71738c874058413abb4`)
        .then(response => {
            return response.json();
        })

    return data;
}

function parseData(data) {
    let dataObj = [];
    for (let i = 2; i <= 8; i+2) {
        let dayArray = [];
        let day = {};
        day.time = data.list[i].dt_txt;
        day.tempHigh = data.list[i].main.temp_max;
        day.tempLow = data.list[i].main.temp_min;
        day.weather = data.list[i].weather[0].main;
        day.weatherDesc = data.list[i].weather[0].description;

        dayArray.push(day);

        if (i = 8) {
            dataObj.push(dayArray);
        }
    }

    console.log(dataObj);
}

submitButton.addEventListener('click', async function() { 
    let data = await getSearchData(searchInput.value)
    parseData(data)
    });




fetch('https://api.openweathermap.org/data/2.5/forecast?q=chicago&units=imperial&appid=b5a14a7cc940d71738c874058413abb4')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        console.log(data.list[0])
    });