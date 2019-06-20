<template>
    <div class="mamiyoga-course-content">
        <input type="radio" class="labels first-series" id="first" name="series" checked>
        <input type="radio" class="labels second-series" id="second" name="series">
        <input type="radio" class="labels third-series" id="third" name="series">
        <input type="radio" class="labels four-series" id="four" name="series">
        <div class="mamiyoga-course-select" style="padding-bottom:3vh;">
            <div class="label-box">
                <label for="first" class="first-label">矯正疼痛</label>
                <label for="second" class="second-label">舒壓安眠</label>
                <label for="third" class="third-label">美體塑身</label>
                <label for="four" class="four-label">調和心靈</label>
            </div>
            <div class="first-series-container mamiyoga-all-course">
                <h5>矯正媽媽們產後不良姿勢來緩解疼痛</h5>
                <mamiyoga-course-block v-for="rectify in rectifys" :key="rectify.id"
                bgImage="/mamiyoga/background-menu-old.png" blockColor="white" 
                :blockTitle="rectify.title" :unitSrc="rectify.unit"
                ></mamiyoga-course-block>
                
            </div>
            <div class="second-series-container mamiyoga-all-course">
                <h5>幫助媽媽們提升睡眠品質</h5>
                <mamiyoga-course-block v-for="alleviate in alleviates" :key="alleviate.id"
                bgImage="/mamiyoga/background-menu-old.png" blockColor="white" 
                :blockTitle="alleviate.title" :unitSrc="alleviate.unit"
                ></mamiyoga-course-block>
                
            </div>
            <div class="third-series-container mamiyoga-all-course">
                <h5>塑造出比產前更漂亮的身體曲線</h5>
                <mamiyoga-course-block v-for="beauty in beautys" :key="beauty.id"
                bgImage="/mamiyoga/background-menu-old.png" blockColor="white" 
                :blockTitle="beauty.title" :unitSrc="beauty.unit"
                ></mamiyoga-course-block>
                
            </div>
            <div class="four-series-container mamiyoga-all-course">
                <h5>釋放媽媽們的產後壓力</h5>
                <mamiyoga-course-block v-for="blend in blends" :key="blend.id"
                bgImage="/mamiyoga/background-menu-old.png" blockColor="white" 
                :blockTitle="blend.title" :unitSrc="blend.unit"
                ></mamiyoga-course-block>
                
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
        rectifys:[
            {
                id: '1',
                title: '骨盆矯正的姿勢',
                unit: '/mamiyoga/course/unit01.svg',
            },
            {
                id: '2',
                title: '改善疼痛症狀的伸展',
                unit: '/mamiyoga/course/unit02.svg',
            },
            {
                id: '3',
                title: '',
                unit: '/mamiyoga/course/unit03.svg',
            },
        ],
        alleviates:[
            {
                id: '1',
                title: '伸展鼠蹊部的姿勢',
                unit: '/mamiyoga/course/unit04.svg',
            },
            {
                id: '2',
                title: '睡醒好狀態的姿勢',
                unit: '/mamiyoga/course/unit05.svg',
            },
        ],
        beautys:[
            {
                id: '1',
                title: '舒緩疲勞和倦怠感',
                unit: '/mamiyoga/course/unit06.svg',
            },
            {
                id: '2',
                title: '鬆弛的肚子變得緊實',
                unit: '/mamiyoga/course/unit07.svg',
            },
            {
                id: '3',
                title: '',
                unit: '/mamiyoga/course/unit08.svg',
            },
            {
                id: '4',
                title: '',
                unit: '/mamiyoga/course/unit09.svg',
            },
        ],
        blends:[
            {
                id: '1',
                title: '同時照顧上半身跟下半身',
                unit: '/mamiyoga/course/unit10.svg',
            },
            {
                id: '2',
                title: '呼吸法',
                unit: '/mamiyoga/course/unit11.svg',
            },
            {
                id: '3',
                title: '',
                unit: '/mamiyoga/course/unit12.svg',
            },
            {
                id: '4',
                title: '',
                unit: '/mamiyoga/course/unit13.svg',
            },
            {
                id: '5',
                title: '',
                unit: '/mamiyoga/course/unit14.svg',
            },
        ],

    }),
}
</script>

<style>
@media (max-width:899px) {
    .labels {
        display: none;
    }
    .label-box {
        width: 90vw;
        margin: 3vh auto;
        display: flex;
        justify-content:space-around;
    }
    .label-box label {
        color: white;
        font-size: 12px;
        background-color: #D1D1D1; 
        padding: .5vh 2.8vw;
        border-radius: 30px;
        margin: 0 3px;
    }
    .first-series:checked ~ .mamiyoga-course-select .first-label,
    .second-series:checked ~ .mamiyoga-course-select .second-label,
    .third-series:checked ~ .mamiyoga-course-select .third-label,
    .four-series:checked ~ .mamiyoga-course-select .four-label {
        background-color: #97A8AF;
    }
    .first-series-container,.second-series-container,
    .third-series-container,.four-series-container {
        display: none;
    }
    .first-series:checked ~ .mamiyoga-course-select .first-series-container,
    .second-series:checked ~ .mamiyoga-course-select .second-series-container,
    .third-series:checked ~ .mamiyoga-course-select .third-series-container,
    .four-series:checked ~ .mamiyoga-course-select .four-series-container {
        display: block;
    }
    .mamiyoga-all-course h5 {
        text-align: center;
        font-size: 12px;
        color: #585757;
        font-weight: 400;
        margin-top: 2vh; 
    }
}
</style>
