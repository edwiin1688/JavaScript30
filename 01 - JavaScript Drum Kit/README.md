# **01 - JavaScript Drum Kit**
![](https://i.imgur.com/F1hB3gR.png)  
## 題目  
按下鍵盤 ASDFGHJKL  
1. 對應字母的邊框發亮特效  
2. 對應字母的字體變大再縮小  
3. 播放音效  

## 解題
1. 新增按鍵事件，當按鍵按下，檢查是否有為螢幕上的 ASDFGHJKL 按鍵，是的話播放音效，並播放特效
2. 利用 [transitionend](https://developer.mozilla.org/zh-CN/docs/Web/Events/transitionend)事件，在 CSS transition 結束後觸發，移除 CSS 特效 playing(變大有金框)