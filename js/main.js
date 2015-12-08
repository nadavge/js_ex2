$(document).ready(function() {
	var container = document.createElement('div');
	$(container).attr('id', 'container').addClass('container');
	$('body').append(container);

	$(container).load('resources/app.html');
});

