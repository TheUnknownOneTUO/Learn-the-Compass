function show(element) {
  document.querySelector(element).classList.remove('isHidden')
}

function hide(element) {
  document.querySelector(element).classList.add('isHidden')
}

const playBtn = document.getElementById('playBtn')
playBtn.addEventListener('click', function() {
  hide('#menuScreen')
})

let gameMode = 'Learn'
let gameState = 'Not Started' 

const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
const modeInd = document.getElementById('modeInd')

let correctCounter = 0; 
let mistakeCounter = 0;

const gameModeArray = ['Learn', 'Guess by Name', 'Guess by Degree', 'Guess the Name', 'Guess the Degree']

let modeIndex = 0;

prevBtn.addEventListener('click', function() {
  prevMode()
})
nextBtn.addEventListener('click', function() {
  nextMode()
})

function prevMode() {
  modeIndex--; 
  if (modeIndex < 0) {
    modeIndex = gameModeArray.length - 1
  }; 
  updGameMode(); 
  updUi(); 
  gameState = 'Not Started'; 
  correctCounter = 0; 
  mistakeCounter = 0;
  updScores(); 
  updArrowColor(); 
  clearPhrase(); 
  randomIndex = null; 
}

function nextMode() {
  modeIndex++; 
  if (modeIndex > gameModeArray.length - 1) {
    modeIndex = 0
  }; 
  updGameMode(); 
  updUi(); 
  gameState = 'Not Started'; 
  correctCounter = 0; 
  mistakeCounter = 0; 
  updScores(); 
  updArrowColor(); 
  clearPhrase(); 
  randomIndex = null; 
}

function updGameMode() {
  gameMode = gameModeArray[modeIndex]; 
  modeInd.innerHTML = `${gameMode}`;
}

function updUi() { 
  hide('#typeSection'); 
  if (gameMode === 'Learn') {
    midBtn.querySelector('#abbrev').innerHTML = 'Tap the Arrows!'; 
    hide('#scoreDisplay'); 
    hide('#typeSection'); 
    return
  } else if (gameMode === 'Guess the Name') {
    show('#typeSection')
  };
  show('#scoreDisplay');
  midBtn.querySelector('#abbrev').innerHTML = 'Start';
  midBtn.querySelector('#name').innerHTML = '';
  midBtn.querySelector('#deg').innerHTML = '';
}

let btnPressed = null;

/*+++DIRECTIONS BITTONS+++*/
const n = document.getElementById('N')
const e = document.getElementById('E')
const s = document.getElementById('S')
const w = document.getElementById('W')

const ne = document.getElementById('NE')
const se = document.getElementById('SE')
const sw = document.getElementById('SW')
const nw = document.getElementById('NW')

const nne = document.getElementById('NNE')
const ene = document.getElementById('ENE')
const ese = document.getElementById('ESE')
const sse = document.getElementById('SSE')
const ssw = document.getElementById('SSW')
const wsw = document.getElementById('WSW')
const wnw = document.getElementById('WNW')
const nnw = document.getElementById('NNW')

const nbe = document.getElementById('NbE')
const nebn = document.getElementById('NEbN')
const nebe = document.getElementById('NEbE')
const ebn = document.getElementById('EbN')
const ebs = document.getElementById('EbS')
const sebe = document.getElementById('SEbE')
const sebs = document.getElementById('SEbS')
const sbe = document.getElementById('SbE')
const sbw = document.getElementById('SbW')
const swbs = document.getElementById('SWbS')
const swbw = document.getElementById('SWbW')
const wbs = document.getElementById('WbS')
const wbn = document.getElementById('WbN')
const nwbw = document.getElementById('NWbW')
const nwbn = document.getElementById('NWbN')
const nbw = document.getElementById('NbW')
/*---DIRECTIONS BITTONS---*/



