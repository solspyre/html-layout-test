$(document).ready(function(){
	
			// --- checkbox toggle ---

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


			// --- bootstrap form validation ---

			// window.addEventListener('load', function() {
			//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
			//     var forms = document.getElementsByClassName('needs-validation');
			//     // Loop over them and prevent submission
			//     var validation = Array.prototype.filter.call(forms, function(form) {
			//       form.addEventListener('submit', function(event) {
			//       	event.preventDefault();
			//       	event.stopPropagation();
			//         form.classList.add('was-validated');
			//       }, false);
			//     });
			// }, false);

			$('form').submit(function(){
				event.preventDefault();
				event.stopPropagation();
				$('.status-text').load(signUp, function(){
					console.log($('changed'));
				});
				// console.log($('.status-text').text());
			});

			// $('.status-text').on('change', function() {
			// 	console.log('changed' + $('.status-text').text());
			// });

			// $('.status-text').change(function() {
			// 	console.log(this.text());
			// 	if(this.text() == 'incorrect username or password.') {

			// 	} else if(this.text() == 'User does not exist.') {
			// 		$('#mail').attr('style="border: 1px solid red !important; font-size: 30px !important"');
			// 	}
			// });
})