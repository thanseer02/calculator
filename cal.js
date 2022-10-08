function sum()
{
var a=parseInt(document.getElementById('f').value);
var b=parseInt(document.getElementById('s').value);
var s=a+b;
document.getElementById("r").innerHTML=a+"+"+b+"="+s;
}
function def()
{
    var a=parseInt(document.getElementById('f').value);
    var b=parseInt(document.getElementById('s').value);
    var s=a-b;
    document.getElementById("r").innerHTML=a+"-"+b+"="+s
}
function mul()
{
    var a=parseInt(document.getElementById('f').value);
    var b=parseInt(document.getElementById('s').value);
    var s=a*b;
    document.getElementById("r").innerHTML=a+"*"+b+"="+s
}
function div()
{
    var a=parseInt(document.getElementById('f').value);
    var b=parseInt(document.getElementById('s').value);
    var s=a/b;
    document.getElementById("r").innerHTML=a+"/"+b+"="+s
}

