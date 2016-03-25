
var app= "<INSERT YOUR APP IDENTIFIER>";
var access= "<INSERT YOUR ACCESS KEY>";
var cloudilly= require("./Cloudilly/hook.min.js");

cloudilly.initialize(app, access, function() {
	cloudilly.connect();
});

cloudilly.socketConnected(function(err, res) {
	if(err) { error("ERROR: SocketConnected"); return; }
	console.log("SocketConnected");
	
	cloudilly.listen("public", function(err, res) {
		if(err) { console.log("ERROR: Listen"); return; }
		return;
	});
});

cloudilly.socketDisconnected(function() {
	console.log("SocketDisconnected");
});

cloudilly.socketReceivedDevice(function(res) {
	console.log("@@@@@@ RECEIVED DEVICE");
	console.log(res);
	
	// DO SOMETHING INTERESTING HERE
	// IE, SEND OUT PUSH NOTIFICATION IF SOMEONE ENTERS PUBLIC
});

cloudilly.socketReceivedPost(function(res) {
	console.log("@@@@@@ RECEIVED POST");
	console.log(res);
});