chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        const videoTag = document.getElementsByTagName("video");
        if(videoTag.length > 0) {
            sendResponse({status: "found" , response: ["0:59","2:10"]});
        }else {
            sendResponse({status: "none" , response: []});
        }   
});