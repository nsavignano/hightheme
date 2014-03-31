
var talisman_aliceblue 	= '#D6E6CB';
var talisman_empty 		= '';
var talisman_inherit 	= 'inherit';
var talisman_solid1		= '1px solid #999';
var	talisman_shadow1 	= 'rgba(51, 51, 51, 0.1)';
var talisman_shadow4 	= 'rgba(51, 51, 51, 0.4)';
var talisman_shadow6 	= 'rgba(51, 51, 51, 0.6)';
var talisman_shadow8 	= 'rgba(51, 51, 51, 0.8)';

var talisman_white 		= '#fffffe';
var talisman_green 		= '#83CCEA';
var talisman_darkblue 	= '#4E728D';
var talisman 			= '#F5CA96';
var talisman_lightgray 	= '#F9F9F9';
var talisman_dark 		= '#82745A'; 

var talisman_fire_station	= '#FF0000';
var talisman_mandarin_orange = '#FF7A00';
var talisman_fog 			= '#FFEFD5';
 

function talisman_navbar()
{
	$("#brand-pre").css('color', talisman_fire_station);	// prefix. Title of the company	
	$("#brand-suf").css('color', talisman_mandarin_orange); 	// Suffix. Title of the company
	$('.header-txt').css('color',talisman);	// Texte inside the navbar 
	$('.navbar-default').css('background',talisman_fog);		// Navbar
	$('.navbar-default').css('border-bottom-color',talisman_white); // Navbar	
	$('.header-txt').css('border-bottom-color',talisman_white);		// Caret: Texte inside the navbar 
	$('.header-txt').css('border-top-color',talisman_white);		// Caret: Texte inside the navbar 
	$(".sidebar-heading").css('border-color',talisman_inherit); 				// header inside the navbar
	$(".caret").css('border-top','12px solid'+talisman); 
	$('.dropdown-menu').css('border-top','2px solid '+talisman_green);	// le top of the drop down menu

	$(".hidden-phone").css('color', talisman); 	// Suffix. Title of the company

    $(".hidden-phone").hover(function() {
      $(this).css('color', talisman_green); 
      $(this).css('border-top-color', talisman_inherit); 
      $(this).css('border-bottom-color', talisman_inherit);
      },function(){
	      $(this).css('color', talisman); 
      $(this).css('border-top-color', talisman_inherit); 
      $(this).css('border-bottom-color', talisman_inherit);
    }); 

    $(".header-txt").hover(function() { // Navbar style
      $(this).css('color', talisman); 
      $(this).css('border-top-color', talisman); 
      $(this).css('border-bottom-color', talisman);  
      },function(){ // Navbar style  caret
      $(this).css('color', talisman); 
      $(this).css('border-top-color', talisman_white); 
      $(this).css('border-bottom-color', talisman_white); 
    });
    
    $(".caret").hover(function() {
      $(this).css('color', talisman_green); 
      $(this).css('border-top-color', talisman_green); 
      $(this).css('border-bottom-color', talisman_green);
      },function(){
	      $(this).css('color', talisman); 
      $(this).css('border-top-color', talisman); 
      $(this).css('border-bottom-color', talisman);
    });	
}
function talisman_sidebar()
{
	$('.sidebar-heading').css('color', talisman);	// text Header Sidebar
	$(".list-group-item").css('color', talisman_lightgray);	// Text inside the sidebar	
  	$(".list-group-item").css('background-color',talisman_shadow4);	// Text inside the sidebar 
	$('a.list-group-item').mouseover(function () {  // Text inside the sidebar
	      $(this).css('border-right','5px solid'+talisman_green); 
	      $(this).css('background-color',talisman_dark);                                   
	});  
	$('a.list-group-item').click(function () {  	// Text inside the sidebar
	      $(this).css('border-right',talisman_green);  
	      $(this).css('background-color',talisman_dark);	
	      // console.log('list-group-item');                                     
	});

	$('a.list-group-item').mouseleave(function () {  // Text inside the sidebar
	      $(this).css('border-right',talisman_empty);  
	      $(this).css('background-color',talisman_empty);	                                     
	});	
}
function talisman_button () {
	$(".btn-default").css('color',talisman_green);	// button style	
	$('.btn-default').css("background-color",talisman_shadow4);	// button style	
	$('.btn-default').css('border','0.1px solid'+talisman_lightgray);	// button style	
	$(".btn-default").hover(function(){		// button style
	  	$(this).css("background-color",talisman_white);
		$(this).css('color',talisman_green);		  
	  },function(){
	  	$(this).css("background-color",talisman_shadow4);
		$(this).css('color',talisman_shadow4);		  
	});	
}
function talisman_badge(){
	$('.badge').css('color', talisman_dark); 		// bagde : little oval form	
	$(".badge").css('background-color', talisman_green);		// bagde : little oval form
	$('.square-badge').css('background-color',talisman_green );	// square inside the dropdown
	$('.square-badge').css('color',talisman_white ); // square inside the dropdown		
}
function talisman_widget() {
	$('.widget').css('opacity','0.6'); // .active > a:focus
	$(".widget").css('background-color', talisman_shadow4); 		// Widget : texte inside the block	
}
function talisman_blockquote() {
	$('blockquote').css('border',talisman_inherit); 
	$('.pull-right-ns').css('border-right', '5px solid'+talisman_green);	//  blockquote : texte inside another kind of block  
	$('.pull-left-ns').css('border-left', '5px solid'+talisman);  	//  blockquote : texte inside another kind of block 	
	$('.pull-right-ns').css('border', '2px groove #bbb'); 	
}
function talisman_style()
{

	talisman_navbar();
	talisman_sidebar();
	talisman_button ();
	talisman_badge();
	talisman_widget();
	talisman_blockquote();	

	$('#talisman').css('background-color',talisman_aliceblue);
	$(".tag").css('color', talisman_green); 			// First letter in the texte

	// console.log($('#sidebar'));
	if (parseInt(document.documentElement.clientWidth) < 768) { 
		//alert(document.documentElement.clientWidth);
	    	talisman_small_device_setting(); // when starting
	} 	
}

function talisman_small_device_setting () 
{

	// don’t download complicated script
	// use low-source images instead of full-source ones		
	$('.header-txt').css('color',black);
	$('.header-txt').mouseover(function () {	// Navbar style
	      $(this).css('color', talisman_green); 
	      $(this).css('border-top-color', talisman_dark); 
	      $(this).css('border-bottom-color', talisman_white);                   
	});  
	$('.header-txt').mouseleave(function () {	// Navbar style  caret
	      $(this).css('color', talisman_green); 
	      $(this).css('border-top-color', black); 
	      $(this).css('border-bottom-color', black);                   
	});		
}