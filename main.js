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

const additionalInfoDiv = document.getElementById('additionalInfoDiv')
const additionalInfo = document.getElementById('additionalInfo')

let correctCounter = 0; 
let mistakeCounter = 0;

const gameModeArray = ['Learn', 'Identify by Name', 'Identify by Degree', 'Identify the Name', 'Identify the Degree', 'Identify the Relative Bearing']

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
  generatedOptions = []; 
  resetOptionsDiv();
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
  generatesOptions = [];
  resetOptionsDiv();
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
    hide('#degreeScrollPanel'); 
    hide('#optionsDiv');
    show('#additionalInfoDiv');
    return
  } else if (gameMode === 'Identify by Name') {
    hide('#additionalInfoDiv'); 
    hide('#optionsDiv');
  } else if (gameMode === 'Identify the Name') {
    show('#typeSection'); 
    hide('#degreeScrollPanel'); 
    hide('#additionalInfoDiv'); 
    hide('#optionsDiv');
  } else if (gameMode === 'Identify the Degree') {
    show('#degreeScrollPanel'); 
    hide('#typeSection'); 
    hide('#additionalInfoDiv'); 
    hide('#optionsDiv');
  } else if (gameMode === 'Identify the Relative Bearing') {
    show('#optionsDiv');
    hide('#typeSection'); 
    hide('#degreeScrollPanel'); 
    hide('#additionalInfoDiv');
  };
  show('#scoreDisplay');
  midBtn.querySelector('#abbrev').innerHTML = 'Start';
  midBtn.querySelector('#name').innerHTML = '';
  midBtn.querySelector('#deg').innerHTML = '';
}

let btnPressed = null;

/*+++DIRECTIONS BUTTONS+++*/
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
/*---DIRECTIONS BUTTONS---*/



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
      runGame(true)
    });
  }
}

eventListenerAdder();

function showInfo() { 
  if (gameMode === 'Learn') {
  
  midBtn.querySelector('#abbrev').innerHTML = `${compArray[btnPressed].abbrev}`; 
  midBtn.querySelector('#name').innerHTML = `${compArray[btnPressed].name}`; 
  midBtn.querySelector('#deg').innerHTML = `(${compArray[btnPressed].deg}°)`; 
  additionalInfo.innerHTML = `${compArray[btnPressed].relB}`
  }
}

