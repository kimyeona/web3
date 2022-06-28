/*accordion*/
$(document).ready(function(){
	var allPanels = $('.accordion li div');

var id;
	allPanels.hide();
	$('#list li p').click(function() {
		if($(this).closest('li').attr('id') == id) {
			$(this).parent('li').find('div').toggle('slow');
		}
		else {
			allPanels.slideUp('slow');
			$(this).parent('li').find('div').toggle('slow');
			id = $(this).closest('li').attr('id');
		}
		return false;
	});
});
