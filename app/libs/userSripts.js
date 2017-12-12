$(document).ready(function(){
	$('.trigger').click(function(){
		$(this).next('.clickButton').trigger('click');
	});
});