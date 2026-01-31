const DAY_LIST = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
const MINIMIZE_DAY_LIST = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
let globalWeatherList = []

async function updatePage() {
    const town = document.getElementById('input-town').value;
    globalWeatherList = [];
    globalWeatherList.push(await getDataToday(town));
    globalWeatherList.push(...await getDataNextDays(town));

    updateWeatherCardList();
    changeWeatherCardHeader(0); // 0 is today

}

function updateWeatherCardList() {
    for (let i = 0; i < 5; i++) {
        const weatherData = globalWeatherList[i];
        const elementID = i + 1;

        document.getElementById("content-day-" + elementID).innerHTML = MINIMIZE_DAY_LIST[weatherData.date];
        document.getElementById("content-temp-" + elementID).innerHTML = weatherData.temp;
        document.getElementById('weather-icon-' + elementID).src = weatherData.imageSrc;

    }
}

function changeWeatherCardHeader(weatherListID) {
    document.getElementById('header-day').innerText = DAY_LIST[globalWeatherList[weatherListID].date];
    document.getElementById('header-wind').innerText = "Vent : " + globalWeatherList[weatherListID].wind;
    document.getElementById('header-humidity').innerText = "Humidité : " + globalWeatherList[weatherListID].humidity;
    document.getElementById('header-temperature').innerText = globalWeatherList[weatherListID].temp;
    document.getElementById('weather-icon').src = globalWeatherList[weatherListID].imageSrc;
}