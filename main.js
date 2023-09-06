let spech = new SpeechSynthesisUtterance()

let voices = [];

let voiceSlect = document.querySelector("select")
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    spech.voice = voices[0];
    voices.forEach((voice, i) => {
        voiceSlect.options[i] = new Option(voice.name, i)
})

};

voiceSlect.addEventListener("change",()=>{
    spech.voice = voices[voiceSlect.value]

})
document.querySelector("button").addEventListener("click", () => {
    spech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(spech)
})
