
var settingsState = JSON.parse(localStorage.getItem("settings-state")) || {
    sidebar 		: 'left',
    background 		: 'classic',
    sidebarState 	: 'auto',
	effect3D 		: false,    
    mode 			: '',
    insideContainer	: 'large',
    sidebarStatus 	: '',
    navbarStatus 	: 'fix',
    patternItem 	: '',
    patternStatus 	: 'on'
}
function mobile_device()
{
   	 var mobile = (/iphone|ipad|ipod|android|blackberry|mini|mmp|symbian|smartphone|midp|wap|phone|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));  
	 return mobile;
}
//global 
var g_mobile = mobile_device();


/* Collapse and Extend the menubar when the page is < 768px) */
$('#menubar').click(function (e) {
		
       // var collapse = $("div#sidebar.sidebar-offcanvas.in");
		if (settingsState.sidebarState == 'auto') {
			if ($("#sidebar").css('display') == 'none') $('#sidebar').show();
			settingsState.sidebarState = 'menubar';
		} else {
			if ($("#sidebar").css('display') == 'block') $('#sidebar').hide();
			settingsState.sidebarState = 'auto';			
		}
        // console.log(e.eventPhase);		

});
function change_style(style) 
{

		var background 			= settingsState.background 	!= undefined? 	settingsState.background : '';
		var effect3D 			= settingsState.effect3D 	!= undefined? 	settingsState.effect3D : false;
		var current_style 		= settingsState.background 	!= undefined? 	settingsState.background : '';		
		var background_mode 	= settingsState.mode 		!= undefined? 	settingsState.mode : '';
		var refresh 			= true; // 	settingsState.patternItem = patternItem;
		// if select one theme, have to remove Pattern if so
		if (style == '' && background_mode == 'pattern') { // means don't refresh the current set, because it's pattern
				refresh = false;			
		} 
// console.log(style+':'+background_mode+':'+current_style);
		if (style != '') change_pattern(10);
		//if (refresh) {
			settingsState.mode = '';
			if (style == '') style = current_style;
			if ( (style == '') && (background == '') && (current_style == '')) style = 'classic';
			else if ( (style == '') && (background != '') ) style = background;
			else { 
				$("body").removeClass("background-"+background);
				// empty the color frame inside the Theme menu
				$('#'+background).css('background-color',empty);
			}
			// console.log(style+';'+background+':'+settingsState.mode );
			$("body").addClass("background-"+style);
			settingsState.background = style;
			localStorage.setItem("settings-state", JSON.stringify(settingsState));			 
		//}			
 console.log($(window).width()+':'+screen.availWidth);
		treeD_setting(effect3D);
		theme_settings(style);		
		if (parseInt(document.documentElement.clientWidth) < 755) { 
			//alert(document.documentElement.clientWidth);
				$("#sidebar").css('position','relative');	
				$("#sidebar").css('width','99%'); 		
		    	$('#sidebar').hide();
		    	if (g_mobile) $('#pattern').hide();	
				if (g_mobile) $('#pattern-id').hide();			    		    	
		    	$('#sidebar-set').hide();
		    	$('#pattern-divide').hide();		    	
		    	$('#navbar-inside-text').hide();
				container_toogle_large();  

				//$("html").css('overflow','hidden');  /* NEED This for the Small Device */
		} else {
				if (parseInt(document.documentElement.clientWidth) < 1200) { 
					container_toogle_large(); 
		    		$('#navbar-inside-text').hide();						
				} else 	{ 
					init_container();
		    		$('#navbar-inside-text').show();
		    	}					
				$('#sidebar').show();
		    	$('#sidebar-set').show();
	
		    	if (g_mobile) $('#pattern').show();	
				if (g_mobile) $('#pattern-id').show();
				$('#pattern-divide').show();
				init_sidebar();				

				//$("html").css('overflow','visible');  /* NEED This for the Small Device */		    		    		    				
		}
		var patternItem  = settingsState.patternItem != undefined? 	settingsState.patternItem : '';
		if (patternItem != '') change_pattern(patternItem);
}
function load_style()
{
	console.log('load_style');
	change_style('');
}
function OpenPage(url,index)
{
 //  alert(url);
    $.get(url, function(response) {
        switch(index) { 
            case 2: $('#get_sidebar').html(response); break;                                             
        }
    });
}
function init_container()
{
    var winH = $(window).height();
    var winW = $(window).width();
    var container 		= ".container";

	var currentStatus 		= settingsState.insideContainer != undefined? 	settingsState.insideContainer : '';
	if (currentStatus == 'inside') {	
		$('#navbar-inside-text').html('Large Container');
		$(container).css('width','80%');  
		$(container).css('left', winW/2-$(container).width()/2);				  				
    } else {
		$('#navbar-inside-text').html('Inside Container');     	
		$(container).css('width','100%'); 
		$(container).css('left','0px');			  	 												
    } 		
}
function container_toogle_large()
{

	// return;/// a revoir cela marche en partie
	var currentStatus 		= settingsState.insideContainer != undefined? 	settingsState.insideContainer : '';

	// If reduce size as device and it 's already in large mode don't referesh it 
	if (currentStatus == "large") return;


    var container 			= ".container";
	var displaySidebar 		= settingsState.displaySidebar != undefined? 	settingsState.displaySidebar : ''; 

	$('#navbar-inside-text').html('Inside Container');     	
	$(container).css('width','100%');
	$(container).css('left','0px');	
	if (displaySidebar == 'fix') {		
		$("#sidebar").css('width','16.66666667%');	
	} else {
		$("#sidebar").css('width','100%');
	}				    				 												
	settingsState.insideContainer = 'large';  
	localStorage.setItem("settings-state", JSON.stringify(settingsState));		   
}
function inside_container(index)
{

	// return;/// a revoir cela marche en partie
	var currentStatus 		= settingsState.insideContainer != undefined? 	settingsState.insideContainer : '';

	// If reduce size as device and it 's already in large mode don't referesh it 
	if (index != '' && currentStatus == "large") return;
	var insideContainer 	= ((index != '')? 	index : ((currentStatus == '')? 'large' :  ((currentStatus == 'large')? 'inside' : 'large')));	
    var winH = $(window).height();
    var winW = $(window).width();
    var container 			= ".container";
	var displaySidebar 		= settingsState.displaySidebar != undefined? 	settingsState.displaySidebar : ''; 
// alert(displaySidebar);
    $(container).fadeToggle(2000);  // same $(id).delay(2000).fadeIn(); & fadeOut();
    $(container).slideUp();
     setTimeout(function(){
		if (insideContainer == 'inside') {	
			$('#navbar-inside-text').html('Large Container');
			$(container).css('width','80%'); 
			$(container).css('left', winW/2-$(container).width()/2);
	
			if (displaySidebar == 'fix') {		
				$("#sidebar").css('width','13%');	// 16.66666667%
			} else {
				$("#sidebar").css('width','100%');
			}		
	    } else {
			$('#navbar-inside-text').html('Inside Container'); 
			//alert("hello");    	
			$(container).css('width','100%');
			$(container).css('left','0px');	

			if (displaySidebar == 'fix') {		
				$("#sidebar").css('width','16.66666667%');	
			} else {
				$("#sidebar").css('width','100%');
			}				    				 												
	    }    

  	},2000);    
    $(container).slideDown();
    //transition effect


	settingsState.insideContainer = insideContainer;  
	localStorage.setItem("settings-state", JSON.stringify(settingsState));		   
}
function init_navbar() 
{
	var currentStatus 	= settingsState.navbarStatus != undefined? 	settingsState.navbarStatus : 'fix';
    var container 		= ".container";
			
	// Display the current value on Nav bar
	if (currentStatus == 'fix') {
		$('#navbar-set').html('Static Header');
		$("#core-container").css('margin-top','72px');
		$("#navbar-container").css('position','fixed');								
    } else {
		$('#navbar-set').html('Fixed Header');	
		$("#core-container").css('margin-top','0px');
		$("#navbar-container").css('position','relative');
		$("#navbar-container").css('margin-top','0px');	
		$("#navbar-container").css('margin-left','0px');				 							
    }
 }
