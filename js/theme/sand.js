
var sand_aliceblue 	= '#D6E6CB';
var sand_empty 		= '';
var sand_inherit 	= 'inherit';
var sand_solid1		= '1px solid #999';
var	sand_shadow1 	= 'rgba(51, 51, 51, 0.1)';
var sand_shadow4 	= 'rgba(51, 51, 51, 0.4)';
var sand_shadow6 	= 'rgba(51, 51, 51, 0.6)';
var sand_shadow8 	= 'rgba(51, 51, 51, 0.8)';

var sand_white 		= '#fffffe';
var sand 			= '#F5CA96';
var sand_lightgray 	= '#F9F9F9';
var sand_dark 		= '#82745A'; 

var sand_green 		= '#A3D114';
var sand_kraft 		= '#DEB887';
var sand_cinnamon 	= '#CD853F';
var sand_maple 		= '#A6522D'; 


function sand_navbar()
{
	$("#brand-pre").css('color', sand_white);	// prefix. Title of the company	
	$("#brand-suf").css('color', sand); 	// Suffix. Title of the company
	$('.header-txt').css('color',sand);	// Texte inside the navbar 
	$('.navbar-default').css('background',sand_dark);		// Navbar
	$('.navbar-default').css('border-bottom-color',sand_white); // Navbar	
	$('.header-txt').css('border-bottom-color',sand_white);		// Caret: Texte inside the navbar 
	$('.header-txt').css('border-top-color',sand_white);		// Caret: Texte inside the navbar 
	$(".sidebar-heading").css('border-color',sand_inherit); 				// header inside the navbar
	$(".caret").css('border-top','12px solid'+sand); 
	$('.dropdown-menu').css('border-top','2px solid '+sand_green);	// le top of the drop down menu

$(".hidden-phone").css('color', sand); 	// Suffix. Title of the company

    $(".hidden-phone").hover(function() {
      $(this).css('color', sand_green); 
      $(this).css('border-top-color', sand_inherit); 
      $(this).css('border-bottom-color', sand_inherit);
      },function(){
	      $(this).css('color', sand); 
      $(this).css('border-top-color', sand_inherit); 
      $(this).css('border-bottom-color', sand_inherit);
    }); 

    $(".header-txt").hover(function() { // Navbar style
      $(this).css('color', sand); 
      $(this).css('border-top-color', sand); 
      $(this).css('border-bottom-color', sand);  
      },function(){ // Navbar style  caret
      $(this).css('color', sand); 
      $(this).css('border-top-color', sand_white); 
      $(this).css('border-bottom-color', sand_white); 
    });
    
    $(".caret").hover(function() {
      $(this).css('color', sand_green); 
      $(this).css('border-top-color', sand_green); 
      $(this).css('border-bottom-color', sand_green);
      },function(){
	      $(this).css('color', sand); 
      $(this).css('border-top-color', sand); 
      $(this).css('border-bottom-color', sand);
    });	
}
function sand_sidebar()
{
	$('.sidebar-heading').css('color', sand);	// text Header Sidebar
	$(".list-group-item").css('color', sand_lightgray);	// Text inside the sidebar	
  	$(".list-group-item").css('background-color',sand_shadow4);	// Text inside the sidebar 
	$('a.list-group-item').mouseover(function () {  // Text inside the sidebar
	      $(this).css('border-right','5px solid'+sand_green); 
	      $(this).css('background-color',sand_dark);                                   
	});  
	$('a.list-group-item').click(function () {  	// Text inside the sidebar
	      $(this).css('border-right',sand_green);  
	      $(this).css('background-color',sand_dark);	
	      // console.log('list-group-item');                                     
	});

	$('a.list-group-item').mouseleave(function () {  // Text inside the sidebar
	      $(this).css('border-right',sand_empty);  
	      $(this).css('background-color',sand_empty);	                                     
	});	
}
function sand_button () {
	$(".btn-default").css('color',sand_green);	// button style	
	$('.btn-default').css("background-color",sand_shadow4);	// button style	
	$('.btn-default').css('border','0.1px solid'+sand_lightgray);	// button style	
	$(".btn-default").hover(function(){		// button style
	  	$(this).css("background-color",sand_white);
		$(this).css('color',sand_green);		  
	  },function(){
	  	$(this).css("background-color",sand_shadow4);
		$(this).css('color',sand_shadow4);		  
	});	
}
function sand_badge(){
	$('.badge').css('color', sand_white); 		// bagde : little oval form	
	$(".badge").css('background-color', sand_green);		// bagde : little oval form
	$('.square-badge').css('background-color',sand_green );	// square inside the dropdown
	$('.square-badge').css('color',sand_white ); // square inside the dropdown		
}
function sand_widget() {
	$('.widget').css('opacity','0.6'); // .active > a:focus
	$(".widget").css('background-color', sand_shadow4); 		// Widget : texte inside the block	
}
function sand_blockquote() {
	$('blockquote').css('border',sand_inherit); 
	$('.pull-right-ns').css('border-right', '5px solid'+sand_green);	//  blockquote : texte inside another kind of block  
	$('.pull-left-ns').css('border-left', '5px solid'+sand);  	//  blockquote : texte inside another kind of block 	
	$('.pull-right-ns').css('border', '2px groove #bbb'); 	
}
function sand_style()
{

	sand_navbar();
	sand_sidebar();
	sand_button ();
	sand_badge();
	sand_widget();
	sand_blockquote();	

	$('#sand').css('background-color',sand_aliceblue);
	$(".tag").css('color', sand_green); 			// First letter in the texte

	// console.log($('#sidebar'));
	if (parseInt(document.documentElement.clientWidth) < 768) { 
		//alert(document.documentElement.clientWidth);
	    	sand_small_device_setting(); // when starting
	} 	
}

function sand_small_device_setting () 
{

	// don’t download complicated script
	// use low-source images instead of full-source ones		
	$('.header-txt').css('color',black);
	$('.header-txt').mouseover(function () {	// Navbar style
	      $(this).css('color', sand_green); 
	      $(this).css('border-top-color', sand_dark); 
	      $(this).css('border-bottom-color', sand_white);                   
	});  
	$('.header-txt').mouseleave(function () {	// Navbar style  caret
	      $(this).css('color', sand_green); 
	      $(this).css('border-top-color', black); 
	      $(this).css('border-bottom-color', black);                   
	});		
}