const inputTown = document.getElementById('input-town');

$('#input-town').on('keypress', (event) => {
    if (event.key === 'Enter') {
        updatePage()
    }
});