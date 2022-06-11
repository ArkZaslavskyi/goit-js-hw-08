const STORAGE_PLAYER_TIME = 'videoplayer-current-time';

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate',
    throttle(
        function (data) {
            localStorage.setItem(STORAGE_PLAYER_TIME, data.seconds);
        }
    , 1000)
);

const persistedVideoTime = JSON.parse(localStorage.getItem(STORAGE_PLAYER_TIME));

if (persistedVideoTime) {
    player.setCurrentTime(persistedVideoTime);
/*
        .then(function (seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });
    */
}



