<template>
    <div class="mamiyoga-course-content">
        <input type="radio" class="labels first-series" id="first" name="series" checked>
        <input type="radio" class="labels second-series" id="second" name="series">
        <input type="radio" class="labels third-series" id="third" name="series">
        <input type="radio" class="labels four-series" id="four" name="series">
        <div class="mamiyoga-course-select" style="padding-bottom:3vh;">
            <div class="label-box">
                <label for="first" class="first-label">{{$t('menu_tag_text_first')}}</label>
                <label for="second" class="second-label">{{$t('menu_tag_text_second')}}</label>
                <label for="third" class="third-label">{{$t('menu_tag_text_third')}}</label>
                <label for="four" class="four-label">{{$t('menu_tag_text_four')}}</label>
            </div>
            <div class="first-series-container mamiyoga-all-course">
                <h5>{{$t('menu_content_text_first')}}</h5>
                <mamiyoga-course-block v-for="rectify in getRectifys" :key="rectify.id"
                :bgImage="rectify.preview_img" blockColor="white" 
                :blockTitle="rectify.title" :unitSrc="rectify.chapter_flag" :selectCourse="rectify.id"
                :goCourse="rectify.id"
                ></mamiyoga-course-block>
                
            </div>
            <div class="second-series-container mamiyoga-all-course">
                <h5>{{$t('menu_content_text_second')}}</h5>
                <mamiyoga-course-block v-for="alleviate in getAlleviates" :key="alleviate.id"
                :bgImage="alleviate.preview_img" blockColor="white" 
                :blockTitle="alleviate.title" :unitSrc="alleviate.chapter_flag" :goCourse="alleviate.id"
                ></mamiyoga-course-block>
                
            </div>
            <div class="third-series-container mamiyoga-all-course">
                <h5>{{$t('menu_content_text_third')}}</h5>
                <mamiyoga-course-block v-for="beauty in getBeautys" :key="beauty.id"
                :bgImage="beauty.preview_img" blockColor="white" 
                :blockTitle="beauty.title" :unitSrc="beauty.chapter_flag" :goCourse="beauty.id"
                ></mamiyoga-course-block>
                
            </div>
            <div class="four-series-container mamiyoga-all-course">
                <h5>{{$t('menu_content_text_four')}}</h5>
                <mamiyoga-course-block v-for="blend in getBlends" :key="blend.id"
                :bgImage="blend.preview_img" blockColor="white" 
                :blockTitle="blend.title" :unitSrc="blend.chapter_flag" :goCourse="blend.id"
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
    }),
    computed:{
        getRectifys(){
            if (this.courses) {
                const result_array = this.courses.filter(course => course.tags.find(tag => tag == 'rectify'));
                return result_array;
            } else {
                return [];
            }
        },
        getAlleviates(){
            if (this.courses) {
                const result_array = this.courses.filter(course => course.tags.find(tag => tag == 'alleviate'));
                return result_array;
            } else {
                return [];
            }
        },
        getBeautys(){
            if (this.courses) {
                const result_array = this.courses.filter(course => course.tags.find(tag => tag == 'beauty'));
                return result_array;
            } else {
                return [];
            }
        },
        getBlends(){
            if (this.courses) {
                const result_array = this.courses.filter(course => course.tags.find(tag => tag == 'blend'));
                return result_array;
            } else {
                return [];
            }
        },

    },
    props:{
        courses:Array,
    },

}
</script>

<style>

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
@media (min-width: 769px) {
    .label-box {
        width: 100%;
        margin: 20px auto;
    }
    .label-box label {
        padding: 5px 20px;
    }
}
</style>
