// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getIP") {
    fetch(`https://api64.ipify.org?format=json`)
      .then((response) => response.json())
      .then((data) => {
        sendResponse({ ip: data.ip });
      })
      .catch((error) => {
        sendResponse({ error: "Error fetching IP address." });
      });
    return true;
  }
});
