grow=true;
fsize = 20
function fontGS(ifs) {
   
    if (grow) {
        fsize = fsize + ifs;
        ifs = fsize;
        if (ifs <= 50) {
            document.getElementById("p1").style.fontSize = ifs + "pt";
            document.getElementById("p1").style.color = "red";
        }
        else {
            grow = false;
            document.getElementById("p1").style.color = "blue";
            document.getElementById("p1").innerHTML = "SHRINKING-TEXT";
        }
    }
    else {
        fsize = fsize - ifs;
        ifs=fsize;
        if (ifs < 10){
            grow=true
            document.getElementById("p1").style.color = "red";
            document.getElementById("p1").innerHTML = "GROWING-TEXT";
            return;}
        else{
        document.getElementById("p1").style.fontSize = ifs + "pt";
        }
    }
    window.setTimeout(fntGS, 100, ifs);
}