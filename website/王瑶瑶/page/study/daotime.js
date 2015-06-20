
	window.onload=function(){
		var curtime=new Date();
		var endtime=new Date("2015,6,13");
		var lefttime=Math.ceil((endtime.getTime()-curtime.getTime())/(24*60*60*1000));
		//     1天=24小时   1小时 =60分钟  1分钟=60秒 1秒=1000毫秒
		
		document.getElementById('timeShow').innerHTML=lefttime;
		
	}		