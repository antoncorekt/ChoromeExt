/**
 * Content script
 *
 * Created by Anton on 04.02.2017.
 */

var count=0;
var pre_count=-1;


function canUpdate() {
    //console.log(count + " " + pre_count);

    if (count != pre_count) {
        pre_count = count;
        return true;
    }
    else
        return false;


}

window.setInterval( function () {

    var node = document.getElementsByClassName('wall_post_text');

    for (var i = 0; i < node.length; i++) {
        console.log(i + " text" + node[i].innerHTML);
    }


},100000);

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


