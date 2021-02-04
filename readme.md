# Apache Cordova Carrier Plugin

This is a simple Apache Cordova plugin from my [Apache Cordova 4 Programming](www.cordova4programming.com) book. It's used as an example of how to build a native plugin that retrieves wireless carrier information using the target device's networking APIs. The plugin supports Android and iOS today.

## Installation

To add the plugin to one of your Cordova projects, open a terminal window, navigate to the Cordova project folder, and execute the following command:

	cordova plugin add johnwargo-cordova-plugin-carrier

## Usage

The plugin exposes two methods:

+	`getCarrierName` - Asynchronous method that retrieves the current carrier for the device running the application.
+	`getCountryCode` - Asynchronous method that retrieves the country code for the device running the application.

To retrieve the carrier name from the device, execute the following method:

	carrier.getCountryCode(onSuccess, onError);

To retrieve the country code for the device, execute the following method:

    carrier.getCarrierName(onSuccess, onError);

In either case, the `onSuccess` and `onError` parameters passed to the method are callback functions that process the results. 

The success callback receives a text string representing the results obtained by the plugin:

	function onSuccess(res) {
	    var msg = "Result: " + JSON.stringify(res);
	    console.log(msg);
	    navigator.notification.alert(msg, null, "Carrier Information", "Continue");
	}
	
The error callback receives an error object that contains error code (`code`) and error message (`msg`) properties. 

	function onError(err) {
	    var msg = `Error: ${err.code} - ${err.msg}`;
	    console.log(msg);
	    navigator.notification.alert(msg, null, "Carrier Error", "Oops");
	}

That's it, it's pretty simple. That's by intent; I didn't write this plugin to do anything useful, I wrote it to demonstrate how to write plugins. 

***

You can find information on many different topics on my [personal blog](http://www.johnwargo.com). Learn about all of my publications at [John Wargo Books](http://www.johnwargobooks.com).

If you find this code useful and feel like thanking me for providing it, please consider <a href="https://www.buymeacoffee.com/johnwargo" target="_blank">Buying Me a Coffee</a>, or making a purchase from [my Amazon Wish List](https://amzn.com/w/1WI6AAUKPT5P9).
