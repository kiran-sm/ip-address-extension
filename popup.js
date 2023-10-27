document.addEventListener("DOMContentLoaded", function () {
  const urlInput = document.getElementById("urlInput");
  const findButton = document.getElementById("findButton");
  const result = document.getElementById("result");

  findButton.addEventListener("click", function () {
    const url = urlInput.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getIP,
      });
    });

    function getIP() {
      fetch(`https://api64.ipify.org?format=json`)
        .then((response) => response.json())
        .then((data) => {
          result.textContent = `IP Address of ${url}: ${data.ip}`;
        })
        .catch((error) => {
          result.textContent = "Error fetching IP address.";
        });
    }
  });
});
