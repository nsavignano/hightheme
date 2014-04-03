

var sand_white 		= '#fffffe';
var sand 			= '#F5CA96';
var sand_lightgray 	= '#F9F9F9';
var sand_dark 		= '#82745A'; 

var sand_green 		= '#A3D114';
var sand_kraft 		= '#DEB887';
var sand_cinnamon 	= '#CD853F';
var sand_maple 		= '#A6522D'; 

function sand_style()
{
	color_title(sand_white, sand);
	color_navbar(sand_dark, sand_white); // sand_green

	color_hover_inside_navbar(sand, sand_green);
	color_hover_caret_navbar(sand, sand_green);
	var shadow =  $(".list-group-item").css('background-color');	
	color_hover_sidebar(sand, sand_green, sand_dark, shadow);
	color_hover_button (sand_green, sand_white);

	color_badge(sand_white,sand_green);
	color_square_badge(sand_white,sand_green);

	color_widget(shadow2);
	set_box_color_strip('sand');
	color_first_char(sand_green);
	color_blockquote(sand_dark, sand_green, true);	

}