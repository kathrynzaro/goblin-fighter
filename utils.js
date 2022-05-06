export function renderGoblin(goblin) {
    const goblinEl = document.createElement('div');
    goblinEl.classList.add('goblin');

    const faceEl = document.createElement('p');
    faceEl.textContent = goblin.hp > 0 ? '😈' : '🔥';

    const nameEl = document.createElement('p');
    nameEl.textContent = goblin.name;

    const healthEl = document.createElement('p');
    healthEl.textContent = goblin.hp < 0 ? 0 : goblin.hp;

    if (goblin.hp < 0) {
        goblinEl.classList.add('dead');
    }

    goblinEl.append(nameEl, faceEl, healthEl);
    return goblinEl;
}