<template>
    <div>
        <div v-if="$mq == 'iphone'">
            <carousel :perPage="1" :centerMode="true"  :autoplay="false"
            :spacePadding="25" :paginationEnabled="false" :scrollPerPage="false">
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-third-comment">
                        <div class="intro-wrap-block-third-comment-title">
                            想成為溫柔的媽媽超人
                        </div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8-2.png" alt="">
                        <p class="intro-wrap-block-third-comment-text">30歲前生下大寶之後，隔了幾年懷了二寶，在這中間都有保持運動的良好習慣，平時除了跑步也參雜一些重訓在鍛鍊自己。產後運動選擇瑜伽，是因為瑜伽的道理是覺察身體有沒有回歸本位，35歲的我已經可以感覺到體力逐漸改變，雖然有運動的習慣支撐，但我想藉著這個機會好好的了解現在的身體，重新地學會呼吸，強悍又溫柔的照顧兩個孩子！</p>
                        <p class="intro-wrap-block-third-comment-from">陳太太 35歲 運動習慣者</p>
                    </div>
                </slide>
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-third-comment">
                        <div class="intro-wrap-block-third-comment-title">
                            讓我重新體驗到走路跟呼吸可以這麼舒服！
                        </div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                        <p class="intro-wrap-block-third-comment-text">本來在懷孕之前工作很忙的時候就不太照顧自己的身體，常常在外飲食，高油高糖常常熬夜。因為這樣所以非常害怕產後憂鬱跟身體狀況，也害怕平常沒有運動習慣的我無法在產後自律的鍛鍊身材。朋友推薦我媽咪瑜伽是一個非常舒適且放鬆的方式。實際做了之後，我發現真的沒什麼壓力，只要照著老師的話去做，了解身體的結構，放鬆地去呼吸，感受身體，讓我覺得靠著一件簡單的方式，就重新調整生活。我也有信心可以一直維持做瑜伽的好習慣！</p>
                        <p class="intro-wrap-block-third-comment-from">Yuna 29歲 科技業上班族</p>
                    </div>
                </slide>
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-third-comment">
                        <div class="intro-wrap-block-third-comment-title">
                            想要把所有好的事情都給老婆
                        </div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                        <p class="intro-wrap-block-third-comment-text">看著老婆從妊娠初期就吃盡苦頭，身為男性實在不知道自己能夠幫上什麼忙，可以幫她一些小事，可以關心她，可以陪伴她，但卻不能代替她痛，她身形的改變、她在意的生理變化，我都沒辦法經歷。在網路上查了許多資料，瑜伽是最好恢復身形的方法，安排完大小事情之後，送他這個小小的禮物，希望送給她自己的時間，讓她好好的放鬆。</p>
                        <p class="intro-wrap-block-third-comment-from">陳先生 34歲 </p>
                    </div>
                </slide>
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-third-comment">
                        <div class="intro-wrap-block-third-comment-title">
                            我迎接了第一個寶寶，同時也深層了解自我！
                        </div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                        <p class="intro-wrap-block-third-comment-text">跟老公規劃好大寶的出生之後，一直非常焦慮自己能不能有耐心的去照顧好我們的寶貝。從來沒有當過媽媽，非常緊張。老公一直用心地跟我溝通，給予我鼓勵，我們溝通之後，決定選一個最舒適的運動跟環境。生產後在月子中心的日子，每天學著照顧寶寶，等待餵奶的時間，其實也有點壓力，增加了運動的習慣，反而讓我可以好好靜下心，我相信這個運動的過程可以幫助我沈澱自己，好好面對人生的新角色！</p>
                        <p class="intro-wrap-block-third-comment-from">欣鈺 25歲 頭胎</p>
                    </div>
                </slide>
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-third-comment">
                        <div class="intro-wrap-block-third-comment-title">
                            把保養身體變成習慣！
                        </div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8-2.png" alt="">
                        <p class="intro-wrap-block-third-comment-text">身為單身全職女性，常常會忽略忙碌的生活以及隨便的飲食給身體帶來的負擔。這些生活中的負擔就好像對自己欠了債，在經期來時讓身體疲累不堪、皮膚也狀況百出。雖然這個運動是標榜產後瑜伽，但其實做了之後發道理其實非常簡單，還沒有生育過的女性也受用無窮。掌握著這個基本的養生之道之後，懂的如何休息，就算面對高壓的工作，也可以好好照顧自己！</p>
                        <p class="intro-wrap-block-third-comment-from">B 23歲 上班族</p>
                    </div>
                </slide>
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-third-comment">
                        <div class="intro-wrap-block-third-comment-title">
                            舒服完美的使用者介面，良好的體驗
                        </div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                        <p class="intro-wrap-block-third-comment-text">學校的體育學分修完之後，我跟我的室友就沒有繼續保持運動的習慣，所以我們買了媽咪瑜伽，每天約定好時間一起運動。雖然沒有生過寶寶（笑），但媽咪瑜伽其實整合了瑜伽最基本的概念，每天輕輕鬆鬆地做就可以把痠痛的筋骨伸展開。有那麼多的選擇，媽咪瑜伽最fit我們的需求，介面也很好看，使用起來非常方便，整體來說，讓整個做瑜伽的過程都很舒服(oﾟωﾟo)！</p>
                        <p class="intro-wrap-block-third-comment-from">Claire 20歲 大學生</p>
                    </div>
                </slide>
            </carousel>
        </div>
        <div v-if="$mq == 'mobile'">
            <carousel :perPage="1" :centerMode="true"  :autoplay="false"
            :spacePadding="50" :paginationEnabled="false" :scrollPerPage="false">
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-third-comment">
                        <div class="intro-wrap-block-third-comment-title">
                            想成為溫柔的媽媽超人
                        </div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8-2.png" alt="">
                        <p class="intro-wrap-block-third-comment-text">30歲前生下大寶之後，隔了幾年懷了二寶，在這中間都有保持運動的良好習慣，平時除了跑步也參雜一些重訓在鍛鍊自己。產後運動選擇瑜伽，是因為瑜伽的道理是覺察身體有沒有回歸本位，35歲的我已經可以感覺到體力逐漸改變，雖然有運動的習慣支撐，但我想藉著這個機會好好的了解現在的身體，重新地學會呼吸，強悍又溫柔的照顧兩個孩子！</p>
                        <p class="intro-wrap-block-third-comment-from">陳太太 35歲 運動習慣者</p>
                    </div>
                </slide>
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-third-comment">
                        <div class="intro-wrap-block-third-comment-title">
                            讓我重新體驗到走路跟呼吸可以這麼舒服！
                        </div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                        <p class="intro-wrap-block-third-comment-text">本來在懷孕之前工作很忙的時候就不太照顧自己的身體，常常在外飲食，高油高糖常常熬夜。因為這樣所以非常害怕產後憂鬱跟身體狀況，也害怕平常沒有運動習慣的我無法在產後自律的鍛鍊身材。朋友推薦我媽咪瑜伽是一個非常舒適且放鬆的方式。實際做了之後，我發現真的沒什麼壓力，只要照著老師的話去做，了解身體的結構，放鬆地去呼吸，感受身體，讓我覺得靠著一個簡單的方式，就重新調整生活。我也有信心可以一直維持做瑜伽的好習慣！</p>
                        <p class="intro-wrap-block-third-comment-from">Yuna 29歲 科技業上班族</p>
                    </div>
                </slide>
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-third-comment">
                        <div class="intro-wrap-block-third-comment-title">
                            想要把所有好的事情都給老婆
                        </div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                        <p class="intro-wrap-block-third-comment-text">看著老婆從妊娠初期就吃盡苦頭，身為男性實在不知道自己能夠幫上什麼忙，可以幫她一些小事，可以關心她，可以陪伴她，但卻不能代替她痛，她身形的改變、她在意的生理變化，我都沒辦法經歷。在網路上查了許多資料，瑜伽是最好恢復身形的方法，安排完大小事情之後，送她這個小小的禮物，希望送給她自己的時間，讓她好好的放鬆。</p>
                        <p class="intro-wrap-block-third-comment-from">陳先生 34歲 </p>
                    </div>
                </slide>
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-third-comment">
                        <div class="intro-wrap-block-third-comment-title">
                            我迎接了第一個寶寶，同時也深層了解自我！
                        </div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                        <p class="intro-wrap-block-third-comment-text">跟老公規劃好大寶的出生之後，一直非常焦慮自己能不能有耐心的去照顧好我們的寶貝。從來沒有當過媽媽，非常緊張。老公一直用心地跟我溝通，給予我鼓勵，我們溝通之後，決定選一個最舒適的運動跟環境。生產後在月子中心的日子，每天學著照顧寶寶，等待餵奶的時間，其實也有點壓力，增加了運動的習慣，反而讓我可以好好靜下心，我相信這個運動的過程可以幫助我沈澱自己，好好面對人生的新角色！</p>
                        <p class="intro-wrap-block-third-comment-from">欣鈺 25歲 頭胎</p>
                    </div>
                </slide>
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-third-comment">
                        <div class="intro-wrap-block-third-comment-title">
                            把保養身體變成習慣！
                        </div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8-2.png" alt="">
                        <p class="intro-wrap-block-third-comment-text">身為單身全職女性，常常會忽略忙碌的生活以及隨便的飲食給身體帶來的負擔。這些生活中的負擔就好像對自己欠了債，在經期來時讓身體疲累不堪、皮膚也狀況百出。雖然這個運動是標榜產後瑜伽，但做了之後發現道理其實非常簡單，還沒有生育過的女性也受用無窮。掌握著這個基本的養生之道之後，懂得如何休息，就算面對高壓的工作，也可以好好照顧自己！</p>
                        <p class="intro-wrap-block-third-comment-from">B 23歲 上班族</p>
                    </div>
                </slide>
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-third-comment">
                        <div class="intro-wrap-block-third-comment-title">
                            舒服完美的使用者介面，良好的體驗
                        </div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                        <p class="intro-wrap-block-third-comment-text">學校的體育學分修完之後，我跟我的室友就沒有繼續保持運動的習慣，所以我們買了媽咪瑜伽，每天約定好時間一起運動。雖然沒有生過寶寶（笑），但媽咪瑜伽其實整合了瑜伽最基本的概念，每天輕輕鬆鬆地做就可以把痠痛的筋骨伸展開。有那麼多的選擇，媽咪瑜伽最fit我們的需求，介面也很好看，使用起來非常方便，整體來說，讓整個做瑜伽的過程都很舒服(oﾟωﾟo)！</p>
                        <p class="intro-wrap-block-third-comment-from">Claire 20歲 大學生</p>
                    </div>
                </slide>
            </carousel>
        </div>
        <div v-if="$mq == 'desktop'">
            <carousel :perPage="1" :centerMode="true"  :autoplay="false"
            :spacePadding="60" :paginationEnabled="false" :scrollPerPage="false">
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-third-comment">
                        <div class="intro-wrap-block-third-comment-title">
                            想成為溫柔的媽媽超人
                        </div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8-2.png" alt="">
                        <p class="intro-wrap-block-third-comment-text">30歲前生下大寶之後，隔了幾年懷了二寶，在這中間都有保持運動的良好習慣，平時除了跑步也參雜一些重訓在鍛鍊自己。產後運動選擇瑜伽，是因為瑜伽的道理是覺察身體有沒有回歸本位，35歲的我已經可以感覺到體力逐漸改變，雖然有運動的習慣支撐，但我想藉著這個機會好好的了解現在的身體，重新地學會呼吸，強悍又溫柔的照顧兩個孩子！</p>
                        <p class="intro-wrap-block-third-comment-from">陳太太 35歲 運動習慣者</p>
                    </div>
                </slide>
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-third-comment">
                        <div class="intro-wrap-block-third-comment-title">
                            讓我重新體驗到走路跟呼吸可以這麼舒服！
                        </div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                        <p class="intro-wrap-block-third-comment-text">本來在懷孕之前工作很忙的時候就不太照顧自己的身體，常常在外飲食，高油高糖常常熬夜。因為這樣所以非常害怕產後憂鬱跟身體狀況，也害怕平常沒有運動習慣的我無法在產後自律的鍛鍊身材。朋友推薦我媽咪瑜伽是一個非常舒適且放鬆的方式。實際做了之後，我發現真的沒什麼壓力，只要照著老師的話去做，了解身體的結構，放鬆地去呼吸，感受身體，讓我覺得靠著一件簡單的方式，就重新調整生活。我也有信心可以一直維持做瑜伽的好習慣！</p>
                        <p class="intro-wrap-block-third-comment-from">Yuna 29歲 科技業上班族</p>
                    </div>
                </slide>
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-third-comment">
                        <div class="intro-wrap-block-third-comment-title">
                            想要把所有好的事情都給老婆
                        </div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                        <p class="intro-wrap-block-third-comment-text">看著老婆從妊娠初期就吃盡苦頭，身為男性實在不知道自己能夠幫上什麼忙，可以幫她一些小事，可以關心她，可以陪伴她，但卻不能代替她痛，她身形的改變、她在意的生理變化，我都沒辦法經歷。在網路上查了許多資料，瑜伽是最好恢復身形的方法，安排完大小事情之後，送他這個小小的禮物，希望送給她自己的時間，讓她好好的放鬆。</p>
                        <p class="intro-wrap-block-third-comment-from">陳先生 34歲 </p>
                    </div>
                </slide>
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-third-comment">
                        <div class="intro-wrap-block-third-comment-title">
                            我迎接了第一個寶寶，同時也深層了解自我！
                        </div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                        <p class="intro-wrap-block-third-comment-text">跟老公規劃好大寶的出生之後，一直非常焦慮自己能不能有耐心的去照顧好我們的寶貝。從來沒有當過媽媽，非常緊張。老公一直用心地跟我溝通，給予我鼓勵，我們溝通之後，決定選一個最舒適的運動跟環境。生產後在月子中心的日子，每天學著照顧寶寶，等待餵奶的時間，其實也有點壓力，增加了運動的習慣，反而讓我可以好好靜下心，我相信這個運動的過程可以幫助我沈澱自己，好好面對人生的新角色！</p>
                        <p class="intro-wrap-block-third-comment-from">欣鈺 25歲 頭胎</p>
                    </div>
                </slide>
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-third-comment">
                        <div class="intro-wrap-block-third-comment-title">
                            把保養身體變成習慣！
                        </div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8-2.png" alt="">
                        <p class="intro-wrap-block-third-comment-text">身為單身全職女性，常常會忽略忙碌的生活以及隨便的飲食給身體帶來的負擔。這些生活中的負擔就好像對自己欠了債，在經期來時讓身體疲累不堪、皮膚也狀況百出。雖然這個運動是標榜產後瑜伽，但其實做了之後發道理其實非常簡單，還沒有生育過的女性也受用無窮。掌握著這個基本的養生之道之後，懂的如何休息，就算面對高壓的工作，也可以好好照顧自己！</p>
                        <p class="intro-wrap-block-third-comment-from">B 23歲 上班族</p>
                    </div>
                </slide>
                <slide class="intro-wrap-block-third-comment-block">
                    <div class="intro-wrap-block-third-comment">
                        <div class="intro-wrap-block-third-comment-title">
                            舒服完美的使用者介面，良好的體驗
                        </div>
                        <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-8.png" alt="">
                        <p class="intro-wrap-block-third-comment-text">學校的體育學分修完之後，我跟我的室友就沒有繼續保持運動的習慣，所以我們買了媽咪瑜伽，每天約定好時間一起運動。雖然沒有生過寶寶（笑），但媽咪瑜伽其實整合了瑜伽最基本的概念，每天輕輕鬆鬆地做就可以把痠痛的筋骨伸展開。有那麼多的選擇，媽咪瑜伽最fit我們的需求，介面也很好看，使用起來非常方便，整體來說，讓整個做瑜伽的過程都很舒服(oﾟωﾟo)！</p>
                        <p class="intro-wrap-block-third-comment-from">Claire 20歲 大學生</p>
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
    }
}
</script>

<style>
.intro-wrap-block-third-comment {
    width: 300px;
    height: 330px;
    background: #F7F7F7;
    border-radius: 10px;
    margin: 30px auto;
    padding: 20px;
    position: relative;
}
.intro-wrap-block-third-comment-title {
    color: #24798F;
    font-size: 13px;
    font-weight: bold;
}
.intro-wrap-block-third-comment img {
    height: 15px;
    margin: 10px 0;
}
.intro-wrap-block-third-comment-text {
    color: #24798F;
    font-size: 13px;
    font-weight: 400;
}
.intro-wrap-block-third-comment-from {
    font-size: 12px;
    color: #707070;
    font-weight: 300;
    position: absolute;
    bottom: 20px;
    right: 20px;
}
</style>