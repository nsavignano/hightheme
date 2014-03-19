/* Colours Panel  */
var azur 		= '#000080'; 
var aliceblue 	= '#D6E6CB';
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
var empty 		= '';
var green 		= '#75AF28';
var gold 		= '#FFB81F';
var gray 		= '#999999';
var ivoire 		= '#FFEBCC';
var inherit 	= 'inherit';
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
var	shadow1 	= 'rgba(51, 51, 51, 0.1)';
var shadow4 	= 'rgba(51, 51, 51, 0.4)';
var shadow6 	= 'rgba(51, 51, 51, 0.6)';
var shadow8 	= 'rgba(51, 51, 51, 0.8)';
var tlmgray 		= '#30481F';
var tlmgreen 		= '#A3D114';
var tlmlightgreen 	= '#7FFF00';
var tlmdarkgray		= '#C1CFB7';
var tlmred        	= '#CC0000';
var turquoise 		= '#00FFFF';
var white 		= '#fffffe';
var yellow 		= '#FFFF99';
var yellowocre 	= '#F5BF18';
var theme 		= ['classic','sand','oceane','salmon','talisman','turquoise'];

var defaults = {
    colour 	: [],    
    current : [],
    init : function (id) {
    	for (var index in theme) { 
    		$('#'+theme[index]).css('background-color',empty); 
    	}
		$('.widget').css('background-image',empty);   

    	switch(id) {  		// Choice 7 differents colours array to set on your Themes:
    		case theme[0] 	: 
			this.colour = [ cinnamon, blue, darkblue, cinnamon, darkblue, white, white, lightblue,lightgray,lightgray,lightgray,lightgray, darkblue,darkblue,shadow4,azur,
			blue,darkblue,white,blue,inherit,inherit,inherit, cinnamon,cinnamon,cinnamon, darkblue,darkblue,darkblue,lightgray, cinnamon,lightgray,blue, darkblue,shadow8,empty,
			shadow8, lightgray  ];
			break;    		
    		case theme[1] 	: 
			this.colour = [ tlmgreen, sand, white, tlmgreen, tlmgreen, white, white, sand,lightgray,darksand,shadow4,shadow4,tlmgreen,tlmgreen,shadow4,lightgray,
			white,tlmgreen,white,white,tlmgreen,sand,inherit,sand,sand,sand,white,white,white,tlmgreen,shadow4,shadow4,tlmgreen, sand,tlmgreen,empty,tlmgreen, darksand  ];
			break;    		
    		case theme[2] 	: 
			this.colour = [ ivoire, tlmred, ivoire, tlmred, skin, sand, sand, sand,lightgray,darkoceane,shadow4,shadow4,gray,gray,shadow4,skin,
			ivoire,tlmred,ivoire,ivoire,yellowocre,yellowocre,gray,tlmred,tlmred,tlmred,ivoire,ivoire,ivoire,skin,tlmred,shadow4,skin,sand,shadow8,empty,shadow8, darkoceane  ];
			break;    		
    		case theme[3]	: 
			this.colour = [ shadow6, tlmred, ivoire, tlmred, shadow4, sand, sand, sand,lightgray,shadow4,shadow4,sand,gray,gray,shadow4,skin,
			ivoire,tlmred,ivoire,ivoire,sand,tlmred,tlmred,tlmred,tlmred,tlmred,ivoire,ivoire,ivoire,shadow4,sand,sand,shadow4,sand,shadow8,empty,shadow8, darksalmon  ];
			break;    		
    		case theme[4] 	: 
    		this.colour = [ shadow6, orange, white, orange, shadow4, white, white, orange,lightgray,shadow4,shadow4,tlmgreen,tlmgreen,tlmgreen,shadow4,lightgray,
    		white,orange,white,white,tlmgreen,orange,inherit,orange,orange,orange,white,white,white,shadow4,tlmgreen,tlmgreen,shadow4,orange,tlmgreen,empty,tlmgreen, tlmdarkgray ];
    		break;
    		case theme[5] 	: 
			this.colour = [ turquoise, red, yellow, red, yellow, turquoise, turquoise, turquoise,lightgray,shadow4,shadow4,shadow4,gray,gray,shadow4,gray,yellow,tlmred,
			yellow,yellow,turquoise,red,red,turquoise,turquoise,turquoise,yellow,yellow,yellow,yellow,turquoise,shadow4,yellow,turquoise,shadow8,empty, shadow8, darkyellow  ];
			break;    		
    		default 		:   this.colour = [shadow4, yellow, gray, turquoise, red,tlmred, lightgray]; ;   		    		    		    		    		
    	}    
    	// set the current output colours 	//    
       	for (var key in this.colour) {
		    this.current[key]  = this.colour[key]; // init each colour to the output array		      		
    	} 	 	   
    },
    palette : function () {
       return this.current;  // return current set 
    }    
 }
