
var oceane_aliceblue= '#D6E6CB';
var oceane_empty 	= '';
var oceane_inherit 	= 'inherit';
var oceane_solid1	= '1px solid #999';
var	oceane_shadow1 	= 'rgba(51, 51, 51, 0.1)';
var oceane_shadow4 	= 'rgba(51, 51, 51, 0.4)';
var oceane_shadow6 	= 'rgba(51, 51, 51, 0.6)';
var oceane_shadow8 	= 'rgba(51, 51, 51, 0.8)';

var oceane_white 		= '#fffffe';
var oceane 				= '#000080';
var oceane_lightgray 	= '#F9F9F9'; 

var oceane_ivoire 	= '#FFEBCC';
var oceane_red  	= '#CC0000';
var oceane_skin 	= '#FFD9B2';
var oceane_sand 	= '#F5CA96';
var oceane_dark		= '#A6A6FF'; 
var oceane_yellow 	= '#F5BF18';


function oceane_navbar()
{
	$("#brand-pre").css('color', oceane_white);	// prefix. Title of the company	
	$("#brand-suf").css('color', oceane); 	// Suffix. Title of the company
	$('.header-txt').css('color',oceane);	// Texte inside the navbar 
	$('.navbar-default').css('background',oceane_dark);		// Navbar
	$('.navbar-default').css('border-bottom-color',oceane_white); // Navbar	
	$('.header-txt').css('border-bottom-color',oceane_white);		// Caret: Texte inside the navbar 
	$('.header-txt').css('border-top-color',oceane_white);		// Caret: Texte inside the navbar 
	$(".sidebar-heading").css('border-color',oceane_inherit); 				// header inside the navbar
	$(".caret").css('border-top','12px solid'+oceane); 
	$('.dropdown-menu').css('border-top','2px solid '+oceane_red);	// le top of the drop down menu

$(".hidden-phone").css('color', oceane); 	// Suffix. Title of the company

    $(".hidden-phone").hover(function() {
      $(this).css('color', oceane_red); 
      $(this).css('border-top-color', oceane_inherit); 
      $(this).css('border-bottom-color', oceane_inherit);
      },function(){
	      $(this).css('color', oceane); 
      $(this).css('border-top-color', oceane_inherit); 
      $(this).css('border-bottom-color', oceane_inherit);
    }); 

    $(".header-txt").hover(function() { // Navbar style
      $(this).css('color', oceane); 
      $(this).css('border-top-color', oceane); 
      $(this).css('border-bottom-color', oceane);  
      },function(){ // Navbar style  caret
      $(this).css('color', oceane); 
      $(this).css('border-top-color', oceane_white); 
      $(this).css('border-bottom-color', oceane_white); 
    });

    $(".caret").hover(function() {
      $(this).css('color', oceane_red); 
      $(this).css('border-top-color', oceane_red); 
      $(this).css('border-bottom-color', oceane_red);
      },function(){
	      $(this).css('color', oceane); 
      $(this).css('border-top-color', oceane); 
      $(this).css('border-bottom-color', oceane);
    });	
}
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
function oceane_button () {
	$(".btn-default").css('color',oceane_red);	// button style	
	$('.btn-default').css("background-color",oceane_shadow4);	// button style	
	$('.btn-default').css('border','0.1px solid'+oceane_lightgray);	// button style	
	$(".btn-default").hover(function(){		// button style
	  	$(this).css("background-color",oceane_white);
		$(this).css('color',oceane_red);		  
	  },function(){
	  	$(this).css("background-color",oceane_shadow4);
		$(this).css('color',oceane_shadow4);		  
	});	
}
function oceane_badge(){
	$('.badge').css('color', oceane_white); 		// bagde : little oval form	
	$(".badge").css('background-color', oceane_red);		// bagde : little oval form
	$('.square-badge').css('background-color',oceane_red );	// square inside the dropdown
	$('.square-badge').css('color',oceane_white ); // square inside the dropdown		
}
function oceane_widget() {
	$('.widget').css('opacity','0.6'); // .active > a:focus
	$(".widget").css('background-color', oceane_shadow4); 		// Widget : texte inside the block	
}
function oceane_blockquote() {
	$('blockquote').css('border',oceane_inherit); 
	$('.pull-right-ns').css('border-right', '5px solid'+oceane_red);	//  blockquote : texte inside another kind of block  
	$('.pull-left-ns').css('border-left', '5px solid'+oceane);  	//  blockquote : texte inside another kind of block 	
	$('.pull-right-ns').css('border', '2px groove #bbb'); 	
}
function oceane_style()
{

	oceane_navbar();
	oceane_sidebar();
	oceane_button ();
	oceane_badge();
	oceane_widget();
	oceane_blockquote();	

	$('#oceane').css('background-color',oceane_aliceblue);
	$(".tag").css('color', oceane_red); 			// First letter in the texte

	// console.log($('#sidebar'));
	if (parseInt(document.documentElement.clientWidth) < 768) { 
		//alert(document.documentElement.clientWidth);
	    	oceane_small_device_setting(); // when starting
	} 	
}

function oceane_small_device_setting () 
{
		
	$('.header-txt').css('color',black);
	$('.header-txt').mouseover(function () {	// Navbar style
	      $(this).css('color', oceane_red); 
	      $(this).css('border-top-color', oceane_dark); 
	      $(this).css('border-bottom-color', oceane_white);                   
	});  
	$('.header-txt').mouseleave(function () {	// Navbar style  caret
	      $(this).css('color', oceane_red); 
	      $(this).css('border-top-color', black); 
	      $(this).css('border-bottom-color', black);                   
	});		
}