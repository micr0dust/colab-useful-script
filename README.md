# Colab useful script

I just made some useful script to help me train model.

## JS bookmark

### reCaptcha detect and sound notify

notice to relaunch bookmark after detected.

```js
javascript:var captchaCheckInterval=setInterval((function(){let t=document.querySelector("body > colab-recaptcha-dialog");if(t){let e=window.getComputedStyle(t);"none"!==e.display&&"hidden"!==e.visibility&&(notify("https://github.com/micr0dust/colab-useful-script/raw/main/sound/under%20attack.mp3?raw=true"),notify("https://github.com/micr0dust/colab-useful-script/raw/main/sound/converted.mp3?raw=true"),clearInterval(captchaCheckInterval))}}),1e3);function notify(t){var e=document.createElement("audio");e.src=t,e.autoplay=!0,e.loop=!1,document.body.appendChild(e)}
```

### popup detect and sound notify (not include reCaptcha)

notice to relaunch bookmark after detected.

```js
javascript:var popupCheckInterval=setInterval((function(){let e=document.querySelector("body > mwc-dialog");if(e){let t=window.getComputedStyle(e);"none"!==t.display&&"hidden"!==t.visibility&&(notify("https://github.com/micr0dust/colab-useful-script/raw/main/sound/You%20have%20been%20defeated.mp3?raw=true"),clearInterval(popupCheckInterval))}}),1e3);function notify(e){var t=document.createElement("audio");t.src=e,t.autoplay=!0,t.loop=!1,document.body.appendChild(t)}
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
output.eval_js('new Audio("https://static.wikia.nocookie.net/ageofempires/images/2/2b/Victory_aoe3de.ogg").play()')
```
