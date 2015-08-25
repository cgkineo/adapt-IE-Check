/*
* adapt-IE-Check
* License - https://github.com/cgkineo/adapt-IE-Check/LICENSE
* Maintainers - Dan Ghost <daniel.ghost@kineo.com>, Matt Leathes <matt.leathes@kineo.com>
*/
 

define(['./ie-truth'], function(IEtruth) {

	/**
	* this has to be hard-coded here - as opposed to being in config.json - as if the user's running IE7 
	* or lower, Adapt won't actually be able to get as far as loading config.json
	*/
	var /* const */ MIN_SUPPORTED_VERSION = 8;

	var ieVersionInfo = IEtruth();

	if(ieVersionInfo.IsIE) {
		var msg;
		var wrongDocMode = (document.documentMode < ieVersionInfo.TrueVersion);

		if(window.console && window.console.log) console.log("IE actual: " + ieVersionInfo.TrueVersion + ", acting: " + ieVersionInfo.ActingVersion + ", Compat View? " + ieVersionInfo.CompatibilityMode + ", doc mode: " + document.documentMode);

		if(ieVersionInfo.TrueVersion < MIN_SUPPORTED_VERSION) {
			msg = "The version of Internet Explorer you are using is not supported. The lowest supported version is Internet Explorer v" + MIN_SUPPORTED_VERSION;
		} else if (ieVersionInfo.TrueVersion < 9 && ('spellcheck' in document.createElement('textarea'))) {
			msg = "Your browser reports that Enterprise Mode is enabled; this is not supported."; 
		} else if (wrongDocMode) {
			msg = "Your browser reports that it is running in a document mode (" + document.documentMode + ") that is lower than the version of your browser (" + ieVersionInfo.TrueVersion + "). This will disable some critical functionality in your course. Please contact Kineo for support.";
		} else if(ieVersionInfo.CompatibilityMode) {
			msg = "Your browser reports that Compatibility View is enabled; this is not supported. Please check your Compatibility View settings (Tools > Compatibility View settings) to ensure the site this course is running from is not listed.";
		}

		if(msg !== undefined) alert(msg);
	}

});
