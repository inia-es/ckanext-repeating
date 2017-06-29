
function add_field_in_group(index, label){
	var next=index+1;
	var elementid = 'fields_repeating_container_'+label+'_'+index;
	var nextelementid='fields_repeating_container_'+label+'_'+next;
	document.getElementById(nextelementid).style.display = 'block';
	var buttonid='button_fields_repeating_container_'+label+'_'+index;
	document.getElementById(buttonid).style.display = 'none';
	MoverTexto(elementid, nextelementid, "A");
}


function MoverTexto(elementid, nextelementid,d){

 var fieldinput=document.getElementById(elementid);
 var nextfieldinput=document.getElementById(nextelementid);

var posicion = fieldinput.position();
var y = posicion.top;
var x = posicion.left;
/**
 var y=(document.defaultView && document.defaultView.getComputedStyle) ?
        document.defaultView.getComputedStyle(fieldinput,'').getPropertyValue("top") :
        fieldinput.currentStyle ? fieldinput.currentStyle.top : "";
 var x=(document.defaultView && document.defaultView.getComputedStyle) ?
        document.defaultView.getComputedStyle(fieldinput,'').getPropertyValue("left") :
        fieldinput.currentStyle ? fieldinput.currentStyle.left : "";
**/
 x= parseInt(x);
 y= parseInt(y);

switch(d){
 case "A":  y +=100; break;
}
nextfieldinput.style.top="100px";
nextfieldinput.style.left=nextfieldinput.style.left;
}

