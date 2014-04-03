

var salmon_white 		= '#fffffe';
var salmon_blue 		= '#83CCEA';
var salmon_dark_blue 	= '#4E728D';
var salmon 				= '#F5CA96';
var salmon_lightgray 	= '#F9F9F9';

var salmon_grey_dark 		= '#82745A'; 
var salmon_greige			= '#696969';
var salmon_monumental_white = '#FFFAF0';
var salmon_best_friends 	= '#FFA500';


function salmon_style()
{
	color_title(salmon_white, salmon_grey_dark);
	color_navbar(salmon, sand_white);

	color_hover_inside_navbar(salmon_white, salmon_blue);
	color_hover_caret_navbar(salmon_blue, salmon_white);
	var shadow =  $(".list-group-item").css('background-color');	
	color_hover_sidebar(salmon_white, salmon_blue, salmon_grey_dark, shadow); 
	color_hover_button (salmon_blue, salmon_white);

	color_badge(salmon_dark_blue,salmon_blue);
	color_square_badge(salmon_dark_blue,salmon_blue);

	color_widget(shadow4);
	set_box_color_strip('salmon');
	color_first_char(salmon_blue);
	color_blockquote(salmon, salmon_blue, true);	

}