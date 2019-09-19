<template>
    <div>
        <div v-if="$mq == 'iphone'">
            <carousel 
            :perPage="1" :centerMode="true"  :autoplay="false" :spacePaddingMaxOffsetFactor="0"
            :spacePadding="25" :paginationEnabled="false" :scrollPerPage="false">
                <slide class="intro-wrap-block-new-five-curriculum-block-container">
                    <div class="intro-wrap-block-new-five-curriculum-block">
                        <p>產後1-2個月</p>
                        <div class="index-curriculum-block">
                            <div class="index-curriculum-block-every day block-top-left">ㄧ</div>
                            <div class="index-curriculum-block-every block-top-right" @click="goCourse(3,'first')">
                                <div class="block-back">疲勞<br>消除</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">用空氣啟動身體</p>
                                    <p class="index-curriculum-block-text">各做5次，共3組</p>
                                </div>
                                <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">二</div>
                            <div class="index-curriculum-block-every" @click="goCourse(11,'first')">
                                <div class="block-rest">休息</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">瑜珈的基本呼吸</p>
                                    <p class="index-curriculum-block-text">1組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">三</div>
                            <div class="index-curriculum-block-every" @click="goCourse(1,'second')">
                                <div class="block-back">骨盆<br>矯正</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">躺著坐的骨盆矯正姿勢</p>
                                    <p class="index-curriculum-block-text">各做3次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">四</div>
                            <div class="index-curriculum-block-every" @click="goCourse(11,'second')">
                                <div class="block-rest">休息</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">單邊鼻子呼吸法</p>
                                    <p class="index-curriculum-block-text">1組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day block-bottom-left">五</div>
                            <div class="index-curriculum-block-every block-bottom-right" @click="goCourse(13,'third')">
                                <div class="block-back">消除<br>失眠</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">全世界都會幫助妳！</p>
                                    <p class="index-curriculum-block-text">各做3次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                        </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-new-five-curriculum-block-container">
                    <div class="intro-wrap-block-new-five-curriculum-block">
                        <p>廣大女性</p>
                        <div class="index-curriculum-block">
                            <div class="index-curriculum-block-every day block-top-left">ㄧ</div>
                            <div class="index-curriculum-block-every block-top-right" @click="goCourse(1,'third')">
                                <div class="block-back">骨盆<br>矯正</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">回到沒有歪斜的骨盆</p>
                                    <p class="index-curriculum-block-text">各做5次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">二</div>
                            <div class="index-curriculum-block-every" @click="goCourse(3,'second')">
                                <div class="block-rest">休息</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">深呼吸、深呼吸</p>
                                    <p class="index-curriculum-block-text">1組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">三</div>
                            <div class="index-curriculum-block-every" @click="goCourse(7,'third')">
                                <div class="block-back">下身<br>減肥</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">收緊骨盆，告別大屁股</p>
                                    <p class="index-curriculum-block-text">各做5次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">四</div>
                            <div class="index-curriculum-block-every" @click="goCourse(4,'first')">
                                <div class="block-rest">休息</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">打通壓力沉積的地方</p>
                                    <p class="index-curriculum-block-text">3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day block-bottom-left">五</div>
                            <div class="index-curriculum-block-every block-bottom-right" @click="goCourse(5,'first')">
                                <div class="block-back">消除<br>便秘</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">新的一天！新的開始！</p>
                                    <p class="index-curriculum-block-text">各做5次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                        </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-new-five-curriculum-block-container">
                    <div class="intro-wrap-block-new-five-curriculum-block">
                        <p>產後3-6個月</p>
                        <div class="index-curriculum-block">
                            <div class="index-curriculum-block-every day block-top-left">ㄧ</div>
                            <div class="index-curriculum-block-every block-top-right" @click="goCourse(1,'third')">
                                <div class="block-back">骨盆<br>矯正</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">回到沒有歪斜的骨盆</p>
                                    <p class="index-curriculum-block-text">各做15次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">二</div>
                            <div class="index-curriculum-block-every" @click="goCourse(12,'first')">
                                <div class="block-rest">休息</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">用呼吸創造放鬆空間</p>
                                    <p class="index-curriculum-block-text">3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">三</div>
                            <div class="index-curriculum-block-every" @click="goCourse(10,'first')">
                                <div class="block-back">下身<br>減肥</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">同時照顧下半身與上半身</p>
                                    <p class="index-curriculum-block-text">各做15次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">四</div>
                            <div class="index-curriculum-block-every" @click="goCourse(13,'first')">
                                <div class="block-rest">休息</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">為自己的心情按摩</p>
                                    <p class="index-curriculum-block-text">1組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day block-bottom-left">五</div>
                            <div class="index-curriculum-block-every block-bottom-right" @click="goCourse(4,'second')">
                                <div class="block-back">消除<br>憂鬱</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">讓能量在身體流轉</p>
                                    <p class="index-curriculum-block-text">各做15次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                        </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-new-five-curriculum-block-container">
                    <div class="intro-wrap-block-new-five-curriculum-block">
                        <p>產後6-18個月</p>
                        <div class="index-curriculum-block">
                            <div class="index-curriculum-block-every day block-top-left">ㄧ</div>
                            <div class="index-curriculum-block-every block-top-right" @click="goCourse(1,'third')">
                                <div class="block-back">骨盆<br>矯正</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">回到沒有歪斜的骨盆</p>
                                    <p class="index-curriculum-block-text">各做15次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">二</div>
                            <div class="index-curriculum-block-every" @click="goCourse(12,'first')">
                                <div class="block-back">調理<br>腰痛</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">用呼吸創造放鬆空間</p>
                                    <p class="index-curriculum-block-text">3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">三</div>
                            <div class="index-curriculum-block-every" @click="goCourse(10,'first')">
                                <div class="block-back">下身<br>減肥</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">同時照顧下半身與上半身</p>
                                    <p class="index-curriculum-block-text">各做15次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">四</div>
                            <div class="index-curriculum-block-every" @click="goCourse(13,'first')">
                                <div class="block-back">消除<br>便秘</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">為自己的心情按摩</p>
                                    <p class="index-curriculum-block-text">1組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day block-bottom-left">五</div>
                            <div class="index-curriculum-block-every block-bottom-right" @click="goCourse(4,'second')">
                                <div class="block-back">消除<br>憂鬱</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">讓能量在身體流轉</p>
                                    <p class="index-curriculum-block-text">各做15次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>
        <div  v-if="$mq == 'mobile'">
            <carousel
            :perPage="1" :centerMode="true"  :autoplay="false" :spacePaddingMaxOffsetFactor="0"
            :spacePadding="40" :paginationEnabled="false" :scrollPerPage="false">
                <slide class="intro-wrap-block-new-five-curriculum-block-container">
                    <div class="intro-wrap-block-new-five-curriculum-block">
                        <p>產後1-2個月</p>
                        <div class="index-curriculum-block">
                            <div class="index-curriculum-block-every day block-top-left">ㄧ</div>
                            <div class="index-curriculum-block-every block-top-right" @click="goCourse(3,'first')">
                                <div class="block-back">疲勞<br>消除</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">用空氣啟動身體</p>
                                    <p class="index-curriculum-block-text">各做5次，共3組</p>
                                </div>
                                <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">二</div>
                            <div class="index-curriculum-block-every" @click="goCourse(11,'first')">
                                <div class="block-rest">休息</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">瑜珈的基本呼吸</p>
                                    <p class="index-curriculum-block-text">1組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">三</div>
                            <div class="index-curriculum-block-every" @click="goCourse(1,'second')">
                                <div class="block-back">骨盆<br>矯正</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">躺著坐的骨盆矯正姿勢</p>
                                    <p class="index-curriculum-block-text">各做3次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">四</div>
                            <div class="index-curriculum-block-every" @click="goCourse(11,'second')">
                                <div class="block-rest">休息</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">單邊鼻子呼吸法</p>
                                    <p class="index-curriculum-block-text">1組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day block-bottom-left">五</div>
                            <div class="index-curriculum-block-every block-bottom-right" @click="goCourse(13,'third')">
                                <div class="block-back">消除<br>失眠</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">全世界都會幫助妳！</p>
                                    <p class="index-curriculum-block-text">各做3次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                        </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-new-five-curriculum-block-container">
                    <div class="intro-wrap-block-new-five-curriculum-block">
                        <p>廣大女性</p>
                        <div class="index-curriculum-block">
                            <div class="index-curriculum-block-every day block-top-left">ㄧ</div>
                            <div class="index-curriculum-block-every block-top-right" @click="goCourse(1,'third')">
                                <div class="block-back">骨盆<br>矯正</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">回到沒有歪斜的骨盆</p>
                                    <p class="index-curriculum-block-text">各做5次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">二</div>
                            <div class="index-curriculum-block-every" @click="goCourse(3,'second')">
                                <div class="block-rest">休息</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">深呼吸、深呼吸</p>
                                    <p class="index-curriculum-block-text">1組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">三</div>
                            <div class="index-curriculum-block-every" @click="goCourse(7,'third')">
                                <div class="block-back">下身<br>減肥</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">收緊骨盆，告別大屁股</p>
                                    <p class="index-curriculum-block-text">各做5次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">四</div>
                            <div class="index-curriculum-block-every" @click="goCourse(4,'first')">
                                <div class="block-rest">休息</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">打通壓力沉積的地方</p>
                                    <p class="index-curriculum-block-text">3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day block-bottom-left">五</div>
                            <div class="index-curriculum-block-every block-bottom-right" @click="goCourse(5,'first')">
                                <div class="block-back">消除<br>便秘</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">新的一天！新的開始！</p>
                                    <p class="index-curriculum-block-text">各做5次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                        </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-new-five-curriculum-block-container">
                    <div class="intro-wrap-block-new-five-curriculum-block">
                        <p>產後3-6個月</p>
                        <div class="index-curriculum-block">
                            <div class="index-curriculum-block-every day block-top-left">ㄧ</div>
                            <div class="index-curriculum-block-every block-top-right" @click="goCourse(1,'third')">
                                <div class="block-back">骨盆<br>矯正</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">回到沒有歪斜的骨盆</p>
                                    <p class="index-curriculum-block-text">各做15次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">二</div>
                            <div class="index-curriculum-block-every" @click="goCourse(12,'first')">
                                <div class="block-rest">休息</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">用呼吸創造放鬆空間</p>
                                    <p class="index-curriculum-block-text">3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">三</div>
                            <div class="index-curriculum-block-every" @click="goCourse(10,'first')">
                                <div class="block-back">下身<br>減肥</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">同時照顧下半身與上半身</p>
                                    <p class="index-curriculum-block-text">各做15次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">四</div>
                            <div class="index-curriculum-block-every" @click="goCourse(13,'first')">
                                <div class="block-rest">休息</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">為自己的心情按摩</p>
                                    <p class="index-curriculum-block-text">1組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day block-bottom-left">五</div>
                            <div class="index-curriculum-block-every block-bottom-right" @click="goCourse(4,'second')">
                                <div class="block-back">消除<br>憂鬱</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">讓能量在身體流轉</p>
                                    <p class="index-curriculum-block-text">各做15次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                        </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-new-five-curriculum-block-container">
                    <div class="intro-wrap-block-new-five-curriculum-block">
                        <p>產後6-18個月</p>
                        <div class="index-curriculum-block">
                            <div class="index-curriculum-block-every day block-top-left">ㄧ</div>
                            <div class="index-curriculum-block-every block-top-right" @click="goCourse(1,'third')">
                                <div class="block-back">骨盆<br>矯正</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">回到沒有歪斜的骨盆</p>
                                    <p class="index-curriculum-block-text">各做15次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">二</div>
                            <div class="index-curriculum-block-every" @click="goCourse(12,'first')">
                                <div class="block-back">調理<br>腰痛</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">用呼吸創造放鬆空間</p>
                                    <p class="index-curriculum-block-text">3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">三</div>
                            <div class="index-curriculum-block-every" @click="goCourse(10,'first')">
                                <div class="block-back">下身<br>減肥</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">同時照顧下半身與上半身</p>
                                    <p class="index-curriculum-block-text">各做15次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">四</div>
                            <div class="index-curriculum-block-every" @click="goCourse(13,'first')">
                                <div class="block-back">消除<br>便秘</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">為自己的心情按摩</p>
                                    <p class="index-curriculum-block-text">1組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day block-bottom-left">五</div>
                            <div class="index-curriculum-block-every block-bottom-right" @click="goCourse(4,'second')">
                                <div class="block-back">消除<br>憂鬱</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">讓能量在身體流轉</p>
                                    <p class="index-curriculum-block-text">各做15次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>
        <div  v-if="$mq == 'desktop'">
            <carousel
            :perPage="1" :centerMode="true"  :autoplay="false" :spacePaddingMaxOffsetFactor="0"
            :spacePadding="50" :paginationEnabled="false" :scrollPerPage="false">
                <slide class="intro-wrap-block-new-five-curriculum-block-container">
                    <div class="intro-wrap-block-new-five-curriculum-block">
                        <p>產後1-2個月</p>
                        <div class="index-curriculum-block">
                            <div class="index-curriculum-block-every day block-top-left">ㄧ</div>
                            <div class="index-curriculum-block-every block-top-right" @click="goCourse(3,'first')">
                                <div class="block-back">疲勞<br>消除</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">用空氣啟動身體</p>
                                    <p class="index-curriculum-block-text">各做5次，共3組</p>
                                </div>
                                <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">二</div>
                            <div class="index-curriculum-block-every" @click="goCourse(11,'first')">
                                <div class="block-rest">休息</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">瑜珈的基本呼吸</p>
                                    <p class="index-curriculum-block-text">1組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">三</div>
                            <div class="index-curriculum-block-every" @click="goCourse(1,'second')">
                                <div class="block-back">骨盆<br>矯正</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">躺著坐的骨盆矯正姿勢</p>
                                    <p class="index-curriculum-block-text">各做3次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">四</div>
                            <div class="index-curriculum-block-every" @click="goCourse(11,'second')">
                                <div class="block-rest">休息</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">單邊鼻子呼吸法</p>
                                    <p class="index-curriculum-block-text">1組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day block-bottom-left">五</div>
                            <div class="index-curriculum-block-every block-bottom-right" @click="goCourse(13,'third')">
                                <div class="block-back">消除<br>失眠</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">全世界都會幫助妳！</p>
                                    <p class="index-curriculum-block-text">各做3次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                        </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-new-five-curriculum-block-container">
                    <div class="intro-wrap-block-new-five-curriculum-block">
                        <p>廣大女性</p>
                        <div class="index-curriculum-block">
                            <div class="index-curriculum-block-every day block-top-left">ㄧ</div>
                            <div class="index-curriculum-block-every block-top-right" @click="goCourse(1,'third')">
                                <div class="block-back">骨盆<br>矯正</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">回到沒有歪斜的骨盆</p>
                                    <p class="index-curriculum-block-text">各做5次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">二</div>
                            <div class="index-curriculum-block-every" @click="goCourse(3,'second')">
                                <div class="block-rest">休息</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">深呼吸、深呼吸</p>
                                    <p class="index-curriculum-block-text">1組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">三</div>
                            <div class="index-curriculum-block-every" @click="goCourse(7,'third')">
                                <div class="block-back">下身<br>減肥</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">收緊骨盆，告別大屁股</p>
                                    <p class="index-curriculum-block-text">各做5次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">四</div>
                            <div class="index-curriculum-block-every" @click="goCourse(4,'first')">
                                <div class="block-rest">休息</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">打通壓力沉積的地方</p>
                                    <p class="index-curriculum-block-text">3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day block-bottom-left">五</div>
                            <div class="index-curriculum-block-every block-bottom-right" @click="goCourse(5,'first')">
                                <div class="block-back">消除<br>便秘</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">新的一天！新的開始！</p>
                                    <p class="index-curriculum-block-text">各做5次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                        </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-new-five-curriculum-block-container">
                    <div class="intro-wrap-block-new-five-curriculum-block">
                        <p>產後3-6個月</p>
                        <div class="index-curriculum-block">
                            <div class="index-curriculum-block-every day block-top-left">ㄧ</div>
                            <div class="index-curriculum-block-every block-top-right" @click="goCourse(1,'third')">
                                <div class="block-back">骨盆<br>矯正</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">回到沒有歪斜的骨盆</p>
                                    <p class="index-curriculum-block-text">各做15次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">二</div>
                            <div class="index-curriculum-block-every" @click="goCourse(12,'first')">
                                <div class="block-rest">休息</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">用呼吸創造放鬆空間</p>
                                    <p class="index-curriculum-block-text">3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">三</div>
                            <div class="index-curriculum-block-every" @click="goCourse(10,'first')">
                                <div class="block-back">下身<br>減肥</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">同時照顧下半身與上半身</p>
                                    <p class="index-curriculum-block-text">各做15次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">四</div>
                            <div class="index-curriculum-block-every" @click="goCourse(13,'first')">
                                <div class="block-rest">休息</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">為自己的心情按摩</p>
                                    <p class="index-curriculum-block-text">1組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day block-bottom-left">五</div>
                            <div class="index-curriculum-block-every block-bottom-right" @click="goCourse(4,'second')">
                                <div class="block-back">消除<br>憂鬱</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">讓能量在身體流轉</p>
                                    <p class="index-curriculum-block-text">各做15次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                        </div>
                    </div>
                </slide>
                <slide class="intro-wrap-block-new-five-curriculum-block-container">
                    <div class="intro-wrap-block-new-five-curriculum-block">
                        <p>產後6-18個月</p>
                        <div class="index-curriculum-block">
                            <div class="index-curriculum-block-every day block-top-left">ㄧ</div>
                            <div class="index-curriculum-block-every block-top-right" @click="goCourse(1,'third')">
                                <div class="block-back">骨盆<br>矯正</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">回到沒有歪斜的骨盆</p>
                                    <p class="index-curriculum-block-text">各做15次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">二</div>
                            <div class="index-curriculum-block-every" @click="goCourse(12,'first')">
                                <div class="block-back">調理<br>腰痛</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">用呼吸創造放鬆空間</p>
                                    <p class="index-curriculum-block-text">3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">三</div>
                            <div class="index-curriculum-block-every" @click="goCourse(10,'first')">
                                <div class="block-back">下身<br>減肥</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">同時照顧下半身與上半身</p>
                                    <p class="index-curriculum-block-text">各做15次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day">四</div>
                            <div class="index-curriculum-block-every" @click="goCourse(13,'first')">
                                <div class="block-back">消除<br>便秘</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">為自己的心情按摩</p>
                                    <p class="index-curriculum-block-text">1組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                            <div class="index-curriculum-block-every day block-bottom-left">五</div>
                            <div class="index-curriculum-block-every block-bottom-right" @click="goCourse(4,'second')">
                                <div class="block-back">消除<br>憂鬱</div>
                                <div class="index-curriculum-block-contain">
                                    <p class="index-curriculum-block-title">讓能量在身體流轉</p>
                                    <p class="index-curriculum-block-text">各做15次，共3組</p>
                                </div>
                                 <img class="index-curriculum-block-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/gogo.png" alt="">
                            </div>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

