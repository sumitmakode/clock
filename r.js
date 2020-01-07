setInterval(s,1000)
var hours = document.getElementById('h');
var minute = document.getElementById('m');
var second = document.getElementById('s');
function s()
{
	var currentdate = new Date;
	var sec = currentdate.getSeconds()/60;
	var min = (sec+currentdate.getMinutes())/60;
	var hour = (min+currentdate.getHours())/12;

	srotation(hours,hour);
	srotation(minute,min);
	srotation(second,sec);
}
function srotation(element,n)
{
	element.style.setProperty('--ro',(n*360));
}
