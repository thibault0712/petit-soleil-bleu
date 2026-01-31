

async function fetchData(town, dataToGet) {
    let url = null;

    switch (dataToGet) {
        case "now":
            url = "https://api.openweathermap.org/data/2.5/weather?appid=" + CONFIG.API_KEY_OPEN_WEATHER_MAP + "&units=metric&q=" + town + ",fr";
            break;
        case "next5Days":
            url = "https://api.openweathermap.org/data/2.5/forecast?appid=" + CONFIG.API_KEY_OPEN_WEATHER_MAP + "&units=metric&q=" + town + ",fr";
            break;
        default:
            throw new Error("Unknown data " + dataToGet);
    }

    let result = null;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        result = await response.json();
    } catch (error) {
        console.error(error.message);
    }

    return result;
}

async function getDataNextDays(town) {
    const data = await fetchData(town, "next5Days");
    const date = new Date();
    date.setHours(12, 0, 0, 0,)
    let globalWeatherList = [];

    if (data != null) {
        const weatherList = data.list;

        for (let i = 1; i < 5; i++) {
            date.setDate(date.getDate() + 1);
            console.log(weatherList[i]);

            const formatedDate = date.toISOString().split('T')[0] + " " + date.toTimeString().split(' ')[0].replace(/:/g, ':');
            const weather = weatherList.find(potentialWeather => potentialWeather.dt_txt === formatedDate);
            const temp = weather.main.temp;
            const imageSrc =  "https://openweathermap.org/img/wn/" + weather.weather[0].icon + "@4x.png"
            const wind = weather.wind.speed;
            const humidity = weather.main.humidity;

            globalWeatherList.push({
                date: date.getDay(),
                temp: temp + "°",
                imageSrc: imageSrc,
                wind: wind + " km/h",
                humidity: humidity + " %"
            })

        }
    } else {

        for (let i = 1; i < 5; i++) {
            date.setDate(date.getDate() + 1);

            globalWeatherList.push({
                date: date.getDay(),
                temp: "?°",
                imageSrc: "../../assets/icons/cloud-not-found.png",
                wind: "? km/h",
                humidity: "? %"
            })

        }

    }

    return globalWeatherList;

}

async function getDataToday(town) {
    const data = await fetchData(town, "now");
    const day = new Date().getDay();
    let tempData = "?"
    let humidity = "?"
    let wind = "?"
    let img = "../../assets/icons/cloud-not-found.png";

    if (data != null) {
        tempData = data.main.temp;
        humidity = data.main.humidity;
        wind = data.wind.speed;
        img = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@4x.png"
    }

    return({
        date: day,
        temp: tempData + "°",
        imageSrc: img,
        wind: wind + " km/h",
        humidity: humidity + " %"
    })

}

