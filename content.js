/**
 * Created by Anton on 04.02.2017.
 */

var count=0;
var pre_count=-1;

window.onload = function() {
    window.setInterval( function() {
        var t = document.getElementsByClassName('post_content');

        count = t.length;

       // console.log(count.length);

    }, 75);
}


function canUpdate() {
    //console.log(count + " " + pre_count);

    if (count != pre_count) {
        pre_count = count;
        return true;
    }
    else
        return false;


}

window.setInterval( function() {

    if (canUpdate()) {
        var node = document.getElementsByClassName('wall_marked_as_ads');


        for (var i = 0; i < node.length; i++) {
            if (node[i].parentNode) {
                node[i].parentNode.parentNode.parentNode.removeChild(node[i].parentNode.parentNode);
                console.log("delete")
            }
            else {
                console.log("not parent");
            }
        }

        node = document.getElementById("ads_left");

        if (node != undefined) {
            node.remove();
        }

    }


}, 100);

/*console.log("-> " + node);
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
}*/


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

/*$(document).ready(function(){
    jQuery.each(jQuery('textarea[data-autoresize]'), function() {
    var offset = this.offsetHeight - this.clientHeight;
 
    var resizeTextarea = function(el) {
        jQuery(el).css('height', 'auto').css('height', el.scrollHeight + offset);
    };
    jQuery(this).on('keyup input', function() { resizeTextarea(this); }).removeAttr('data-autoresize');
});});



console.log("работаю");

var node = document.getElementsByClassName("f_post post page_block all own");


*/