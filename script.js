let recognition;

try {
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
} catch (e) {
    console.error("Speech Recognition not supported");
    alert("Your browser does not support Speech Recognition");
}

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resultText = document.getElementById("result");

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en-US"; // change to hi-IN / ta-IN / te-IN etc.

startBtn.onclick = () => {
    recognition.start();
};

stopBtn.onclick = () => {
    recognition.stop();
};

recognition.onresult = (event) => {
    let text = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
    }
    resultText.value = text;
};
