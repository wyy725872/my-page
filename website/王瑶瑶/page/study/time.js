window.onload=function(){
		showTime();
		DAO();
	}
	function checkTime(i){
		if (i<10) {
			i="0"+i;
		}
		return i;
	}

	function showTime(){var myDate=new Date();
		var year=myDate.getFullYear();
		var month=myDate.getMonth()+1;
		var date=myDate.getDate();
		var d=myDate.getDay();//4
		var h=myDate.getHours();
		var m=myDate.getMinutes();
		var s=myDate.getSeconds();
		m=checkTime(m);
		s=checkTime(s);
		//alert(myDate.getDay());//0-6
		var weekday=new Array(7)
		weekday[0]="星期日"
		weekday[1]="星期一"
		weekday[2]="星期二"
		weekday[3]="星期三"
		weekday[4]="星期四"
		weekday[5]="星期五"
		weekday[6]="星期六"
		document.getElementById('show').innerHTML=year+'年'+month+'月'+date+'日'+weekday[d]+h+':'+m+':'+s;
		setTimeout(showTime,500);
	}

	

	function DAO(){
		var curtime=new Date();
		var endtime=new Date("2015,6,13");
		var lefttime=Math.ceil((endtime.getTime()-curtime.getTime())/(24*60*60*1000));
		//     1天=24小时   1小时 =60分钟  1分钟=60秒 1秒=1000毫秒
		
		document.getElementById('timeShow').innerHTML=lefttime;
		
	}	
/*function getByClassName(className){  
			if(document.getElementByClassName){  
				return document.getElementByClassName(className) //FF下因为有此方法，所以可以直接获取到；  
			}  
			var nodes=document.getElementsByTagName("*");//获取页面里所有元素，因为他会匹配全页面元素，所以性能上有缺陷，但是可以约束他的搜索范围；  
			var arr=[];//用来保存符合的className；  
			for(var i=0;i<nodes.length;i++){  
				if(hasClass(nodes[i],className)) arr.push(nodes[i]);  
			}  
			return arr;  
		} 
		function hasClass(node,className){  
			var cNames=node.className.split(/\s+/);//根据空格来分割node里的元素；  
			for(var i=0;i<cNames.length;i++){  
				if(cNames[i]==className) return true;  
			}  
			return false;  
		} 
*/