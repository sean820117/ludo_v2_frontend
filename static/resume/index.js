window.onload = function(){
    var dv = document.getElementById("demovideo");
    var size = Math.min(640,window.innerWidth,window.innerHeight);
    dv.style.height = size-36+"px";
    dv.style.width = size-36+"px";
    var shareurl = "https://tw.yahoo.com";
    var sharelink = "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u="+encodeURIComponent(shareurl)+"&display=popup&ref=plugin&src=share_button"
    document.getElementById("democourses").onclick = function(){
        document.getElementById("fbshare").style.display = "block";
    }
    document.getElementById("clickshare").onclick = function(){
        window.open(sharelink,"share","width=1000,height=600")
    }
}