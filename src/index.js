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
    let dayArray = [];

    function compileData(data, i) {
        let day = {};
        day.time = data.list[i].dt_txt;
        day.tempHigh = data.list[i].main.temp_max;
        day.tempLow = data.list[i].main.temp_min;
        day.weather = data.list[i].weather[0].main;
        day.weatherDesc = data.list[i].weather[0].description;
        dayArray.push(day);
    }

    for (let i = 2; i <= 8; i = i+2) {
        compileData(data, i);
        if (i == 8) {
            dataObj.push(dayArray);
            dayArray = [];
        }
    }
        
    for (let i = 10; i <= 16; i = i+2) {
        compileData(data, i);
        if (i == 16) {
            dataObj.push(dayArray);
            dayArray = [];
        }
    }

    for (let i = 18; i <= 24; i = i+2) {
        compileData(data, i);
        if (i == 24) {
            dataObj.push(dayArray);
            dayArray = [];
        }
    }

    for (let i = 26; i <= 32; i = i+2) {
        compileData(data, i);
        if (i == 32) {
            dataObj.push(dayArray);
            dayArray = [];
        }
    }

    return dataObj;
}

submitButton.addEventListener('click', async function() { 
    let data = await getSearchData(searchInput.value)
    dataObj = parseData(data)
    });




fetch('https://api.openweathermap.org/data/2.5/forecast?q=chicago&units=imperial&appid=b5a14a7cc940d71738c874058413abb4')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        console.log(data.list[0])
    });