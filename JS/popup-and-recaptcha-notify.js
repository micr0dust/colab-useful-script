var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length) {
            mutation.addedNodes.forEach(function(node) {
                if (node.matches && node.matches('colab-recaptcha-dialog')) {
                    notify('under%20attack');
                    notify('converted');
                } else if (node.matches && node.matches('mwc-dialog')) {
                    notify('Requires_Skilled_Engineers');
                }
            });
        }
    });
});
observer.observe(document.body, { childList: true});
function notify(url) {
    var audioElement = document.createElement('audio');
    audioElement.src = "https://github.com/micr0dust/colab-useful-script/raw/main/sound/"+url+".mp3?raw=true";
    audioElement.autoplay = true;
    audioElement.loop = false;
    document.body.appendChild(audioElement);
}