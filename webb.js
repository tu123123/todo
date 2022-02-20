window.onload=function(){
	document.querySelector('.des fieldset').classList.add("clickdes");
}
function clickItem(){
	var a=document.querySelector('.e-item p');
	a.style.transform="translateY(0px)";
	a.style.transform="scale(0.7)";
	a.style.color="gray";
	
}
function unclick(){
	if(document.querySelector('.e-item input').value==""){
		
		document.querySelector('.e-item p').style.transform="scale(1)";
		document.querySelector('.e-item p').style.transform="translateY(25px)";
		document.querySelector('.e-item p').style.color="black";
	}
}

function clickDes(){
	var a=document.querySelector('.des fieldset');
	var b=document.querySelector('.des fieldset legend');
	b.style.color="blue";
	b.style.transform="translateY(0)";
	b.style.transform="scale(0.7)";
	a.classList.remove("clickdes");
a.classList.add("unclickdes");
}
function unclickDes(){
	if(document.querySelector('.des fieldset input').value==""){
	var a=document.querySelector('.des fieldset');
	var b=document.querySelector('.des fieldset legend');
	b.style.color="rgb(0,0,0,0.4)";
	b.style.transform="scale(1)";
	b.style.transform="translateY(25px)";
	a.classList.remove("unclickdes");
	a.classList.add("clickdes");
	
	}
}
function del(a,b,c){
	var b=document.querySelector('#'+b+' .del');
	var c=document.querySelector('#'+c+' label');
	if(a.checked){
	b.style.display="block";
	c.style.textDecorationLine="line-through";}
	else{
		b.style.display="none";
		c.style.textDecorationLine="none";
	}
}
function show(b){
	var a=document.querySelector('#'+b+' .items-1');
	if(a.style.display=="block"){
	a.style.display="none";
}
else{
	a.style.display="block";
}
}