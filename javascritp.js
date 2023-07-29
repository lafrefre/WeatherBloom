const  API_KEY= api.openweathermap.org/data/2.5/forecast?q={Phoenix},{02},{country code}&appid={283be553c4818892e69248f14a8d6223}
function getWeather(){
    const city = document.getElementById('cityImput').value;
    const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${283be553c4818892e69248f14a8d6223}';

    fetch(baseUrl)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(error => console.log('Error fetching weather data', error))
}  
    const city = document.getElementById('city').value;
    const baseUrl = '`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${283be553c4818892e69248f14a8d6223}';

    fetch(baseUrl)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(error => console.log('Error fetching weather data', error))


function displayWeather(data){
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = '';

    data.list.forEach(weather => {
        const date = new Date (item.dt *1000);
        const temperature = Math.round(item.main.temp - 273.15);
        const description = item.weather[0].description;

        const weatherCard = document.createElement('div');
        weatherCard.classList.add('weather-card');
        weatherCard.innerHTML = `
        <p>Date: ${date.toLocaleDateString()}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
        <p>Time: ${date.toLocaleTimeString()}</p>
        `;
       
        weatherInfo.appendChild(weatherCard);

    });
}