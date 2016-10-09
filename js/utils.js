function GetUserAgent() {
	var s = new Date().toTimeString() + "<br>";
	s += navigator.userAgent + "<br/>";
	s += navigator.appName + " (" + navigator.platform + ")<br><br>";
	return s;
}