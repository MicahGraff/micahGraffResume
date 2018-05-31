$(document).ready(function() {


/* GLOBAL VARIABLES */
var onPage = false;
var whichProj = 0;

/* CALL TO FUNCTIONS */
/* Most of these hovers can be done easier with CSS :hover function, but wanted to review using JS */

	/* ALL PAGES */
$("#navbar ul li a").hover(onNavHover,offNavHover);
$("footer div ul li a img").hover(onSocialHover,offSocialHover);

	/* HOME PAGE */
$("#projquickview div").hover(onProjViewHover,offProjViewHover);

	/* PROJECTS PAGE */
$("#projectList div ul div li").hover(onListHover,offListHover);


/* FUNCTIONS */
function onNavHover()
{
	onPage = $(this).hasClass("stayUnderlined");
	if (!onPage)
	{
		$(this).addClass("underlined");
	}
}

function offNavHover()
{
	if (!onPage)
	{
    	$(this).removeClass("underlined");
	}
}


function onProjViewHover()
{
	$(this).children("a").children("img").css("transform", "translate(-16.7%, -20%)");
	$(this).children("a").children("img").css("height", "150%");
	$(this).children("a").children("img").css("width", "150%");

	$(this).children("a").children("img").addClass("tinted");
	$(this).children("p:first").fadeIn(1).css("font-size", "25px");
	$(this).children("p:last").fadeIn(1).css("font-size", "23px");
}

function offProjViewHover()
{
	$(this).children("a").children("img").css("height", "100%");
	$(this).children("a").children("img").css("width", "100%");
	$(this).children("a").children("img").css("transform", "none");
	$(this).children("a").children("img").removeClass("tinted");
	$(this).children("p:first").fadeOut(500).css("font-size", "23px");
	$(this).children("p:last").fadeOut(500).css("font-size", "20px");
}


function onListHover()
{
	$(this).children("span:first").removeClass("hide");
	$(this).children("span:last").addClass("hide");

	if ($(this).is("#projectList div ul div:nth-child(2) a li"))
	{
		$("#projImages1 img:nth-child(1)").addClass("hide");
		$("#projImages1 img:nth-child(2)").removeClass("hide");
		$("#projImages2 img:nth-child(1)").addClass("hide");
		$("#projImages2 img:nth-child(2)").removeClass("hide");
		$("#projImages1 img:nth-child(3)").addClass("hide");
		$("#projImages1 img:nth-child(4)").addClass("hide");
		$("#projImages1 img:nth-child(5)").addClass("hide");
		$("#projImages1 img:nth-child(6)").addClass("hide");
		$("#projImages1 img:nth-child(7)").addClass("hide");
		$("#projImages2 img:nth-child(3)").addClass("hide");
		$("#projImages2 img:nth-child(4)").addClass("hide");
		$("#projImages2 img:nth-child(5)").addClass("hide");
		$("#projImages2 img:nth-child(6)").addClass("hide");
		$("#projImages2 img:nth-child(7)").addClass("hide");
	}
	if ($(this).is("#projectList div ul div:nth-child(3) a li"))
	{
		$("#projImages1 img:nth-child(1)").addClass("hide");
		$("#projImages1 img:nth-child(3)").removeClass("hide");
		$("#projImages2 img:nth-child(1)").addClass("hide");
		$("#projImages2 img:nth-child(3)").removeClass("hide");
		$("#projImages1 img:nth-child(2)").addClass("hide");
		$("#projImages1 img:nth-child(4)").addClass("hide");
		$("#projImages1 img:nth-child(5)").addClass("hide");
		$("#projImages1 img:nth-child(6)").addClass("hide");
		$("#projImages1 img:nth-child(7)").addClass("hide");
		$("#projImages2 img:nth-child(2)").addClass("hide");
		$("#projImages2 img:nth-child(4)").addClass("hide");
		$("#projImages2 img:nth-child(5)").addClass("hide");
		$("#projImages2 img:nth-child(6)").addClass("hide");
		$("#projImages2 img:nth-child(7)").addClass("hide");
	}
	if ($(this).is("#projectList div ul div:nth-child(4) a li"))
	{
		$("#projImages1 img:nth-child(1)").addClass("hide");
		$("#projImages1 img:nth-child(4)").removeClass("hide");
		$("#projImages2 img:nth-child(1)").addClass("hide");
		$("#projImages2 img:nth-child(4)").removeClass("hide");
		$("#projImages1 img:nth-child(3)").addClass("hide");
		$("#projImages1 img:nth-child(2)").addClass("hide");
		$("#projImages1 img:nth-child(5)").addClass("hide");
		$("#projImages1 img:nth-child(6)").addClass("hide");
		$("#projImages1 img:nth-child(7)").addClass("hide");
		$("#projImages2 img:nth-child(3)").addClass("hide");
		$("#projImages2 img:nth-child(2)").addClass("hide");
		$("#projImages2 img:nth-child(5)").addClass("hide");
		$("#projImages2 img:nth-child(6)").addClass("hide");
		$("#projImages2 img:nth-child(7)").addClass("hide");
	}
	if ($(this).is("#projectList div ul div:nth-child(6) a li"))
	{
		$("#projImages1 img:nth-child(1)").addClass("hide");
		$("#projImages1 img:nth-child(5)").removeClass("hide");
		$("#projImages2 img:nth-child(1)").addClass("hide");
		$("#projImages2 img:nth-child(5)").removeClass("hide");
		$("#projImages1 img:nth-child(3)").addClass("hide");
		$("#projImages1 img:nth-child(4)").addClass("hide");
		$("#projImages1 img:nth-child(2)").addClass("hide");
		$("#projImages1 img:nth-child(6)").addClass("hide");
		$("#projImages1 img:nth-child(7)").addClass("hide");
		$("#projImages2 img:nth-child(3)").addClass("hide");
		$("#projImages2 img:nth-child(4)").addClass("hide");
		$("#projImages2 img:nth-child(2)").addClass("hide");
		$("#projImages2 img:nth-child(6)").addClass("hide");
		$("#projImages2 img:nth-child(7)").addClass("hide");
	}
	if ($(this).is("#projectList div ul div:nth-child(7) a li"))
	{
		$("#projImages1 img:nth-child(1)").addClass("hide");
		$("#projImages1 img:nth-child(6)").removeClass("hide");
		$("#projImages2 img:nth-child(1)").addClass("hide");
		$("#projImages2 img:nth-child(6)").removeClass("hide");
		$("#projImages1 img:nth-child(3)").addClass("hide");
		$("#projImages1 img:nth-child(4)").addClass("hide");
		$("#projImages1 img:nth-child(5)").addClass("hide");
		$("#projImages1 img:nth-child(2)").addClass("hide");
		$("#projImages1 img:nth-child(7)").addClass("hide");
		$("#projImages2 img:nth-child(3)").addClass("hide");
		$("#projImages2 img:nth-child(4)").addClass("hide");
		$("#projImages2 img:nth-child(5)").addClass("hide");
		$("#projImages2 img:nth-child(2)").addClass("hide");
		$("#projImages2 img:nth-child(7)").addClass("hide");
	}
	if ($(this).is("#projectList div ul div:nth-child(8) a li"))
	{
		$("#projImages1 img:nth-child(1)").addClass("hide");
		$("#projImages1 img:nth-child(7)").removeClass("hide");
		$("#projImages2 img:nth-child(1)").addClass("hide");
		$("#projImages2 img:nth-child(7)").removeClass("hide");
		$("#projImages1 img:nth-child(3)").addClass("hide");
		$("#projImages1 img:nth-child(4)").addClass("hide");
		$("#projImages1 img:nth-child(5)").addClass("hide");
		$("#projImages1 img:nth-child(6)").addClass("hide");
		$("#projImages1 img:nth-child(2)").addClass("hide");
		$("#projImages2 img:nth-child(3)").addClass("hide");
		$("#projImages2 img:nth-child(4)").addClass("hide");
		$("#projImages2 img:nth-child(5)").addClass("hide");
		$("#projImages2 img:nth-child(6)").addClass("hide");
		$("#projImages2 img:nth-child(2)").addClass("hide");
	}
}

function offListHover()
{
	$(this).children("span:first").addClass("hide");
	$(this).children("span:last").removeClass("hide");
}


function onSocialHover()
{
	$(this).addClass("tinted");
}

function offSocialHover()
{
	$(this).removeClass("tinted");
}


});