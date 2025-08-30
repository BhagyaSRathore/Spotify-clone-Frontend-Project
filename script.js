console.log("Welcome to Spotify");

// Initialize the Variables
let SongIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Let me Love You", filePath: "songs/1.mp3", coverPath: "covers/10.jpg"},
    {songName: "On & On", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Alan Walker", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Cartoon - On & On", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Warriyo - Mortals", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Ertugrul Gazi", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Electronic Music", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Agar Tum Saath Ho", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Sakhiyaan", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Bhula Dena", filePath: "songs/10.mp3", coverPath: "covers/1.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
 })  


// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays(); 
        SongIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${SongIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(SongIndex>=9){
        SongIndex = 0   
    }
    else{
        SongIndex += 1;
    }
    audioElement.src = `songs/${SongIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(SongIndex<=0){
        SongIndex = 0
    }
    else{
        SongIndex -= 1;
    }
    audioElement.src = `songs/${SongIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})