// 3 color on the Theme menu 
var settings = defaults;
function init_box_color_strip()
{
	for (var index in theme) {
		var pattern = theme[index];
		var colour = new Array();
		settings.init(pattern); // init this theme as a current one 
		colour = settings.palette();
		$("#"+pattern+" > #pattern1").css('background-color', colour[0]); // init the color Box into the Dropdown menu
		$("#"+pattern+" > #pattern2").css('background-color', colour[11]);
		$("#"+pattern+" > #pattern3").css('background-color', colour[1]);	
		// $('#'+pattern).css('background-color',shadow4);
	}
}

function small_device_setting (theme) 
{

	var colour = new Array();
	colour = settings.palette(); 

	

	// don’t download complicated script
	// use low-source images instead of full-source ones
	// $('.navbar-default').css('background',lightgray);		// Navbar
	$('.navbar-default').css('background',colour[37]);		// Navbar
	//$('.navbar-default').css('opacity','0.7');		// Navbar		
	$('.header-txt').css('color',black);
	$('.header-txt').mouseover(function () {	// Navbar style
	      $(this).css('color', colour[23]); 
	      $(this).css('border-top-color', colour[24]); 
	      $(this).css('border-bottom-color', colour[25]);                   
	});  
	$('.header-txt').mouseleave(function () {	// Navbar style  caret
	      $(this).css('color', colour[26]); 
	      $(this).css('border-top-color', black); 
	      $(this).css('border-bottom-color', black);                   
	});		
}

