javascript:var popupCheckInterval=setInterval((function(){let e=document.querySelector("body > mwc-dialog");if(e){let t=window.getComputedStyle(e);"none"!==t.display&&"hidden"!==t.visibility&&(notify("https://github.com/micr0dust/colab-useful-script/raw/main/sound/You%20have%20been%20defeated.mp3?raw=true"),clearInterval(popupCheckInterval))}}),1e3);function notify(e){var t=document.createElement("audio");t.src=e,t.autoplay=!0,t.loop=!1,document.body.appendChild(t)}

// 彈窗偵測並聲音提醒 - 不包含機器人驗證
