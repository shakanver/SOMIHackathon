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
        div.textContent = `Warning! Potential triggers found at `;
        document.body.appendChild(div);
        for(i = 0; i < 2; i++) {
            let time = document.createElement('div');
            time.textContent = timestamps[i];
            document.body.appendChild(time);

        }
    }
}, false);