const compArray = [
  {v: n, abbrev: 'N', name: 'NORTH', deg: 0, relB: 'Dead Ahead'}, 
  {v: nbe, abbrev: 'NbE', name: 'NORTH BY EAST', deg: 11.25, relB: '1 Point on the Starboard Bow'}, 
  {v: nne, abbrev: 'NNE', name: 'NORTH NORTH EAST', deg: 22.5, relB: '2 Points on the Starboard Bow'}, 
  {v: nebn, abbrev: 'NEbN', name: 'NORTH EAST BY NORTH', deg: 33.75, relB: '3 Points on the Starboard Bow'}, 
  {v: ne, abbrev: 'NE', name: 'NORTH EAST', deg: 45, relB: 'Broad on the Starboard Bow'}, 
  {v: nebe, abbrev: 'NEbE', name: 'NORTH EAST BY EAST', deg: 56.25, relB: '3 Points Forward of the Starboard Beam'}, 
  {v: ene, abbrev: 'ENE', name: 'EAST NORTH EAST', deg: 67.5, relB: '2 Points Forward of the Starboard Beam'}, 
  {v: ebn, abbrev: 'EbN', name: 'EAST BY NORTH', deg: 78.75, relB: '1 Point Forward of the Starboard Beam'}, 
  
  {v: e, abbrev: 'E', name: 'EAST', deg: 90, relB: 'On the Starboard Beam'}, 
  {v: ebs, abbrev: 'EbS', name: 'EAST BY SOUTH', deg: 101.25, relB: '1 Point Abaft the Starboard Beam'}, 
  {v: ese, abbrev: 'ESE', name: 'EAST SOUTH EAST', deg: 112.5, relB: '2 Points Abaft the Starboard Beam'}, 
  {v: sebe, abbrev: 'SEbE', name: 'SOUTH EAST BY EAST', deg: 123.75, relB: '3 Points Abaft the Starboard Beam'}, 
  {v: se, abbrev: 'SE', name: 'SOUTH EAST', deg: 135, relB: 'Broad on the Starboard Quarter'}, 
  {v: sebs, abbrev: 'SEbS', name: 'SOUTH EAST BY SOUTH', deg: 146.25, relB: '3 Points on the Starboard Quarter'}, 
  {v: sse, abbrev: 'SSE', name: 'SOUTH SOUTH EAST', deg: 157.5, relB: '2 Points on the Starboard Quarter'}, 
  {v: sbe, abbrev: 'SbE', name: 'SOUTH BY EAST', deg: 168.75, relB: '1 Point on the Starboard Quarter'}, 
  
  {v: s, abbrev: 'S', name: 'SOUTH', deg: 180, relB: 'Dead Astern'}, 
  {v: sbw, abbrev: 'SbW', name: 'SOUTH BY WEST', deg: 191.25, relB: '1 Point on the Port Quarter'}, 
  {v: ssw, abbrev: 'SSW', name: 'SOUTH SOUTH WEST', deg: 202.5, relB: '2 Points on the Port Quarter'}, 
  {v: swbs, abbrev: 'SWbS', name: 'SOUTH WEST BY SOUTH', deg: 213.75, relB: '3 Points on the Port Quarter'}, 
  {v: sw, abbrev: 'SW', name: 'SOUTH WEST', deg: 225, relB: 'Broad on the Port Quarter'}, 
  {v: swbw, abbrev: 'SWbW', name: 'SOUTH WEST BY WEST', deg: 236.25, relB: '3 Points Abaft the Port Beam'}, 
  {v: wsw, abbrev: 'WSW', name: 'WEST SOUTH WEST', deg: 247.5, relB: '2 Points Abaft the Port Beam'}, 
  {v: wbs, abbrev: 'WbS', name: 'WEST BY SOUTH', deg: 258.75, relB: '1 Point Abaft the Port Beam'}, 
  
  {v: w, abbrev: 'W', name: 'WEST', deg: 270, relB: 'On the Port Beam'}, 
  {v: wbn, abbrev: 'WbN', name: 'WEST BY NORTH', deg: 281.25, relB: '1 Point Forward of the Port Beam'}, 
  {v: wnw, abbrev: 'WNW', name: 'WEST NORTH WEST', deg: 292.5, relB: '2 Points Forward of the Port Beam'}, 
  {v: nwbw, abbrev: 'NWbW', name: 'NORTH WEST BY WEST', deg: 303.75, relB: '3 Points Forward of the Port Beam'}, 
  {v: nw, abbrev: 'NW', name: 'NORTH WEST', deg: 315, relB: 'Broad on the Port Bow'}, 
  {v: nwbn, abbrev: 'NWbN', name: 'NORTH WEST BY NORTH', deg: 326.25, relB: '3 Points on the Port Bow'}, 
  {v: nnw, abbrev: 'NNW', name: 'NORTH NORTH WEST', deg: 337.5, relB: '2 Points on the Port Bow'}, 
  {v: nbw, abbrev: 'NbW', name: 'NORTH BY WEST', deg: 348.75, relB: '1 Point on the Port Bow'}, 
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
  show('#timeUiDiv');
})

const timeUiDiv = document.getElementById('timeUiDiv')

const noTimeBtn = document.getElementById('noTimeBtn')
const sec30Btn = document.getElementById('sec30Btn')
const min1Btn = document.getElementById('min1Btn')
const min2Btn = document.getElementById('min2Btn')
const min3Btn = document.getElementById('min3Btn')

