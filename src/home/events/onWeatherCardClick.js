$('.weather-card').on('click', function() {
    const id = $(this).data('id');
    changeWeatherCardHeader(id);
});