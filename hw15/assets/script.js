

$('button').on('click', function(){
	var select = $('select').val();
	var files = 'files/' + select;
	$.ajax(files, {
		success: function(elem){
			$('body').prepend(elem)
		}
	});
});