export default {
    mounted(){
        if (process.browser) {
            
        }
    },
    methods: {
        goCourse(c,f){
            sessionStorage['course_' + c + '_current_pose_id'] = f
            this.$router.push('/course/practice/' + c)
            
        }
    }
}
</script>

<style>
.intro-wrap-block-new-five-curriculum-block-container {
    display: flex;
    align-items: center;
    justify-content: center;
 
}
.intro-wrap-block-new-five-curriculum-block {
    width: 300px;
}
.intro-wrap-block-new-five-curriculum-block p {
    color: #24798F;
    font-size: 14px;
    font-weight: 500;
    margin: 15px 0;
    text-align: center;
}
.index-curriculum-block {
    display: grid;
    background: #24798F;
    grid-template-columns: 0.25fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-row-gap: 3px;
    grid-column-gap: 3px;
    width: 300px;
    height: 300px;
    border-radius: 20px;
    border: 3px solid #24798F;
}
.block-top-left{
    border-radius: 18px 0 0 0 ;
}
.block-top-right{
    border-radius: 0 18px 0 0 ;
}
.block-bottom-left{
    border-radius:  0 0 0 18px;
}
.block-bottom-right{
    border-radius: 0 0 18px 0 ;
}
.index-curriculum-block-every {
    display: flex;
    align-items: center;
    /* justify-content: space-evenly; */
    background: #FFFFFF;
    padding-left: 10px;
    position: relative;
}
.index-curriculum-block-every.day{
    justify-content: center;
    font-size: 20px;
    color: #24798f;
    font-weight: bold;
    padding-left:0;
}
.index-curriculum-block-img {
    width:4% !important;
    position:absolute;
    right: 13px;
}
.block-back {
    background: #24798f;
    width:40px;
    height: 40px;
    font-size: 12px;
    color: #ffffff;
    /* padding: 5px; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    text-align: center;
    font-weight: bold;
}
.block-rest {
    width:40px;
    height: 40px;
    color: #24798f;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}
.index-curriculum-block-contain {
    padding-left: 15px;
}
.index-curriculum-block-title {
    margin: 0 !important;
    font-weight: bold !important;
    font-size: 12px !important;
}
.index-curriculum-block-text {
    margin: 0 !important;
    font-weight: 300 !important;
    text-align: left !important;
    font-size: 12px !important;
}
.intro-wrap-block-new-five-curriculum-block img {
    width: 100%;
}
</style>