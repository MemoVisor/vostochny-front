import { getHeading } from './lib/header';
import { getLastMeme } from './lib/memes';

setInterval(getHeading, 200);
setInterval(getLastMeme, 1000);
