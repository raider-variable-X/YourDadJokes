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
    const speakBtn = document.getElementById('speakButton');

// Function to read the joke aloud
const playJokeAudio = () => {
    const textToRead = display.innerText;

    // Check if there is a joke to read and if the browser is currently speaking
    if (textToRead && !window.speechSynthesis.speaking) {
        const utterance = new SpeechSynthesisUtterance(textToRead);
        
        // Optional: Customize the voice
        utterance.pitch = 1;  // Range 0 to 2
        utterance.rate = 0.9;   // Range 0.1 to 10 (0.9 is a nice natural pace)
        
        window.speechSynthesis.speak(utterance);
    }
};

// Listen for the click on the new button
speakBtn.addEventListener('click', playJokeAudio);
});