noTimeBtn.addEventListener('click', function() { 
  hide('#timeUiDiv'); 
  startGame(); 
})
sec30Btn.addEventListener('click', function() {
  hide('#timeUiDiv');
  startGame();
  runTimer(30);
})
min1Btn.addEventListener('click', function() {
  timeDuration = 0; 
  hide('#timeUiDiv'); 
  startGame();
  runTimer(60);
})
min2Btn.addEventListener('click', function() {
  timeDuration = 0;
  hide('#timeUiDiv');
  startGame();
  runTimer(120);
})
min3Btn.addEventListener('click', function() {
  timeDuration = 0;
  hide('#timeUiDiv');
  startGame();
  runTimer(180);
})

const gameOverUiDiv = document.getElementById('gameOverUiDiv') 
const gameOverTime = document.getElementById('gameOverTime')
const gameOverCorr = document.getElementById('gameOverCorr')
const gameOverMist = document.getElementById('gameOverMist')
const returnBtn = document.getElementById('returnBtn')

returnBtn.addEventListener('click', function() {
  hide('#gameOverUiDiv')
})

function runTimer(seconds) {
  let time = seconds; 
  tickTime();
  function tickTime() {
    if (time > 0) {
    setTimeout(function() {
      time--;
      modeInd.innerHTML = `Time: ${time}`; 
      tickTime();
    }, 1000);
    
   } else if (time === 0) { 
     gameOverTime.innerHTML = `Time: ${seconds}`; 
     gameOverCorr.innerHTML = `Correct: ${correctCounter}`; 
     gameOverMist.innerHTML = `Mistakes: ${mistakeCounter}`;
     show('#gameOverUiDiv');
     
     setTimeout(function() {
       show('#returnBtn')
     }, 1500)
     
     updGameMode(); 
     updUi(); 
     gameState = 'Not Started'; 
     correctCounter = 0; 
     mistakeCounter = 0;
     updScores(); 
     updArrowColor(); 
     clearPhrase(); 
     randomIndex = null; 
     generatedOptions = []; 
     resetOptionsDiv();
   }
  }
}



const corrCount = document.getElementById('corrCount')
const mistCount = document.getElementById('mistCount')

const body = document.querySelector('body')

