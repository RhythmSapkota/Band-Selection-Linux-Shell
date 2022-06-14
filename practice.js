const btnA = document.getElementById ("btnA");
const btnB = document.getElementById ("btnB");
const btnC = document.getElementById ("btnC");
// const btnD = document.getElementById ("btnD");
// const btnE = document.getElementById ("btnE");
const btnF = document.getElementById ("btnF");
const btnG = document.getElementById ("btnG");
const autoPlayCheckbox = document.getElementById("auto-play-checkbox");
const seekBar = document.getElementById("seek-bar");
const volumeHI = document.getElementById("volumeHI");
const volumeLO = document.getElementById("volumeLO");



let audio = new Audio("./Music/River Flows in You.mp3");
let currentTimeDisplay = document.getElementById("current-time");
audio.ontimeupdate = function() {
        seekBar.value = audio.currentTime / audio.duration * 100;
        let minutes = Math.floor(audio.currentTime / 60);
        let seconds = Math.floor(audio.currentTime % 60);
        currentTimeDisplay.innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

seekBar.addEventListener("change", () => {
        audio.currentTime = seekBar.value;
        });
        audio.addEventListener("timeupdate", function() {
                seekBar.max = audio.duration;
                seekBar.value = audio.currentTime;
                })

 audio.addEventListener("ended", function() {
 if (autoPlayCheckbox.checked) {
 currentSongIndex = (currentSongIndex + 1) % songList.length;
 stshow = "Song Name: " + songList[currentSongIndex];
 document.getElementById("Song1").innerHTML = stshow;
 audio.src = "./Music/" + songList[currentSongIndex] + ".mp3";
 audio.play();
        }
                        });
let stshow = "Song Name : River Flows in You";

const ss = "Song Name : River Flows in You"
var songList = ["River Flows in You", "Kho Jane Do", "Mask Off", "heathens", "Chanel", "Starboy", "Under The Influence","Wavin Flag"];
let currentSongIndex = 0;
stshow = "Song Name: " + songList[currentSongIndex];
document.getElementById("Song1").innerHTML= stshow;

btnA.addEventListener ("click", (e)=> {

    audio.play();

})

btnC.addEventListener ("click", (e) => {

        audio.pause();
       
})

btnB.addEventListener ("click", (e) => {

        audio.pause();
        audio.currentTime = 0;
        return audio;
})

// btnD.addEventListener ("click", (e) => {
//         audio.volume += .1;

// })

// btnE.addEventListener ("click", (e) => {
//         audio.volume -= .1;

         
// })

btnF.addEventListener ("click", (e) => {
    
  
  currentSongIndex = (currentSongIndex + 1) % songList.length;
  stshow = "Song Name: " + songList[currentSongIndex];
  document.getElementById("Song1").innerHTML = stshow;
  audio.src ="./Music/"+ songList[currentSongIndex] + ".mp3";
  audio.play();
});

btnG.addEventListener ("click", (e) => {
        if (currentSongIndex > 0){
currentSongIndex = (currentSongIndex - 1) % songList.length;
  stshow = "Song Name: " + songList[currentSongIndex];
  document.getElementById("Song1").innerHTML = stshow;
  audio.src = "./Music/"+songList[currentSongIndex] + ".mp3";
  audio.play();
        }
})

volumeHI.addEventListener("change",()=>{

        audio.volume = volumeHI.value/100;
        console.log(audio.volume)

})


