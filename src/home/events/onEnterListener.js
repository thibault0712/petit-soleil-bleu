const inputTown = document.getElementById('input-town');

inputTown?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        updatePage()
    }
});