const submitButton = document.querySelector('button');
const searchInput = document.getElementById('city');
const forecast = document.querySelector('.forecast')

async function getSearchData(city) {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=b5a14a7cc940d71738c874058413abb4`)
        .then(response => {
            return response.json();
        })

    return data;
}

function parseData(data) {
    function compileData(data, i) {
        let day = {};
        day.time = data.list[i].dt_txt;
        day.tempHigh = data.list[i].main.temp_max;
        day.tempLow = data.list[i].main.temp_min;
        day.weather = data.list[i].weather[0].main;
        day.weatherDesc = data.list[i].weather[0].description;
        dayArray.push(day);
    }

    function sortData (dayArray) {
        let tempLowArray = [];
        let tempHighArray = [];
        let weatherArray = [];

        let date = dayArray[0].time.split(' ')[0];

        //creates workable arrays
        for (let day of dayArray) {
            tempLowArray.push(day.tempLow);
            tempHighArray.push(day.tempHigh);
            weatherArray.push(day.weather);
        }

        //finds lowest temp
        let lowTemp = tempLowArray[0]
        for (let temp of tempLowArray) {
            if (temp < lowTemp) {
                lowTemp = temp;
            }

        }

        //finds highest temp
        let highTemp = tempHighArray[0]
        for (let temp of tempHighArray) {
            if (temp > highTemp) {
                highTemp = temp;
            }

        }

        //finds most common weather for the day
        let mf = 1;
        let m = 0;
        let commonWeather;
        for (let i=0; i<weatherArray.length; i++)
        {
                for (let j=i; j<weatherArray.length; j++)
                {
                        if (weatherArray[i] == weatherArray[j])
                        m++;
                        if (mf<m)
                        {
                        mf=m; 
                        commonWeather = weatherArray[i];
                        }
                }
                m=0;
        }

        return {date: date, 
            tempLow: lowTemp, 
            tempHigh: highTemp, 
            weather:commonWeather}

    }

    let dataObj = [];
    let dayArray = [];

    for (let i = 2; i <= 8; i = i+2) {
        compileData(data, i);
        if (i == 8) {
            let workableData = sortData(dayArray)
            dataObj.push(workableData);
            dayArray = [];
        }
    }
        
    for (let i = 10; i <= 16; i = i+2) {
        compileData(data, i);
        if (i == 16) {
            let workableData = sortData(dayArray)
            dataObj.push(workableData);
            dayArray = [];
        }
    }

    for (let i = 18; i <= 24; i = i+2) {
        compileData(data, i);
        if (i == 24) {
            let workableData = sortData(dayArray)
            dataObj.push(workableData);
            dayArray = [];
        }
    }

    for (let i = 26; i <= 32; i = i+2) {
        compileData(data, i);
        if (i == 32) {
            let workableData = sortData(dayArray)
            dataObj.push(workableData);
            dayArray = [];
        }
    }

    return dataObj;
}

function populateApp(data) {
    for (let i = 0; i <= 3; i++) {
        let newDay = document.createElement('div');
        newDay.className = 'day';

        let dayDate = document.createElement('div');
        dayDate.className = 'daydate';
        dayDate.innerHTML = data[i].date;

        let weatherImg = document.createElement('img');
        weatherImg.className = 'dayimg';
        //switch to choose weather img

        let tempDiv = document.createElement('div');
        tempDiv.className = 'tempdiv';

        let tempLow = document.createElement('div');
        tempLow.innerHTML = data[i].tempLow;
        let tempHigh = document.createElement('div');
        tempHigh.innerHTML = data[i].tempHigh;

        tempDiv.appendChild(tempLow);
        tempDiv.appendChild(tempHigh);
        newDay.appendChild(dayDate);
        newDay.appendChild(weatherImg);
        newDay.appendChild(tempDiv)
        forecast.appendChild(newDay);
    }
}

submitButton.addEventListener('click', async function() { 
    try {
        let data = await getSearchData(searchInput.value);
        dataObj = parseData(data);
        console.log(dataObj)
        populateApp(dataObj);
    } catch(err) {
        console.log(err)
    }
});



// fetch('https://api.openweathermap.org/data/2.5/forecast?q=chicago&units=imperial&appid=b5a14a7cc940d71738c874058413abb4')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//         console.log(data.list[0])
//     });