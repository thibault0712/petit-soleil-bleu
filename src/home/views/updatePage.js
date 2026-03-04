const DAY_LIST = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
const MINIMIZE_DAY_LIST = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
let globalWeatherList = []

async function updatePage() {
    const town = $('#input-town').val();
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


        $("#content-day-" + elementID).html(MINIMIZE_DAY_LIST[weatherData.date]);
        $("#content-temp-" + elementID).html(weatherData.temp);
        $('#weather-icon-' + elementID).attr("src", weatherData.imageSrc);

    }
}

function changeWeatherCardHeader(weatherListID) {
    $('#header-day').html(DAY_LIST[globalWeatherList[weatherListID].date]);
    $('#header-wind').html("Vent : " + globalWeatherList[weatherListID].wind);
    $('#header-humidity').html("Humidité : " + globalWeatherList[weatherListID].humidity);
    $('#header-temperature').html(globalWeatherList[weatherListID].temp);
    $('#weather-icon').attr("src", globalWeatherList[weatherListID].imageSrc);
}