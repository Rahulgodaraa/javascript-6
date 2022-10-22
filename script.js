'use strict';

// selecting elements
const scoreEl1 = document.querySelector('#score--0');
const scoreEl2 = document.getElementById('score--1');
const current0 = document.getElementById("current--0");
const current1 = document.querySelector('#current--1');
const diceEl   = document.querySelector('.dice');
const btnNew   = document.querySelector('.btn--new');
const btnRoll  = document.querySelector('.btn--roll');
const btnHold  = document.querySelector('.btn--hold');
const player1  = document.querySelector('.player--1');
const player2  = document.querySelector('.player--2');
const playerEl0= document.querySelector('.player--0')
const playerEl1= document.querySelector('.player--1')
const  switchplayer = function () {
    document.getElementById(`current--${activeplayer}`).textContent = currentscore;
    currentscore = 0;
        activeplayer = activeplayer === 0 ? 1 : 0;
        playerEl0.classList.toggle('player--active');
        playerEl1.classList.toggle('player--active');
} 

let scores , activeplayer , currentscore , playing;
const init = function () {
// starting conditions
 scores = [0,0]
 activeplayer = 0;
scoreEl1.textContent = 0;
scoreEl2.textContent = 0;
 currentscore = 0;
diceEl.classList.add('hidden');
 playing = true ; 

current0.textContent = 0;
    current1.textContent = 0;
    scoreEl1.textContent = 0;
    scoreEl2.textContent = 0;
    playerEl0.classList.remove('player--winner')
    playerEl1.classList.remove('player--winner')
    playerEl0.classList.add('player--active')
    playerEl1.classList.remove('player--active')
}
init()
// dice roll functionality

btnRoll.addEventListener('click' , function () {
    if (playing) {
    // rondom number on dice
    const dice = Math.trunc(Math.random() * 6 ) + 1;
    console.log(dice);

    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`

    // switch player
    if (dice !== 1){
        currentscore +=  dice ;
        // current0.textContent = currentscore ; 
        document.getElementById(`current--${activeplayer}`).textContent = currentscore;
         
    }else {  
        currentscore = 0;
        // current1.textContnt = currentscore;
        switchplayer();
        // document.getElementById(`current--${activeplayer}`).textContent = currentscore;
        // activeplayer = activeplayer === 0 ? 1 : 0;
        // playerEl0.classList.toggle('player--active');
        // playerEl1.classList.toggle('player--active');
  } }
})
   


btnHold.addEventListener('click' , function() {
    if (playing) {
    scores[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];

    if (scores[activeplayer] >= 20) {
        playing = false ;
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        diceEl.classList.add('hidden');
        
    }else {
        switchplayer();
    // document.getElementById(`current--${activeplayer}`).textContent = currentscore;
    //     activeplayer = activeplayer === 0 ? 1 : 0;
    //     playerEl0.classList.toggle('player--active');
    //     playerEl1.classList.toggle('player--active');

    }
}
} )

btnNew.addEventListener('click' , init);