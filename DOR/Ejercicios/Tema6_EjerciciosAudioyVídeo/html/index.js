document.addEventListener('DOMContentLoaded', () => {
    const preloadTime = 10; // tiempo en segundos

    const preloadVideo = (videoElement, loadingMessageElement) => {
        loadingMessageElement.style.display = 'block';

        videoElement.addEventListener('loadedmetadata', () => {
            videoElement.currentTime = preloadTime;
        });

        videoElement.addEventListener('timeupdate', function onTimeUpdate() {
            if (videoElement.currentTime >= preloadTime) {
                videoElement.removeEventListener('timeupdate', onTimeUpdate);
                videoElement.pause();
                videoElement.currentTime = 0;
                loadingMessageElement.style.display = 'none';
                if (videoElement.autoplay) {
                    videoElement.play();
                }
            }
        });
    };

    const videoAutoplay = document.getElementById('videoAutoplay');
    const loadingMessageAutoplay = document.getElementById('loadingMessage2');
    preloadVideo(videoAutoplay, loadingMessageAutoplay);
});