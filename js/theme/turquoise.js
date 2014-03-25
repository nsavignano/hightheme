
var turquoise_aliceblue 	= '#D6E6CB';
var turquoise_empty 		= '';
var turquoise_inherit 	= 'inherit';
var turquoise_solid1		= '1px solid #999';
var	turquoise_shadow1 	= 'rgba(51, 51, 51, 0.1)';
var turquoise_shadow4 	= 'rgba(51, 51, 51, 0.4)';
var turquoise_shadow6 	= 'rgba(51, 51, 51, 0.6)';
var turquoise_shadow8 	= 'rgba(51, 51, 51, 0.8)';

var turquoise_white 		= '#fffffe';
var turquoise_green 		= '#A3D114';
var turquoise 			= '#F5CA96';
var turquoise_lightgray 	= '#F9F9F9';
var turquoise_dark 		= '#82745A'; 



function turquoise_navbar()
{
	$("#brand-pre").css('color', turquoise_white);	// prefix. Title of the company	
	$("#brand-suf").css('color', turquoise); 	// Suffix. Title of the company
	$('.header-txt').css('color',turquoise);	// Texte inside the navbar 
	$('.navbar-default').css('background',turquoise_dark);		// Navbar
	$('.navbar-default').css('border-bottom-color',turquoise_white); // Navbar	
	$('.header-txt').css('border-bottom-color',turquoise_white);		// Caret: Texte inside the navbar 
	$('.header-txt').css('border-top-color',turquoise_white);		// Caret: Texte inside the navbar 
	$(".sidebar-heading").css('border-color',turquoise_inherit); 				// header inside the navbar
	$(".caret").css('border-top','12px solid'+turquoise); 
	$('.dropdown-menu').css('border-top','2px solid '+turquoise_green);	// le top of the drop down menu

$(".hidden-phone").css('color', turquoise); 	// Suffix. Title of the company

    $(".hidden-phone").hover(function() {
      $(this).css('color', turquoise_green); 
      $(this).css('border-top-color', turquoise_inherit); 
      $(this).css('border-bottom-color', turquoise_inherit);
      },function(){
	      $(this).css('color', turquoise); 
      $(this).css('border-top-color', turquoise_inherit); 
      $(this).css('border-bottom-color', turquoise_inherit);
    }); 

    $(".header-txt").hover(function() { // Navbar style
      $(this).css('color', turquoise); 
      $(this).css('border-top-color', turquoise); 
      $(this).css('border-bottom-color', turquoise);  
      },function(){ // Navbar style  caret
      $(this).css('color', turquoise); 
      $(this).css('border-top-color', turquoise_white); 
      $(this).css('border-bottom-color', turquoise_white); 
    });
    
    $(".caret").hover(function() {
      $(this).css('color', turquoise_green); 
      $(this).css('border-top-color', turquoise_green); 
      $(this).css('border-bottom-color', turquoise_green);
      },function(){
	      $(this).css('color', turquoise); 
      $(this).css('border-top-color', turquoise); 
      $(this).css('border-bottom-color', turquoise);
    });	
}
function turquoise_sidebar()
{
	$('.sidebar-heading').css('color', turquoise);	// text Header Sidebar
	$(".list-group-item").css('color', turquoise_lightgray);	// Text inside the sidebar	
  	$(".list-group-item").css('background-color',turquoise_shadow4);	// Text inside the sidebar 
	$('a.list-group-item').mouseover(function () {  // Text inside the sidebar
	      $(this).css('border-right','5px solid'+turquoise_green); 
	      $(this).css('background-color',turquoise_dark);                                   
	});  
	$('a.list-group-item').click(function () {  	// Text inside the sidebar
	      $(this).css('border-right',turquoise_green);  
	      $(this).css('background-color',turquoise_dark);	
	      // console.log('list-group-item');                                     
	});

	$('a.list-group-item').mouseleave(function () {  // Text inside the sidebar
	      $(this).css('border-right',turquoise_empty);  
	      $(this).css('background-color',turquoise_empty);	                                     
	});	
}
function turquoise_button () {
	$(".btn-default").css('color',turquoise_green);	// button style	
	$('.btn-default').css("background-color",turquoise_shadow4);	// button style	
	$('.btn-default').css('border','0.1px solid'+turquoise_lightgray);	// button style	
	$(".btn-default").hover(function(){		// button style
	  	$(this).css("background-color",turquoise_white);
		$(this).css('color',turquoise_green);		  
	  },function(){
	  	$(this).css("background-color",turquoise_shadow4);
		$(this).css('color',turquoise_shadow4);		  
	});	
}
function turquoise_badge(){
	$('.badge').css('color', turquoise_white); 		// bagde : little oval form	
	$(".badge").css('background-color', turquoise_green);		// bagde : little oval form
	$('.square-badge').css('background-color',turquoise_green );	// square inside the dropdown
	$('.square-badge').css('color',turquoise_white ); // square inside the dropdown		
}
function turquoise_widget() {
	$('.widget').css('opacity','0.6'); // .active > a:focus
	$(".widget").css('background-color', turquoise_shadow4); 		// Widget : texte inside the block	
}
function turquoise_blockquote() {
	$('blockquote').css('border',turquoise_inherit); 
	$('.pull-right-ns').css('border-right', '5px solid'+turquoise_green);	//  blockquote : texte inside another kind of block  
	$('.pull-left-ns').css('border-left', '5px solid'+turquoise);  	//  blockquote : texte inside another kind of block 	
	$('.pull-right-ns').css('border', '2px groove #bbb'); 	
}
function turquoise_style()
{

	turquoise_navbar();
	turquoise_sidebar();
	turquoise_button ();
	turquoise_badge();
	turquoise_widget();
	turquoise_blockquote();	

	$('#turquoise').css('background-color',turquoise_aliceblue);
	$(".tag").css('color', turquoise_green); 			// First letter in the texte

	// console.log($('#sidebar'));
	if (parseInt(document.documentElement.clientWidth) < 768) { 
		//alert(document.documentElement.clientWidth);
	    	turquoise_small_device_setting(); // when starting
	} 	
}

function turquoise_small_device_setting () 
{

	// don’t download complicated script
	// use low-source images instead of full-source ones		
	$('.header-txt').css('color',black);
	$('.header-txt').mouseover(function () {	// Navbar style
	      $(this).css('color', turquoise_green); 
	      $(this).css('border-top-color', turquoise_dark); 
	      $(this).css('border-bottom-color', turquoise_white);                   
	});  
	$('.header-txt').mouseleave(function () {	// Navbar style  caret
	      $(this).css('color', turquoise_green); 
	      $(this).css('border-top-color', black); 
	      $(this).css('border-bottom-color', black);                   
	});		
}