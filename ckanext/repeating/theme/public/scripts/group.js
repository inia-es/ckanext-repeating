
function add_field_in_group(index, label){
	var next=index+1;
	var elementid = 'fields_repeating_container_'+label+'_'+index;
	var nextelementid='fields_repeating_container_'+label+'_'+next;
	document.getElementById(nextelementid).style.display = 'block';
	var buttonid='button_fields_repeating_container_'+label+'_'+index;
	document.getElementById(buttonid).style.display = 'none';
	MoverTexto(elementid, nextelementid, index);
}


function MoverTexto(elementid, nextelementid, index){

	var newDiv = document.createElement("div");

	
        var otro = document.getElementById('fields_repeating_container_Emailss_'+index;);
	var fieldinput = document.getElementById(elementid);

	fieldinput.appendChild(otro);

}

