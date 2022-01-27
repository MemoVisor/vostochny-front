import placeholderImg from '../assets/placeholder.png';

import { playSound } from './notifications';

export async function getLastMeme(): Promise<void> {
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
    playSound();
    elem.setAttribute('src', imageUrl);
  }
}
