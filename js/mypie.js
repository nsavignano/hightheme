$(function () {
    var chart, chart1, chart2;
    
    $(document).ready(function () {


       //  var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
    	// Build the chart
        $('#pie').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                backgroundColor: null ,
                borderWidth: 0,
                borderRadius: 0,
                plotBackgroundColor: null              
            },
            title: {
                text: null /* 'Browser market shares at a specific website, 2010' */
            },
            tooltip: {
        	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },            
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
   navigation: {
      buttonOptions: {
         symbolStroke: 'rgba(51, 51, 51, 0.8)',
         hoverSymbolStroke: '#FFFFFF',
         theme: {
            fill: {
               linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
               stops: [
                  [0.4, 'rgba(51, 51, 51, 0.4)'],                                 
                  [0.6, 'rgba(51, 51, 51, 0.8)']
               ]
            },
            stroke: 'rgba(51, 51, 51, 0.2)'
         }
      }
   },            
            series: [{
                type: 'pie',
                name: '% New Visits',
                data: [
                    ['Referral',   45.0],
                    ['Organic',    26.8],
                    {
                        name: 'Paid',
                        y: 12.8,
                        sliced: true,
                        selected: true
                    },
                    ['Direct',    8.5],
                    ['Social',   6.2],
                    ['Social Referal',  0.7]
                ]
            }]
        });


        $('#notused').highcharts({
            chart: {
            type: 'bar',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                backgroundColor: null ,
                borderWidth: 0,
                borderRadius: 0,
                plotBackgroundColor: null ,            
                marginLeft: 45,
                marginRight: 10,
                width : 150,
                height:80  
            },
        title: {
            text: null,
        },
        exporting: {
            enabled: false,
        }, 
            xAxis: {
                categories: ['Visits', 'Pageviews', 'Visitors', 'New Visitors']
            },
            yAxis: {
                min: 0,
                title: {
                    text: null
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
        tooltip: {
            enabled: false
        },            
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
                series: [{
                name: 'Auto Market',
                data: [5, 9, 4, 7]
            }, {
                name: 'Floral Shop',
                data: [2, 3, 8, 1]
            }, {
                name: 'Fashion Store',
                data: [3, 4, 2, 10]
            }]
        });


    }); // document ready 



    
});