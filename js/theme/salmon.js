
var salmon_aliceblue 	= '#D6E6CB';
var salmon_empty 		= '';
var salmon_inherit 	= 'inherit';
var salmon_solid1		= '1px solid #999';
var	salmon_shadow1 	= 'rgba(51, 51, 51, 0.1)';
var salmon_shadow4 	= 'rgba(51, 51, 51, 0.4)';
var salmon_shadow6 	= 'rgba(51, 51, 51, 0.6)';
var salmon_shadow8 	= 'rgba(51, 51, 51, 0.8)';

var salmon_white 		= '#fffffe';
var salmon_green 		= '#83CCEA';
var salmon_dark_blue 	= '#4E728D';
var salmon 				= '#F5CA96';
var salmon_lightgray 	= '#F9F9F9';

var salmon_grey_dark 		= '#82745A'; 
var salmon_greige			= '#696969';
var salmon_monumental_white = '#FFFAF0';
var salmon_best_friends 	= '#FFA500';


function salmon_navbar()
{
	$("#brand-pre").css('color', salmon_white);	// prefix. Title of the company	
	$("#brand-suf").css('color', salmon); 	// Suffix. Title of the company
	$('.header-txt').css('color',salmon);	// Texte inside the navbar 
	$('.navbar-default').css('background',salmon_dark_blue);		// Navbar
	$('.navbar-default').css('border-bottom-color',salmon_white); // Navbar	
	$('.header-txt').css('border-bottom-color',salmon_white);		// Caret: Texte inside the navbar 
	$('.header-txt').css('border-top-color',salmon_white);		// Caret: Texte inside the navbar 
	$(".sidebar-heading").css('border-color',salmon_inherit); 				// header inside the navbar
	$(".caret").css('border-top','12px solid'+salmon); 
	$('.dropdown-menu').css('border-top','2px solid '+salmon_green);	// le top of the drop down menu

	$(".hidden-phone").css('color', salmon); 	// Suffix. Title of the company

    $(".hidden-phone").hover(function() {
      $(this).css('color', salmon_green); 
      $(this).css('border-top-color', salmon_inherit); 
      $(this).css('border-bottom-color', salmon_inherit);
      },function(){
	      $(this).css('color', salmon); 
      $(this).css('border-top-color', salmon_inherit); 
      $(this).css('border-bottom-color', salmon_inherit);
    }); 

    $(".header-txt").hover(function() { // Navbar style
      $(this).css('color', salmon); 
      $(this).css('border-top-color', salmon); 
      $(this).css('border-bottom-color', salmon);  
      },function(){ // Navbar style  caret
      $(this).css('color', salmon); 
      $(this).css('border-top-color', salmon_white); 
      $(this).css('border-bottom-color', salmon_white); 
    });
    
    $(".caret").hover(function() {
      $(this).css('color', salmon_green); 
      $(this).css('border-top-color', salmon_green); 
      $(this).css('border-bottom-color', salmon_green);
      },function(){
	      $(this).css('color', salmon); 
      $(this).css('border-top-color', salmon); 
      $(this).css('border-bottom-color', salmon);
    });	
}
function salmon_sidebar()
{
	$('.sidebar-heading').css('color', salmon);	// text Header Sidebar
	$(".list-group-item").css('color', salmon_lightgray);	// Text inside the sidebar	
  	$(".list-group-item").css('background-color',salmon_shadow4);	// Text inside the sidebar 
	$('a.list-group-item').mouseover(function () {  // Text inside the sidebar
	      $(this).css('border-right','5px solid'+salmon_green); 
	      $(this).css('background-color',salmon_dark_blue);                                   
	});  
	$('a.list-group-item').click(function () {  	// Text inside the sidebar
	      $(this).css('border-right',salmon_green);  
	      $(this).css('background-color',salmon_dark_blue);	
	      // console.log('list-group-item');                                     
	});

	$('a.list-group-item').mouseleave(function () {  // Text inside the sidebar
	      $(this).css('border-right',salmon_empty);  
	      $(this).css('background-color',salmon_empty);	                                     
	});	
}
function salmon_button () {
	$(".btn-default").css('color',salmon_green);	// button style	
	$('.btn-default').css("background-color",salmon_shadow4);	// button style	
	$('.btn-default').css('border','0.1px solid'+salmon_lightgray);	// button style	
	$(".btn-default").hover(function(){		// button style
	  	$(this).css("background-color",salmon_white);
		$(this).css('color',salmon_green);		  
	  },function(){
	  	$(this).css("background-color",salmon_shadow4);
		$(this).css('color',salmon_shadow4);		  
	});	
}
function salmon_badge(){
	$('.badge').css('color', salmon_dark_blue); 		// bagde : little oval form	
	$(".badge").css('background-color', salmon_green);		// bagde : little oval form
	$('.square-badge').css('background-color',salmon_green );	// square inside the dropdown
	$('.square-badge').css('color',salmon_white ); // square inside the dropdown		
}
function salmon_widget() {
	$('.widget').css('opacity','0.6'); // .active > a:focus
	$(".widget").css('background-color', salmon_shadow4); 		// Widget : texte inside the block	
}
function salmon_blockquote() {
	$('blockquote').css('border',salmon_inherit); 
	$('.pull-right-ns').css('border-right', '5px solid'+salmon_green);	//  blockquote : texte inside another kind of block  
	$('.pull-left-ns').css('border-left', '5px solid'+salmon);  	//  blockquote : texte inside another kind of block 	
	$('.pull-right-ns').css('border', '2px groove #bbb'); 	
}
function salmon_style()
{

	salmon_navbar();
	salmon_sidebar();
	salmon_button ();
	salmon_badge();
	salmon_widget();
	salmon_blockquote();	

	$('#salmon').css('background-color',salmon_aliceblue);
	$(".tag").css('color', salmon_green); 			// First letter in the texte

	// console.log($('#sidebar'));
	if (parseInt(document.documentElement.clientWidth) < 768) { 
		//alert(document.documentElement.clientWidth);
	    	salmon_small_device_setting(); // when starting
	} 	
}

function salmon_small_device_setting () 
{

	// don’t download complicated script
	// use low-source images instead of full-source ones		
	$('.header-txt').css('color',black);
	$('.header-txt').mouseover(function () {	// Navbar style
	      $(this).css('color', salmon_green); 
	      $(this).css('border-top-color', salmon_dark_blue); 
	      $(this).css('border-bottom-color', salmon_white);                   
	});  
	$('.header-txt').mouseleave(function () {	// Navbar style  caret
	      $(this).css('color', salmon_green); 
	      $(this).css('border-top-color', black); 
	      $(this).css('border-bottom-color', black);                   
	});		
}