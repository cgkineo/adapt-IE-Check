/*
* adapt-documentMode
* License - https://github.com/cgkineo/adapt-documentMode/LICENSE
* Maintainers - Dan Ghost <daniel.ghost@kineo.com>
*/

define(function(require) {

    var Adapt = require('coreJS/adapt');

    function checkDocumentMode() {
        var documentMode = document.documentMode;
        var browserVersion = Adapt.device.version;

        if (documentMode < browserVersion) {
            var message = "Your version of Internet Explorer (" + browserVersion + ") is running in a document mode lower than your current version (documentMode: " + documentMode + "). This will disable some critical functionality in your course. Please contact Kineo for support.";
            alert(message);
        }
    }

    Adapt.on('app:dataReady', function() {
        if (Adapt.device.browser === 'Internet Explorer') {
            checkDocumentMode();
        }
    });

});