/**
 * Content script
 *
 * Created by Anton on 04.02.2017.
 */

var count=0;
var pre_count=-1;

window.onload = function() {
    window.setInterval( function() {
        var t = document.getElementsByClassName('post_content');
        count = t.length;
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

function createElement(id) {
    var con = document.createElement('div');

    con.innerHTML = '<div class="' + id + '" onclick="var t = document.getElementById(' + id + '); if(t.style.display != \'none\') t.style.display = \'none\'; else t.style.display = \'block\'; " align="center"> \
    <button id="buttoniner" class="buttonInDiv">Открыть репост</button> </div>';
  
    return con.firstChild;
}



var b = true;

// скрыть репосты
window.setInterval( function () {
    if (b) {
        var node = document.getElementsByClassName('copy_quote');

        for (var i = 0; i < node.length; i++) {
            var el = node[i].parentNode.parentNode.parentNode;

            if (el.style.display != 'none') {
                el.style.display = 'none';

                el.setAttribute("id", ""+i);

                el.parentNode.parentNode.insertBefore(createElement(i), null);


            }
        }
        b= false;

       /* for (var i =0 ; i<node.length; i++){
            $("."+i).click(function () {


                var t = document.getElementById(i);

                console.log("i->" + i);
                console.log("t->"+ t);

                t.style.display = 'block';
            });
        }*/
    }

},100);

// удаление рекламы в левой части сайта
window.setInterval( function () {
    // if (localStor[del_ledt_ads])
    var node = document.getElementById("ads_left");

    if (node != undefined) {
        node.remove();
    }

},1000);

// удаление постов с пометкой "платная реклама"
window.setInterval( function() {
    if (true) {
        var node = document.getElementsByClassName('wall_marked_as_ads');

        for (var i = 0; i < node.length; i++) {

            node[i].parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
        }

    }
}, 100);


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
