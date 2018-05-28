$(function(){

	var infoLoad = {
		data: function() {
			$loader = $('.loader');

			$.ajax('https://swapi.co/api/people', {
				dataType: 'json',
				context: this,

				success: function(result){
					var $result = result.results;
					var $wrapper = $('<div> </div>');
					$wrapper.addClass('wrapper');

					$result.map(function(el){
						var $div = $('<div></div>');
						$div.addClass('item');

						var $name = $('<h3>' + el.name + '</h3>');
						var $height = $('<p>' + 'height:  ' + el.height + '</p>');
						var $mass = $('<p>' + 'weight:  ' + el.mass + '</p>');
						var $sex = $('<p>' + 'sex:  ' + el.gender + '</p>');

						infoLoad.setData($name, $div);
						infoLoad.setData($mass, $div);
						infoLoad.setData($height, $div);
						infoLoad.setData($sex, $div);
						infoLoad.setData( $div ,  $wrapper);

						return $wrapper;
					});

					infoLoad.setData($wrapper, $('body'));
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
		},
	};


	$('.main-btn').on('click' , function(e){

		$(this).remove();
		$('body').addClass('bg');
		$('.btn-add').show();
		
		infoLoad.data();


	});


	$('.btn-add').on('click' , function(){
		infoLoad.data();
	});


});



