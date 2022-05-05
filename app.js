// import functions and grab DOM elements
import { renderGoblin } from './utils.js';
const form = document.getElementById('add-gob');
const gobList = document.querySelector('.gobs');
const defeatedEl = document.getElementById('defeated-num');
const healthPoints = document.getElementById('player-hp');
// let state
let defeatedCount = 0;
let playerHP = 11;
let goblins = [
    { name: 'GRIPHOOK', hp: 7 },
    { name: 'BOGROD', hp: 3 },
];
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const gobData = new FormData(form);
    const goblinName = gobData.get('goblin');
    const newGoblin = {
        name: goblinName,
        hp: Math.ceil(Math.random() * 7),
    };
    goblins.push(newGoblin);
    form.reset();
    displayGoblins();
});

function displayGoblins() {
    gobList.textContent = '';
    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        goblinEl.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });

        gobList.append(goblinEl);
    }
}

function goblinClickHandler(goblin) {
    console.log(`clicking ${goblin.name}`);
    if (goblin.hp === 0) return;
    if (playerHP === 0) return;
    const playerHit = Math.random();
    if (playerHit < .5) {
        goblin.hp--;
        displayGoblins();
        alert(`You bludgeoned ${goblin.name}!`);
        if (goblin.hp === 0) {
            defeatedCount++;
            defeatedEl.textContent = defeatedCount;
        }
    } else {
        alert(`You missed ${goblin.name}, you fool!`);
    }
    const goblinHit = Math.random();
    if (goblinHit < .5) {
        playerHP--;
        healthPoints.textContent = playerHP;
        alert(`${goblin.name} has wounded you!`);
        if (playerHP === 0) {
            alert('GAME OVER');
        }
    } else {
        alert(`Hoorah! You dodged ${goblin.name}!`)
    }
}

displayGoblins();