n.addEventListener('click', function() { btnPressed = 0 }) 
nbe.addEventListener('click', function() { btnPressed = 1 }) 
nne.addEventListener('click', function() { btnPressed = 2 }) 
nebn.addEventListener('click', function() { btnPressed = 3 }) 
ne.addEventListener('click', function() { btnPressed = 4 }) 
nebe.addEventListener('click', function() { btnPressed = 5 }) 
ene.addEventListener('click', function() { btnPressed = 6 }) 
ebn.addEventListener('click', function() { btnPressed = 7 }) 
e.addEventListener('click', function() { btnPressed = 8 }) 
ebs.addEventListener('click', function() { btnPressed = 9 }) 
ese.addEventListener('click', function() { btnPressed = 10 }) 
sebe.addEventListener('click', function() { btnPressed = 11 }) 
se.addEventListener('click', function() { btnPressed = 12 }) 
sebs.addEventListener('click', function() { btnPressed = 13 }) 
sse.addEventListener('click', function() { btnPressed = 14 }) 
sbe.addEventListener('click', function() { btnPressed = 15 }) 
s.addEventListener('click', function() { btnPressed = 16 }) 
sbw.addEventListener('click', function() { btnPressed = 17 }) 
ssw.addEventListener('click', function() { btnPressed = 18 }) 
swbs.addEventListener('click', function() { btnPressed = 19 }) 
sw.addEventListener('click', function() { btnPressed = 20 }) 
swbw.addEventListener('click', function() { btnPressed = 21 }) 
wsw.addEventListener('click', function() { btnPressed = 22 }) 
wbs.addEventListener('click', function() { btnPressed = 23 }) 
w.addEventListener('click', function() { btnPressed = 24 }) 
wbn.addEventListener('click', function() { btnPressed = 25 }) 
wnw.addEventListener('click', function() { btnPressed = 26 }) 
nwbw.addEventListener('click', function() { btnPressed = 27 }) 
nw.addEventListener('click', function() { btnPressed = 28 }) 
nwbn.addEventListener('click', function() { btnPressed = 29 }) 
nnw.addEventListener('click', function() { btnPressed = 30 }) 
nbw.addEventListener('click', function() { btnPressed = 31 })

function eventListenerAdder() {
  let length = document.querySelectorAll('.arrow').length;
  for (let i = 0; i < length; i++) {
    document.querySelectorAll('.arrow')[i].addEventListener('click', function() { 
      showInfo(), 
      runGame()
    });
  }
  console.log('Events Added!')
}

eventListenerAdder();

function showInfo() { 
  if (gameMode === 'Learn') {
  
  midBtn.querySelector('#abbrev').innerHTML = `${compArray[btnPressed].abbrev}`; 
  midBtn.querySelector('#name').innerHTML = `${compArray[btnPressed].name}`; 
  midBtn.querySelector('#deg').innerHTML = `(${compArray[btnPressed].deg}°)`;
  }
}

