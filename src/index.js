const searchInput = document.getElementById('city');
const forecast = document.querySelector('.forecast');
const units = document.getElementsByName('unit');
let dataObj = [];

async function getFiveDayData(city) {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=b5a14a7cc940d71738c874058413abb4`)
        .then(response => {
            return response.json();
        })

    return data;
}

async function getCurrentDayData(city) {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=b5a14a7cc940d71738c874058413abb4`)
        .then(response => {
            return response.json();
        
        })
    
    return data;
}

function changeUnit() {
    if (units[0].checked) {
        for (let day of dataObj) {
            day.tempLow = (day.tempLow * (9/5)) + 32
            day.tempHigh = (day.tempHigh * (9/5)) + 32
        }
    } else if (units[1].checked) {
        for (let day of dataObj) {
            day.tempLow = (day.tempLow - 32) * (5/9)
            day.tempHigh = (day.tempHigh -32) * (5/9)
        }
    }

    populateApp(dataObj);
}

function parseCurrentDayData(data) {

    let date = 'Today';
    let tempLow = data.main.temp_min;
    let tempHigh = data.main.temp_max;
    let weather = data.weather[0].icon;

    return {
        date,
        tempLow,
        tempHigh,
        weather
    }

}

function parseFiveDayData(data) {
    function compileData(data, i) {
        let day = {};
        day.time = data.list[i].dt_txt;
        day.tempHigh = data.list[i].main.temp_max;
        day.tempLow = data.list[i].main.temp_min;
        day.weather = data.list[i].weather[0].icon;
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
        let commonWeather = weatherArray[2];
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

        return {
            date: date, 
            tempLow: lowTemp, 
            tempHigh: highTemp, 
            weather:commonWeather
        }

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
    while (forecast.firstChild) {
        forecast.firstChild.remove();
    }
    for (let i = 0; i < data.length; i++) {
        let newDay = document.createElement('div');
        newDay.className = 'day';

        let dayDate = document.createElement('div');
        dayDate.className = 'daydate';
        dayDate.innerHTML = data[i].date;

        let weatherImg = document.createElement('img');
        weatherImg.className = 'dayimg';
        weatherImg.src = `https://openweathermap.org/img/wn/${data[i].weather}@2x.png`;

        let tempDiv = document.createElement('div');
        tempDiv.className = 'tempdiv';

        let tempLow = document.createElement('div');
        tempLow.innerHTML = `${Math.round(data[i].tempLow)}°`;
        let tempHigh = document.createElement('div');
        tempHigh.innerHTML = `${Math.round(data[i].tempHigh)}°`;

        tempDiv.appendChild(tempLow);
        tempDiv.appendChild(tempHigh);
        newDay.appendChild(dayDate);
        newDay.appendChild(weatherImg);
        newDay.appendChild(tempDiv)
        forecast.appendChild(newDay);
    }
}

document.addEventListener('submit', async function(e) { 
    e.preventDefault();

    try {
        let data = await Promise.all([getFiveDayData(searchInput.value), getCurrentDayData(searchInput.value)])

        dataObj = parseFiveDayData(data[0]);
        let currentDayDataObj = parseCurrentDayData(data[1]);
        dataObj.unshift(currentDayDataObj);

        if (units[1].checked) {
            changeUnit(dataObj)
        } else {
            populateApp(dataObj);
        }

        document.querySelector('.errormessage').innerHTML = '';
    } catch(err) {
        document.querySelector('.errormessage').innerHTML = `Location not found.
        Search must be in the form of "City", "City, State" or "City, Country"`
    }
});

units.forEach(unit => {
    unit.addEventListener('change', changeUnit)
}); 