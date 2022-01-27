import { getHeading } from './lib/header';
import { getLastMeme } from './lib/memes';
import { playSound } from './lib/notifications';

setInterval(getHeading, 200);
setInterval(getLastMeme, 1000);
setInterval(playSound, 10000);