function navbar_toogle(index) 
{
	var currentStatus 	= settingsState.navbarStatus != undefined? 	settingsState.navbarStatus : 'fix';
	if (index == 'toogle') 	currentStatus = (currentStatus == 'fix')? 'static' : 'fix'; // click on menubar to change

	settingsState.navbarStatus = currentStatus;
	localStorage.setItem("settings-state", JSON.stringify(settingsState));	
	// Switch Value on Nav Bar and Modify the configuration
// alert(currentStatus);
	if (currentStatus == 'fix') {
		$('#navbar-set').html('Static Header');
		$("#core-container").css('margin-top','72px');
		$("#navbar-container").css('position','fixed');			
    } else {
		$('#navbar-set').html('Fixed Header');
		$("#core-container").css('margin-top','0px');
		$("#navbar-container").css('position','relative');
		$("#navbar-container").css('margin-top','0px');	
		$("#navbar-container").css('margin-left','0px');				
    }     

}
function init_sidebar() 
{
	var insideContainer 	= settingsState.insideContainer != undefined? 	settingsState.insideContainer : '';
	var currentStatus 		= settingsState.displaySidebar != undefined? 	settingsState.displaySidebar : '';

	if (currentStatus == 'fix') {
		$('#sidebar-set').html('Static Sidebar'); // Toogle info 
		$("#sidebar").css('position','fixed');
		if (insideContainer == 'large') $("#sidebar").css('width','16.66666667%'); else $("#sidebar").css('width','13%');								
    } else {
		$('#sidebar-set').html('Fixed Sidebar');  // Toogle info 
		$("#sidebar").css('position','relative'); 	
		$("#sidebar").css('width','100%;');						
    }	
}
function sidebar_toogle(index) 
{
	var insideContainer 	= settingsState.insideContainer != undefined? 	settingsState.insideContainer : '';
	var currentStatus 		= settingsState.displaySidebar != undefined? 	settingsState.displaySidebar : '';

	if (index == 'toogle') 	currentStatus = (currentStatus == 'fix')? 'static' : 'fix'; // click on menubar to change


	settingsState.displaySidebar = currentStatus;    
	localStorage.setItem("settings-state", JSON.stringify(settingsState));	

	// Switch Value on Menu Bar and Modify the configuration
	if (currentStatus == 'fix') {
		$('#sidebar-set').html('Static Sidebar'); // Toogle info 
		$("#sidebar").css('position','fixed');	
		if (insideContainer == 'large') $("#sidebar").css('width','16.66666667%'); else $("#sidebar").css('width','13%');				 							
    } else {
		$('#sidebar-set').html('Fixed Sidebar');  // Toogle info
		$("#sidebar").css('position','relative');	
		$("#sidebar").css('width','100%;');									
    } 

}

