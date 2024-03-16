localStorage.setItem("username","Trump");
localStorage.setItem("password","hehehe");

var name = localStorage.getItem("username");
console.log(name);

localStorage.removeItem("username")
console.log(name);

// localStorage.clear()

var len = localStorage.length;

for (var i = 0; i < len; i++) {
    var key = localStorage.key(i)
    console.log("key: " + key + ", Value: " + localStorage.getItem(key));}



