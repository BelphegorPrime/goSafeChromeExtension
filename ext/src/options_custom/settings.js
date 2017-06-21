window.addEvent("domready", function () {
    // Option 1: Use the manifest:
    new FancySettings.initWithManifest(function (settings) {
        settings.manifest.myButton.addEvent("action", function () {
            console.log(settings.manifest.username.element.value)
            console.log(settings.manifest.password.element.value)
            console.log(settings.manifest.server.element.value)
            console.log(settings.manifest.port.element.value)
            console.log(settings.manifest.key.element.value)

//             var http = new XMLHttpRequest();
//             var url = "get_data.php";
//             var params = "lorem=ipsum&name=binny";
//             http.open("POST", url, true);
//
// //Send the proper header information along with the request
//             http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//
//             http.onreadystatechange = function() {//Call a function when the state changes.
//                 if(http.readyState == 4 && http.status == 200) {
//                     alert(http.responseText);
//                 }
//             }
//             http.send(params);

            var text = 'facebook.com';
            // console.log(window)
            // var textBytes = window.aesjs.utils.utf8.toBytes(text);
            // var iv = [ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,35, 36 ];
            // var utf8 = unescape(encodeURIComponent(settings.manifest.key.element.value));
            // var arr = [];
            // for (var i = 0; i < utf8.length; i++) {
            //     arr.push(utf8.charCodeAt(i));
            // }
            //
            // var aesCfb = new window.aesjs.ModeOfOperation.cfb(arr, iv, 1)
            // var encryptedBytes = aesCfb.encrypt(textBytes);
            // var b64encoded = window.btoa(unescape(encodeURIComponent(encryptedBytes)));
            // console.log(b64encoded)

            var request = window.superagent;
            var url = 'https://'+settings.manifest.server.element.value+":"+settings.manifest.port.element.value+'/get';
            request.post(url)
                .auth(settings.manifest.username.element.value, settings.manifest.password.element.value)
                .send({'url': text, "crypto": -1})
                .end(function(err, response){
                    console.log(response)
                    console.log(err)
                    var responseValue = JSON.parse(response.text)
                    console.log(responseValue)
                });
            console.log("You clicked me!")
        });
    });
    
    // Option 2: Do everything manually:
    /*
    var settings = new FancySettings("My Extension", "icon.png");
    
    var username = settings.create({
        "tab": i18n.get("information"),
        "group": i18n.get("login"),
        "name": "username",
        "type": "text",
        "label": i18n.get("username"),
        "text": i18n.get("x-characters")
    });
    
    var password = settings.create({
        "tab": i18n.get("information"),
        "group": i18n.get("login"),
        "name": "password",
        "type": "text",
        "label": i18n.get("password"),
        "text": i18n.get("x-characters-pw"),
        "masked": true
    });
    
    var myDescription = settings.create({
        "tab": i18n.get("information"),
        "group": i18n.get("login"),
        "name": "myDescription",
        "type": "description",
        "text": i18n.get("description")
    });
    
    var myButton = settings.create({
        "tab": "Information",
        "group": "Logout",
        "name": "myButton",
        "type": "button",
        "label": "Disconnect:",
        "text": "Logout"
    });
    
    // ...
    
    myButton.addEvent("action", function () {
        alert("You clicked me!");
    });
    
    settings.align([
        username,
        password
    ]);
    */
});
