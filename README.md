adapt-IE-Check
=================

An extension to raise an alert if the wrong version of Internet Explorer is used or it has been configured to run in any mode other than 'Edge Mode'.

An alert will be raised if:
* The version of IE being used is less than the minimum supported version (defaults to 8 but can be changed)
* Enterprise Mode (IE11 only) is enabled
* Compatibility view is switched on
* Some form of compatibility mode is active (i.e. the 'document mode' is less than the actual version)

Mainly used in the Adapt Scorm Test but could be used in any course where there's a risk of IE doing one of the above.

In order to change any of the error messages or the minimum supported version of IE you'll have to edit js/adapt-IE-Check.js - if we were to store any of the values in JSON there's good chance Adapt wouldn't even be able to load them in some circumstances.