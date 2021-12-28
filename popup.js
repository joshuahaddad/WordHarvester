// Get the abbreviation from background.js, inject into html and store
chrome.runtime.sendMessage({greeting: 'abbrev_req'}, function(abbrev){
  // If response is a string we can process it
  if(typeof(abbrev) == 'string'){
      // Log that we have a response
      console.log("Abbreviation request fulfilled: " + abbrev);

      // Store the abbrev into popup.js local storage
      chrome.storage.local.set({abbreviation: abbrev}, function() {
          console.log('Abbreviation stored as: ' + abbrev);
    });
  }

  // TODO: Change the HTML so the abbreviation shows up in page
  var title = document.getElementById("Title");
  title.innerText = "Define Abbreviation: " + abbrev;
});

// Get user input
s.addEventListener("click", async () => {

  // If abbrev variable does not have a definition, an error occurred
  let abbrev = await chrome.storage.local.get('abbreviation').abbreviation;
  if(abbrev == undefined){
    return;
  }

  // Get the definition of the word entered by the user
  let user_input = document.getElementById("q").value;

  // Send this value to background.js
  chrome.runtime.sendMessage({abbrev: abbrev, definition: user_input});
});

function getInput(message) {
  console.log(message);
}
