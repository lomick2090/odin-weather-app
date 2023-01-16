const submitButton = document.querySelector('button');
const searchInput = document.getElementById('city');

async function getSearchData(city) {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b5a14a7cc940d71738c874058413abb4`)
        .then(response => {
            return response.json();
        })

    console.log(data);
}

submitButton.addEventListener('click', () => getSearchData(searchInput.value));




fetch('https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=b5a14a7cc940d71738c874058413abb4')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
    });