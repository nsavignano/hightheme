
function setCookie(a, b, c) {
    var d=new Date();
    d.setDate(d.getDate()+c);
    var e=escape(b)+((c==null)?"":";expires="+d.toUTCString());
    document.cookie=a+"="+e;
}
function getCookie(a) {
    var ARRcookies=document.cookie.split(";");
    for (var i=0;i<ARRcookies.length;i++) {
        var x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        var y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==a) {return unescape(y); }
    }
}
