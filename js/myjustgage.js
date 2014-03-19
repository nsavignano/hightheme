var twt, lkd, fck, ggl, min_0 = 45, max_0 = 52 , min_1 = 45, max_1 = 52 ,min_2 = 45, max_2 = 52 ,min_3 = 45, max_3 = 52,cycle = 3, count = 0;

setInterval(function(){
  twt.refresh(getRandomInt(min_0,max_0));
    if (count < cycle) {
      min_0 +=20;
      max_0 +=20;
    } else {
      min_0 -=30;
      max_0 -=30;
    }
    count = (count >= cycle)? 0 : (count+1);
    if (max_0 > 500) {
      min_0 = 35;
      max_0 = 50;
    } 

    lkd.refresh(getRandomInt(min_1,max_1));
      if (count < cycle) {
        min_1 +=20;
        max_1 +=20;
      } else {
        min_1 -=30;
        max_1 -=30;
      }
      count = (count >= cycle)? 0 : (count+1);
      if (max_1 > 150) {
        min_1 = 35;
        max_1 = 50;
      } 

      fck.refresh(getRandomInt(min_2,max_2));
        if (count < cycle) {
          min_2 +=10;
          max_2 +=10;
        } else {
          min_2 -=5;
          max_2 -=5;
        }
        count = (count >= cycle)? 0 : (count+1);
        if (max_2 > 350) {
          min_2 = 0;
          max_2 = 50;
        } 

      ggl.refresh(getRandomInt(min_2,max_2));
        if (count < cycle) {
          min_3 +=10;
          max_3 +=10;
        } else {
          min_3 -=5;
          max_3 -=5;
        }
        count = (count >= cycle)? 0 : (count+1);
        if (max_3 > 350) {
          min_3 = 0;
          max_3 = 50;
        }        
},1500);


twt = new JustGage({
  id: "twitter_gauge",
  value: getRandomInt(35, 50),
  min: 35,
  max: 500,
  valueFontColor : black,
  titleFontColor : '#66FF33',
  gaugeWidthScale: 0.8,  // 0 to 1.5 size of the gauge
  labelFontColor : '#66FF33',
  showInnerShadow : true,
  shadowVerticalOffset : 5,
  shadowOpacity: 1,
  showMinMax : true,
  startAnimationTime: 2000,
  startAnimationType:">",
  refreshAnimationTime:1000,
  refreshAnimationType:"bounce", // linear
  levelColors:["#66FF33","#9DFF20","#FFFF00", "#FF0000"],
  title: "Visitors",
  label: "Real-Time"
});

lkd = new JustGage({
  id:"linkedin_gauge",
  value:getRandomInt(0,50),
  min:0,
  titleFontColor : "#00fff6",
  labelFontColor : '#00fff6',  
  showMinMax : false,
  titleFontColor : black,
  max:150,
  title:"Visitors",
  label:"Real-Time",
  levelColors:["#00fff6","#ff00fc","#1200ff"]
});
fck = new JustGage({
  id:"facebook_gauge",
  value:getRandomInt(0,80),
  min:0,
  gaugeWidthScale: 0.4,  // 0 to 1.5 size of the gauge
  showMinMax : false,
  titleFontColor : "#00fff6",
  labelFontColor : '#00fff6',  
  max:350,
  title:"Visitors",
  label:"Real-Time",
  levelColors:["#75F55C","#C9BD24","#FF9900"]
});
ggl = new JustGage({
  id:"google_gauge",
  value:getRandomInt(0,80),
  min:0,
  gaugeWidthScale: 0.6,  // 0 to 1.5 size of the gauge
  showMinMax : false,
  titleFontColor : "#00fff6",
  labelFontColor : '#00fff6',  
  max:350,
  title:"Visitors",
  label:"Real-Time",
  levelColors:["#75F55C","#C9BD24","#FF9900"]
});