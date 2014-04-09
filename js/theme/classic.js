
var classic_lightgray 			= '#F9F9F9';
var classic_blue 				= '#719AB8';
var classic_lightblue 			= '#C6D7E3';
var classic_lullaby 			= '#F0F8FF';
var classic_inspiration 		= '#DCDCDC';

/* NOT USED FOR NOW */
var classic_prestigious_blue 	= '#007373';
var classic_twine 				= '#DEB887';
var classic_moon_grey 			= '#A38552';
var classic_east_coast_blue 	= '#8FBC8F';
var classic_dark 				= '#82745A'; 
var classic_darkblue 			= '#4E728D';
var classic_white 				= '#fffffe';


function classic_style()
{
	color_title(classic_lullaby, classic_blue);
	color_navbar(classic_inspiration, classic_blue);

	color_hover_inside_navbar(classic_blue, classic_lullaby);
	color_hover_caret_navbar(classic_blue, classic_lullaby);
	var shadow =  $(".list-group-item").css('background-color');	
	color_hover_sidebar(classic_lightgray, classic_blue, classic_lightblue, shadow);
	color_hover_button (classic_lightgray, classic_blue);

	color_badge(classic_blue,classic_lullaby);
	color_square_badge(classic_blue,classic_lullaby);
	
	color_widget(shadow2);
	set_box_color_strip('classic');
	color_first_char(classic_blue);
	color_blockquote(classic_blue, classic_blue, false);	

 	
}
