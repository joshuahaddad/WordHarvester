

chrome.contextMenus.create({
  "title":"Define %s",
  "contexts":["selection"],
  "id": "text_selection"
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "text_selection") {
      // Store the word that is attempting to be defined
      console.log(info.selectionText);

      // Send message to popup.js context script
      chrome.runtime.sendMessage({greeting: "test"}, function(response){
        console.log(response.farewell)
      });
      // chrome.storage.sync.set({info.selectionText});

      // Open the popup menu in a new tab
      chrome.tabs.create({'url': chrome.runtime.getURL('popup.html')}, function(tab) {
      });
    }
});
