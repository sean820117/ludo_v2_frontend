window.onload = function(){
    var dv = document.getElementById("demovideo");
    var size = Math.min(640,window.innerWidth,window.innerHeight);
    dv.style.height = size-36+"px";
    dv.style.width = size-36+"px";
    var isShared = false;
    var shareurl = "https://tw.yahoo.com";
    var sharelink = "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u="+encodeURIComponent(shareurl)+"&display=popup&ref=plugin&src=share_button"
    document.getElementById("democourses").onclick = function(){
        document.getElementById("fbshare").style.display = "block";
    }
    document.getElementById("clickshare").onclick = function(){
        isShared = true;
        window.open(sharelink,"share","width=1000,height=600")
    }
    function switchCourse(id){
        if(isShared){
            dv.src = "https://player.vimeo.com/video/"+id;
        }
    }
    $("#dc-1").click(()=>switchCourse(319395956));
    $("#dc-2").click(()=>switchCourse(319395955));

    var imgContainer = document.getElementById("ss-container");
    var imgLength = imgContainer.children.length;
    var slideTimer = null, imgIndex = 0, slideInterval = 3000;
    $(imgContainer.children[0]).show();
    slideTimer = setTimeout(()=>switchImg(1), slideInterval);
    $("#pre-img").click(()=>switchImg(-1));
    $("#next-img").click(()=>switchImg(1));
    function switchImg(factor){
        clearTimeout(slideTimer);
        $(imgContainer.children[imgIndex]).fadeOut(500,function(){
            imgIndex = (imgIndex+imgLength+1*factor)%imgLength;
            $(imgContainer.children[imgIndex]).fadeIn(500);
            slideTimer = setTimeout(()=>switchImg(1), slideInterval);
        });
    }
}