
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
 


		treeD_setting(effect3D);
		theme_settings(style);		
		if (parseInt(document.documentElement.clientWidth) < 768) { 
			//alert(document.documentElement.clientWidth);
				sidebar_toogle('static');	 		
		    	$('#sidebar').hide();
		    	$('#pattern').hide();	
				$('#pattern-id').hide();			    		    	
		    	$('#sidebar-set').hide();
		    	$('#pattern-divide').hide();		    	
		    	$('#navbar-inside').hide();
		    	$('#navbar-inside').hide();
				inside_container('large');  
				// alert('sidebar_toogle');
				sidebar_device('');
				//$("html").css('overflow','hidden');  /* NEED This for the Small Device */
		} else {
				$('#sidebar').show();
		    	$('#sidebar-set').show();
		    	$('#navbar-inside').show();	
		    	$('#pattern').show();	
				$('#pattern-id').show();
				$('#pattern-divide').show();
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
	localStorage.setItem("settings-state", JSON.stringify(settingsState));	   
}
function sidebar_device()
{
	
	currentStatus =  'static';
	settingsState.displaySidebar = currentStatus;    
	localStorage.setItem("settings-state", JSON.stringify(settingsState));	
	// Switch Value on Menu Bar and Modify the configuration
	$("#sidebar-affix").removeClass('sidebar_fix');
	$("#sidebar-affix").addClass('sidebar_rel'); 
	$('#sidebar-set').html('Fixed Sidebar');  // Toogle info 							
 
}
function sidebar_toogle(index) 
{

	var currentStatus 		= settingsState.displaySidebar != undefined? 	settingsState.displaySidebar : '';
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


	settingsState.displaySidebar = currentStatus;    
	localStorage.setItem("settings-state", JSON.stringify(settingsState));	

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

	var currentStatus 		= settingsState.navbarStatus != undefined? 	settingsState.navbarStatus : 'fix';		
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
					
	settingsState.navbarStatus = currentStatus;
	localStorage.setItem("settings-state", JSON.stringify(settingsState));	
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

	var patternItem 		= settingsState.patternItem != undefined? 	settingsState.patternItem : '';	
	if (patternItem != '') $("html").removeClass(patternItem);
	var pattern_title 	= '';

	if (id == '') id = patternItem;
	
	if (id == "pattern-green") { 
		$("html").addClass("pattern-green"); // pattern-green
		color_widget(shadow8);			
		change_hover_sidebar(shadow8);	
		patternItem = 	"pattern-green";
		pattern_title = $("#pattern_2").attr('title');
	} else if (id == "pattern-blue") { // pattern-blue
		$("html").addClass("pattern-blue");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-blue";		
		pattern_title = $("#pattern_1").attr('title');						
	} else if (id == "pattern-grey") { // pattern-grey
		$("html").addClass("pattern-grey");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-grey";	
		pattern_title = $("#pattern_3").attr('title');				
 	} else if (id == "pattern-cross") {  // pattern-strip
		$("html").addClass("pattern-cross");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);		
		patternItem = 	"pattern-cross";	
		pattern_title = $("#pattern_4").attr('title');		
 	} else if (id == "pattern-bleu-stripes") { // pattern-bleu-stripes
		$("html").addClass("pattern-bleu-stripes");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-bleu-stripes";
		pattern_title = $("#pattern_7").attr('title');		
 	} else if (id == "pattern-blue-print") {  // pattern-blue-print
		$("html").addClass("pattern-blue-print");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-blue-print";
		pattern_title = $("#pattern_5").attr('title');		
 	} else if (id == "pattern-argyle") {  // pattern-argyle
		$("html").addClass("pattern-argyle");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-argyle";
		pattern_title = $("#pattern_6").attr('title');			
 	} else if (id == "pattern-stripes") {  // pattern-tiles
		$("html").addClass("pattern-stripes");
		change_hover_sidebar(shadow8);
		color_widget(shadow8);	
		patternItem = 	"pattern-stripes";
		pattern_title = $("#pattern_9").attr('title');		
 	} else if (id == "pattern-weave") {  // pattern-waves
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
    // OpenPage('sidebar/sidebar.html',2);  		   
	navbar_toogle('');
	sidebar_toogle('');
	pattern_toogle('');
	init_box_color_strip();
	inside_container('large');
  	load_style();
  	// after load_style 
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
});


