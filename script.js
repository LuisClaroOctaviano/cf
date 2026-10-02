const music=document.getElementById("bgMusic");
const musicButton=document.getElementById("musicButton");
const musicLabel=document.getElementById("musicLabel");
const musicNote=document.getElementById("musicNote");
const replayButton=document.getElementById("replayButton");

function setPlaying(playing){
  musicButton.classList.toggle("is-playing",playing);
  musicButton.setAttribute("aria-pressed",String(playing));
  musicLabel.textContent=playing?"Pause song":"Play song";
  musicNote.classList.toggle("show",playing);
}
async function toggleMusic(){
  if(music.paused){
    try{await music.play();setPlaying(true)}
    catch(e){musicNote.textContent="The song could not be played in this browser.";musicNote.classList.add("show")}
  }else{music.pause();setPlaying(false)}
}
musicButton.addEventListener("click",toggleMusic);
music.addEventListener("ended",()=>setPlaying(false));
replayButton.addEventListener("click",async()=>{
  music.currentTime=0;
  try{await music.play();setPlaying(true);document.getElementById("home").scrollIntoView({behavior:"smooth"})}
  catch(e){}
});
