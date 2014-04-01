
var settingsState = JSON.parse(localStorage.getItem("settings-state")) || {
    sidebar 		: 'left',
    background 		: 'classic',
    sidebarState 	: 'auto',
	effect3D 		: false,    
    displaySidebar 	: 'fix',
    device 			: '',
    insideContainer	: 'large',
    navbarState		: 'fix',
    pattern 		: 'off'
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

	var currentStatus 		= settingsState.displaySidebar != undefined? 	settingsState.displaySidebar : '';
	var displaySidebar 		= ((index != '')? 	index : ((currentStatus == '')? 'fix' :  ((currentStatus == 'fix')? 'static' : 'fix'))); 

	if (displaySidebar == 'static') {
		$('#sidebar-set').html('Fixed Sidebar'); // Toogle info 
		$("#sidebar-affix").removeClass('sidebar_fix');
		$("#sidebar-affix").addClass('sidebar_rel'); 					
    } else {
		$('#sidebar-set').html('Static Sidebar');  // Toogle info 
		$("#sidebar-affix").removeClass('sidebar_rel');
		$("#sidebar-affix").addClass('sidebar_fix');				
    }
	settingsState.displaySidebar = displaySidebar;     
}
function navbar_toogle(index) 
{
	var currentStatus 		= settingsState.navbarState != undefined? 	settingsState.navbarState : '';
	var navbarState 		= ((index != '')? 	index : ((currentStatus == '')? 'fix' :  ((currentStatus == 'fix')? 'static' : 'fix')));

	if (navbarState == 'static') {
		$('#navbar-set').html('Static Header');
		$("#navbar").addClass('navbar_fix');			  				
    } else {
		$('#navbar-set').html('Fixed Header');
		$("#navbar").removeClass('navbar_fix');
		$("#navbar").css('margin-bottom','-52px');								
    }
 	settingsState.navbarState = navbarState;
}
function pattern_toogle(index) 
{
	var currentStatus 		= settingsState.pattern != undefined? 	settingsState.pattern : '';
	var patternState 		= ((index != '')? 	index : ((currentStatus == '')? 'off' :  ((currentStatus == 'off')? 'on' : 'off')));
	if (patternState == 'on') {
		$('#pattern-set').html('Pattern Off');
		$("section").addClass("widget_blockquote");		  				
    } else {
		$('#pattern-set').html('Pattern On');
		$("section").removeClass("widget_blockquote");								
    }
 	settingsState.pattern = patternState;
}
$(function()
{
    // OpenPage('sidebar/sidebar.html',2);  		   
	navbar_toogle('fix');
	sidebar_toogle('fix');
	pattern_toogle('off');
	init_box_color_strip();
	inside_container('large');
  	load_style();
});
