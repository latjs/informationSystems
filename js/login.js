function $(id) {
	return document.getElementById(id);
};
window.onload = function(){
    var oCloudTop = $('cloudTop'),
        oCloudBottom = $('cloudBottom');

    var tp = 1.5;
    var bot = 2;
    setInterval(function(){
    bot += 0.5; 
    oCloudBottom.style.backgroundPositionX = bot + 'px'; 
    },100);


    setInterval(function(){
    tp += 1; 
    oCloudTop.style.backgroundPositionX = tp + 'px';   
    },80);
    
}
    

    
