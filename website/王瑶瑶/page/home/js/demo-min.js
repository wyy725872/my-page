window.onload=function(){var e=document.getElementById("list");var t=e.children;var a;function n(e){e.parentNode.removeChild(e)}function r(e,t){var a=e.getElementsByClassName("praises-total")[0];var n=parseInt(a.getAttribute("total"));var r=t.innerHTML;var o;if(r=="赞"){o=n+1;a.innerHTML=o==1?"我觉得很赞":"我和"+n+"个人觉得很赞";t.innerHTML="取消赞"}else{o=n-1;t.innerHTML="赞";a.innerHTML=o==0?"":+o+"个人觉得很赞"}a.setAttribute("total",o);a.style.display=o==0?"none":"block"}function o(){var e=new Date;var t=e.getFullYear();var a=e.getMonth()+1;var n=e.getDate();var r=e.getHours();var o=e.getMinutes();a=a<10?"0"+a:a;n=n<10?"0"+n:n;r=r<10?"0"+r:r;o=o<10?"0"+o:o;return t+"-"+a+"-"+n+" "+r+":"+o}function l(e){var t=e.getElementsByTagName("textarea")[0];var a=e.getElementsByClassName("comment-list")[0];var n=document.createElement("li");n.className="comment-box clearfix";n.setAttribute("user","self");var r='<img class="myhead" src="image/touxiangwo.jpg" alt="">'+'<div class="comment-content">'+'<p class="comment-text"><span class="user">我：</span>'+t.value+"</p>"+'<p class="comment-time">'+o()+'<a href="javascript:;" class="comment-praise" total="0" my="0" style="">赞</a>'+'<a href="javascript:;" class="comment-operate">删除</a></p></div>';n.innerHTML=r;a.appendChild(n);t.value="";t.onblur()}function s(e){var t=parseInt(e.getAttribute("total"));var a=parseInt(e.getAttribute("my"));var n;if(a==0){n=t+1;e.setAttribute("total",n);e.setAttribute("my",1);e.innerHTML=n+" 取消赞"}else{n=t-1;e.setAttribute("total",n);e.setAttribute("my",0);e.innerHTML=n==0?"赞":n+" 赞"}e.style.display=n==0?"":"inline-block"}function c(e){var t=e.parentNode.parentNode.parentNode;var a=t.parentNode.parentNode.parentNode;var r=a.getElementsByTagName("textarea")[0];var o=t.getElementsByClassName("user")[0];var l=e.innerHTML;if(l=="回复"){r.onfocus();r.value="回复"+o.innerHTML;r.onkeyup()}else{n(t)}}for(var i=0;i<t.length;i++){t[i].onclick=function(e){e=e||window.event;var t=e.srcElement;switch(t.className){case"close":n(t.parentNode);break;case"praise":r(t.parentNode.parentNode.parentNode,t);break;case"comment-praise":s(t);break;case"btn btn-off":clearTimeout(a);break;case"btn":l(t.parentNode.parentNode.parentNode);break;case"comment-operate":c(t);break}};var m=t[i].getElementsByTagName("textarea")[0];m.onfocus=function(){this.parentNode.className="text-box text-box-on";this.value=this.value=="评论…"?"":this.value;this.onkeyup()};m.onblur=function(){var e=this;if(this.value==""){a=setTimeout(function(){e.parentNode.className="text-box";e.value="评论…"},400)}};m.onkeyup=function(e){var t=this.value.length;var a=this.parentNode;var n=a.children[1];var r=a.children[2];r.innerHTML=t+"/140";if(t==0||t>140){n.className="btn btn-off"}else{n.className="btn"}}}var u=document.getElementById("btn");var a=null;var v=true;var d=document.documentElement.clientHeight;window.onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;if(e>=d){u.style.display="block"}else{u.style.display="none"}if(!v){clearInterval(a)}v=false};u.onclick=function(){a=setInterval(function(){var e=document.documentElement.scrollTop||document.body.scrollTop;var t=Math.floor(-e/6);document.documentElement.scrollTop=document.body.scrollTop=e+t;v=true;console.log(e-t);if(e==0){clearInterval(a)}},30)}};