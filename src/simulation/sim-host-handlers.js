module.exports = function(messages) {
    return {
        carrier: {
            getCarrierName: function(successCallback, errorCallback) {
                console.log("Cordova-Simulate: getCarrierName invoked");
                if (document.getElementById('is-error').checked) {
                    console.error("Error condition enabled");
                    errorCallback({ code: 1, msg: "Simulated error condition" });
                } else {
                    //Get access to the carrier selection drop-down
                    var carrierSel = document.getElementById('carrier-select');
                    //Pull the value from the selected item
                    var selValue = carrierSel.options[carrierSel.selectedIndex].value;
                    console.log('Simulating carrier: ' + selValue);
                    //And return it to the calling method
                    successCallback(selValue);
                }
            },
            getCountryCode: function(successCallback, errorCallback) {
                if (document.getElementById('is-error').checked) {
                    console.error("Error condition enabled");
                    errorCallback({ code: 2, msg: "Simulated error condition" });
                } else {
                    console.log("Cordova-Simulate: getCountryCode invoked");
                    //Get access to the country code selection drop-down
                    var ccSel = document.getElementById('country-code-select');
                    //Pull the value from the selected item
                    var selValue = ccSel.options[ccSel.selectedIndex].value;
                    console.log('Simulating country code: ' + selValue);
                    //And return it to the calling method
                    successCallback(selValue);
                }
            }
        }
    };
};