$(document).ready(function(){
	$('.set-custom-insert').on('change', function() {
		var el = $(this);
		var tar = $('.denovo-insert-size');
		if (el.prop('checked')) {
			tar.prop('disabled', false);
		} else {
			tar.prop('disabled', true);
		}
	});
	$('#switch-channel-btn').on('click', function() {
		$('.sample-channel').toggleClass('hide');
	});
});
