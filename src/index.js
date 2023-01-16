fetch('https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=b5a14a7cc940d71738c874058413abb4')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
    });