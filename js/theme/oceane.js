

var oceane_white 		= '#fffffe';
var oceane 				= '#000080';
var oceane_lightgray 	= '#F9F9F9'; 

var oceane_ivoire 	= '#FFEBCC';
var oceane_red  	= '#CC0000';
var oceane_skin 	= '#FFD9B2';
var oceane_sand 	= '#F5CA96';
var oceane_dark		= '#A6A6FF'; 
var oceane_yellow 	= '#F5BF18';


function oceane_sidebar()
{
	$('.sidebar-heading').css('color', oceane);	// text Header Sidebar
	$(".list-group-item").css('color', oceane_lightgray);	// Text inside the sidebar	
  	$(".list-group-item").css('background-color',oceane_shadow4);	// Text inside the sidebar 
	$('a.list-group-item').mouseover(function () {  // Text inside the sidebar
	      $(this).css('border-right','5px solid'+oceane_red); 
	      $(this).css('background-color',oceane_dark);                                   
	});  
	$('a.list-group-item').click(function () {  	// Text inside the sidebar
	      $(this).css('border-right',oceane_red);  
	      $(this).css('background-color',oceane_dark);	
	      // console.log('list-group-item');                                     
	});

	$('a.list-group-item').mouseleave(function () {  // Text inside the sidebar
	      $(this).css('border-right',oceane_empty);  
	      $(this).css('background-color',oceane_empty);	                                     
	});	
}



function oceane_style()
{
	color_title(oceane_white, oceane);
	color_navbar(oceane_dark, oceane_white);

	color_hover_inside_navbar(oceane, oceane_red);
	color_hover_caret_navbar(oceane, oceane_red);	
	color_hover_sidebar(oceane_lightgray, oceane_red, oceane_dark);
	color_hover_button (oceane_red, oceane_white);

	color_badge(oceane_white,oceane_red);
	color_square_badge(oceane_white,oceane_red);

	color_widget(shadow4);
	set_box_color_strip('oceane');
	color_first_char(oceane_red);
	color_blockquote(oceane_red, oceane, false);	
	
 	
}