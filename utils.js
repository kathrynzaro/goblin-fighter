export function renderGoblin(goblin) {
    const goblinEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const healthEl = document.createElement('p');

    goblinEl.classList.add('goblin');

    nameEl.textContent = goblin.name;
    healthEl.textContent = goblin.hp < 0 ? 0 : goblin.hp;

    faceEl.textContent = goblin.hp > 0 ? '😈' : '🔥';

    goblinEl.append(nameEl, faceEl, healthEl);

    return goblinEl;
}