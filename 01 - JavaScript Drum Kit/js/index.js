// 新增按鍵事件
window.addEventListener('keydown', (e) => {
    // 按鍵按下，檢查是否有為螢幕上的 ASDFGHJKL 按鍵
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (audio != null) {
      //播放音效
      audio.currentTime = 0;
      audio.play();

      // 播放特效
      var key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      key.classList.add('playing');
    }
  });

  // 取得螢幕上按鍵 ASDFGHJKL
  var keys = document.querySelectorAll('.key');
  keys.forEach(k => {
    // transitionend 會在 transition 結束後觸發
    k.addEventListener('transitionend', (e) => {
      // 移除 css 特效 playing(變大有金框)
      e.target.classList.remove('playing');
    });
  });