<template>
    <div class="mamiyoga-course-content">
        <input type="radio" class="labels first-series" id="first" name="series" v-model="check_syllabus" value="first" >
        <input type="radio" class="labels second-series" id="second" name="series" v-model="check_syllabus" value="second" >
        <div class="mamiyoga-course-select" style="padding-bottom:3vh;">
            <div class="syllabus-label-box">
                <label for="first" class="first-label">{{$t('menu_tag_text_first')}}</label>
                <label for="second" class="second-label">{{$t('menu_tag_text_second')}}</label>
            </div>
            <div class="first-series-container mamiyoga-all-course">
                <div class="syllabus-out-block" style="margin-bottom:50px;">
                    <p class="syllabus-out-title">量身打造產後不同階段的練習課表</p>
                    <p class="syllabus-out-text" >產後媽媽歷經了懷孕和生產時身心上的重大變化，產後修復有助於調理內在和外在的平衡與規律，找回屬於自己的舒適和增進撫育寶寶的力量。<br><br>依照產後不同階段的練習課表，每日選一組動作持之以恆的交錯練習，能減輕懷孕時下背及腰部等部位的痠痛不適，調適心靈及荷爾蒙的變化並維持良好的體態。</p>
                </div>
                <div class="syllabus-block">
                    <div class="syllabus-block-title">產後1-2個月</div>
                    <div class="syllabus-block-content syllabus-little-title">舒緩疲勞</div>
                    <div class="syllabus-block-content">
                        <p>單元3-1</p>
                        <div class="go-to-select" @click="goCourse(3,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content">
                        <p>單元12-2</p>
                        <div class="go-to-select" @click="goCourse(12,'second')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-little-title yellow-back">骨盆矯正</div>
                    <div class="syllabus-block-content yellow-back">
                        <p>單元1-2</p>
                        <div class="go-to-select" @click="goCourse(1,'second')">前往</div>
                    </div>
                    <div class="syllabus-block-content yellow-back">
                        <p>單元12-1</p>
                        <div class="go-to-select" @click="goCourse(12,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-little-title bottom-block-left">消除失眠</div>
                    <div class="syllabus-block-content">
                        <p>單元13-3</p>
                        <div class="go-to-select" @click="goCourse(13,'third')">前往</div>
                    </div>
                    <div class="syllabus-block-content bottom-block-right">
                        <p>單元2-3</p>
                        <div class="go-to-select" @click="goCourse(2,'third')">前往</div>
                    </div>
                </div>
                <div class="syllabus-out-block" style="margin-bottom:50px;">
                    <p class="syllabus-out-title">一週三天舒緩穩定身心</p>
                    <p class="syllabus-out-text">包括骨盆矯正、呼吸放鬆法、消除疲勞，適合產後階段修復，調和消化系統功能，改善呼吸品質，增強氧氣的供給。</p>
                </div>
                <div class="syllabus-block">
                    <div class="syllabus-block-title">產後3-6個月</div>
                    <div class="syllabus-block-content syllabus-little-title">緩解肩膀僵硬</div>
                    <div class="syllabus-block-content">
                        <p>單元4-1</p>
                        <div class="go-to-select" @click="goCourse(4,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content">
                        <p>單元13-1</p>
                        <div class="go-to-select" @click="goCourse(13,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-little-title yellow-back">骨盆矯正</div>
                    <div class="syllabus-block-content yellow-back">
                        <p>單元1-3</p>
                        <div class="go-to-select" @click="goCourse(1,'third')">前往</div>
                    </div>
                    <div class="syllabus-block-content yellow-back">
                        <p>單元7-3</p>
                        <div class="go-to-select" @click="goCourse(7,'third')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-little-title bottom-block-left">消除產後憂鬱</div>
                    <div class="syllabus-block-content">
                        <p>單元14-1</p>
                        <div class="go-to-select" @click="goCourse(14,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content bottom-block-right">
                        <p>單元13-2</p>
                        <div class="go-to-select" @click="goCourse(12,'second')">前往</div>
                    </div>
                </div>
                <div class="syllabus-out-block" style="margin-bottom:50px;">
                    <p class="syllabus-out-title">一週三天恢復輕盈體態</p>
                    <p class="syllabus-out-text">減緩腰痠背痛及頸部與肩膀到緊繃，強化骨盆歪斜及背部肌群，有助於穩定脊椎維持正常線條。</p>
                </div>
                <div class="syllabus-block-2">
                    <div class="syllabus-block-2-title">產後6-12個月</div>
                    <div class="syllabus-block-content syllabus-little-title">保持元氣</div>
                    <div class="syllabus-block-content syllabus-little-title yellow-back">舒緩上身</div>
                    <div class="syllabus-block-content syllabus-little-title">下身減脂</div>
                    <div class="syllabus-block-content syllabus-little-title yellow-back">消除便秘</div>
                    <div class="syllabus-block-content syllabus-little-title">舒緩疲勞</div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元5-1</p>
                        <div class="go-to-select" @click="goCourse(5,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元14-1</p>
                        <div class="go-to-select" @click="goCourse(14,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元6-1</p>
                        <div class="go-to-select" @click="goCourse(6,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元5-1</p>
                        <div class="go-to-select" @click="goCourse(5,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元3-1</p>
                        <div class="go-to-select" @click="goCourse(3,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元6-1</p>
                        <div class="go-to-select" @click="goCourse(6,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元4-1</p>
                        <div class="go-to-select" @click="goCourse(4,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元7-2</p>
                        <div class="go-to-select" @click="goCourse(7,'second')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元8-1</p>
                        <div class="go-to-select" @click="goCourse(8,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元4-1</p>
                        <div class="go-to-select" @click="goCourse(4,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap bottom-block-left">
                        <p>單元4-2</p>
                        <div class="go-to-select" @click="goCourse(4,'second')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元10-1</p>
                        <div class="go-to-select" @click="goCourse(10,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元10-2</p>
                        <div class="go-to-select" @click="goCourse(10,'second')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元8-2</p>
                        <div class="go-to-select" @click="goCourse(8,'second')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap bottom-block-right ">
                        <p>單元12-2</p>
                        <div class="go-to-select" @click="goCourse(12,'second')">前往</div>
                    </div>    
                </div>
                <div class="syllabus-out-block">
                    <p class="syllabus-out-title">一週五天恢復苗條身材</p>
                    <p class="syllabus-out-text">提高強度的瑜珈訓練，美化曲線體態，強化手臂、腹部、背部及腿部的修飾，同時透過呼吸法穩定情緒、增強抗壓能力，以平靜愉快的心情與寶寶及家人相處。</p>
                </div>
            </div>
            <div class="second-series-container mamiyoga-all-course">
                <div class="syllabus-out-block">
                    <p class="syllabus-out-title">交錯練習培養每日瑜珈習慣</p>
                    <p class="syllabus-out-text">減壓和放鬆身心是瑜珈最為人知的好處，多項科學研究亦顯示瑜珈的確有效減低皮質醇（Cortisol；一種壓力荷爾蒙）的分泌。<br><br>選擇不同強度及訓練部位的課表，持之以恆交錯練習，不僅能減輕壓力、舒緩焦慮感，更能讓體態變美、氣質更好，達到身心平衡，能夠幫助你已平靜愉快的心情迎向每一天。<br><br>搭配每天喝2000~3000毫升的水量，促進新陳代謝效果會更好！</p>
                </div>
                <div class="syllabus-block-2" style="margin: 50px auto;">
                    <div class="syllabus-block-2-title">低強度舒緩矯正</div>
                    <div class="syllabus-block-content syllabus-little-title">提升動力</div>
                    <div class="syllabus-block-content syllabus-little-title yellow-back">緩解肩痛</div>
                    <div class="syllabus-block-content syllabus-little-title">減重消脂</div>
                    <div class="syllabus-block-content syllabus-little-title yellow-back">矯正歪斜</div>
                    <div class="syllabus-block-content syllabus-little-title">消除憂鬱</div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元14-2</p>
                        <div class="go-to-select" @click="goCourse(14,'second')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元3-1</p>
                        <div class="go-to-select" @click="goCourse(3,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元11-1</p>
                        <div class="go-to-select" @click="goCourse(11,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元1-3</p>
                        <div class="go-to-select" @click="goCourse(1,'third')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元13-1</p>
                        <div class="go-to-select" @click="goCourse(13,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元13-3</p>
                        <div class="go-to-select" @click="goCourse(13,'third')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元4-1</p>
                        <div class="go-to-select" @click="goCourse(4,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元6-1</p>
                        <div class="go-to-select" @click="goCourse(6,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元7-3</p>
                        <div class="go-to-select" @click="goCourse(7,'third')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元12-1</p>
                        <div class="go-to-select" @click="goCourse(12,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap bottom-block-left">
                        <p>單元12-1</p>
                        <div class="go-to-select" @click="goCourse(12,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元13-1</p>
                        <div class="go-to-select" @click="goCourse(13,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元10-1</p>
                        <div class="go-to-select" @click="goCourse(10,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元1-1</p>
                        <div class="go-to-select" @click="goCourse(1,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap bottom-block-right ">
                        <p>單元12-2</p>
                        <div class="go-to-select" @click="goCourse(12,'second')">前往</div>
                    </div>    
                </div>

                <div class="syllabus-block-2" style="margin: 50px auto;">
                    <div class="syllabus-block-2-title">中強度下半身瘦身</div>
                    <div class="syllabus-block-content syllabus-little-title">換然一新</div>
                    <div class="syllabus-block-content syllabus-little-title yellow-back">消除浮腫</div>
                    <div class="syllabus-block-content syllabus-little-title">下身減脂</div>
                    <div class="syllabus-block-content syllabus-little-title yellow-back">消除便秘</div>
                    <div class="syllabus-block-content syllabus-little-title">緩解疲勞</div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元5-1</p>
                        <div class="go-to-select" @click="goCourse(5,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元2-1</p>
                        <div class="go-to-select" @click="goCourse(2,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元6-1</p>
                        <div class="go-to-select" @click="goCourse(6,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元5-1</p>
                        <div class="go-to-select" @click="goCourse(5,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元3-1</p>
                        <div class="go-to-select" @click="goCourse(3,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元6-1</p>
                        <div class="go-to-select" @click="goCourse(6,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元2-2</p>
                        <div class="go-to-select" @click="goCourse(2,'second')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元7-2</p>
                        <div class="go-to-select" @click="goCourse(7,'second')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元8-1</p>
                        <div class="go-to-select" @click="goCourse(8,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元4-1</p>
                        <div class="go-to-select" @click="goCourse(4,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap bottom-block-left">
                        <p>單元4-2</p>
                        <div class="go-to-select" @click="goCourse(4,'second')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元2-3</p>
                        <div class="go-to-select" @click="goCourse(2,'third')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元10-2</p>
                        <div class="go-to-select" @click="goCourse(10,'second')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元8-2</p>
                        <div class="go-to-select" @click="goCourse(8,'second')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap bottom-block-right ">
                        <p>單元12-2</p>
                        <div class="go-to-select" @click="goCourse(12,'second')">前往</div>
                    </div>    
                </div>

                <div class="syllabus-block-2" style="margin: 50px auto;">
                    <div class="syllabus-block-2-title">照顧整天疲勞與上身的訓練</div>
                    <div class="syllabus-block-content syllabus-little-title">早晨瑜珈</div>
                    <div class="syllabus-block-content syllabus-little-title yellow-back">舒緩上身</div>
                    <div class="syllabus-block-content syllabus-little-title">小腹減脂</div>
                    <div class="syllabus-block-content syllabus-little-title yellow-back">緩解疲勞</div>
                    <div class="syllabus-block-content syllabus-little-title">夜晚瑜珈</div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元5-1</p>
                        <div class="go-to-select" @click="goCourse(5,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元14-1</p>
                        <div class="go-to-select" @click="goCourse(14,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元9-1</p>
                        <div class="go-to-select" @click="goCourse(9,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元14-1</p>
                        <div class="go-to-select" @click="goCourse(14,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元11-1</p>
                        <div class="go-to-select" @click="goCourse(11,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元14-1</p>
                        <div class="go-to-select" @click="goCourse(14,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元4-1</p>
                        <div class="go-to-select" @click="goCourse(4,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元10-2</p>
                        <div class="go-to-select" @click="goCourse(10,'second')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元13-2</p>
                        <div class="go-to-select" @click="goCourse(13,'second')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元2-1</p>
                        <div class="go-to-select" @click="goCourse(2,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap bottom-block-left">
                        <p>單元3-1</p>
                        <div class="go-to-select" @click="goCourse(3,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元10-1</p>
                        <div class="go-to-select" @click="goCourse(10,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元9-2</p>
                        <div class="go-to-select" @click="goCourse(9,'second')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元3-1</p>
                        <div class="go-to-select" @click="goCourse(3,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap bottom-block-right ">
                        <p>單元12-2</p>
                        <div class="go-to-select" @click="goCourse(12,'second')">前往</div>
                    </div>    
                </div>

                <div class="syllabus-block-2" style="margin: 50px auto;">
                    <div class="syllabus-block-2-title">全身訓練緩解疲勞</div>
                    <div class="syllabus-block-content syllabus-little-title">釋放疲勞</div>
                    <div class="syllabus-block-content syllabus-little-title yellow-back">緩解腰痛</div>
                    <div class="syllabus-block-content syllabus-little-title">加強燃脂</div>
                    <div class="syllabus-block-content syllabus-little-title yellow-back">矯正歪斜</div>
                    <div class="syllabus-block-content syllabus-little-title">消除失眠</div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元3-1</p>
                        <div class="go-to-select" @click="goCourse(3,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元4-2</p>
                        <div class="go-to-select" @click="goCourse(4,'second')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元14-1</p>
                        <div class="go-to-select" @click="goCourse(14,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元2-1</p>
                        <div class="go-to-select" @click="goCourse(2,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元13-1</p>
                        <div class="go-to-select" @click="goCourse(13,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元4-1</p>
                        <div class="go-to-select" @click="goCourse(4,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元14-1</p>
                        <div class="go-to-select" @click="goCourse(14,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元8-1</p>
                        <div class="go-to-select" @click="goCourse(8,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元7-3</p>
                        <div class="go-to-select" @click="goCourse(7,'third')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元2-3</p>
                        <div class="go-to-select" @click="goCourse(2,'third')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap bottom-block-left">
                        <p>單元12-2</p>
                        <div class="go-to-select" @click="goCourse(12,'second')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元3-2</p>
                        <div class="go-to-select" @click="goCourse(3,'second')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap">
                        <p>單元6-1</p>
                        <div class="go-to-select" @click="goCourse(6,'first')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap yellow-back">
                        <p>單元12-2</p>
                        <div class="go-to-select" @click="goCourse(12,'second')">前往</div>
                    </div>
                    <div class="syllabus-block-content syllabus-wrap bottom-block-right ">
                        <p>單元13-3</p>
                        <div class="go-to-select" @click="goCourse(13,'third')">前往</div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MamiyogaCourseBlock from '~/components/mamiyoga/MamiyogaCourseBlock.vue';
