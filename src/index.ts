import placeholderImg from './assets/placeholder.jpg';

async function getLastMem(): Promise<void> {
  const response = await fetch('/api/memes/last/');
  let imageUrl = placeholderImg;
  try {
    const data: {url: string;} = await response.json();
    imageUrl = data.url;
  } catch (error: unknown) {
    // console.error(error);
  }

  const elem = document.getElementById('image');

  if (!elem) {
    return;
  }

  const prevSrc = elem.getAttribute('src');
  if (prevSrc !== imageUrl) {
    elem.setAttribute('src', imageUrl);
  }
}

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

function getHeading(): void {
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

setInterval(getHeading, 200);
setInterval(getLastMem, 1000);