function change_pattern(id) 
{

	var patternItem 		= settingsState.patternItem != undefined? 	settingsState.patternItem : '';	
	if (patternItem != '') $("html").removeClass(patternItem);
	var pattern_title 	= '';
	var background 		= settingsState.background 	!= undefined? 	settingsState.background : '';

	if (id == '') id = patternItem;
	
	if (id == "pattern-green") { 
		if (background != '') $("body").removeClass("background-"+background);
		$("html").addClass("pattern-green");		
		color_widget(shadow8);			
		change_hover_sidebar(shadow8);	
		patternItem = 	"pattern-green";
		pattern_title = $("#pattern_2").attr('title');
	} else if (id == "pattern-blue") { // pattern-blue
		if (background != '') $("body").removeClass("background-"+background);		
		$("html").addClass("pattern-blue");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-blue";		
		pattern_title = $("#pattern_1").attr('title');						
	} else if (id == "pattern-grey") { // pattern-grey
		if (background != '') $("body").removeClass("background-"+background);		
		$("html").addClass("pattern-grey");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-grey";	
		pattern_title = $("#pattern_3").attr('title');				
 	} else if (id == "pattern-cross") {  // pattern-strip
		if (background != '') $("body").removeClass("background-"+background); 		
		$("html").addClass("pattern-cross");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);		
		patternItem = 	"pattern-cross";	
		pattern_title = $("#pattern_4").attr('title');		
 	} else if (id == "pattern-bleu-stripes") { // pattern-bleu-stripes
		if (background != '') $("body").removeClass("background-"+background); 		
		$("html").addClass("pattern-bleu-stripes");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-bleu-stripes";
		pattern_title = $("#pattern_7").attr('title');		
 	} else if (id == "pattern-blue-print") {  // pattern-blue-print
		if (background != '') $("body").removeClass("background-"+background); 		
		$("html").addClass("pattern-blue-print");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-blue-print";
		pattern_title = $("#pattern_5").attr('title');		
 	} else if (id == "pattern-argyle") {  // pattern-argyle
		if (background != '') $("body").removeClass("background-"+background); 		
		$("html").addClass("pattern-argyle");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-argyle";
		pattern_title = $("#pattern_6").attr('title');			
 	} else if (id == "pattern-stripes") {  // pattern-tiles
		if (background != '') $("body").removeClass("background-"+background); 		
		$("html").addClass("pattern-stripes");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-stripes";
		pattern_title = $("#pattern_9").attr('title');		
 	} else if (id == "pattern-weave") {  // pattern-waves
		if (background != '') $("body").removeClass("background-"+background); 		
		$("html").addClass("pattern-weave");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-weave";	
		pattern_title = $("#pattern_8").attr('title');			
	} else {
		change_hover_sidebar(shadow4);
		color_widget(shadow4);
		patternItem = 	"";			
	}
	$('#pattern-id').html('<li class="dropdown-header text_line">Pattern: <strong class="'+shadow4+'" style="font-size:14px">'+pattern_title+'<strong></li>');
	if (patternItem != '')	settingsState.mode = 'pattern'; else settingsState.mode = '';
	settingsState.patternItem = patternItem;
	localStorage.setItem("settings-state", JSON.stringify(settingsState));	
}
function pattern_toogle(index) 
{


	var currentStatus 	= settingsState.patternStatus != undefined? 	settingsState.patternStatus : 'on';		
	// Display the current value on Nav bar
	if (currentStatus == 'on') {
		$('#pattern-set').html('Widget Pattern Off');
		$("section").addClass("widget_blockquote");								
    } else {
		$('#pattern-set').html('Widget Pattern On');
		$("section").removeClass("widget_blockquote");					
    }	
    if (index == '' ) return; 				// this is true when loading page
	if (index == 'toogle') 	currentStatus = (currentStatus == 'on')? 'off' : 'on'; // click on menubar to change
					
	settingsState.patternStatus = currentStatus;	
	localStorage.setItem("settings-state", JSON.stringify(settingsState));	
	// Switch Value on Nav Bar and Modify the configuration
	if (currentStatus == 'off') {
		$('#pattern-set').html('Widget Pattern On');
		$("section").removeClass("widget_blockquote");								
    } else {
		$('#pattern-set').html('Widget Pattern Off');
		$("section").addClass("widget_blockquote");								
    }  	
}
$(function()
{


	init_navbar();
	init_sidebar();
	if (!g_mobile) pattern_toogle('');
	init_box_color_strip();
	init_container();
  	load_style();
  	// after load_style 

  	if (!g_mobile) {
		change_pattern('');  	
	  	$("#pattern_0").addClass("");
	  	$("#pattern_1").addClass("pattern-blue"); 
	  	$("#pattern_2").addClass("pattern-green");  
	  	$("#pattern_3").addClass("pattern-grey");
	  	$("#pattern_4").addClass("pattern-cross"); 
	  	$("#pattern_5").addClass("pattern-blue-print"); 
	  	$("#pattern_6").addClass("pattern-argyle");
	  	$("#pattern_7").addClass("pattern-bleu-stripes"); 
	  	$("#pattern_8").addClass("pattern-weave");  
	  	$("#pattern_9").addClass("pattern-stripes");
  	}    	 	  	 	 	
});


