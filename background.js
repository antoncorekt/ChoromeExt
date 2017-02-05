/**
 * Created by Anton on 04.02.2017.
 */


$(function() {
    $('#background-color').colorpicker({
        color: '#AA3399',
    });
});
$(document).ready(function(){
    var onOffBut = document.getElementById("on-off-button");
    $(onOffBut).click(function()
    {
        var ArrowId = $(this).attr('id');
        if (ArrowId == 'on-off-button') 
        {
            $(onOffBut).html("Выключить");
            $(this).attr('id','off-on-button');
        } 
        else 
        {
            $(onOffBut).html('Включить');
            $(this).attr('id','on-off-button');
        }
        
    });

    var onOffAdvBut = document.getElementById("on-off-adv-button");
    $(onOffAdvBut).click(function()
    {
        var ArrowId = $(this).attr('id');
        if (ArrowId == 'on-off-adv-button') 
        {
            $(onOffAdvBut).html("Выключить");
            $(this).attr('id','off-on-adv-button');
        } 
        else 
        {
            $(onOffAdvBut).html('Включить');
            $(this).attr('id','on-off-adv-button');
        }
        
    });
});

var url;


chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;

});


window.onload = function() {



    window.setInterval( function() {

    }, 1000);
};

var aaaaa = "1";

function doStuffWithDOM(element) {
    console.log("I received the following DOM content:\n" + element);
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab)
{
    if (chrome.runtime.lastError)
    {
        console.log("error");
        return;
    }
    if (changeInfo.status === 'loading')
    {
        if (chrome.runtime.lastError)
        {
            console.log("error");
            return;
        }
        chrome.tabs.get(tabId, function (tabs)
        {
            console.log(tabs.url);



            if (tabs.url === "https://vk.com/donetsk") {
                console.log("Так это же типичный Донецк!!!");

                chrome.tabs.sendMessage(tabs.id, { text: "report_back" },
                    doStuffWithDOM);

                function modifyDOM() {

                    //You can play with your DOM here or check URL against your regex
                    var node = document.getElementsByClassName('wall_marked_as_ads');

                    //node.remove();

                  //  node.parentNode.removeChild(node);

                    console.log("ну же -> " + node);


                    for (var i = 0; i < node.length; i++) {
                        if (node[i].parentNode) {
                            node[i].parentNode.removeChild(node[i]);
                            console.log("тип удалил")
                        }
                        else {
                            console.log("not parent");
                        }
                    }

                    return document.body.innerHTML;

                }


                //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
                chrome.tabs.executeScript({
                    code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
                   // code: 'modifyDOM //argument here is a string but function.toString() returns function's code
                }, (results) => {
                    //Here we have just the innerHTML and not DOM structure
                    console.log('Popup script:');

                //console.log(results[0]);
                console.log("//////");

                    /*res = results;

                var node = res.getElementsByClassName('wall_marked_as_ads');
                //var node1 = document.getElementsByTagName('wall_marked_as_ads');
                // var node2 = document.body.children[1];
                console.log(node);
                //console.log(node1);
                // console.log(node2);


                for (var i = 0; i < node.length; i++) {
                    if (node[i].parentNode) {
                        node[i].parentNode.removeChild(node[i]);
                        console.log("тип удалил")
                    }
                    else {
                        console.log("not parent");
                    }
                }*/
            });


            }
        });
    }
});


