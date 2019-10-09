function setRem(){
	var docEl=document.documentElement;
	var viewWidth =docEl.clientWidth;
	docEl.style.fontSize=viewWidth/375*30+"px";    // 1rem=30px
}

setRem();
window.onresize=setRem;
/*
var a=document.querySelector("a");
a.addEventListener("click",function(){
	alert("hello");
})
*/