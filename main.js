/*function main()
{
	alert('Hello!');
}*/

var d = new Date();
var day=new Array("Неділя","Понеділок","Вівторок","Середа","Четверг","Пятниця","Субота");
var month=new Array("січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня");
document.write(day[d.getDay()]+" " +d.getDate()+ " " + month[d.getMonth()] + " " + d.getFullYear() + " р.");