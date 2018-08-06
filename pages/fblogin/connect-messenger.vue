<template>
    <div class="connect_messenger_container">
        <div class="connect_messenger_container_notice" >{{ notice }}</div>
        <div class="swiper">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="260px" height="45px">
                <g id="dotted-line" class="dotted-line">
                <circle cx="40" cy="22" r="3"></circle>
                <circle cx="60" cy="22" r="3"></circle>
                <circle cx="80" cy="22" r="3"></circle>
                <circle cx="100" cy="22" r="3"></circle>
                <circle cx="120" cy="22" r="3"></circle>
                <circle cx="140" cy="22" r="3"></circle>
                <circle cx="160" cy="22" r="3"></circle>
                <circle cx="180" cy="22" r="3"></circle>
                <circle cx="200" cy="22" r="3"></circle>
                <circle cx="220" cy="22" r="3"></circle>
                </g>
                <path id="swipe-end" class="swipe-end" d="M9.000,1.000 C13.418,1.000 17.000,4.582 17.000,9.000 C17.000,13.418 13.418,16.999 9.000,16.999 C4.582,16.999 1.000,13.418 1.000,9.000 C1.000,4.582 4.582,1.000 9.000,1.000 Z"/>
                <a id="swipe-btn" class="swipe-btn" xlink:href= "https://api.ludonow.com/auth/botFacebook">
                <g>
                    <path fill-rule="evenodd"  fill="#204b90"
                        d="M22.000,0.001 C34.150,0.001 44.000,9.850 44.000,22.000 C44.000,34.150 34.150,44.000 22.000,44.000 C9.850,44.000 0.000,34.150 0.000,22.000 C0.000,9.850 9.850,0.001 22.000,0.001 Z"/>
                    <path id="swipe-arrow" class="arrow" fill-rule="evenodd" 
                        d="M12.551,8.707 L5.256,1.412 C4.270,0.426 2.672,0.426 1.686,1.412 C0.701,2.398 0.701,3.996 1.686,4.981 L7.197,10.492 L1.686,16.003 C0.701,16.988 0.701,18.587 1.686,19.572 C2.672,20.558 4.270,20.558 5.256,19.572 L12.551,12.276 C13.537,11.292 13.537,9.693 12.551,8.707 Z"/>
                </g>
                </a>
            </svg>
        </div>
    </div>
</template>
<script>
export default {
    head () {
        return {
            script: [
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js' },
            ],
        } 
    },
    data:() => ({
        notice: "滑動以連結Messenger",
    }),
    mounted: function() {
        this.animation();
    },
    methods: {
        changeNotice() {
            this.notice = "連結中";
        },

        animation() {
            const changeNotice = this.changeNotice;
            var swiperDragged = false,
            startX,
            actualX,
            endX = 0;
            var $swipe = $('.swiper'),
                $btn = $('.swipe-btn', $swipe);

            TweenLite.to('#swipe-arrow', 0, { x: 16, y: 11});
            TweenLite.to('#swipe-end', 0, { x: 235, y: 12});
            
            var tl = new TimelineMax({ repeat: -1 });
            tl.staggerFrom("#dotted-line circle", 0.7, { scale: 0.7, x: -2, y: .5, opacity: 0.7, delay:0.1, ease: Power2.easeInOut, repeat: 1, yoyo: true}, 0.15);

            $btn.on('click touchend', function(e){
                e.preventDefault();
            }).on('touchstart mousedown', function(e) {
                e.preventDefault();
                swiperDragged = true;
                startX = typeof e.pageX != 'undefined' ? e.pageX : e.originalEvent.touches[0].pageX;
                endX = 0;
            })

            $(document).on('touchmove mousemove', function(e){
                if (swiperDragged) {
                actualX = typeof e.pageX != 'undefined' ? e.pageX : e.originalEvent.touches[0].pageX;
                endX = Math.max(0, Math.min(215, actualX - startX));
                TweenLite.to('#swipe-btn', 0, { x: endX});
                }
            }).on('touchend mouseup', function(e) {
                if (swiperDragged) {
                swiperDragged = false;
                if (endX < 200) {
                    TweenLite.to('#swipe-btn', .5, { x: 0 });
                } else {
                    console.log($btn.attr('xlink:href'));
                    window.location.href = $btn.attr('xlink:href');
                    // TweenLite.to('#swipe-btn', .1, { x: 215});
                    // $('.unlock').addClass('unlocked');
                    $btn.hide();
                    $('#swipe-end').hide(),
                    // setTimeout(function(){
                    //     TweenLite.to('#swipe-btn', .5, { x: 0 });
                    // }, 1400);
                    changeNotice();
                }
                endX = 0;
                }
            });
        }
    }
}

</script>

<style>
.connect_messenger_container {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    widows: 100vw;
    font-family: HelveticaNeue;
    font-size: 14px;
    font-weight: 500;
    color: #434343;
    line-height: 1.21;
}
.connect_messenger_container_notice {
    display: flex;
    margin-top: -100px;
}
.swiper {
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  width: 260px;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
}
.swiper .swipe-btn {
  cursor: pointer;
}
.swiper .swipe-btn.back-to-start {
  transition: -webkit-transform .5s ease-in-out;
  transition: transform .5s ease-in-out;
  transition: transform .5s ease-in-out, -webkit-transform .5s ease-in-out;
  -webkit-transform: translateX(0) !important;
          transform: translateX(0) !important;
}
.swiper .swipe-btn .circle {
  fill: #204b90;
}
.swiper .swipe-btn .arrow {
  stroke: #204b90;
  stroke-width: 1px;
  stroke-linecap: butt;
  stroke-linejoin: miter;
  fill: #f4ece1;
}
.swiper .swipe-end {
  fill-rule: evenodd;
  stroke: #204b90;
  stroke-width: 2px;
  stroke-linecap: butt;
  stroke-linejoin: miter;
  fill: none;
}
.swiper .dotted-line circle {
  fill: #0d3d7d;
}
</style>
