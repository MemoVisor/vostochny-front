import audioUrl from '../assets/notification.mp3';

export function playSound(): void {
  const audio = new Audio(audioUrl);
  audio.play();
}
