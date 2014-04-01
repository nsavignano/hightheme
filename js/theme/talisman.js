

var talisman_white 		= '#fffffe';
var talisman_green 		= '#83CCEA';
var talisman_darkblue 	= '#4E728D';
var talisman 			= '#F5CA96';
var talisman_lightgray 	= '#F9F9F9';
var talisman_dark 		= '#82745A'; 

var talisman_fire_station	= '#FF0000';
var talisman_mandarin_orange = '#FF7A00';
var talisman_fog 			= '#FFEFD5';
 


function talisman_style()
{
	color_title(talisman_dark, talisman_fire_station);
	color_navbar(shadow4, talisman_dark);

	color_hover_inside_navbar(talisman_dark, talisman_fire_station);
	color_hover_caret_navbar(talisman_fire_station, talisman_white);	
	color_hover_sidebar(talisman, talisman_fire_station, talisman_mandarin_orange); 
	color_hover_button (talisman_fire_station, talisman_white);

	color_badge(talisman_dark,talisman_mandarin_orange);
	color_square_badge(talisman_dark,talisman_mandarin_orange);

	color_widget(shadow4);
	set_box_color_strip('talisman');
	color_first_char(talisman_fire_station);
	color_blockquote(talisman, talisman_mandarin_orange, false);	

}