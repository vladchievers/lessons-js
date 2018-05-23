

// $('button').on('click', function(){
// 	var select = $('select').val();
// 	var files = 'files/' + select;
// 	$.ajax(files, {
// 		beforeSend: function() {
// 			$('.loader').show();
// 		},
// 		success: function(elem){
// 			$('body').prepend(elem)
// 		},
// 		error: function(error) {
// 			$('body').prepend(error.responseText);
// 		},
// 		complete: function() {
// 			$('.loader').hide();
// 		}
// 	});
// });


var infoLoad = {
	data: function() {
		$wrapper = $('.info-block');
		$loader = $('.loader');

		$.ajax('https://swapi.co/api/people', {
			dataType: 'json',
			context: infoLoad,
			crossDomain: true,
			success: function(res){
				console.log(res)
				$wrapper.append('<p>' + res.results[0].name + '</p>')
			},
			error: function(error) {
				$('body').prepend(error.responseText);
			},
			beforeSend: function() {
				$loader.show();
			},
			complete: function() {
				$loader.hide();
			}
		});
	},

	
	setData: function(what, where){
		where.append(what);
	}
}

infoLoad.data();