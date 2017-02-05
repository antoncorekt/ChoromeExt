/**
 * Created by Anton on 04.02.2017.
 */

$(document).ready(function(){
    jQuery.each(jQuery('textarea[data-autoresize]'), function() {
    var offset = this.offsetHeight - this.clientHeight;
 
    var resizeTextarea = function(el) {
        jQuery(el).css('height', 'auto').css('height', el.scrollHeight + offset);
    };
    jQuery(this).on('keyup input', function() { resizeTextarea(this); }).removeAttr('data-autoresize');
});});



console.log("работаю");

var node = document.getElementsByClassName("f_post post page_block all own");



console.log("-> " + node);
console.log(document.body);




for (var i = 0; i < node.length; i++) {
    console.log("->"+node[i]);
    if (node[i].parentNode) {
        node[i].parentNode.removeChild(node[i]);
        console.log("тип удалил")
    }
    else {
        console.log("not parent");
    }
}


chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    console.log("!!!!!!!!!!!!!!!");


    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        console.log("uhudkfhvsfhvljdfv???");




        sendResponse(document.all[0].outerHTML);
    }
});

>>>>>>> 9ed1fe2038da1ece352a93f6590655f1247e9a51
