<template>
    <div class="asamiyoga-course-content">
        <input type="radio" class="labels first-series" id="first" name="series" checked>
        <input type="radio" class="labels second-series" id="second" name="series">
        <input type="radio" class="labels third-series" id="third" name="series">
        
        <div class="mamiyoga-course-select" style="padding-bottom:4vh;">
            <div class="label-box">
                <label for="first" class="first-label">初级课程</label>
                <label for="second" class="second-label">中级课程</label>
                <label for="third" class="third-label">高级课程</label>
                
            </div>
            <div class="first-series-container">
                <mamiyoga-course-block v-for="basic in basics" :key="basic.id" 
                bgImage="/mamiyoga/background-menu-old.png" blockColor="white" 
                :blockTitle="basic.title" :courseTo="basic.course_to" :have_ai="basic.have_ai"
                :timeSrc="basic.course_time"
                ></mamiyoga-course-block>
                
            </div>
            <div class="second-series-container">
                <mamiyoga-course-block v-for="intermediate in intermediates" :key="intermediate.id"
                bgImage="/mamiyoga/background-menu-old.png" blockColor="white" 
                :blockTitle="intermediate.title" :courseTo="intermediate.course_to" 
                :have_ai="intermediate.have_ai" :timeSrc="intermediate.course_time"
                ></mamiyoga-course-block>
                
            </div>
            <div class="third-series-container">
                <mamiyoga-course-block v-for="advanced in advanceds" :key="advanced.id"
                bgImage="/mamiyoga/background-menu-old.png" blockColor="white" 
                :blockTitle="advanced.title" :courseTo="advanced.course_to"
                :have_ai="advanced.have_ai" :timeSrc="advanced.course_time"
                ></mamiyoga-course-block>
                
            </div>
            
        </div>
    </div>
</template>

<script>
import MamiyogaCourseBlock from '~/components/asamiyoga/MamiyogaCourseBlock.vue';
export default {
    data:()=>({
        basics: [
            {
                id: '1',
                title: '用空气启动身体',
                course_to: '',
                have_ai: true,
                course_time: '/asamiyoga/course-time/7min.svg',
                },
            {
                id: '2',
                title: '改善背部与肩部僵硬的姿势',
                course_to: '',
                have_ai: false,
                course_time: '/asamiyoga/course-time/7min.svg',
                },
            {
                id: '3',
                title: '用呼吸创造放松空间',
                course_to: '',
                have_ai: false,
                course_time: '/asamiyoga/course-time/7min.svg',
                },
            {
                id: '4',
                title: '打开自己全世界都会帮助你',
                course_to: '',
                have_ai: false,
                course_time: '/asamiyoga/course-time/7min.svg',
                },
        ],
        intermediates:[
            {
                id: '1',
                title: '回到没有歪斜的骨盆',
                course_to: '',
                have_ai: false,
                course_time: '/asamiyoga/course-time/7min.svg',
            },
            {
                id: '2',
                title: '减缓腰部酸痛',
                course_to: '',
                have_ai: true,
                course_time: '/asamiyoga/course-time/7min.svg',
            },
            {
                id: '3',
                title: '打通压力沉积的地方',
                course_to: '',
                have_ai: false,
                course_time: '/asamiyoga/course-time/7min.svg',
            },
            {
                id: '4',
                title: '锻炼产后的腹肌',
                course_to: '',
                have_ai: false,
                course_time: '/asamiyoga/course-time/7min.svg',
            },
            {
                id: '5',
                title: '平衡自律神经',
                course_to: '',
                have_ai: false,
                course_time: '/asamiyoga/course-time/7min.svg',
            },
        ],
        advanceds:[
            {   
                id: '1',
                title: '松弛的肚子变得紧实',
                course_to: '',
                have_ai: false,
                course_time: '/asamiyoga/course-time/7min.svg',
            },
            {   
                id: '2',
                title: '回复产后的翘臀',
                course_to: '',
                have_ai: false,
                course_time: '/asamiyoga/course-time/7min.svg',
            },
        ],

    }),
            
    components: {
        MamiyogaCourseBlock,
    }
}
</script>

<style>
@media (max-width:899px) {
    .labels {
        display: none;
    }
    .asamiyoga-course-content .label-box {
        width: 90vw;
        margin: 3vh auto;
        display: flex;
        justify-content:space-evenly;
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
}
</style>
