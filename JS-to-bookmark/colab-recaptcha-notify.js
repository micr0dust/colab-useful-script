javascript:var captchaCheckInterval=setInterval((function(){let t=document.querySelector("body > colab-recaptcha-dialog");if(t){let e=window.getComputedStyle(t);"none"!==e.display&&"hidden"!==e.visibility&&(notify("https://github.com/micr0dust/colab-useful-script/raw/main/sound/under%20attack.mp3?raw=true"),notify("https://github.com/micr0dust/colab-useful-script/raw/main/sound/converted.mp3?raw=true"),clearInterval(captchaCheckInterval))}}),1e3);function notify(t){var e=document.createElement("audio");e.src=t,e.autoplay=!0,e.loop=!1,document.body.appendChild(e)}

// reCaptcha 機器人驗證偵測並聲音提醒
