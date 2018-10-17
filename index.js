
	(function(doc,win){
      var docEl = doc.documentElement,  //文档根标签
        resizeEvent =  'orientationchange' in window ? 'orientationchang' :'resize'; //viewport变化事件源
      var rescale = function(){
        //重置方法
        win.clientWidth = docEl.clientWidth;
        if (!win.clientWidth) return;
        // 改变DOM根节点fontSize大小的值;
        // (屏幕宽度/设计图宽度) = 缩放或扩大的比例值;
        docEl.style.fontSize = 40 * (win.clientWidth / 667) + 'px';
      };
      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvent, rescale, false);
      doc.addEventListener('DOMContentLoaded', rescale, false);
    })(document, window);  //适配
  

  var oul = document.getElementsByTagName('ul')[0];
  var Ali = oul.getElementsByTagName('li');
  var Afont = oul.getElementsByClassName('font');
  var Aimg = oul.getElementsByClassName('teleimg');


  document.getElementById('app').style.width = document.documentElement.clientWidth + 'px';
  document.getElementById('app').style.height = document.documentElement.clientHeight + 'px';
  let Arrow = document.getElementsByClassName('xs')[0];
  window.onload =function(){
    let timer;
    let num = 1;
    let sum = 0;
    timer = setInterval(function(){
      num = num - 0.1;
      sum = sum + 5;
      if (num <= 0) {
        Arrow.style.bottom = 0 + 'px';
        Arrow.style.opacity = 1;
        num = 1;
        sum = 0;
      }
      Arrow.style.bottom = sum + 'px';
      Arrow.style.opacity = num;
    },100)
  }


function font(obj,index){
  let timer;
  let sum = 0;
  timer = setInterval(function(){
    sum = sum + 0.3;
    obj[index].style.left = -14.174 + sum + 'rem';
    if (obj[index].offsetLeft/22.489 >= 1.36) {
      obj[index].style.left = 1.36 + 'rem';
      clearInterval(timer)
    }
  },20)
}


  //向上滑动开始
var startx, starty;
//获得角度
function getAngle(angx, angy) {
    return Math.atan2(angy, angx) * 180 / Math.PI;
};
//根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
function getDirection(startx, starty, endx, endy) {
    var angx = endx - startx;
    var angy = endy - starty;
    var result = 0;

    //如果滑动距离太短
    if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
    }

    var angle = getAngle(angx, angy);
    if (angle >= -135 && angle <= -45) {
        result = 1;
    } else if (angle > 45 && angle < 135) {
        result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    } else if (angle >= -45 && angle <= 45) {
        result = 4;
    }
    return result;
  }




var shu = -1;

    //手指接触屏幕
  document.addEventListener("touchstart", function(e){
      if (shu > 6) {
        return
      }
      startx = e.touches[0].pageX;
      starty = e.touches[0].pageY;
  }, false);
  //手指离开屏幕


  document.addEventListener("touchend", function(e) {
    if (shu > 6 ) {
      return
    }
    console.log(shu)
    let endx, endy;
    let timer;
    let sum = 0;
    shu++;
    endx = e.changedTouches[0].pageX;
    endy = e.changedTouches[0].pageY;
    Ali[shu+1].style.top = document.documentElement.clientHeight + 'px';
    let direction = getDirection(startx, starty, endx, endy);
    if (direction == 1) {
        timer = setInterval(function(){
          sum = sum + 10;
          Ali[shu].style.top = -sum + 'px';
          Ali[shu+1].style.top = sum + 'px';
          if (sum >= document.documentElement.clientHeight) {
            Ali[shu+1].style.top = 0 + 'px';
            clearInterval(timer);
            font(Afont,shu)
            font(Aimg,shu)
          }
        },20)
    }
  }, false);
