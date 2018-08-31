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

	        if (sun > 3) {
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
	     			spend = spend + 10;
                    touming = touming + 0.06;
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
                    	    zs = arr[0] + arr[1]  + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9]
                    		console.log(zs)
                    	}     
                    }
	     		},100)
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
   
}