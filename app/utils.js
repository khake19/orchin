import defaultSounds from '../static/sounds/default';

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

const play = name => {
  const appMute = false;
  if (!appMute) {
    const sound = defaultSounds[name];
    if (!sound) {
      throw new Error('Invalid sound name');
    }
    const audio = new window.Audio();
    audio.volume = sound.volume;
    audio.src = sound.url;

    audio.currentTime = 0;
    audio.play();
  }
};
export { capitalizeFirstLetter, play };
