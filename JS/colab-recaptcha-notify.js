var captchaCheckInterval = setInterval(function() {
    let recaptchaElement = document.querySelector('body > colab-recaptcha-dialog');
    if (recaptchaElement) {
        let style = window.getComputedStyle(recaptchaElement);
        if (style.display !== 'none' && style.visibility !== 'hidden') {
            notify('https://us-tuna-sounds-files.voicemod.net/9aa8cfcd-e7b3-43aa-8744-fd62fc51e2c2-1661809186196.mp3')
            notify('https://www.myinstants.com/media/sounds/aoe2-star-wars-imperial-march-with-a-monk-choir.mp3')
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