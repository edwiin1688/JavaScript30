# **02 - JS and CSS Clock**
![](https://i.imgur.com/zSe9ce1.png)
## 題目  
做出一個時鐘，而且要有時針、分針、秒針

## 解題
1. [transform-origin](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform-origin) 設定變形中心點為 100%
2. transform: rotate(90deg) 預設給 90 度
3. 必需每秒定時修改秒針的顯示，可以利用 [Window setInterval() 方法](https://www.runoob.com/jsref/met-win-setinterval.html)
4. 套用公式計算角度
* 秒針 = (目前秒數 / 60) * 360 + 90 (90 是預設值)
* 分針 = (目前分數 / 60) * 360 + (目前秒數 / 60) * 6 + 90 (6 是 360 / 60 來的)
* 時針 = (目前時數 / 12) * 360 + (目前分數 / 60) * 30 + 90 (30 是 360 / 12 來的)

