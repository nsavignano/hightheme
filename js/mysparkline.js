$('#nicole_visits').sparkline([15,19,20,22,33,27,31,27,19,30,21,10,15,18,25,9,29], {
  type: 'line', 
  barColor: '#fa4c38',  
  height:'35px',
  weight:'96px',
  highlightColor: 'blue',
  tooltipFormat: $.spformat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}', 'sparklineTooltip')       
});
$('#yann_visits').sparkline([5,9,20,22,13,17,31,27,29,37,31,40,35,38,35,39,41], {
  type: 'line', 
  barColor: '#fa4c38',  
  height:'35px',
  weight:'96px',
  highlightColor: 'blue',
  tooltipFormat: $.spformat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}', 'sparklineTooltip')       
});

$('#facebook_overview').sparkline([2,0,-4,-2,4,8,12,8,17], {
  type: 'bar', 
  highlightColor: 'yellow',  
  tooltipFormat: $.spformat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}', 'sparklineTooltip')       
});
$('#twitter_overview').sparkline([2,0,-4,-2,-4,0,10,12,17], {
  type: 'bar', 
  highlightColor: 'blue',  
  tooltipFormat: $.spformat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}', 'sparklineTooltip')       
});
$('#linkedin_overview').sparkline([-2,0,-4,-2,14,8,15,8,12], {
  type: 'bar', 
  highlightColor: 'orange',  
  tooltipFormat: $.spformat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{suffix}}', 'sparklineTooltip')       
});
$('#google_overview').sparkline([-2,0,-4,-5,10,3,10], {
  type: 'bar', 
  highlightColor: 'red',  
  tooltipFormat: $.spformat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{suffix}}', 'sparklineTooltip')       
});
