chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		// ----------------------------------------------------------
        setInterval(function() { $('.tweet[data-screen-name="realDonaldTrump"] p:not([data-dear-diary])')
          .prepend('Dear Diary, ')
          .attr('data-dear-diary', 'true'); }, 4);

	}
	}, 10);
});
