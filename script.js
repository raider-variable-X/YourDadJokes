const jokeBtn = document.getElementById('jokeButton');
const display = document.getElementById('api-display');

jokeBtn.addEventListener('click', () => {
    // Optional: Add Bulma loading state if using Bulma
    jokeBtn.classList.add('is-loading');
    display.innerText = "Loading tape...";

    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json',
            // Replace with your own project name/contact info as per API rules
            'User-Agent': 'MyCassetteApp (https://github.com/yourusername/repo)'
        }
    })
    .then(response => response.json())
    .then(data => {
        // The API returns an object with a "joke" property
        display.innerText = data.joke;
        jokeBtn.classList.remove('is-loading');
    })
    .catch(error => {
        display.innerText = "Error: Tape is tangled!";
        jokeBtn.classList.remove('is-loading');
        console.error('Fetch error:', error);
    });
});