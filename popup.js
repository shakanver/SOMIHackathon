document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById("btn");
    btn.addEventListener('click', onclick, false);
    function onclick() {
        chrome.tabs.query({currentWindow: true, active: true}, 
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {message: "message"},handleResponse);
        });
    }

    function handleResponse(res) {
        const div = document.createElement('div');
        const timestamps = res.response;
        div.textContent = `Warning! Triggers found at ${timestamps[0]} and ${timestamps[1]}`;
        document.body.appendChild(div);
    }
}, false);