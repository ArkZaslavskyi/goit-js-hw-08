const LOCALSTORAGE_KEY_PLAYER_TIME = 'videoplayer-current-time';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
    console.log('played the video!');
});

player.on('timeupdate',
    // _.throttle(
        function (data) {
    console.log('seconds:', data.seconds);
    localStorage.setItem('videoplayer-current-time', data.seconds);
        }
        // , 1000)
);

const persistedVideoTime = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_PLAYER_TIME));

if (persistedVideoTime) {
    console.log('persistedVideoTime: ', persistedVideoTime);
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

player.play();


