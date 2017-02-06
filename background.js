/**
 * Background script
 *
 * Created by Anton on 04.02.2017.
 */

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

            if (tabs.url === "https://vk.com/donetsk") {

                function modifyDOM() {

                    // content logic hear with document

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




