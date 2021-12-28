// Get the abbreviation from background.js
chrome.runtime.sendMessage({greeting: 'abbrev_req'}, function(response){
  console.log("Abbreviation request fulfilled: " + response);
  let abbrev = response;
});

s.addEventListener("click", async () => {
  // Get the definition of the word entered by the user
  let user_input = document.getElementById("q").value;

  // Send this value to background.js
  chrome.runtime.sendMessage({abbrev: abbrev, definition: user_input});
});

function getInput(message) {
  console.log(message);
}
