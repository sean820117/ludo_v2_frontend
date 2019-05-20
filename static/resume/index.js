window.onload = function(){
    var dv = document.getElementById("demovideo");
    if (dv) {
        var dcPlayer = new Vimeo.Player(dv);
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
        dcPlayer.on('ended', function(){
            document.getElementById("fbshare").style.display = "block";
        });
    }

    var imgContainer = document.getElementById("ss-container");
    var imgContainer2 = document.getElementById("ss-container2");
    var slideTimer = null, imgIndex = 0, slideInterval = 3000;
    var slideTimer2 = null,imgIndex2 = 0;
    $(imgContainer.children[0]).show();
    $(imgContainer2.children[0]).show();
    slideTimer = setTimeout(()=>switchImg(1,imgContainer,slideTimer,imgIndex), slideInterval);
    slideTimer2 = setTimeout(()=>switchImg(1,imgContainer2,slideTimer2,imgIndex2), slideInterval);
    // $("#pre-img").click(()=>switchImg(-1));
    // $("#next-img").click(()=>switchImg(1));
    function switchImg(factor,element,stimer,theImgIndex){
        clearTimeout(stimer);
        $(element.children[theImgIndex]).fadeOut(500,function(){
            var imgLength = element.children.length;
            theImgIndex = (theImgIndex+imgLength+1*factor)%imgLength;
            $(element.children[theImgIndex]).fadeIn(500);
            stimer = setTimeout(()=>switchImg(1,element,stimer,theImgIndex), slideInterval);
        });
    }
}