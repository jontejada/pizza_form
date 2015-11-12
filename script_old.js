function readQuery () {
	var search = document.location.search.replace('?','').split('&');
	var searchObj = {};
	for (var i = 0; i < search.length; i++) {
		var parts = search[i].split('=');
		searchObj[parts[0]] = parts[1];
	}
	return searchObj;
}

