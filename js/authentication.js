$(document).ready(function(){
			$('#check').click(function(){
				$('.fa-square').css('visibility', function(){
					return ($('.fa-square').css('visibility') == 'visible') ? 'hidden' : 'visible';
				});
				$('.fa-check-square').css('visibility', function(){
					return ($('.fa-square').css('visibility') == 'visible') ? 'hidden' : 'visible';
				});
				if($('#checkbox').prop('checked') == false) {
					$('#checkbox').prop('checked', true);
				} else {
					$('#checkbox').prop('checked', false)
				}
			});
})