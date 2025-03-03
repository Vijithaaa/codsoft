let button = document.getElementById("btn");
let input = document.getElementById("txt");

// Function to fetch weather data
let getWeather = async (city) => {
    let WeatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3eae6a09dda0704a85a8b446e174e820&units=metric';
    let WeatherObj = await fetch(WeatherAPI);
    let response = await WeatherObj.json();
    return response;
};

// Function to handle weather search
async function callWeather() {
    let city = input.value.trim();
    if (city === "") return; // Prevents empty searches

    try {
        let response = await getWeather(city);

        document.getElementById("p1").innerText = "Country : " + response.sys.country;
        document.getElementById("p2").innerText = "City : " + response.name;
        document.getElementById("p3").innerText = "Temperature : " + response.main.temp + "°C";
        document.getElementById("p4").innerText = "Description : " + response.weather[0].description;
        document.getElementById("p5").innerText = "Wind Speed : " + response.wind.speed + " m/s";

        console.log("Weather data fetched successfully!");

    } catch (err) {
        console.log("Error fetching weather data: ", err);
    }
}

// Add event listener to the button
button.addEventListener('click', callWeather);
