const colors = [
  'red',
  'blue',
  'deeppink',
  'green',
  'purple',
  'orange',
  'aqua',
  'rosybrown',
  'greenyellow',
];

function getRandomInt(min: number, max: number): number {
  const roundMin = Math.ceil(min);
  const roundMax = Math.floor(max);

  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (roundMax - roundMin) + roundMin);
}

export function getHeading(): void {
  const header = document.getElementById('header');
  if (!header) {
    return;
  }

  header.innerHTML = '';

  const title = 'Memovisor';

  for (const char of title) {

    const index = getRandomInt(0, colors.length - 1);
    const letter = document.createElement('span');
    letter.style.setProperty('color', colors[index]);

    letter.innerHTML = char;
    header.appendChild(letter);
  }
}
