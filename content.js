chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        sendResponse({response: ["0:59","2:10"]});
});