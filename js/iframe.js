function run()
{
	var iframe = document.getElementsByTagName('iframe')[0];
	iframe.contentDocument.documentElement.contentEditable = true;

	iframe.contentDocument.documentElement.addEventListener('focusout', function () {
		iframe.parentNode.removeChild(iframe);
	}, false);

	iframe.contentDocument.documentElement.focus();
	document.addEventListener('DOMContentLoaded', run);
}