chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("Hello. This message was sent from scripts/inject.js");
			// ----------------------------------------------------------

            console.log(window.location.hostname)
            // console.log(chrome.extension.getURL())
            // var url
            // chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            //      url = tabs[0].url;
            // });
            // console.log(url)

		}
	}, 10);
});