const compArray = [
  {v: n, abbrev: 'N', name: 'NORTH', deg: 0}, 
  {v: nbe, abbrev: 'NbE', name: 'NORTH BY EAST', deg: 11.25}, 
  {v: nne, abbrev: 'NNE', name: 'NORTH NORTH EAST', deg: 22.5}, 
  {v: nebn, abbrev: 'NEbN', name: 'NORTH EAST BY NORTH', deg: 33.75}, 
  {v: ne, abbrev: 'NE', name: 'NORTH EAST', deg: 45}, 
  {v: nebe, abbrev: 'NEbE', name: 'NORTH EAST BY EAST', deg: 56.25}, 
  {v: ene, abbrev: 'ENE', name: 'EAST NORTH EAST', deg: 67.5}, 
  {v: ebn, abbrev: 'EbN', name: 'EAST BY NORTH', deg: 78.75}, 
  
  {v: e, abbrev: 'E', name: 'EAST', deg: 90}, 
  {v: ebs, abbrev: 'EbS', name: 'EAST BY SOUTH', deg: 101.25}, 
  {v: ese, abbrev: 'ESE', name: 'EAST SOUTH EAST', deg: 112.5}, 
  {v: sebe, abbrev: 'SEbE', name: 'SOUTH EAST BY EAST', deg: 123.75}, 
  {v: se, abbrev: 'SE', name: 'SOUTH EAST', deg: 135}, 
  {v: sebs, abbrev: 'SEbS', name: 'SOUTH EAST BY SOUTH', deg: 146.25}, 
  {v: sse, abbrev: 'SSE', name: 'SOUTH SOUTH EAST', deg: 157.5}, 
  {v: sbe, abbrev: 'SbE', name: 'SOUTH BY EAST', deg: 168.75}, 
  
  {v: s, abbrev: 'S', name: 'SOUTH', deg: 180}, 
  {v: sbw, abbrev: 'SbW', name: 'SOUTH BY WEST', deg: 191.25}, 
  {v: ssw, abbrev: 'SSW', name: 'SOUTH SOUTH WEST', deg: 202.5}, 
  {v: swbs, abbrev: 'SWbS', name: 'SOUTH WEST BY SOUTH', deg: 213.75}, 
  {v: sw, abbrev: 'SW', name: 'SOUTH WEST', deg: 225}, 
  {v: swbw, abbrev: 'SWbW', name: 'SOUTH WEST BY WEST', deg: 236.25}, 
  {v: wsw, abbrev: 'WSW', name: 'WEST SOUTH WEST', deg: 247.5}, 
  {v: wbs, abbrev: 'WbS', name: 'WEST BY SOUTH', deg: 258.75}, 
  
  {v: w, abbrev: 'W', name: 'WEST', deg: 270}, 
  {v: wbn, abbrev: 'WbN', name: 'WEST BY NORTH', deg: 281.25}, 
  {v: wnw, abbrev: 'WNW', name: 'WEST NORTH WEST', deg: 292.5}, 
  {v: nwbw, abbrev: 'NWbW', name: 'NORTH WEST BY WEST', deg: 303.75}, 
  {v: nw, abbrev: 'NW', name: 'NORTH WEST', deg: 315}, 
  {v: nwbn, abbrev: 'NWbN', name: 'NORTH WEST BY NORTH', deg: 326.25}, 
  {v: nnw, abbrev: 'NNW', name: 'NORTH NORTH WEST', deg: 337.5}, 
  {v: nbw, abbrev: 'NbW', name: 'NORTH BY WEST', deg: 348.75}, 
  ]
  
function updArrowColor() {
  compArray.forEach(obj => {
    if (obj.v === n || obj.v === e || obj.v === s || obj.v === w || obj.v === ne || obj.v === se || obj.v === sw || obj.v === nw) {
      obj.v.style.background = 'limegreen'
    } else {
      obj.v.style.background = 'seagreen'
    }
  })
}

const midBtn = document.getElementById('midBtn')
midBtn.addEventListener('click', function() {
  startGame();
})

const corrCount = document.getElementById('corrCount')
const mistCount = document.getElementById('mistCount')

const body = document.querySelector('body')

function startGame() {
  if (gameMode === 'Guess by Name' && gameState === 'Not Started') {
    gameState = 'Started'; 
    runGame(); 
    correctCounter = 0; 
    mistakeCounter = 0; 
    updScores(); 
    body.style.background = 'gray'; 
    
  } else if (gameMode === 'Guess by Degree' && gameState === 'Not Started') { 
    gameState = 'Started'; 
    runGame(); 
    correctCounter = 0; 
    mistakeCounter = 0; 
    updScores(); 
    body.style.background = 'gray';
    
  } else if (gameMode === 'Guess the Name' && gameState === 'Not Started') { 
    gameState = 'Started'; 
    
    compArray.forEach((obj, i) => {
      obj.v.style.background = 'whitesmoke'
    }); 
    runGame(); 
    correctCounter = 0; 
    mistakeCounter = 0; 
    updScores(); 
    body.style.background = 'gray'; 
    midBtn.querySelector('#name').innerHTML = 'What direction is highlighted?'; 
    
  }
}

