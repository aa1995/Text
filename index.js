window.onload = function(){
     var obox = document.getElementById('box');
     var aer = document.getElementsByClassName('er');
     var arr = [];
     var olast = 1;
     var zs = 0;
     var timer;
	 var timer1;
	 var timer2;
	 var timer3;
	 var timer4;
     var op = document.getElementById('p');
     var ody = document.getElementById('dy');
     var oindex = document.getElementsByClassName('index')[0];
     var ap = document.getElementById('ap')
     var oneclick = document.getElementsByClassName('yd')[0];
     var obody = document.getElementsByTagName('body')[0]
     console.log(obody.offsetWidth)
     // if (obody.offsetWidth >= 768) {
     // 	 alert('请换手机')
     // 	 return;
     // }
	//首页测试开始
	 function b(){
	 	var oxh1 = document.getElementsByClassName('qc')[0];
	    var oxh2 = document.getElementsByClassName('qc1')[0];
	    var obox = document.getElementById('box');   
	    var osp = document.getElementById('s');
	    var num = 0;
	    var sum = 0;
	    var sun = 0;
	    

	    timer = setInterval(function(){
	       oxh1.style.left = oxh1.offsetLeft + 20 + 'px';
	       oxh2.style.left = oxh2.offsetLeft + 20 + 'px';
	       if (oxh2.offsetLeft >= 0) {
	       	   oxh1.style.left = 0;
	       	   oxh2.style.left = -obox.offsetWidth+'px';
	       }
	    },15)
	    op.style.opacity = 0
	    timer1 = setInterval(function(){
	    	num = num + 0.2
	        op.style.opacity = num;
	        if (num >= 1) {
	        	num = 0;
	        }
	    },150) 
	    timer4 = setInterval(function(){
	        timer2 = setInterval(function(){
		        sum = sum+5;
		        osp.style['-webkit-transform'] = 'rotate(' + sum + 'deg)';
		        if (sum >= 30) {
		        	clearInterval(timer2);
		            timer3 = setInterval(function(){
		            	sum = sum - 5;
		            	osp.style['-webkit-transform'] = 'rotate(' + sum + 'deg)';
		            	if (sum <= 0) {
		            		clearInterval(timer3);
		            	}
		            },20)
		        }
		    },20);
	        sun = sun + 1;

	        if (sun > 5) {
	        	clearInterval(timer4);
	        }
	        // console.log(sun)
	    },500)
	 }
	 //首页测试
    
     // 题目第二页开始

     function  abc(sum){
     	var timerq;
     	var spend = 0;
     	var spend1 = 0;
     	var touming = 0;
     	var hg = Number(obox.offsetHeight);
     	var bb =  Number(aer[sum+1].offsetTop);
     	var atm = document.getElementsByClassName('tm')[sum];
        var adiv = atm.getElementsByTagName('div')
        console.log(adiv)
        for (var i = 0; i < 4; i++) {
        	// console.log(adiv.length)
	     	adiv[i].index = i;
	     	adiv[i].onclick = function(){
	     		clearInterval(timerq)    		
	     		aer[sum+1].style.top = hg + 'px';
	     		This = this;
	     		timerq = setInterval(function(){
	     			spend = spend + 20;
                    touming = touming + 0.08;
                    aer[sum].style.top = Number(aer[sum].offsetTop) -spend+ 'px';
                    aer[sum].style.opacity = 1 - touming;
                    aer[sum+1].style.top = Number(aer[sum+1].offsetTop) - spend + 'px';
                    aer[sum+1].style.opacity = touming;
                    if ( Number(aer[sum].offsetTop) <= -hg) {
                    	clearInterval(timerq)
                    	arr.push(This.index)
                    	aer[sum+1].style.top = 0;
                    	// console.log(arr)
                    	if (arr.length >= 10) {
                    	    zs = arr[0] + arr[1]  + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9] + 10;
                    		if (zs <= 23) {
                                 ap.innerHTML =  "<p>任性妈妈（废铁级）</p>很抱歉，你是个任性的妈妈，您的健康饮食意识薄弱。如果不加以改变，会对孩子身体健康造成意想不到的后果。为了您和你家人的健康与幸福，建议您对孩子及家庭的饮食和健康做出调整，密切关注饮食健康和相关咨询，尽力改善现在的饮食状况。"
                    		}else if (zs > 23 && zs < 32) {
                                 ap.innerHTML = "<p>合格妈妈（白银级）</p>您是个合格的妈妈，您对饮食健康知识的了解处于中等水平。在越来越注重饮食健康的今天，您没有落伍，但还需要努力，才能更好地保持并增进健康。你需要关注饮食健康方面的信息，提高健康意识，注重改变健康饮食方式和习惯"
                    		}else if (zs >31 && zs <= 40) {
                                 ap.innerHTML = "<p>完美妈妈（黄金级）</p>你是个完美的妈妈，很出色！能到达这个级数的人并不多，说明您有良好健康意识，非常了解如何健康地安排孩子的饮食，有高水准的饮食安全与营养方面的知识。"
                    		}
                    	}     
                    }
	     		},80)
	       	}
        }
     }
     abc(0)
     abc(1)
     abc(2)
     abc(3)
     abc(4)
     abc(5)
     abc(6)
     abc(7)
     abc(8)
     abc(9) 
     b() //首页函数

     op.onclick = function(){
        ody.style.display = 'block';
        oindex.style.top = -20000 + 'px';
        clearInterval(timer)
        clearInterval(timer1)
        clearInterval(timer2)
        clearInterval(timer3)
        clearInterval(timer4)
     }
    // 第二页结束
   

   // 第一页点击事件开始
   oneclick.onclick = function(){
     	clearInterval(timerq)
   	    var timerq;
     	var spend = 0;
     	var spend1 = 0;
     	var touming = 0;
     	var hg = Number(obox.offsetHeight);
     	oindex.style.top = hg + 'px';
     	oindex.style.display = 'block'
   	    timerq = setInterval(function(){
		    spend = spend + 20;
	        touming = touming + 0.06;
	        oneclick.style.top = Number(oneclick.offsetTop) -spend+ 'px';
	        oneclick.style.opacity = 1 - touming;
	        oindex.style.top = Number(oindex.offsetTop) - spend + 'px';
	        oindex.style.opacity = touming;
	        if (oindex.offsetTop <= 0) { 
	        	oindex.style.top = 0;
	        	clearInterval(timerq)
	        }
	    },80)
   }
   // 第一页点击事件结束
   // // 音乐控件
  
}