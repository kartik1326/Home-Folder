// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the video element
    const video = document.getElementById('backgroundVideo');

    // Set the playback rate (adjust the value to control the speed)
    video.playbackRate = 1; // 0.5 means half speed
});
function playintro() {
    var audioPath = 'intro.mp3';
    var audio = new Audio(audioPath);
    audio.play();
}

