/**
 * Background script
 *
 * Created by Anton on 04.02.2017.
 */

var currentURL;

function modifyDOM(ads, arr, url) {
    var arrayURL = [];
    arrayURL = JSON.parse(arr);


    window.setInterval(function () {
        if (ads == undefined || ads == null || ads === false)
            return;





        // if (localStor[del_ledt_ads])
        var node = document.getElementById("ads_left");

        if (node != undefined) {
            node.remove();
        }

    }, 1000);

    window.setInterval(function () {
        if (ads == undefined || ads == null || ads === false) return;

        var node = document.getElementsByClassName('wall_marked_as_ads');

        for (var i = 0; i < node.length; i++) {
            node[i].parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
        }

        var node1 = document.getElementsByClassName('wall_text_name_explain_promoted_post post_link');

        for (var i = 0; i < node1.length; i++) {

            node1[i].parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
        }

    }, 100);

    function createElement(id) {
        var con = document.createElement('div');

        con.innerHTML = '<div class="' + id + '" ' +
            'onclick="var t = document.getElementById(' + id + ');\
                         if(t.style.display != \'none\'){ \
                            t.style.display = \'none\';\
                             document.getElementById(\'buttoniner' + id + '\').innerHTML = \'Открыть репост \';\
                         }\
                          else\
                          { \
                          t.style.display = \'block\';\
                          document.getElementById(\'buttoniner' + id + '\').innerHTML = \'Скрыть репост \';}\
                           " align="center"> \
                        <button id="buttoniner' + id + '" class="buttonInDiv" >Открыть репост</button> \
                        \
                        </div>';

        return con.firstChild;
    }

    window.setInterval(function () {

        var b = true;
        for (var i = 0; i < arrayURL.length; i++) {
            if (arrayURL[i] == url)
                b = false;
        }

        if (b) return;

        var node = document.getElementsByClassName('copy_quote');


        for (var i = 0; i < node.length; i++) {
            var el = node[i].parentNode.parentNode.parentNode;


            if (el.getAttribute("id") != null)
                continue;

            if (el.style.display != 'none') {
                el.style.display = 'none';
                el.setAttribute("id", "" + i);
                el.parentNode.childNodes[1].appendChild(createElement(i));
            }
        }


    }, 100);

    return document.body.innerHTML;
}


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tabs)
{
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        currentURL = tabs[0].url;
        if(currentURL !== null)
            localStorage.setItem("lastUrl", currentURL);
    });


    if (chrome.runtime.lastError)
    {
        console.log("error");
        return;
    }
    if (changeInfo.status !== 'loading') {
    } else {
        if (chrome.runtime.lastError) {
            console.log("error");
            return;
        }
        chrome.tabs.get(tabId, function (tabs) {
            console.log("tab->" + tabs.url);
            var on = localStorage.getItem("onOffBut");

            if (on == undefined || on == null || on === "false") return;

            var ads = localStorage.getItem("onOffButAdv");
            var arr = localStorage.getItem("arrayOfURLRep");

            arrayURL = JSON.parse(arr);
            //if (on === "false" ) return;

            console.log("worrk");


            chrome.tabs.executeScript({
                code: '(' + modifyDOM + ')(' + ads + ',\'' + arr + '\',\'' + tabs.url + '\');'

            }, (results) => {

        });



        });
    }
});

window.addEventListener('storage',function(e){get_event_of_storage(e);},false);

var get_event_of_storage = function(e) {

    var on = localStorage.getItem("onOffBut");

    if (on == undefined || on == null || on === "false") return;

    var loc_color = localStorage.getItem("color");

    function setColor(color) {
        $('body').css('background', color);
    }

    chrome.tabs.executeScript({
        code: '(' + setColor + ')(\'' + loc_color + '\');'

    }, (results) => {
    });

}




