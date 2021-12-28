

chrome.contextMenus.create({
  "title":"Define %s",
  "contexts":["selection"],
  "id": "text_selection"
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "text_selection") {

      // Open the popup menu in a new tab
      chrome.tabs.create({'url': chrome.runtime.getURL('popup.html')}, function(tab) {
      });

      // Await tab open and send the word that is trying to be defined to popup.js
      chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        if(request['greeting'] == 'abbrev_req'){
          let abbrev = info.selectionText;
          console.log('Sending abbreviation: ' + abbrev);
          sendResponse(abbrev);
        }
      });

      // Process the definition
      chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        // Format:
        console.log(request);
        console.log(sender);
        console.log(sendResponse);
      });


    }
});
