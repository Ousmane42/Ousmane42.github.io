$(function(){
	$('#premier').click(function(){
		$('button:not(#premier)').hide();
		// $(this).show();
		$(this).css('color', 'blue');
		$(this).css('background-color', '#FFD700');
		$(this).css('font-family', 'Arial');
		$(this).css('font-size', '16px');
		$(this).val(function(){
			$(this).html('Je suis là !');
			$(this).css('border', '2px solid black');
			$(this).css('border-radius', '10px');
		});
	});

	// $('#premier'.click(function){
		// $('button').show();
	// });
});

$(function(){

});