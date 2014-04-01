
/*
var azur 		= '#000080'; 
var black		= '#000000';
var blue 		= '#719AB8';
var beige 		= '#D8C49E';
var brown 		= '#BB8C5F';
var cinnamon 	= '#BD3300';
var darkbrown 	= '#A05000';
var darkred 	= '#d04f4f';
var darkblue 	= '#4E728D';
var darkgreen 	= '#509520';
var darksand 	= '#82745A'; 
var darkoceane	= '#A6A6FF'; 
var darkyellow  = '#E6E68A';
var darkorange 	= '#FF9933';

var darksalmon 	= '#DC9456';
var emeraude 	= '#56bc76';
var green 		= '#75AF28';
var gold 		= '#FFB81F';
var gray 		= '#999999';
var ivoire 		= '#FFEBCC';
var lime 		= '#8CBF26';
var lightblue 	= '#C6D7E3';
var lightorange = '#fff8e4';
var lightgray 	= '#F9F9F9';
var lightrose 	= '#EDB8A6';
var magenta 	= '#FF3399';
var maple 		= '#b98e61';
var orange 		= '#FFA347';
var pink 		= '#E671B8';
var purple 		= '#A700AE';
var redocre 	= '#e5603b';
var rose 		= '#FF4C94';
var red 		= '#ff0000';
var skin 		= '#FFD9B2';
var sand 		= '#F5CA96';
var silver 		= '#DBC9A6';
var solid1		= '1px solid #999';
var tlmgray 		= '#30481F';
var tlmgreen 		= '#A3D114';
var tlmlightgreen 	= '#7FFF00';
var tlmdarkgray		= '#C1CFB7';
var tlmred        	= '#CC0000';
var turquoise 		= '#00FFFF';
var white 		= '#fffffe';
var yellow 		= '#FFFF99';
var yellowocre 	= '#F5BF18';
*/

var aliceblue 	= '#D6E6CB';
var inherit 	= 'inherit';
var empty 		= '';
var	shadow1 	= 'rgba(51, 51, 51, 0.1)';
var	shadow2 	= 'rgba(51, 51, 51, 0.1)';
var shadow4 	= 'rgba(51, 51, 51, 0.4)';
var shadow6 	= 'rgba(51, 51, 51, 0.6)';
var shadow8 	= 'rgba(51, 51, 51, 0.8)';

