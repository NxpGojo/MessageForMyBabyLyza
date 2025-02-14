document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById("backgroundMusic");
    const musicButton = document.getElementById("musicButton");

    musicButton.addEventListener("click", function() {
        if (music.paused) {
            music.play();
            musicButton.textContent = "Pause";
        } else {
            music.pause();
            musicButton.textContent = "▶️Play This";
        }
    });
});