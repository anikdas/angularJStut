'use strict';

app.filter('HostnameFromUrl', function  () {
	return function (str) {
		var url = document.createElement('a');
		url.href = str;
		return url.hostname;
	};
});