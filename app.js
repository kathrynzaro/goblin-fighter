// import functions and grab DOM elements
import { renderGoblin } from './utils.js';
const form = document.getElementById('add-gob');
const gobList = document.querySelector('.gobs');
// let state
let defeatedCount = 0;
let playerHP = 3;
let goblins = [
    { name: 'joe', hp: 7 },
    { name: 'kat', hp: 3 },
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

    displayGoblins();
});

function displayGoblins() {
    gobList.textContent = '';
    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        gobList.append(goblinEl);
    }
}
