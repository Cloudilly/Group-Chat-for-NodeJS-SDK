#Group Chat for Hook NodeJS SDK
Repository contains sample codes to build the backend Hook NodeJS app complementary to the front facing group chat application. App just _listen_ passively to the group _public_, but you can hook it up to do something more interesting, ie perform certain actions when a particular string of text is received.

#####Create app
If you have not already done so, first create an account on [Cloudilly](https://cloudilly.com). Next create an app with a unique app identifier and a cool name. Once done, you should arrive at the app page with all the access keys for the different platforms. Under Hook SDK, you will find the parameters required for your Cloudilly application. _"Access"_ refers to the access keys to be embedded in your server side Hook codes.

![Hook Console](https://github.com/cloudilly/images/blob/master/hook_console.png)

#####Instantiate NodeJS server
Deploy the below websocket dependency.
```
npm install --save ws
```

#####Update Access
[Insert your _"App Name"_ and _"Access"_](../../blob/master/app.js#L1-L2). Once done, upload your NodeJS files and run the application. Verify connection to Cloudilly. If you have setup the anonymous chat app for other platforms, you should also test if you can send messages across platforms, ie from Android to Web / iOS and vice versa.
