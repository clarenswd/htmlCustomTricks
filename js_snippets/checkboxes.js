/**
Toggling between 2 Checkboxes using props , #custom_form_custom_field_1 & #custom_form_custom_field_2


*/

    $('#custom_form_custom_field_1').on('change', function(){

      if($(this).prop('checked')) {
			$('#custom_form_custom_field_2').prop('checked', false);
	  }

    });

    $('#custom_form_custom_field_2').on('change', function(){

      if($(this).prop('checked')) {
			$('#custom_form_custom_field_1').prop('checked', false);
	  }

    });
