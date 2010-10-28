/* Greybox Redux
 * Required: http://jquery.com/
 * Written by: John Resig
 * Based on code by: 4mir Salihefendic (http://amix.dk)
 * License: LGPL (read more in LGPL.txt)
 */

var GB_DONE = false;
var GB_HEIGHT = 400;
var GB_WIDTH = 400;
var GB_TOP = 100;
var GB_WINDOW = '';

var callback_func;

function GB_show(caption, url, height, width, window_type) 
{
  GB_HEIGHT = height || 400;
  GB_WIDTH = width || 400;
  GB_WINDOW = window_type;

  if(!GB_DONE) {
    $(document.body).append("<div id='GB_overlay'></div><div id='GB_window_" + GB_WINDOW +"'></div>");
    $("#GB_window_" + GB_WINDOW +" img").click(GB_hide);
    $("#GB_overlay").click(GB_hide);

	var SizeWH = getSizeWH();
	var SizeW = SizeWH[0];
	var SizeH = SizeWH[1];

	var ScrollXY = getScrollXY();
	var ScrollX = ScrollXY[0];
	var ScrollY = ScrollXY[1];

	$("#GB_overlay").css({width: ScrollX + SizeW +'px', height: ScrollY + SizeH +'px'});

    GB_DONE = true;
  }

  $("#GB_frame").remove();
  $("#GB_window_" + GB_WINDOW).append("<iframe scrolling='no' frameborder='0' border='0' allowTransparency='true' cellspacing='0' id='GB_frame' src='"+url+"'></iframe>");

  $("#GB_caption").html(caption);
  $("#GB_overlay").show();
  GB_position();

  if(GB_ANIMATION) 
    $("#GB_window_" + GB_WINDOW).slideDown("slow");
  else
    $("#GB_window_" + GB_WINDOW).show();
}

function GB_hide() 
{
    GB_DONE = false;
    $("#GB_window_" + GB_WINDOW +",#GB_overlay").hide();
	
	if (callback_func) callback_func();
}


// sets a function to be called when the greybox does it's hide
// 		- 	currently used by the video player greybox to 
// 			kill the video when a user closes the greybox
function GB_set_hide_callback(func)
{
	callback_func = func;
}

function getScrollXY() {
	var scrOfX = 0, scrOfY = 0;
	if( typeof( window.pageYOffset ) == 'number' ) {
		//Netscape compliant
		scrOfY = window.pageYOffset;
		scrOfX = window.pageXOffset;
	} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
		//DOM compliant
		scrOfY = document.body.scrollTop;
		scrOfX = document.body.scrollLeft;
	} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
		//IE6 standards compliant mode
		scrOfY = document.documentElement.scrollTop;
		scrOfX = document.documentElement.scrollLeft;
	}
	return [ scrOfX, scrOfY ];
}

function getSizeWH() {
	var myWidth = 0, myHeight = 0;
	if( typeof( window.innerWidth ) == 'number' ) {
		//Non-IE
		myWidth = window.innerWidth;
		myHeight = window.innerHeight;
	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		//IE 6+ in 'standards compliant mode'
		myWidth = document.documentElement.clientWidth;
		myHeight = document.documentElement.clientHeight;
	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		//IE 4 compatible
		myWidth = document.body.clientWidth;
		myHeight = document.body.clientHeight;
	}
	return [ myWidth, myHeight ];
}

function GB_position() {
	var ScrollXY = getScrollXY();
	var ScrollX = ScrollXY[0];
	var ScrollY = ScrollXY[1];

	var SizeWH = getSizeWH();
	var SizeW = SizeWH[0];
	var SizeH = SizeWH[1];

	var GB_PADDING = 91;

	var de = document.documentElement;
	var w = self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	$("#GB_window_" + GB_WINDOW).css({width:GB_WIDTH+"px",height:GB_HEIGHT+"px",
	left: (ScrollX + ((SizeW - GB_WIDTH - GB_PADDING) / 2)) + "px",top: (ScrollY + ((SizeH - GB_HEIGHT - GB_PADDING) / 2)) + "px" });
	$("#GB_frame").css("height",GB_HEIGHT + "px");
}
