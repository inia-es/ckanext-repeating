
function add_field_in_group(index, label){
	var next=index+1;
	var elementid='fields_repeating_container_'+label+'_'+next;
	document.getElementById(elementid).style.display = 'block';
	var buttonid='button_fields_repeating_container_'+label+'_'+index;
	document.getElementById(buttonid).style.display = 'none';
}