export default {
    components: {
        MamiyogaCourseBlock,
    },
    data:()=>({
        check_syllabus: 'first',
    }),
    mounted(){
        if(sessionStorage['syllabus_current_series']) {
            this.check_syllabus = sessionStorage['syllabus_current_series']
        } else {
            sessionStorage['syllabus_current_series'] = this.check_syllabus
        }
    },
    props:{
        courses:Array,
    },
    watch:{
        check_syllabus: function(new_value,old_value) {
            sessionStorage['syllabus_current_series'] = this.check_syllabus
            // debugger
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

.labels {
    display: none;
}
.syllabus-label-box {
    width: 65vw;
    margin: 3vh auto;
    display: flex;
    justify-content:space-evenly;
}
.syllabus-label-box label {
    color: white;
    font-size: 12px;
    background-color: #D1D1D1; 
    padding: .5vh 2.8vw;
    border-radius: 30px;
    margin: 0 3px;
    cursor: pointer;
}
.first-series:checked ~ .mamiyoga-course-select .first-label,
.second-series:checked ~ .mamiyoga-course-select .second-label {
    background-color: #97A8AF;
}
.first-series-container,.second-series-container {
    display: none;
}
.first-series:checked ~ .mamiyoga-course-select .first-series-container,
.second-series:checked ~ .mamiyoga-course-select .second-series-container {
    display: block;
}
.mamiyoga-all-course h5 {
    text-align: center;
    font-size: 12px;
    color: #585757;
    font-weight: 400;
    margin-top: 2vh; 
}
.syllabus-block {
    width: 90%;
    height: 200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 0.7fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr ;
    background: #97A8AF;
    border-radius: 10px;
    grid-column-gap: 3px;
    grid-row-gap: 3px;
    border: 3px solid #97A8AF;
}
.syllabus-block-2 {
    width: 90%;
    height: 260px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1.5fr 1.5fr 1.5fr;
    background: #97A8AF;
    border-radius: 10px;
    grid-column-gap: 3px;
    grid-row-gap: 3px;
    border: 3px solid #97A8AF;
    margin: 20px auto;
}
.syllabus-block-title {
    grid-column-start: 1; 
    grid-column-end: 4; 
    grid-row-start: 1; 
    grid-row-end: 2; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #fff;
    font-weight: bold;
}
.syllabus-block-2-title {
    grid-column-start: 1; 
    grid-column-end: 6; 
    grid-row-start: 1; 
    grid-row-end: 2; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #fff;
    font-weight: bold;
}
.yellow-back {
    background: #FCF9F2 !important;
}
.bottom-block-left {
    border-radius: 0 0 0 10px;
}
.bottom-block-right {
    border-radius: 0 0 10px 0;
}
.syllabus-little-title {
    font-weight: 600;
    justify-content: center !important;
    font-size: 12px !important;
    padding: 0 !important;
}
.syllabus-block-content {
    background: #F7F7F7;
    color: #97A8AF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    font-size: 13px;
}
.go-to-select {
    background: #97A8AF;
    color: #f7f7f7;
    padding: 2px 6px;
    border-radius: 10px;
    cursor: pointer;
}
.syllabus-out-block {
    width: 90%;
    margin: 15px auto;
}
.syllabus-out-title, .syllabus-out-text {
    font-size: 12px;
    color: #707070;
}
.syllabus-out-title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
}
.syllabus-wrap {
    flex-wrap: wrap;
    padding: 0;
    justify-content: center !important;
}
@media (min-width: 769px) {
    .syllabus-label-box {
        width: 55%;
        margin: 20px auto;
    }
    .syllabus-label-box label {
        padding: 5px 20px;
    }
}
</style>
