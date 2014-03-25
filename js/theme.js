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

function theme_settings(theme) {


	$("section").removeClass("widget_blockquote");
	//$('.sidebar-body').css('color',white);
	//$('#hr_widget').hide();
	//$('blockquote').css('border',inherit); 

	if (theme == 'oceane') { 
		$('.pull-right-ns').css('border', '2px groove #bbb');		
		oceane_style(theme);
		return;
	}	
	if (theme == 'talisman') { 
		$('.sidebar-body').css('color',tlmgreen);		
		$('.sidebar-body').css('color',tlmgreen);
		talisman_style(theme);
		return;
	}
	if (theme == 'turquoise') { 
		$('.sidebar-body').css('color',tlmgreen);		
		$('.sidebar-body').css('color',tlmgreen);
		$('#hr_widget').show();		
		turquoise_style(theme);
		return;
	}
	if (theme == 'classic') { 
		$('#hr_widget').show();
		$('.sidebar-body').css('color',tlmgreen);				
		$('.pull-right-ns > h1').css('color', lightblue);		
		$('.sidebar-body').css('color',tlmgreen);
		classic_style(theme);
		return;
	}

	if (theme == 'sand') { 
		$("section").addClass("widget_blockquote");
		sand_style(theme);
		return;
	}		
	if (theme == 'salmon') { 
		$("section").addClass("widget_blockquote"); 
		salmon_style(theme);
		return;
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
