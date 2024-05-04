var captchaCheckInterval = setInterval(function() {
    let recaptchaElement = document.querySelector('body > colab-recaptcha-dialog');
    if (recaptchaElement) {
        let style = window.getComputedStyle(recaptchaElement);
        if (style.display !== 'none' && style.visibility !== 'hidden') {
            notify('under%20attack')
            notify('converted')
            clearInterval(captchaCheckInterval);
        }
    }
    let popup = document.querySelector('body > mwc-dialog');
    if (popup) {
        let style = window.getComputedStyle(popup);
        if (style.display !== 'none' && style.visibility !== 'hidden') {
            notify('You%20have%20been%20defeated')
            clearInterval(popupCheckInterval);
        }
    }
}, 1000);
function notify(url) {
    var audioElement = document.createElement('audio');
    audioElement.src = "https://github.com/micr0dust/colab-useful-script/raw/main/sound/"+url+".mp3?raw=true";
    audioElement.autoplay = true;
    audioElement.loop = false;
    document.body.appendChild(audioElement);
}