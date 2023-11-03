
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000) );

function onPlay(data) {
  localStorage.setItem(TIME_KEY, JSON.stringify(data.seconds) )
}

player.setCurrentTime(JSON.parse(localStorage.getItem(TIME_KEY)||0) );