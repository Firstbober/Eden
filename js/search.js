String.prototype.replaceChars = function (character, replacement) {
    var str = this;
    var a;
    var b;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == character) {
            a = str.substr(0, i) + replacement;
            b = str.substr(i + 1);
            str = a + b;
        }
    }
    return str;
}

var commands = []

function search(query) {
    var searchinput = document.getElementById("searchbox");

    for(const cmd of commands) {
        if(query.trim().startsWith(cmd[0])) {
            cmd[1](query.substr(cmd[0].length).trim());
            searchinput.value = "";
            $.toast({
                text: `Command ${cmd[0]} was executed`, // Text that is to be shown in the toast
                heading: 'Success', // Optional heading to be shown on the toast
                icon: 'success', // Type of toast icon
                showHideTransition: 'slide', // fade, slide or plain
                allowToastClose: false, // Boolean value true or false
                hideAfter: 1500, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                position: 'mid-center', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                textAlign: 'left',  // Text alignment i.e. left, right or center
                loader: true,  // Whether to show loader or not. True by default
                loaderBg: '#9EC600',  // Background color of the toast loader
            });
            return;
        }
    }
    switch (query.substr(0, 2)) {
        default:
            window.location = "https://www.google.com/search?q=" +
                query.replaceChars("", "+");
    }
}

window.onload = function () {
    // search
    searchinput = document.getElementById("searchbox");
    if (!!searchinput) {
        searchinput.addEventListener("keypress", function (a) {
            var key = a.keyCode;
            if (key == 13) {
                var query = this.value;
                search(query);
            }
        });
    }

    // jump to search when tab is pressed
    var search_sqr = document.getElementById("search_sqr");

}
// dd
//
// To add a ssnew search provider, paste the following between the last "break;" and "default:" (Line 39 & 40)
//
//         case "-a":
//          query = query.substr(3);
//          window.location =
//             "https://en.website.com/" +
//             query.replaceChars(" ", "%20");
//          break;
//
// -a on ln68 should be replaced with a "-letter" of your choice. You can also change it to !a, .a, /a etc.
// https://en.website.com/ on ln70 should be replaced with the search page of the website. To find this, make a few searches on your website.
//Try to identify where your search is in the URL. If you're not sure, post in the thread and someone should help you out
//
// You can use the above two to modify an existing rule
//
// If you wish to change the number of characters in a "case", you need to change the line below, changing query.substr() to n+1, n being the number of characters.
// This ensures that when you search for something, the whole of your idenfier and the space between the identifier and query are removed.

function register(cmd, cb) {
    commands.push(['/' + cmd, cb]);
}