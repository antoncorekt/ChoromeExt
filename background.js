/**
 * Created by Anton on 04.02.2017.
 */

var currentURL;

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){
    console.log("Work " + tab.url);

    
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    currentURL = tabs[0].url;
    console.log("URL:   " + currentURL);
});

    // защита


    chrome.tabs.get(tabId, function (tabs) {

        if (tabs.url === "https://vk.com/donetsk") {
            

            window.setInterval( function() {

               

            }, 
            1000);

        }
    });


});


chrome.tabs.onActivated.addListener(function (tabId, changeInfo, tab){
    console.log("-> " + tab.url);
});

/*
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab)
{
    if (chrome.runtime.lastError)
    {
        console.log("error");
        return;
    }
    if (changeInfo.status === 'loading') {
        if (chrome.runtime.lastError)
        {
            console.log("error");
            return;
        }
        chrome.tabs.get(tabId, function (tabs) {
            console.log(tabs.url);


            if (tabs.url === "https://vk.com/donetsk") {
                console.log("Так это же типичный Донецк!!!");

                chrome.tabs.sendMessage(tabs.id, { text: "report_back" },
                    doStuffWithDOM);

                function modifyDOM() {

                   
                    var node = document.getElementsByClassName('wall_marked_as_ads');

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


                chrome.tabs.executeScript({
                    code: '(' + modifyDOM + ')();' 
                   
                }, (results) => {
       
               
            });


            }
    });
    }
});



window.onload = function() {
    window.setInterval( function() {

    }, 1000);
};*/



