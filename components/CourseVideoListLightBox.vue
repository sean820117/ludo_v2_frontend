<template>
    <div class="course-video-list-light-box" v-if="lightBoxShowed" :class="is_payed ? '':'no-drop'">
        <div class="course-video-list-m">
            <div 
                v-for="item in course.sub_course" 
                :key="item.id"
                @click="changeCurrentSubCourse(item);hideLightBox()">
                <course-video-list-item :title="item.title" :title2="item.title2"/>
                <div v-if="item.id == 2 || item.id == 8" class="free-course">試看</div>
            </div>
        </div>
        <div class="course-video-list-m-back">
            <button class="course-video-list-m-back-btn" @click="hideLightBox()">返回</button>
        </div>
    </div>
</template>

<script>
import CourseVideoListItem from '~/components/CourseVideoListItem.vue'

export default {
    components: {
		CourseVideoListItem,
    },
    props: {
        course: Object,
        is_payed:Boolean,
        lightBoxShowed:Boolean,
    },
    methods: {
        changeCurrentSubCourse(item) {
            this.$emit('changeCurrentSubCourse',item)
        },
        hideLightBox() {
            // this.lightBoxShowed = false;
            this.$emit('update:lightBoxShowed', false);
        },
    },
}
</script>

<style>
.no-drop {
    cursor: no-drop;
}
.course-video-list-light-box {
    position: fixed;
    height: 100vh;
    top: 60px;
    width: 100vw;
    background: #324D5B;
    z-index: 2;
}
.course-video-list-m {
    height: 70vh;
    /* padding-bottom: 20vh; */
    
    width: 100vw;
    overflow-y: scroll;
}
.course-video-list-m-back {
    width: 100vw;
    height: 20vh;
    background: #324D5B;
    display: flex;
    justify-content: center;
    align-items: center;
}
.course-video-list-m-back-btn {
    font-size: 16px;
    width: 135px;
    height: 38px;
    border-radius: 23px;
    background: #FFD72E;
}
.free-course {
    position: absolute;
    display: inline;
    z-index: 0;
    background: #ffc107;
    border-radius: 50px;
    padding: 3px 9px 3px 9px;
    right: 7px;
    bottom: 25px;
    font-size: 10px;
}
</style>
