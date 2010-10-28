var GB_ANIMATION = false;
$(document).ready(function(){

	var container = $("div#error_box");
/********************************************************
code_entry.php Validation
********************************************************/
/*	$("#code_entry").validate({
		debug: false,
		onsubmit: true,
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		errorContainer: container,
		errorLabelContainer: $(container),
		wrapper: "p",
		rules: {
			serial_one: {
				required: true
			},
			serial_two: {
				required: true
			},
			serial_three: {
				required: true
			},
			serial_four: {
				required: true
			},
			serial_five: {
				required: true
			}
		},
		 messages: {
		   serial_one: "Please check your serial number.",
		   serial_two: "Please check your serial number.",
		   serial_three: "Please check your serial number.",
		   serial_four: "Please check your serial number.",
		   serial_five: "Please check your serial number."
		 }
		
	});
*/
/********************************************************
success_info.php Validation
********************************************************/
	$("#first_name").focus(function(){
		if(this.value == 'First Name'){
			this.value = '';
		}
	});
	$("#first_name").blur(function(){
		if(this.value == ''){
			this.value = 'First Name';
		}
	});

/*	$("#user_info").validate({
		debug: false,
		onsubmit: true,
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		errorContainer: container,
		errorLabelContainer: $(container),
		wrapper: "p",
		rules: {
			first_name: {
				required: true
			},
			last_name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			email_confirm: {
				required: true,
				email: true,
				equalTo: "#email"
			},
			username: {
				required: true
			},
			password: {
				required: true,
				minlength: 6
			},
			password_confirm: {
				required: true,
				minlength: 6,
				equalTo: "#password"
			}
		},
		 messages: {
		   first_name: "First name is required.",
		   last_name: "Last name is required.",
		   email_confirm: "Email addresses do not match.",
		   password_confirm: "Passwords do not match."
		 }
		
	});
	*/
/********************************************************
select_tracks.php Validation
********************************************************/
/*	$("#select_tracks").validate({
		debug: false,
		onsubmit: true,
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		errorContainer: container,
		errorLabelContainer: $(container),
		wrapper: "p",
		rules: {
			serial_five: {
				required: true
			}

		},
		 messages: {
		   serial_one: "Please check your serial number."
		 }
		
	});
*/	
	$(".scroll-pane").jScrollPane();

	$("#serial_one,#serial_two").focus(function(){
		if(this.value == '#'){
			this.value = '';
		}
	});
	
	$("#serial_one,#serial_two").blur(function(){
		if(this.value == ''){
			this.value = '#';
		}
	});

	$("#serial_three").focus(function(){
		if(this.value == '########'){
			this.value = '';
		}
	});
	
	$("#serial_three").blur(function(){
		if(this.value == ''){
			this.value = '########';
		}
	});

	$("#serial_four,#serial_five").focus(function(){
		if(this.value == '##'){
			this.value = '';
		}
	});
	
	$("#serial_four,#serial_five").blur(function(){
		if(this.value == ''){
			this.value = '##';
		}
	});

	$("#owner_one,#owner_two,#owner_three,#owner_four").focus(function(){
		if(this.value == '#####'){
			this.value = '';
		}
	});
	
	$("#owner_one,#owner_two,#owner_three,#owner_four").blur(function(){
		if(this.value == ''){
			this.value = '#####';
		}
	});

	$("a.greybox").click(function(){
		var t = this.title || $(this).text() || this.href;
		GB_show(t,this.href,245,515,'confirm_leave');
		return false;
	});

	$(".tooltip").tooltip({
		track: true, 
		delay: 0, 
		showURL: false, 
		showBody: " - ", 
		fade: 250 
	});

});
