const weatherapi = {
    key: "eee8ed69f434ad81b27a47ef58ceb194 ",
    baseurl: "https://api.openweathermap.org/data/2.5/weather"
}
const inputbox = document.getElementById("input-box");
inputbox.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        console.log(inputbox.value);
        getweather(inputbox.value);
        document.querySelector("root").style.display = 'block';
    }
});

function getweather(city) {
    fetch(`${weatherapi.baseurl}?q=${city}&appid=${weatherapi.key}`)
        .then(weather => {
            return weather.json();

        }).then(showweather);
}

function showweather(weather) {
    console.log(weather);
    let city = document.getElementById('city');
    city.innerText = `${weather.name},${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minmax = document.getElementById('min-max');
    minmax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C(min)/${Math.ceil(weather.main.temp_max)}&deg;C(max)`;

    let weathertype = document.getElementById('weather');
    weathertype.innerHTML = `${weather.weather[0].main}`;

    if (weathertype.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('images/Clear.jpg')";
    } else if (weathertype.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('images/clouds.jpg')";
    } else if (weathertype.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('images/haze.jpg')";
    } else if (weathertype.textContent == 'freezy') {
        document.body.style.backgroundImage = "url('images/freezy.jpg')";
    } else if (weathertype.textContent == 'icy') {
        document.body.style.backgroundImage = "url('images/icy.jpg')";
    } else if (weathertype.textContent == 'thunderstorm') {
        document.body.style.backgroundImage = "url('images/lightning.jpg')";
    } else if (weathertype.textContent == 'sunny') {
        document.body.style.backgroundImage = "url('images/sunny.jpg')";
    } else if (weathertype.textContent == 'windy') {
        document.body.style.backgroundImage = "url('images/windy.jpg')";
    } else if (weathertype.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('images/Rainfall.jpg')";
    } else if (weathertype.textContent == 'rainbow') {
        document.body.style.backgroundImage = "url('images/rainbow.jpg')";
    } else if (weathertype.textContent == 'Smoke') {
        document.body.style.backgroundImage = "url('images/smoke.jpg')";
    }
}