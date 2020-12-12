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
        div.textContent = `${res.response}`;
        document.body.appendChild(div);
    }
}, false);