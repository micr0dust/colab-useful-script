# Colab useful script

I just made some useful script to help me train model.

## JS bookmark

The code for bookmark are minified by [this website](https://www.digitalocean.com/community/tools/minify).

### popup and recaptcha detect (only once)

Notice to relaunch bookmark after detected.

```js
javascript:var checkInterval=setInterval((function(){let e=document.querySelector("body > colab-recaptcha-dialog"),t=document.querySelector("body > mwc-dialog");if(e){let t=window.getComputedStyle(e);"none"!==t.display&&"hidden"!==t.visibility&&(notify("under%20attack"),notify("converted"),clearInterval(checkInterval))}else if(t){let e=window.getComputedStyle(t);"none"!==e.display&&"hidden"!==e.visibility&&(notify("Requires_Skilled_Engineers"),clearInterval(checkInterval))}}),1e3);function notify(e){var t=document.createElement("audio");t.src="https://github.com/micr0dust/colab-useful-script/raw/main/sound/"+e+".mp3?raw=true",t.autoplay=!0,t.loop=!1,document.body.appendChild(t)}
```

### popup and recaptcha detect (loop)

Don't need to relaunch.

```js
javascript:var checkInterval=setInterval((function(){let e=document.querySelector("body > colab-recaptcha-dialog"),t=document.querySelector("body > mwc-dialog");if(e){let t=window.getComputedStyle(e);"none"!==t.display&&"hidden"!==t.visibility&&(notify("under%20attack"),notify("converted"))}else if(t){let e=window.getComputedStyle(t);"none"!==e.display&&"hidden"!==e.visibility&&notify("Requires_Skilled_Engineers")}}),1e4);function notify(e){var t=document.createElement("audio");t.src="https://github.com/micr0dust/colab-useful-script/raw/main/sound/"+e+".mp3?raw=true",t.autoplay=!0,t.loop=!1,document.body.appendChild(t)}
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