let answerPhrase = null; 

const typeBox = document.getElementById('typeBox')
const nKey = document.getElementById('nKey')
const eKey = document.getElementById('eKey')
const sKey = document.getElementById('sKey')
const wKey = document.getElementById('wKey')
const byKey = document.getElementById('byKey')
const clearKey = document.getElementById('clearKey')
const enterKey = document.getElementById('enterKey')

nKey.addEventListener('click', function() {
  addWord('NORTH')
})
eKey.addEventListener('click', function() {
  addWord('EAST')
})
sKey.addEventListener('click', function() {
  addWord('SOUTH')
})
wKey.addEventListener('click', function() {
  addWord('WEST')
})
byKey.addEventListener('click', function() {
  addWord('BY')
})
clearKey.addEventListener('click', function() {
  clearPhrase()
})
enterKey.addEventListener('click', function() {
  runGame()
})

function addWord(word) { 
  if (gameState === 'Not Started') {
    return
  }; 
  if (answerPhrase === null) {
    answerPhrase = word
  } else {
    answerPhrase += ` ${word}`
  }; 
  typeBox.innerHTML = answerPhrase
}

function clearPhrase() {
  answerPhrase = null; 
  typeBox.innerHTML = ''
}

let randomIndex = null; 
function runGame() {
  if (gameMode === 'Guess by Name' && gameState === 'Started') { 
    if (btnPressed === randomIndex) { 
      body.style.background = 'lime';
      correctCounter++
    } else if (btnPressed !== randomIndex) { 
      body.style.background = 'red';
      mistakeCounter++
    }; 
    updScores(); 
    
    setTimeout(function() { 
    body.style.background = 'gray';
    randomIndex = Math.floor(Math.random() * 32); 
    midBtn.querySelector('#abbrev').innerHTML = `${compArray[randomIndex].abbrev}`; 
    midBtn.querySelector('#name').innerHTML = `${compArray[randomIndex].name}`; 
    }, 500)
    
  } else if (gameMode === 'Guess by Degree' && gameState === 'Started') {
    if (btnPressed === randomIndex) { 
      body.style.background = 'lime';
      correctCounter++
    } else if (btnPressed !== randomIndex) { 
      body.style.background = 'red';
      mistakeCounter++
    }; 
    updScores(); 
    
    setTimeout(function() { 
    body.style.background = 'gray';
    randomIndex = Math.floor(Math.random() * 32); 
    midBtn.querySelector('#abbrev').innerHTML = `${compArray[randomIndex].deg}`
    }, 500)
    
  } else if (gameMode === 'Guess the Name' && gameState === 'Started') { 
    
    if (randomIndex !== null) {
      let corrAnswer = compArray[randomIndex].name; 
    
      if (corrAnswer === answerPhrase) { 
        body.style.background = 'lime';
        correctCounter++
      } else if (corrAnswer !== answerPhrase) { 
       body.style.background = 'red';
       mistakeCounter++
     }; 
    };
    
    updScores(); 
    clearPhrase(); 
    compArray.forEach((obj, i) => {
      obj.v.style.background = 'whitesmoke'
    }); 
    
    setTimeout(function() { 
      if (randomIndex !== null) {
        midBtn.querySelector('#abbrev').innerHTML = `${compArray[randomIndex].name}`; 
        midBtn.querySelector('#name').innerHTML = 'Last Answer'; 
      }; 
      body.style.background = 'gray'; 
      randomIndex = Math.floor(Math.random() * 32); 
      compArray[randomIndex].v.style.background = 'limegreen'
    }, 500)
    
  }
}

function updScores() {
  corrCount.innerHTML = `${correctCounter}`; 
  mistCount.innerHTML = `${mistakeCounter}`
}