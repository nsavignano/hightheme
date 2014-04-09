$(function(){
	$("[rel=drevil]").popover({
	  placement : 'bottom', //placement of the popover. also can use top, bottom, left or right
	  title : '<div style="text-align:center; color:red; text-decoration:underline; font-size:14px;"> 3 Messages </div>', //this is the top title bar of the popover. add some basic css
	  trigger:'click',
	  container: '#zina',
	  html: 'true', //needed to show html of course
	  content : '<div class="list-group">'+
	  			'<a href="#" class="list-group-item active">Cras justo odio</a>'+
	  			'<a href="#" class="list-group-item">Dapibus ac facilisis in</a>'+
	  			'<a href="#" class="list-group-item">Morbi leo risus</a>'+
	  			'<a href="#" class="list-group-item">Porta ac consectetur ac</a>'+
	  			'<a href="#" class="list-group-item">Vestibulum at eros</a>'+
	  			'</div>'

	});
	$("[rel=drevil1]").popover({
	  placement : 'right', //placement of the popover. also can use top, bottom, left or right
	  title : '<div style="text-align:center; color:red; text-decoration:underline; font-size:14px;"> 3 Messages </div>', //this is the top title bar of the popover. add some basic css
	  trigger:'click',
	  container: '#zina1',
	  html: 'true', //needed to show html of course
	  content : '<div class="list-group">'+
	  			'<a href="#" class="list-group-item active">Cras justo odio</a>'+
	  			'<a href="#" class="list-group-item">Dapibus ac facilisis in</a>'+
	  			'<a href="#" class="list-group-item">Morbi leo risus</a>'+
	  			'<a href="#" class="list-group-item">Porta ac consectetur ac</a>'+
	  			'<a href="#" class="list-group-item">Vestibulum at eros</a>'+
	  			'</div>'

	});	
	$("#settings").popover({
	  placement : 'bottom', //placement of the popover. also can use top, bottom, left or right
	  title : '<div style="text-align:center; color:red; text-decoration:underline; font-size:14px;"> Muah ha ha</div>', //this is the top title bar of the popover. add some basic css
	  html: 'true', //needed to show html of course
	  trigger:'focus',
	  content : '<div id="popOverBox">'+
	  			'<img src="http://www.hd-report.com/wp-content/uploads/2008/08/mr-evil.jpg" width="251" height="201" />'+
	  			'</div>' //this is the content of the html box. add the image here or anything you want really.

	});
	$("#settings1").popover({
	  placement : 'bottom', //placement of the popover. also can use top, bottom, left or right
	  title : '<div style="text-align:center; color:red; text-decoration:underline; font-size:14px;"> Muah ha ha</div>', //this is the top title bar of the popover. add some basic css
	  html: 'true', //needed to show html of course
	  trigger:'focus',
	  content : '<div id="popOverBox">'+
	  			'<img src="http://www.hd-report.com/wp-content/uploads/2008/08/mr-evil.jpg" width="251" height="201" />'+
	  			'</div>' //this is the content of the html box. add the image here or anything you want really.

	});	
});