function color_title(prefix, suffix)
{
	$("#brand-pre").css('color', prefix);				// prefix. Title of the company	
	$("#brand-suf").css('color', suffix); 	// Suffix. Title of the company
}
function color_navbar(back, border)
{

	$('.navbar-default').css('background',back);			// Navbar
	$('.navbar-default').css('border-bottom-color',border); // Navbar
	$('.dropdown-menu').css('border-top','2px solid '+border);	// le top of the drop down menu
}
/* 2D / 3D Box inside the dropdown Menu bar */
function color_square_badge(color, back)
{
	$('.square-badge').css('color',color ); // square inside the dropdown
	$(".square-badge").css('background-color', back);		// bagde : little oval form
}
/* Badge on Menu Bar and side bar */
function color_badge(color, back)
{
	$('.badge').css('color', color); 		// badge : little oval form	
    $('.badge').css('background-color', back); 	
}
/* Widget Style */
function color_widget(shadow) {
	$('.widget').css('opacity','0.6'); // .active > a:focus
	$(".widget").css('background-color', shadow); 		// Widget : texte inside the block	
}
/* Blockquote Style */
function color_blockquote(color ,solid, border ) {
	$('blockquote').css('border',inherit); 
	$('.pull-left-ns > a > h1').css('color', color);	
  	if (border) $('.pull-right-ns').css('border', '2px groove #bbb'); 
	$('.pull-left-ns').css('border-left', '5px solid'+solid);  	
	$('.pull-right-ns').css('border-right', '5px solid'+solid);	//  frame around the blockquote
		
}
function color_hover_caret_navbar (color, hover)
{

	$(".caret").css('border-top','12px solid'+color);
    $(".caret").hover(function() {
      $(this).css('color', hover); 
      $(this).css('border-top-color', hover); 
      $(this).css('border-bottom-color', hover);
      },function(){
	      $(this).css('color', color); 
      $(this).css('border-top-color', color); 
      $(this).css('border-bottom-color', color);
    });	 
}
/* Title inside the menu bar */
function color_hover_inside_navbar(color, hover)
{

	$('.hidden-phone').css('color',color);
    $(".hidden-phone").hover(function() {
      $(this).css('color', hover); 
      $(this).css('border-top-color', inherit); 
      $(this).css('border-bottom-color', inherit);
      },function(){
	      $(this).css('color', color); 
      $(this).css('border-top-color', inherit); 
      $(this).css('border-bottom-color', inherit);
    });	
}
/*  Button Style */
function color_hover_button (color, hover) {
	$(".btn-default").css('color',color);	// button style	
	$('.btn-default').css("background-color",shadow4);	// button style	
	$('.btn-default').css('border','0.1px solid'+color);	// button style	
	$(".btn-default").hover(function(){		// button style
	  	$(this).css("background-color",hover);
		$(this).css('color',shadow4);		  
	  },function(){
	  	$(this).css("background-color",shadow4);
		$(this).css('color',color);		  
	});	
}
function color_hover_sidebar(color, hover, click)
{
	$('.sidebar-heading').css('color', color);				// text Header Sidebar
	$(".sidebar-heading").css('border-color',hover); 		// line under the text Hearder	
	$(".list-group-item").css('color', color);				// Sidebar	Title
  	$(".list-group-item").css('background-color',shadow4);	 
  
	$('a.list-group-item').click(function () {  	// Text inside the sidebar
	      $(this).css('border-right',click);  
	      $(this).css('background-color',click);	                                    
	});
    $("a.list-group-item").hover(function() {
	      $(this).css('border-right','5px solid'+hover); 
	      $(this).css('background-color',click);  
	      $(this).css('color',hover);
      },function(){
	      $(this).css('border-right',empty);  
	      $(this).css('background-color',empty);
	     $(".list-group-item").css('color', color);
    });	
}
function set_box_color_strip(id)
{
	$('#'+id).css('background-color',aliceblue);
}
function color_first_char(color)
{
	$(".tag").css('color', color); 			// First letter in the texte
}
function init_box_color_strip()
{

	var pattern = 'classic';
	$("#"+pattern+" > #pattern1").css('background-color', classic_lullaby); // init the color Box into the Dropdown menu
	$("#"+pattern+" > #pattern2").css('background-color', classic_inspiration);
	$("#"+pattern+" > #pattern3").css('background-color', classic_prestigious_blue);	
	var pattern = 'sand';
	$("#"+pattern+" > #pattern1").css('background-color', sand_cinnamon); // init the color Box into the Dropdown menu
	$("#"+pattern+" > #pattern2").css('background-color', sand_kraft);
	$("#"+pattern+" > #pattern3").css('background-color', sand_green);		
	var pattern = 'oceane';
	$("#"+pattern+" > #pattern1").css('background-color', oceane); // init the color Box into the Dropdown menu
	$("#"+pattern+" > #pattern2").css('background-color', oceane_red);
	$("#"+pattern+" > #pattern3").css('background-color', oceane_dark);
	var pattern = 'salmon';
	$("#"+pattern+" > #pattern1").css('background-color', salmon); // init the color Box into the Dropdown menu
	$("#"+pattern+" > #pattern2").css('background-color', salmon_monumental_white);
	$("#"+pattern+" > #pattern3").css('background-color', salmon_greige);
	var pattern = 'talisman';
	$("#"+pattern+" > #pattern1").css('background-color', talisman_mandarin_orange); // init the color Box into the Dropdown menu
	$("#"+pattern+" > #pattern2").css('background-color', talisman_fog);
	$("#"+pattern+" > #pattern3").css('background-color', talisman_fire_station);	
	var pattern = 'turquoise';
	$("#"+pattern+" > #pattern1").css('background-color', turquoise); // init the color Box into the Dropdown menu
	$("#"+pattern+" > #pattern2").css('background-color', turquoise_yellow);
	$("#"+pattern+" > #pattern3").css('background-color', turquoise_peacock);		
}
	

function theme_settings(theme) {


	if (theme == 'oceane') { 		
		oceane_style();
		return;
	}	
	if (theme == 'salmon') {  
		salmon_style();
		return;
	}
	if (theme == 'sand') { 
		sand_style();
		return;
	}
	if (theme == 'talisman') { ;
		talisman_style();
		return;
	}	
	if (theme == 'turquoise') { 		
		turquoise_style();
		return;
	}			
	classic_style();

}  
$(window).resize(function(e)
{
	var style 		= settingsState.background != undefined? 	settingsState.background : '';
	change_style(style);
	e.preventDefault();
	e.stopPropagation();
	// alert(document.documentElement.clientWidth);	        
});
