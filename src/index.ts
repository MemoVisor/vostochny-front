import { getHeading } from './lib/header';
import { getLastMeme } from './lib/memes';

setInterval(getHeading, 200);
setInterval(getLastMeme, 1000);

const circleElement = document.getElementsByClassName('circle');

document.addEventListener('mousemove', e => {
  const xPos = e.pageX;
  const yPos = e.pageY;

  const element = circleElement[0] as HTMLDivElement;
  element.style.top = `${yPos - 20}px`;
  element.style.left = `${xPos - 20}px`;
});
