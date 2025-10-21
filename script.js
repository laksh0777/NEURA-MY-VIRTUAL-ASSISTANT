let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-US" 
    window.speechSynthesis.speak(text_speak)
}


function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")    
    }
    else if(hours>=12 && hours <16){
        speak("Good Afternnoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition= window.speechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex 
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir, what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant, created by Laksh Sir a student of SRM University")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/","_blank")    
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://www.instagram.com/","_blank") 
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com/","_blank")    
    }
    
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp...")
        window.open("whatsapp://")        
    }
    else if(message.includes("open spotify")){
        speak("opening spotify...")
        window.open("spotify://")        
    }
    else if(message.includes("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")        
    }
    else if(message.includes("open rockstar games launcher")){
        speak("opening rockstar games launcher...")
        window.open("rockstar games launcher://")
    }
    else if (message.includes("play") && message.includes("on spotify")) {
        let songName = message.replace("play", "").replace("on spotify", "").trim();
        if (songName) {
            speak(`Playing ${songName} on Spotify`);
            window.open(`https://open.spotify.com/search/${encodeURIComponent(songName)}`, "_blank");
        } else {
            speak("Please specify a song name.");
        }
    }        
    else if(message.includes("time")){
       let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
       speak(time)        
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)        
    }
    else {
        let searchQuery = message.replace("neura", "").replace("nura", "").replace("nira","").trim();
        let finalText = "This is what I found on the internet regarding " + searchQuery;
        speak(finalText);
        window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, "_blank");
    }
} 
