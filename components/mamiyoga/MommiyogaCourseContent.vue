<template>
    <div class="mamiyoga-course-content">
        <input type="radio" class="labels first-series" id="first" name="series" checked>
        <input type="radio" class="labels second-series" id="second" name="series">
        <input type="radio" class="labels third-series" id="third" name="series">
        <input type="radio" class="labels four-series" id="four" name="series">
        <div class="mamiyoga-course-select" style="padding-bottom:3vh;">
            <div class="label-box">
                <label for="first" class="first-label">初级课程</label>
                <label for="second" class="second-label">中级课程</label>
                <label for="third" class="third-label">高级课程</label>
            </div>
            <div class="first-series-container mamiyoga-all-course">
                <mommiyoga-course-block v-for="primary in getPrimarys" :key="primary.id"
                :bgImage="primary.preview_img" blockColor="white" :have_ai="primary.ai_teacher"
                :blockTitle="primary.title"  :selectCourse="primary.id"
                :goCourse="primary.id"
                ></mommiyoga-course-block>
            </div>
            <div class="second-series-container mamiyoga-all-course">
                <mommiyoga-course-block v-for="intermediate in getIntermediates" :key="intermediate.id"
                :bgImage="intermediate.preview_img" blockColor="white" :have_ai="intermediate.ai_teacher"
                :blockTitle="intermediate.title"  :goCourse="intermediate.id"
                ></mommiyoga-course-block>
            </div>
            <div class="third-series-container mamiyoga-all-course">
                <mommiyoga-course-block v-for="advanced in getAdvanceds" :key="advanced.id"
                :bgImage="advanced.preview_img" blockColor="white" :have_ai="advanced.ai_teacher"
                :blockTitle="advanced.title" :goCourse="advanced.id"
                ></mommiyoga-course-block>
            </div>
        </div>
    </div>
</template>

<script>
import MommiyogaCourseBlock from '~/components/mamiyoga/MommiyogaCourseBlock.vue';
export default {
    components: {
        MommiyogaCourseBlock,
    },
    data:()=>({
    }),
    computed:{
        getPrimarys(){
            if (this.courses) {
                const result_array = this.courses.filter(course => course.tags.find(tag => tag == 'primary'));
                return result_array;
            } else {
                return [];
            }
        },
        getIntermediates(){
            if (this.courses) {
                const result_array = this.courses.filter(course => course.tags.find(tag => tag == 'intermediate'));
                return result_array;
            } else {
                return [];
            }
        },
        getAdvanceds(){
            if (this.courses) {
                const result_array = this.courses.filter(course => course.tags.find(tag => tag == 'advanced'));
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
        width: 80%;
        margin: 20px auto;
    }
    .label-box label {
        padding: 5px 20px;
    }
}
</style>