function startGame() {
  if (gameMode === 'Identify by Name' && gameState === 'Not Started') {
    gameState = 'Started'; 
    runGame(true); 
    correctCounter = 0; 
    mistakeCounter = 0; 
    updScores(); 
    body.style.background = 'gray'; 
    
  } else if (gameMode === 'Identify by Degree' && gameState === 'Not Started') { 
    gameState = 'Started'; 
    runGame(true); 
    correctCounter = 0; 
    mistakeCounter = 0; 
    updScores(); 
    body.style.background = 'gray';
    
  } else if (gameMode === 'Identify the Name' && gameState === 'Not Started') { 
    gameState = 'Started'; 
    
    compArray.forEach((obj, i) => {
      obj.v.style.background = 'whitesmoke'
    }); 
    runGame(); 
    correctCounter = 0; 
    mistakeCounter = 0; 
    updScores(); 
    body.style.background = 'gray'; 
    midBtn.querySelector('#abbrev').innerHTML = ''; 
    midBtn.querySelector('#name').innerHTML = 'What direction is highlighted?'; 
    
  } else if (gameMode === 'Identify the Degree' && gameState === 'Not Started') {
    gameState = 'Started'; 
    
    updInfo();
    compArray.forEach((obj, i) => {
      obj.v.style.background = 'whitesmoke'
    }); 
    runGame(); 
    correctCounter = 0; 
    mistakeCounter = 0; 
    updScores(); 
    body.style.background = 'gray'; 
    midBtn.querySelector('#abbrev').innerHTML = ''; 
    midBtn.querySelector('#name').innerHTML = 'What degree is highlighted?'; 
    
  } else if (gameMode === 'Identify the Relative Bearing' && gameState === 'Not Started') {
    gameState = 'Started';
    
    compArray.forEach((obj, i) => {
      obj.v.style.background = 'whitesmoke'
    });
    runGame();
    correctCounter = 0;
    mistakeCounter = 0;
    updScores();
    body.style.background = 'gray';
    midBtn.querySelector('#abbrev').innerHTML = '';
    midBtn.querySelector('#name').innerHTML = 'Choose the right Relative Bearing from the options below.';
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

const degreeScrollPanel = document.getElementById('degreeScrollPanel')
const firstDigit = document.getElementById('firstDigit')
const secondDigit = document.getElementById('secondDigit')
const thirdDigit = document.getElementById('thirdDigit')
const firstDeci = document.getElementById('firstDeci')
const secondDeci = document.getElementById('secondDeci')
const degScrollReset = document.getElementById('degScrollReset')
const degScrollEnter = document.getElementById('degScrollEnter')

degScrollEnter.addEventListener('click', function() {
  acquireDegree()
})

const digitArray = [
  firstDigit, secondDigit, thirdDigit, firstDeci, secondDeci
  ]

  let firstDigitInfo = null
  let secondDigitInfo = null
  let thirdDigitInfo = null
  let firstDeciInfo = null
  let secondDeciInfo = null

  let firstDigitNums = null
  let secondDigitNums = null
  let thirdDigitNums = null
  let firstDeciNums = null
  let secondDeciNums = null 

  let itdArray = []
  /*itd: Identify the Degree*/

function updInfo() {
  firstDigitInfo = firstDigit.getBoundingClientRect();
  secondDigitInfo = secondDigit.getBoundingClientRect();
  thirdDigitInfo = thirdDigit.getBoundingClientRect();
  firstDeciInfo = firstDeci.getBoundingClientRect();
  secondDeciInfo = secondDeci.getBoundingClientRect();

  firstDigitNums = firstDigit.querySelectorAll('div');
  secondDigitNums = secondDigit.querySelectorAll('div');
  thirdDigitNums = thirdDigit.querySelectorAll('div');
  firstDeciNums = firstDeci.querySelectorAll('div');
  secondDeciNums = secondDeci.querySelectorAll('div'); 
  
  itdArray = [
  {info: firstDigitInfo, numbers: firstDigitNums, multiplier: 100}, 
  {info: secondDigitInfo, numbers: secondDigitNums, multiplier: 10}, 
  {info: thirdDigitInfo, numbers: thirdDigitNums, multiplier: 1}, 
  {info: firstDeciInfo, numbers: firstDeciNums, multiplier: 0.1}, 
  {info: secondDeciInfo, numbers: secondDeciNums, multiplier: 0.01}, 
  ]
}

let degreeAnswer = 0

function acquireDegree() { 
  itdArray.forEach((el, i) => { 
    el.numbers.forEach((obj, i) => {
    let nums = obj.getBoundingClientRect(); 
  
  if (el.info.y <= nums.y && el.info.y + el.info.height >= nums.y + nums.height) { 
    degreeAnswer += parseFloat(el.numbers.item(i).innerHTML) * el.multiplier;
  }; 
}); 
console.log(`answer: ${degreeAnswer}`); 
  })
  runGame(); 
  
  digitArray.forEach(obj => {
    obj.scrollTop = 0; 
  })
  
}

const optionsDiv = document.getElementById('optionsDiv')
let chosenAnswer = null; 
let generatedOptions = []; 

function resetOptionsDiv() {
  optionsDiv.querySelector('#option1').innerHTML = `Option 1`; 
  optionsDiv.querySelector('#option2').innerHTML = `Option 2`; 
  optionsDiv.querySelector('#option3').innerHTML = `Option 3`;
  optionsDiv.querySelector('#option4').innerHTML = `Option 4`;
  
}

function generateOptions() {
  let randomOptionsIndex = []; 
  randomOptionsIndex.push(randomIndex); 
  
  generateUnique();
  function generateUnique() {
    let unique = Math.floor(Math.random() * compArray.length); 
    console.log(`Generated: ${unique}`);
    let isNotUnique = randomOptionsIndex.includes(unique); 
    if (isNotUnique === true && randomOptionsIndex.length <= 3) {
      generateUnique();
    } else if (isNotUnique === false && randomOptionsIndex.length <= 3) {
      randomOptionsIndex.push(unique); 
      generateUnique();
    }; 
    
    console.log(randomOptionsIndex); 
    
    randomizeOptions();
    function randomizeOptions() {
      if (randomOptionsIndex.length > 0) {
        let splice = Math.floor(Math.random() * randomOptionsIndex.length); 
        generatedOptions.push(randomOptionsIndex[splice]); 
        randomOptionsIndex.splice(splice, 1); 
        
        randomizeOptions()
      }
    }
  } 
  
  console.log(generatedOptions)
  
  generatedOptions.forEach((obj, i) => {
    let button = optionsDiv.querySelector(`#option${i + 1}`); 
    button.innerHTML = `${compArray[generatedOptions[i]].relB}`; 
    button.addEventListener('click', function() { 
      chosenAnswer = compArray[generatedOptions[i]].relB; 
      optionsDiv.scrollTop = 0;
      generatedOptions = [];
      runGame();
    })
  })
}

let randomIndex = null; 
function runGame(fromButton) {
  if (gameMode === 'Identify by Name' && gameState === 'Started' && fromButton === true) { 
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
    
  } else if (gameMode === 'Identify by Degree' && gameState === 'Started' && fromButton === true) {
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
    
  } else if (gameMode === 'Identify the Name' && gameState === 'Started') { 
    
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
    
  } else if (gameMode === 'Identify the Degree' && gameState === 'Started') {
     if (randomIndex !== null) {
      let corrAnswer = compArray[randomIndex].deg; 
    
      if (corrAnswer === degreeAnswer) { 
        body.style.background = 'lime';
        correctCounter++
      } else if (corrAnswer !== degreeAnswer) { 
       body.style.background = 'red';
       mistakeCounter++
     }; 
    };
    
    updScores(); 
    degreeAnswer = 0;
    compArray.forEach((obj, i) => {
      obj.v.style.background = 'whitesmoke'
    }); 
    
    setTimeout(function() { 
      if (randomIndex !== null) {
        midBtn.querySelector('#abbrev').innerHTML = `${compArray[randomIndex].deg}°`; 
        midBtn.querySelector('#name').innerHTML = 'Last Answer'; 
      }; 
      body.style.background = 'gray'; 
      randomIndex = Math.floor(Math.random() * 32); 
      compArray[randomIndex].v.style.background = 'limegreen'
    }, 500)
    
  } else if (gameMode === 'Identify the Relative Bearing' && gameState === 'Started') {
    
    if (randomIndex !== null) {
      let corrAnswer = compArray[randomIndex].relB; 
    
      if (corrAnswer === chosenAnswer) { 
        body.style.background = 'lime';
        correctCounter++
      } else if (corrAnswer !== chosenAnswer) { 
       body.style.background = 'red';
       mistakeCounter++
     }; 
    };
    
    updScores(); 
    compArray.forEach((obj, i) => {
      obj.v.style.background = 'whitesmoke'
    }); 
    
    setTimeout(function() { 
      if (randomIndex !== null) {
        midBtn.querySelector('#abbrev').innerHTML = `${compArray[randomIndex].relB}`; 
        midBtn.querySelector('#name').innerHTML = 'Last Answer'; 
      }; 
      body.style.background = 'gray'; 
      randomIndex = Math.floor(Math.random() * 32); 
      compArray[randomIndex].v.style.background = 'limegreen'; 
      generateOptions();
    }, 500)
  }
}

function updScores() {
  corrCount.innerHTML = `${correctCounter}`; 
  mistCount.innerHTML = `${mistakeCounter}`
}