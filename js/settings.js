
var settingsState = JSON.parse(localStorage.getItem("settings-state")) || {
    sidebar 		: 'left',
    background 		: 'classic',
    sidebarState 	: 'auto',
	effect3D 		: false,    
    device 			: '',
    insideContainer	: 'large'
}

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

		var background 			= settingsState.background != undefined? 	settingsState.background : '';
		var effect3D 			= settingsState.effect3D != undefined? 		settingsState.effect3D : false;
		var background_device 	= settingsState.device != undefined? 		settingsState.device : '';
		// if select one theme, have to remove Pattern if so
		if (style != '') change_pattern(10);
		if ( (style == '') && (background == '') ) style = 'classic';
		else if ( (style == '') && (background != '') ) style = background;
		else { 
			$("body").removeClass("background-"+background);
			// empty the color frame inside the Theme menu
			$('#'+background).css('background-color',empty);
		}
		// console.log(style+';'+background+':'+settingsState.device );
		$("body").addClass("background-"+style); 
		settingsState.background = style;
		localStorage.setItem("settings-state", JSON.stringify(settingsState)); 


		treeD_setting(effect3D);
		theme_settings(style);		
		if (parseInt(document.documentElement.clientWidth) < 768) { 
			//alert(document.documentElement.clientWidth);
				sidebar_toogle('static');			
		    	$('#sidebar').hide();
		    	$('#sidebar-set').hide();
		    	$('#navbar-inside').hide();
				inside_container('large');  
				//$("html").css('overflow','hidden');  /* NEED This for the Small Device */
		} else {
				$('#sidebar').show();
		    	$('#sidebar-set').show();
		    	$('#navbar-inside').show();	
				//$("html").css('overflow','visible');  /* NEED This for the Small Device */		    		    		    				
		}

}
function load_style()
{
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
function inside_container(index)
{
	return;/// a revoir cela marche en partie
	var currentStatus 		= settingsState.insideContainer != undefined? 	settingsState.insideContainer : '';
	var insideContainer 	= ((index != '')? 	index : ((currentStatus == '')? 'large' :  ((currentStatus == 'large')? 'inside' : 'large')));	

	if (insideContainer == 'inside') {		
		$('#navbar-inside').html('Large Container');
		$("#navbar").addClass('navbar_inside');	
		$("#navbar-text").removeClass('navbar-right');			
		$("#navbar-text").addClass('navbar-text-inside-right');

    	$("#inside-container").css('width','90%');
		$("#navbar").css('width','85%');
		$("#navbar").css('left','190px'); 
		$("#sidebar").css('width','80px');		
		$("#sidebar").css('float','right'); 				     	 						  				
    } else {
		$('#navbar-inside').html('Inside Container');
		$("#navbar").removeClass('navbar_inside');
		$("#navbar-text").removeClass('navbar-text-inside-right');
		$("#navbar-text").addClass('navbar-right');	
    	$("#inside-container").css('width','100%');
		$("#sidebar").css('width','200px');    	 														
    } 

	settingsState.insideContainer = insideContainer;     
}
function sidebar_toogle(index) 
{
	var currentStatus = getCookie('sidebarStatus') != undefined? 	getCookie('sidebarStatus') : '';
	// Display the current value on Menu bar
	if (currentStatus == 'fix') {
		$('#sidebar-set').html('Static Sidebar'); // Toogle info 
		$("#sidebar-affix").removeClass('sidebar_rel');
		$("#sidebar-affix").addClass('sidebar_fix');							
    } else {
		$('#sidebar-set').html('Fixed Sidebar');  // Toogle info 
		$("#sidebar-affix").removeClass('sidebar_fix');		
		$("#sidebar-affix").addClass('sidebar_rel'); 						
    }	
    if (index == '' ) return; 				// this is true when loading page
	if (index == 'toogle') 	currentStatus = (currentStatus == 'fix')? 'static' : 'fix'; // click on menubar to change
					
	setCookie('sidebarStatus', currentStatus); // new value or the same one
	// Switch Value on Menu Bar and Modify the configuration
	if (currentStatus == 'static') {
		$("#sidebar-affix").removeClass('sidebar_fix');
		$("#sidebar-affix").addClass('sidebar_rel'); 
		$('#sidebar-set').html('Fixed Sidebar');  // Toogle info 							
    } else {
		$("#sidebar-affix").removeClass('sidebar_rel');
		$("#sidebar-affix").addClass('sidebar_fix');
    	$('#sidebar-set').html('Static Sidebar'); // Toogle info 					
    }   
}
function navbar_toogle(index) 
{
	var currentStatus = getCookie('navbarStatus') != undefined? 	getCookie('navbarStatus') : 'fix';
	// Display the current value on Nav bar
	if (currentStatus == 'fix') {
		$('#navbar-set').html('Static Header');
		$("#navbar").addClass('navbar_fix');
		$(".starter-template").css('margin-top','72px');						
    } else {
		$('#navbar-set').html('Fixed Header');
		$("#navbar").removeClass('navbar_fix');	
		$(".starter-template").css('margin-top','10px');						
    }	
    if (index == '' ) return; 				// this is true when loading page
	if (index == 'toogle') 	currentStatus = (currentStatus == 'fix')? 'static' : 'fix'; // click on menubar to change
					
	setCookie('navbarStatus', currentStatus); // new value or the same one
	// Switch Value on Nav Bar and Modify the configuration
	if (currentStatus == 'fix') {
		$('#navbar-set').html('Static Header');
		$("#navbar").addClass('navbar_fix');
		$(".starter-template").css('margin-top','72px');							
    } else {
		$('#navbar-set').html('Fixed Header');
		$("#navbar").removeClass('navbar_fix');	
		$(".starter-template").css('margin-top','10px');					
    }  	
}

function change_pattern(id) 
{

	var patternItem = getCookie('patternItem') != undefined? 	getCookie('patternItem') : '';
	if (patternItem != '') $("html").removeClass(patternItem);

	if (id == '') id = patternItem;
	
	if (id == "pattern-green") { 
		$("html").addClass("pattern-green"); // pattern-green
		color_widget(shadow8);			
		change_hover_sidebar(shadow8);	
		patternItem = 	"pattern-green";
	} else if (id == "pattern-blue") { // pattern-blue
		$("html").addClass("pattern-blue");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-blue";			
 	} else if (id == "pattern-strip") {  // pattern-strip
		$("html").addClass("pattern-strip");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
	} else if (id == "pattern-grey") { // pattern-grey
		$("html").addClass("pattern-grey");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-grey";			
 	} else if (id == "pattern-cross") {  // pattern-strip
		$("html").addClass("pattern-cross");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);		
		patternItem = 	"pattern-cross";	
 	} else if (id == "pattern-bleu-stripes") { // pattern-bleu-stripes
		$("html").addClass("pattern-bleu-stripes");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-bleu-stripes";
 	} else if (id == "pattern-blue-print") {  // pattern-blue-print
		$("html").addClass("pattern-blue-print");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-blue-print";
 	} else if (id == "pattern-argyle") {  // pattern-argyle
		$("html").addClass("pattern-argyle");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-argyle";
 	} else if (id == "pattern-upholstery") { // 
		$("html").addClass("pattern-upholstery");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-upholstery";
 	} else if (id == "pattern-stripes") {  // pattern-tiles
		$("html").addClass("pattern-stripes");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-stripes";
 	} else if (id == "pattern-weave") {  // pattern-waves
		$("html").addClass("pattern-weave");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-weave";		
	} else {
		change_hover_sidebar(shadow4);
		color_widget(shadow4);
		patternItem = 	"";			
	}
	setCookie('patternItem', patternItem); // new value or the same one
}
function pattern_toogle(index) 
{

	var currentStatus = getCookie('patternStatus') != undefined? 	getCookie('patternStatus') : 'on';
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
					
	setCookie('patternStatus', currentStatus); // new value or the same one
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
    // OpenPage('sidebar/sidebar.html',2);  		   
	navbar_toogle('');
	sidebar_toogle('');
	pattern_toogle('');
	init_box_color_strip();
	inside_container('large');
  	load_style();
  	// after load_style 
	change_pattern('');  	
  	$("#pattern").addClass("");
  	$("#pattern_1").addClass("pattern-blue"); 
  	$("#pattern_2").addClass("pattern-green");  
  	$("#pattern_3").addClass("pattern-grey");
  	$("#pattern_4").addClass("pattern-cross"); 
  	$("#pattern_5").addClass("pattern-blue-print"); 
  	$("#pattern_6").addClass("pattern-argyle");
  	$("#pattern_7").addClass("pattern-bleu-stripes"); 
  	$("#pattern_8").addClass("pattern-weave");  
  	$("#pattern_9").addClass("pattern-stripes");    	 	  	 	 	
});


