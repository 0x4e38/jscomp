var r = /(𤭢)/g;
console.log(r.toString());

var m;
while (m = r.exec("b𤭢𤭢𤭢b")) {
    var t = "[";
    for ( var i in m ) {
        t += i;
        t += "=";
        t += m[i];
        t += " ";
    }
    t += "]";
    console.log(t, r.lastIndex);
}
