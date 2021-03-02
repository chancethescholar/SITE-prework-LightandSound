//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = 333; //how long to pause in between clues
var nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

var pattern =[];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var gameMode;
var wrongCount = 0;

function getMode(mode) {
  //sets difficulty level
  gameMode=mode;
  //console.log(gameMode + "\n");
}

function getRandomPattern() {
  //creates game pattern
  for(let i=0; i<8; ++i) {
    pattern[i] = Math.floor(Math.random() * 4) + 1;
  } 
  return pattern;
}

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  getRandomPattern();
  if(gameMode==1)
    playClueSequenceEasy();
  else if(gameMode==2)
    playClueSequenceMedium();
  else if(gameMode==3)
    playClueSequenceHard();
}

function stopGame(){
  //initialize game variables
  gamePlaying = false;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 260.6,
  2: 320.2,
  3: 412,
  4: 488.8
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequenceEasy(){
  //easy mode: same as original
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime; 
    delay += cluePauseTime;
  }
}

function playClueSequenceMedium(){
  //medium mode: speeds up playback
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  
  clueHoldTime -= 60; 
  cluePauseTime -= 15;
  nextClueWaitTime -55;
} 

function playClueSequenceHard(){
  //hard mode: speeds up playback time and gives user limited amount of time
  guessCounter = 0;
  var oldTime;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    if(delay - 2000 > 4000) {
      stopGame();
      alert("Too slow. Game Over. You lost.");
    }
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    //oldTime = delay;
  }
  
  clueHoldTime -= 60; 
  cluePauseTime -= 15;
  nextClueWaitTime -55;
} 

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  if(btn == pattern[guessCounter]) {
    //correct guess
    if(guessCounter == progress) {
      if(progress == pattern.length - 1){
        //win game
        winGame();
      }
      
      else {
        progress += 1;
        if(gameMode==1)
          playClueSequenceEasy();
        else if(gameMode==2)
          playClueSequenceMedium();
        else if(gameMode==3)
          playClueSequenceHard();
      }
    }
    
    else {
        guessCounter += 1;
    }
  }
  
  else {
    //incorrect guess
    loseGame();
  }
}
