const startButton = document.getElementById("login-button");
const startAudio = new Audio("windows_sound.mp3");
startAudio.volume = 0.05;

document.getElementById("login-button").addEventListener("click", function() {
    // Simulate the login process (fade-out effect)
    startAudio.play();
    let loginScreen = document.getElementById("login-screen");
    loginScreen.style.transition = "opacity 1s";
    loginScreen.style.opacity = 0;

    setTimeout(function() {
        loginScreen.style.display = "none"; // Hide login screen
        document.getElementById("desktop-screen").style.display = "block"; // Show desktop screen
    }, 5000); // Wait for the fade-out to complete
});

