chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        sendResponse({response: "hello"});
});