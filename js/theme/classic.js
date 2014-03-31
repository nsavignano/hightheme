
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


function classic_navbar()
{
	$("#brand-pre").css('color', classic_lullaby);				// prefix. Title of the company	
	$("#brand-suf").css('color', classic_blue); 	// Suffix. Title of the company
	$('.navbar-default').css('background',classic_inspiration);			// Navbar
	$('.navbar-default').css('border-bottom-color',classic_inspiration); // Navbar
	$('.dropdown-menu').css('border-top','2px solid '+classic_inspiration);	// le top of the drop down menu
}
/* 2D / 3D Box inside the dropdown Menu bar */
function classic_square_badge()
{
	$('.square-badge').css('color',classic_blue ); // square inside the dropdown
	$(".square-badge").css('background-color', classic_lullaby);		// bagde : little oval form
}
/* Badge on Menu Bar and side bar */
function classic_badge()
{
	$('.badge').css('color', classic_blue); 		// badge : little oval form	
    $('.badge').css('background-color', classic_lullaby); 	
}
/* Widget Style */
function classic_widget() {
	$('.widget').css('opacity','0.6'); // .active > a:focus
	$(".widget").css('background-color', shadow2); 		// Widget : texte inside the block	
}
/* Blockquote Style */
function classic_blockquote() {
	$('blockquote').css('border',inherit); 
  
	$('.pull-left-ns').css('border-left', '5px solid'+classic_blue);  	
	$('.pull-right-ns').css('border', '2px groove #bbb'); 	
	$('.pull-right-ns').css('border-right', '5px solid'+classic_blue);	//  frame around the blockquote
}
function classic_style()
{

	classic_navbar();
	hover_inside_navbar(classic_blue, classic_lullaby);
	hover_caret_navbar(classic_blue, classic_lullaby);	
	hover_sidebar(classic_lightgray, classic_blue, classic_lightblue);
	hover_button (classic_lightgray, classic_blue);
	classic_badge();
	classic_square_badge();
	classic_widget();
	classic_blockquote();


	$('#classic').css('background-color',aliceblue);
	$(".tag").css('color', classic_blue); 			// First letter in the texte
	$('.pull-right-ns > h1').css('color', classic_lightblue);
 	
}