function theme_settings(theme) {


	if (theme == 'sand') { 
		sand_style(theme);
		return;
	}
	if (theme == 'oceane') { 
		oceane_style(theme);
		return;
	}	
	
	var colour = new Array();
	settings.init(theme); // init this theme as a current one 

	colour = settings.palette(); // grab the result of all colour based on the current theme choose			
	// alert(colour[0]+':'+colour[1]+':'+colour[2]+':'+colour[3]+':'+colour[4]+':'+colour[5]+':'+colour[6]);
	// body style
	// $("body").addClass("background-"+theme);  
	$('#'+theme).css('background-color',aliceblue); 
	$('.widget').css('opacity','0.6'); // .active > a:focus
	$('blockquote').css('border',inherit); 
	$('#hr_widget').hide();
	// differents particularity
	// if ( (theme == 'talisman') || ((theme == 'light')) )  $('.widget').css('background-image','url("img/background.jpg")');
	// Don't want stripe on widgets 
	if ( (theme == 'talisman') || (theme == 'salmon') || (theme == 'turquoise') || (theme == 'classic') )  { 
		$('.sidebar-body').css('color',tlmgreen);	$('.widget').css('background-image','url("img/background.jpg")');
	} else $('.sidebar-body').css('color',white);
	if (theme == 'classic'){ $('.pull-right-ns > h1').css('color', lightblue); }
	if (theme == 'oceane')  { $('.pull-right-ns').css('border', '2px groove #bbb'); } // $('blockquote').css('border','1px solid #999');
	if ( (theme == 'classic') || (theme == 'turquoise') ) {  $('#hr_widget').show(); }
	// ------------------------------------------------------------------------------------
	
	$("#brand-pre").css('color', colour[2]);	// prefix. Title of the company	
	$("#brand-suf").css('color', colour[1]); 	// Suffix. Title of the company
	$('.header-txt').css('color','colour[2]');	// Texte inside the navbar 
	$(".tag").css('color', colour[3]); 			// First letter in the texte
	$(".btn-default").css('color',colour[4]);	// button style
	$('.badge').css('color', colour[5]); 		// bagde : little oval form
	$('.square-badge').css('color',colour[6] ); // square inside the dropdown
	$('.sidebar-heading').css('color', colour[7]);	// text Header Sidebar
	$(".list-group-item").css('color', colour[8]);	// Text inside the sidebar

	$('.navbar-default').css('background',colour[9]);		// Navbar
	$(".widget").css('background-color', colour[10]); 		// Widget : texte inside the block
	$('.btn-default').css("background-color",colour[11]);	// button style
	$(".badge").css('background-color', colour[12]);		// bagde : little oval form
	$('.square-badge').css('background-color',colour[13] );	// square inside the dropdown
  	$(".list-group-item").css('background-color',colour[14] );	// Text inside the sidebar 

	$('.btn-default').css('border','0.1px solid'+colour[15]);	// button style
	$('.header-txt').css('border-top-color',colour[16]);		// Caret: Texte inside the navbar 
	$('.dropdown-menu').css('border-top','2px solid '+colour[17]);	// le top of the drop down menu
	$('.navbar-default').css('border-bottom-color',colour[18]); // Navbar	
	$('.header-txt').css('border-bottom-color',colour[19]);		// Caret: Texte inside the navbar  
	$('.pull-right-ns').css('border-right', '5px solid'+colour[20]);	//  blockquote : texte inside another kind of block  
	$('.pull-left-ns').css('border-left', '5px solid'+colour[21]);  	//  blockquote : texte inside another kind of block  
	$(".sidebar-heading").css('border-color',colour[22]); 				// header inside the navbar
	$(".caret").css('border-top','12px solid'+colour[1]); 

    $(".caret").hover(function() {
      $(this).css('color', 'colour[23]'); 
      $(this).css('border-top-color', 'colour[24]'); 
      $(this).css('border-bottom-color', 'colour[24]');
      },function(){
	      $(this).css('color', 'colour[26]'); 
      $(this).css('border-top-color', 'colour[27]'); 
      $(this).css('border-bottom-color', 'colour[28]');
    });

	$('.header-txt').mouseover(function () {	// Navbar style
	      $(this).css('color', 'colour[23]'); 
	      $(this).css('border-top-color', colour[24]); 
	      $(this).css('border-bottom-color', colour[25]);                   
	});  
	$('.header-txt').mouseleave(function () {	// Navbar style  caret
	      $(this).css('color', colour[26]); 
	      $(this).css('border-top-color', colour[27]); 
	      $(this).css('border-bottom-color', colour[28]);                   
	});
	$(".btn-default").hover(function(){		// button style
	  	$(this).css("background-color",colour[29]);
		$(this).css('color',colour[30]);		  
	  },function(){
	  	$(this).css("background-color",colour[31]);
		$(this).css('color',colour[32]);		  
	});
	$('a.list-group-item').mouseover(function () {  // Text inside the sidebar
	      $(this).css('border-right','5px solid'+colour[33]); 
	      $(this).css('background-color',colour[34]);                                   
	});  
	$('a.list-group-item').click(function () {  	// Text inside the sidebar
	      $(this).css('border-right',colour[35]);  
	      $(this).css('background-color',colour[36]);	
	      // console.log('list-group-item');                                     
	});

	$('a.list-group-item').mouseleave(function () {  // Text inside the sidebar
	      $(this).css('border-right',empty);  
	      $(this).css('background-color',empty);	                                     
	});	
	$(".carousel .item").css('background-color',colour[34]); 				// header inside the navbar
	$(".carousel-indicators .active").attr('background-color','#90EE90'); 				// header inside the navbar	
	// console.log($('#sidebar'));
	if (parseInt(document.documentElement.clientWidth) < 768) { 
		//alert(document.documentElement.clientWidth);
	    	small_device_setting(theme); // when starting
	 }
	 
}  
$(window).resize(function(e)
{
	var style 		= settingsState.background != undefined? 	settingsState.background : '';
	change_style(style);
	e.preventDefault();
	e.stopPropagation();
	// alert(document.documentElement.clientWidth);	        
});
