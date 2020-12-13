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
        const status = res.status;
        const response = res.response;
        if(status === "none") {
            let div = document.createElement('div');
            div.textContent = "No video found on this page";
            document.body.appendChild(div);
        }else {
            let div = document.createElement('div');
            div.textContent = "Warning! Potential triggers found at:"
            document.body.appendChild(div);
            for(i = 0; i < response.length; i++) {
                let time = document.createElement('div');
                time.textContent = response[i];
                document.body.appendChild(time);
            }
        }
    }
}, false);