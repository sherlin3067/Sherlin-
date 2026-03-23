function setMood(mood) {
    let message = "";

    if (mood === "happy") {
        message = "Yay! Keep smiling 💖";
        document.body.style.backgroundColor = "#fff0f5";
    }
    else if (mood === "sad") {
        message = "It's okay, take rest 🌧️";
        document.body.style.backgroundColor = "#d6e6ff";
    }
    else if (mood === "lazy") {
        message = "I'm in bed 😴";
        document.body.style.backgroundColor = "#f2f2f2";
    }
    else if (mood === "tired") {
        message = "Rest is important 😴";
        document.body.style.backgroundColor = "#f2f2f2";
    }
    else if (mood === "excited") {
        message = "hurrayyyyyy!!!!!! ";
        document.body.style.backgroundColor = "#f2f2f2";
    }

    document.getElementById("result").innerText = message;
}