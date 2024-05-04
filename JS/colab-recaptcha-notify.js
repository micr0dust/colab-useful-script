var captchaCheckInterval = setInterval(function() {
    let recaptchaElement = document.querySelector('body > colab-recaptcha-dialog');
    if (recaptchaElement) {
        let style = window.getComputedStyle(recaptchaElement);
        if (style.display !== 'none' && style.visibility !== 'hidden') {
            notify('https://github.com/micr0dust/colab-useful-script/raw/main/sound/under%20attack.mp3?raw=true')
            notify('https://github.com/micr0dust/colab-useful-script/raw/main/sound/converted.mp3?raw=true')
            clearInterval(captchaCheckInterval);
        }
    }
}, 1000);
function notify(url) {
    var audioElement = document.createElement('audio');
    audioElement.src = url;
    audioElement.autoplay = true;
    audioElement.loop = false;
    document.body.appendChild(audioElement);
}