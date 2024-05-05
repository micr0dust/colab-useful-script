# Colab useful script

I just made some useful script to help me train model.

## JS bookmark

The code for bookmark are minified by [this website](https://www.digitalocean.com/community/tools/minify).

### popup and recaptcha detect

Will play the sound if detect the reCaptcha or popup.

```js
javascript:var observer=new MutationObserver((function(e){e.forEach((function(e){e.addedNodes.length&&e.addedNodes.forEach((function(e){e.matches&&e.matches("colab-recaptcha-dialog")?(notify("under%20attack"),notify("converted")):e.matches&&e.matches("mwc-dialog")&&notify("Requires_Skilled_Engineers")}))}))}));function notify(e){var o=document.createElement("audio");o.src="https://github.com/micr0dust/colab-useful-script/raw/main/sound/"+e+".mp3?raw=true",o.autoplay=!0,o.loop=!1,document.body.appendChild(o)}observer.observe(document.body,{childList:!0});
```

### try reconnect every 60 sec

```js
javascript:function ConnectButton(){document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click()}setInterval(ConnectButton,6e4);
```

## Python

### Play sound (can use after job finish)

Just add them to your colab and execute.

```python
from google.colab import output
output.eval_js('new Audio("https://github.com/micr0dust/colab-useful-script/raw/main/sound/Victory_aoe3de.ogg?raw=true").play()')
```
