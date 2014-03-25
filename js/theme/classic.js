
var classic_aliceblue 	= '#D6E6CB';
var classic_empty 		= '';
var classic_inherit 	= 'inherit';
var classic_solid1		= '1px solid #999';
var	classic_shadow1 	= 'rgba(51, 51, 51, 0.1)';
var classic_shadow4 	= 'rgba(51, 51, 51, 0.4)';
var classic_shadow6 	= 'rgba(51, 51, 51, 0.6)';
var classic_shadow8 	= 'rgba(51, 51, 51, 0.8)';

var classic_white 		= '#fffffe';
var classic_green 		= '#A3D114';
var classic 			= '#F5CA96';
var classic_lightgray 	= '#F9F9F9';
var classic_dark 		= '#82745A'; 



function classic_navbar()
{
	$("#brand-pre").css('color', classic_white);	// prefix. Title of the company	
	$("#brand-suf").css('color', classic); 	// Suffix. Title of the company
	$('.header-txt').css('color',classic);	// Texte inside the navbar 
	$('.navbar-default').css('background',classic_dark);		// Navbar
	$('.navbar-default').css('border-bottom-color',classic_white); // Navbar	
	$('.header-txt').css('border-bottom-color',classic_white);		// Caret: Texte inside the navbar 
	$('.header-txt').css('border-top-color',classic_white);		// Caret: Texte inside the navbar 
	$(".sidebar-heading").css('border-color',classic_inherit); 				// header inside the navbar
	$(".caret").css('border-top','12px solid'+classic); 
	$('.dropdown-menu').css('border-top','2px solid '+classic_green);	// le top of the drop down menu

$(".hidden-phone").css('color', classic); 	// Suffix. Title of the company

    $(".hidden-phone").hover(function() {
      $(this).css('color', classic_green); 
      $(this).css('border-top-color', classic_inherit); 
      $(this).css('border-bottom-color', classic_inherit);
      },function(){
	      $(this).css('color', classic); 
      $(this).css('border-top-color', classic_inherit); 
      $(this).css('border-bottom-color', classic_inherit);
    }); 

    $(".header-txt").hover(function() { // Navbar style
      $(this).css('color', classic); 
      $(this).css('border-top-color', classic); 
      $(this).css('border-bottom-color', classic);  
      },function(){ // Navbar style  caret
      $(this).css('color', classic); 
      $(this).css('border-top-color', classic_white); 
      $(this).css('border-bottom-color', classic_white); 
    });
    
    $(".caret").hover(function() {
      $(this).css('color', classic_green); 
      $(this).css('border-top-color', classic_green); 
      $(this).css('border-bottom-color', classic_green);
      },function(){
	      $(this).css('color', classic); 
      $(this).css('border-top-color', classic); 
      $(this).css('border-bottom-color', classic);
    });	
}
function classic_sidebar()
{
	$('.sidebar-heading').css('color', classic);	// text Header Sidebar
	$(".list-group-item").css('color', classic_lightgray);	// Text inside the sidebar	
  	$(".list-group-item").css('background-color',classic_shadow4);	// Text inside the sidebar 
	$('a.list-group-item').mouseover(function () {  // Text inside the sidebar
	      $(this).css('border-right','5px solid'+classic_green); 
	      $(this).css('background-color',classic_dark);                                   
	});  
	$('a.list-group-item').click(function () {  	// Text inside the sidebar
	      $(this).css('border-right',classic_green);  
	      $(this).css('background-color',classic_dark);	
	      // console.log('list-group-item');                                     
	});

	$('a.list-group-item').mouseleave(function () {  // Text inside the sidebar
	      $(this).css('border-right',classic_empty);  
	      $(this).css('background-color',classic_empty);	                                     
	});	
}
function classic_button () {
	$(".btn-default").css('color',classic_green);	// button style	
	$('.btn-default').css("background-color",classic_shadow4);	// button style	
	$('.btn-default').css('border','0.1px solid'+classic_lightgray);	// button style	
	$(".btn-default").hover(function(){		// button style
	  	$(this).css("background-color",classic_white);
		$(this).css('color',classic_green);		  
	  },function(){
	  	$(this).css("background-color",classic_shadow4);
		$(this).css('color',classic_shadow4);		  
	});	
}
function classic_badge(){
	$('.badge').css('color', classic_white); 		// bagde : little oval form	
	$(".badge").css('background-color', classic_green);		// bagde : little oval form
	$('.square-badge').css('background-color',classic_green );	// square inside the dropdown
	$('.square-badge').css('color',classic_white ); // square inside the dropdown		
}
function classic_widget() {
	$('.widget').css('opacity','0.6'); // .active > a:focus
	$(".widget").css('background-color', classic_shadow4); 		// Widget : texte inside the block	
}
function classic_blockquote() {
	$('blockquote').css('border',classic_inherit); 
	$('.pull-right-ns').css('border-right', '5px solid'+classic_green);	//  blockquote : texte inside another kind of block  
	$('.pull-left-ns').css('border-left', '5px solid'+classic);  	//  blockquote : texte inside another kind of block 	
	$('.pull-right-ns').css('border', '2px groove #bbb'); 	
}
function classic_style()
{

	classic_navbar();
	classic_sidebar();
	classic_button ();
	classic_badge();
	classic_widget();
	classic_blockquote();	

	$('#classic').css('background-color',classic_aliceblue);
	$(".tag").css('color', classic_green); 			// First letter in the texte

	// console.log($('#sidebar'));
	if (parseInt(document.documentElement.clientWidth) < 768) { 
		//alert(document.documentElement.clientWidth);
	    	classic_small_device_setting(); // when starting
	} 	
}

function classic_small_device_setting () 
{

	// don’t download complicated script
	// use low-source images instead of full-source ones		
	$('.header-txt').css('color',black);
	$('.header-txt').mouseover(function () {	// Navbar style
	      $(this).css('color', classic_green); 
	      $(this).css('border-top-color', classic_dark); 
	      $(this).css('border-bottom-color', classic_white);                   
	});  
	$('.header-txt').mouseleave(function () {	// Navbar style  caret
	      $(this).css('color', classic_green); 
	      $(this).css('border-top-color', black); 
	      $(this).css('border-bottom-color', black);                   
	});		
}