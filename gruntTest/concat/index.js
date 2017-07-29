function show() {
    alert('1');
}
function show2() {
    alert(2);
}
function url2json(url) {
    var arr=url.split('&');
    var json = {};
    for(var i = 0; i < arr.length; i++){
        json[arr[i].split("=")[0]]=arr[i].split("=")[1];
    }
    return json;
}
oBox.onmouseover=function () {

};