$(document).ready(function() {

	$("#returnMain").hover(onReturnHover,offReturnHover);

	function onReturnHover()
	{
		$(this).css("text-decoration","underline");
	}

	function offReturnHover()
	{
		$(this).css("text-decoration","none");
	}

});