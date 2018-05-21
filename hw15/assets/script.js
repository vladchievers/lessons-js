

$('button').on('click', function(){
	var select = $('select').val();
	var files = 'files/' + select;
	$.ajax(files, {
		beforeSend: function() {
			$('.loader').show();
		},
		success: function(elem){
			$('body').prepend(elem)
		},
		error: function(error) {
			$('body').prepend(error.responseText);
		},

		complete: function() {
			$('.loader').hide();
		}
	});
});
