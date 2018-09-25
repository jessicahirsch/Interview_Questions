// What is this function doing?

var a = document.getElementsByTagName("a")
for (i=0;i<a.length;i++) { 
    if (a[i].target=="_blank") {
        a[i].target="_self"
    }
}
callback(true);