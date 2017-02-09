/**
 * Background script
 *
 * Created by Anton on 04.02.2017.
 */

var currentURL;

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){
    console.log("Work " + tab.url);

    
      chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
          currentURL = tabs[0].url;
          console.log("URL:   " +  currentURL);
      });


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

