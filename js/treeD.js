/* 2D & 3D setting inside the popup menu */

var c=document.getElementById("myCanvas2d");
var ctx=c.getContext("2d");
ctx.fillStyle="red";
ctx.fillRect(0,0,40,30);

var c=document.getElementById("myCanvas3d");
var ctx=c.getContext("2d");
ctx.shadowBlur=6;
ctx.shadowOffsetX=7;
ctx.shadowOffsetY=7;
ctx.shadowColor="black";
ctx.fillStyle="red";
ctx.fillRect(0,0,40,30);

function treeD_setting(flag) {

	settingsState.effect3D = settingsState.effect3D != undefined? 	flag : false;
	localStorage.setItem("settings-state", JSON.stringify(settingsState)); 

    var style 		= settingsState.background; 
    var shadow 		= 'square-badge ';
    var navbar 		= '';
    var widget 		= '';
    var border 		= '';    
    var listgroup 	= '';
    var dropdown 	= '';
    var text3D 		= '<strong class="square-badge" style="font-size:14px">2D</strong> / 3D';
	$(".btn-default").removeClass("but3D");


	if (settingsState.effect3D) {
		navbar 		= "2px 2px 5px rgba(0,0,0,0.8)";
		widget 		= "5px 5px 4px rgba(0,0,0,0.6)";	
		dropdown 	= "5px 5px 4px rgba(0,0,0,0.4)";		
		listgroup 	= "5px 5px 4px rgba(0,0,0,0.4)";	
		border		= "solid 2px #444";		
		text3D 		= '2D / <strong class="square-badge shadow-effect" style="font-size:14px;">3D</strong>';
		shadow 		= 'square-badge  shadow-effect';	
		$(".btn-default").addClass("but3D");				
	}
 
	$('.dropdown-menu').css("box-shadow", dropdown); 
	$('.widget').css("box-shadow", widget);
	$('#navbar').css("box-shadow", navbar); 
	$('#goal').css("box-shadow", widget);	
	$('#money').css("box-shadow", widget);
	$('#business-widget').css("box-shadow", widget);		
	$('.list-group').css("box-shadow", listgroup);
	$('.list-group:last-child').css("border-bottom-right-radius", "21px"); 
	$('.panel-default').css("box-shadow", listgroup);		
	//$('.widget').css("border-right",border);
	//$('.widget').css("border-bottom",border);	

	$('#text3D').html(text3D);	
	$('#theme-id').html('<li class="dropdown-header text_line">Theme: <strong class="'+shadow4+'" style="font-size:14px">'+style+'<strong></li>');


}