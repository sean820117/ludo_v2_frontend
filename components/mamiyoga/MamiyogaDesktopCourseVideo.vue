<template>
    <div id="current-course-video-block">
        <div class="current-course-video-inside">
            <div class="current-course-video-path" style="justify-content: space-between;position: relative;height: 30px;">
                <div class="current-course-video-path path">
                    <div @click="closeVideo"> {{$t('desktop_header_menu_2')}} > </div>
                    <div @click="goSeries(currentCourse.tags)">{{`${getSeriesName} >`}}</div>
                    <div @click="openCourseVideo" :style="{fontWeight: switchPose ? 'unset':'bolder',textDecoration: switchPose ? 'none':'underline'}">{{`${$t('new_course_title')}${currentCourse.id}、${currentCourse.title}`}}</div>
                    <div v-if="switchPose" > ></div>
                    <div v-if="switchPose" :style="{fontWeight: switchPose ? 'bolder':'',textDecoration: switchPose ? 'underline':'none'}">{{poseTitle}}</div>
                </div>
                <div v-if="!showMenu" class="current-course-video-menu-btn" @click="showMenu = true">
                    {{$t('new_course_block_menu')}}
                </div>
                <div class="current-course-video-menu" v-else>
                    <img @click="showMenu = false" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
                    <div class="other-course-menu">
                        <div class="other-course-menu-series" :class="show_series[0]">
                            <div @click="toggleSeries(0)">
                                <div class="other-course-menu-series-title">{{$t('desktop_index_six_list_title_1')}}</div>
                                <div class="other-course-data-circle series" :class="show_series[0]">
                                    <span></span>
                                    <span></span>
                                </div>
                                <hr>
                            </div>
                            <div>
                                <div class="all-course-data" v-for="course in getRectifys" :key="course.id" @click="openOtherCourseVideo(course.id)">
                                    <div class="other-course-title">{{$t('new_course_title')}}{{course.id}}、{{course.title}}</div> 
                                </div>
                            </div>
                        </div>
                        <div class="other-course-menu-series" :class="show_series[1]">
                            <div @click="toggleSeries(1)">
                                <div class="other-course-menu-series-title">{{$t('desktop_index_six_list_title_2')}}</div>
                                <div class="other-course-data-circle series" :class="show_series[1]">
                                    <span></span>
                                    <span></span>
                                </div>
                                <hr>
                            </div>
                            <div>
                                <div class="all-course-data" v-for="course in getAlleviates" :key="course.id" @click="openOtherCourseVideo(course.id)">
                                    <div class="other-course-title">{{$t('new_course_title')}}{{course.id}}、{{course.title}}</div> 
                                </div>
                            </div>
                        </div>
                        <div class="other-course-menu-series" :class="show_series[2]">
                            <div @click="toggleSeries(2)">
                                <div class="other-course-menu-series-title">{{$t('desktop_index_six_list_title_3')}}</div>
                                <div class="other-course-data-circle series" :class="show_series[2]">
                                    <span></span>
                                    <span></span>
                                </div>
                                <hr>
                            </div>
                            <div>
                                <div class="all-course-data" v-for="course in getBeautys" :key="course.id" @click="openOtherCourseVideo(course.id)">
                                    <div class="other-course-title">{{$t('new_course_title')}}{{course.id}}、{{course.title}}</div> 
                                </div>
                            </div>
                        </div>
                        <div class="other-course-menu-series" :class="show_series[3]">
                            <div @click="toggleSeries(3)">
                                <div class="other-course-menu-series-title">{{$t('desktop_index_six_list_title_4')}}</div>
                                <div class="other-course-data-circle series" :class="show_series[3]">
                                    <span></span>
                                    <span></span>
                                </div>
                                <hr>
                            </div>
                            <div>
                                <div class="all-course-data" v-for="course in getBlends" :key="course.id" @click="openOtherCourseVideo(course.id)">
                                    <div class="other-course-title">{{$t('new_course_title')}}{{course.id}}、{{course.title}}</div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="display: flex;align-items: flex-start;justify-content: space-between;margin-top: 25px;">
                <div style="width: 70%; margin-right: 20px;">
                    <div id="current-course-video">
                        <!-- <iframe src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-course/L1_action01.mp4" width="80%" height="80%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> -->
                    </div>
                <div class="go-pose-mirror center-mirror-btn" v-if="switchPose && current_input_id != ''" @click="goPoseMirror(current_input_id)">開始練習</div>
                </div>
                <div style="width: 25%;min-width: 315px;">
                    <div class="current-course-data">
                        <h6>{{switchPose ? $t('course_tips_text'):$t('course_little_title_1')}}</h6>
                        <div id="course-info">
                            <p v-if="!switchPose" v-html="`${currentCourse.course_introduction}`"></p>
                            <div v-else style="display: unset;">
                                <div style="display: flex;" v-for="(des,index) in poseDes" :key="index">
                                    <span>{{index+1}}</span><p>{{des}}</p>
                                </div>
                            </div>
                        </div>
                        <!-- <p>大概是產後一個月，就可以慢慢開始矯正骨盆。除此之外，矯正骨盆的歪斜還有另外一項很棒的效果哦！那就是可以讓腰部周圍較難附著脂肪，讓新陳代謝向上，這些都有非常顯著的減肥效果喔！我們一起好好努力，來把骨盆矯正到最佳狀況吧！</p> -->
                    </div>
                    <div class="current-course-data" style="margin-top: 25px;">
                        <h6>{{$t('course_every_pose')}}</h6>
                        <div>
                            <div class="current-little-course-pose" v-for="(pose,i) in currentCourse.poses" :key="i">
                                <div class="current-little-course-pose-preview"  @click="openPoseVideo(pose,i)" :style="{backgroundImage: `url(${pose.ai_preview_img})`}"></div>
                                <div class="current-little-course-pose-title">
                                    <div style="display: flex;margin-bottom: 4px;">
                                        <p  @click="openPoseVideo(pose,i)">{{$t('course_practice_label')}}{{i+1}}</p>
                                        <div class="have-ai-tag" v-if="pose.pose_ai">{{$t('desktop_index_four_only_title')}}</div>
                                        <div class="go-pose-mirror" v-if="pose.pose_ai" @click="goPoseMirror(pose.input_id)">開始練習</div>
                                    </div>
                                    <p  @click="openPoseVideo(pose,i)">{{pose.pose_brief}}</p>
                                </div>
                            </div>
                            <div class="current-little-course-pose" v-if="switchPose" @click="openCourseVideo">
                                <div class="current-little-course-pose-preview" :style="{backgroundImage: `url(${currentCourse.preview_img})`}"></div>
                                <div class="current-little-course-pose-title">
                                    <div style="display: flex;margin-bottom: 4px;">
                                        <p>{{getSeriesName}}</p>
                                        <div class="have-ai-tag" v-if="currentCourse.ai_teacher">{{$t('desktop_index_four_only_title')}}</div>
                                    </div>
                                    <p>{{$t('new_course_title')}}{{currentCourse.id}}、{{currentCourse.title}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="!switchPose" class="current-course-data next-n-last">
                        <div @click="openNextVideo(-1)">{{$t('new_course_block_last')}}</div>
                        <div @click="openNextVideo(1)">{{$t('new_course_block_next')}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        currentCourse: Object,
        allCourses: Array,
        switchPose: Boolean,
        poseTitle: String,
        poseDes: Array,
        current_input_id: String,
    },
    data:()=>({
        series: '',
        // poseTitle: '',
        // poseDes: [],
        

        showMenu: false,
        show_series: [],
        show_listA: [],
        show_listB: [],
        show_listC: [],
        show_listD: [],
    }),
    methods: {
        closeVideo(){
            this.$emit('update:switchPose',false)
            this.$emit('closeVideo')
        },
        goSeries(series){
            // this.switchPose = false;
            this.$emit('update:switchPose',false)
            this.$emit('goSeries',series)
        },
        openCourseVideo(){
            if(this.switchPose){
                let iframe = document.querySelector('#current-course-video');
                if (iframe) {
                    iframe.removeChild(iframe.firstChild);
                    let vid = document.createElement('div')
                    vid.style.height = '100%';
                    vid.style.weight = '100%';
                    vid.innerHTML = `<iframe id="new" src="${this.currentCourse.video_url}" width="100%" height="80%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`
                    iframe.appendChild(vid)
                }
                // this.switchPose = false
                this.$emit('update:switchPose',false)
            }
        },
        openPoseVideo(pose,index){
            let iframe = document.querySelector('#current-course-video');
            if (iframe) {
                iframe.removeChild(iframe.firstChild);
                let vid = document.createElement('div')
                vid.style.height = '100%';
                vid.style.weight = '100%';
                vid.innerHTML = `<iframe id="new" src="${pose.pose_video}" width="100%" height="80%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`
                iframe.appendChild(vid)
            }
            this.$emit('update:switchPose',true)
            this.$emit('update:poseTitle',`${this.$t('course_practice_label')}${index+1}、${pose.pose_brief}`)
            this.$emit('update:poseDes',pose.pose_description)
            this.$emit('update:current_input_id',pose.input_id)
            // console.log(pose.input_id)
        },
        openNextVideo(n){
            this.$emit('openNextVideo',n)
        },
        openOtherCourseVideo(n){
            this.$emit('openOtherCourseVideo',n)
        },
        toggleSeries(index) {
            if (this.show_series[index] === 'open') {
                this.show_series = [];
            } else {
                this.show_series = [];
                this.show_series[index] = 'open'
            }
        },
        toggleClassA(index) {
            if (this.show_listA[index] === 'open') {
                this.show_listA = [];
            } else {
                this.show_listA = [];
                this.show_listA[index] = 'open'
            }
        },
        toggleClassB(index) {
            if (this.show_listB[index] === 'open') {
                this.show_listB = [];
            } else {
                this.show_listB = [];
                this.show_listB[index] = 'open'
            }
        },
        toggleClassC(index) {
            if (this.show_listC[index] === 'open') {
                this.show_listC = [];
            } else {
                this.show_listC = [];
                this.show_listC[index] = 'open'
            }
        },
        toggleClassD(index) {
            if (this.show_listD[index] === 'open') {
                this.show_listD = [];
            } else {
                this.show_listD = [];
                this.show_listD[index] = 'open'
            }
        },
        goPoseMirror(e){
            console.log(e)
            this.$emit('goPoseMirror',e)
        }
    },
    computed:{
        getSeriesName(){
            if(this.currentCourse.tags){
                if(this.currentCourse.tags == 'rectify') {
                    return this.$t('desktop_index_six_list_title_1')
                } else if(this.currentCourse.tags == 'alleviate') {
                    return this.$t('desktop_index_six_list_title_2')
                } else if(this.currentCourse.tags == 'beauty') {
                    return this.$t('desktop_index_six_list_title_3')
                } else if(this.currentCourse.tags == 'blend') {
                    return this.$t('desktop_index_six_list_title_4')
                }
                
            }
        },
        getRectifys(){
            if (this.allCourses) {
                const result_array = this.allCourses.filter(course => course.tags.find(tag => tag == 'rectify'));
                return result_array;
            } else {
                return [];
            }
        },
        getAlleviates(){
            if (this.allCourses) {
                const result_array = this.allCourses.filter(course => course.tags.find(tag => tag == 'alleviate'));
                return result_array;
            } else {
                return [];
            }
        },
        getBeautys(){
            if (this.allCourses) {
                const result_array = this.allCourses.filter(course => course.tags.find(tag => tag == 'beauty'));
                return result_array;
            } else {
                return [];
            }
        },
        getBlends(){
            if (this.allCourses) {
                const result_array = this.allCourses.filter(course => course.tags.find(tag => tag == 'blend'));
                return result_array;
            } else {
                return [];
            }
        },
    }
}
</script>

<style>
#current-course-video-block {
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background: black;
    padding-top: 3vh;
    overflow-y: auto;
    padding-bottom: 120px;
}
#current-course-video {
    /* display: none; */
    /* position: fixed; */
    width: 100%;
    height: 75vh;
    z-index: 100;
    background: black;
}
.current-course-video-inside {
    max-width: 1600px;
    margin: 0 auto;
    width: 90%;
}
.current-course-video-path {
    color: #fff;
    display: flex;
    align-items: flex-end;
    font-size: 19px;
}
.current-course-video-path.path div {
    cursor: pointer;
    font-size: 15px;
}
.current-course-video-menu-btn {
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 0 15px;
    cursor: pointer;
}
.current-course-video-menu {
    background: #fff;
    border-radius: 5px;
    width: 23%;
    position: absolute;
    right: 0;
    top: 0;
    min-width: 350px;
    z-index: 101;
}
.current-course-video-menu img {
    display: block;
    margin-top: 15px;
    margin-left: 15px;
    position: absolute;
    cursor: pointer;
    width: 20px;
    z-index: 9;
}
.current-course-data h6 {
    color: #FFFFFF;
    font-size: 17px;
    border-bottom: 1px solid #707070;
    padding-bottom: 5px;
    margin-bottom: 10px;
}
.current-course-data p {
    color: #B7B7B7;
    font-size: 15px;
}
.current-course-data.next-n-last {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
}
#course-info div {
    display: flex;
    margin-bottom: 8px;
}
#course-info div span {
    width: 25px;
    height: 25px;
    border-radius: 25px;
    background: #98A9AF;
    color: #F7F8F8;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
}
#course-info p {
    color: #FFFFFF;
    font-size: 15px;
    width: 100%;
}
.current-little-course-pose {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
}
.current-little-course-pose-preview {
    width: 45%;
    height: 100px;
    border-radius: 10px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor:pointer;
}
.current-little-course-pose p {
    color: #fff;
    cursor:pointer;
}
.current-little-course-pose-title {
    width: 50%;
}
.have-ai-tag {
    border: #C74F4F 1px solid;
    border-radius: 5px;
    color: #C74F4F;
    font-size: 12px;
    margin-left: 10px;
}
/* 選單 */
.other-course-menu-series {
    margin: 25px 0;
    position: relative;
    transition: .5s ease;
    min-height: 40px;
    max-height: 40px;
    overflow: hidden;
    cursor: pointer;
}
.other-course-menu-series.open {
    min-height: 165px;
    max-height: 300px;
}
.other-course-menu-series-title {
    font-size: 19px;
    font-weight: bold;
    color: #24798f;
    text-align: center;
    padding-bottom: 10px;
}
.other-course-menu hr {
    opacity: .3;
    margin: 0 35px;
}
.other-course-data-circle {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    top: 0px;
    right: 17px;
    transition: ease .4s;
}
.other-course-data-circle.open {
    transform: rotate(-180deg);
}
.other-course-data-circle span:first-child,
.other-course-data-circle span:last-child {
    width: 2px;
    height: 10px;
    background: #272727;
    position: absolute;
    top: 5px;
}
.other-course-data-circle span:first-child {
    transform: rotate(45deg);
    right: 7px;
}
.other-course-data-circle span:last-child {
    transform: rotate(135deg);
    right: 13px;
}

.other-course-data-circle.series {
    top: 2px;
    right: 40px;
}
.other-course-data-circle.series.open {
    transform: rotate(-180deg);
}
.other-course-data-circle.series span {
    background: #24798f;
    width: 4px;
    height: 15px;
}
.other-course-data-circle.series span:first-child {
    right: 4px;
}
.other-course-data-circle.series span:last-child {
    right: 12px;
}
.all-course-data {
    margin-top: 15px;
    height: 30px;
    overflow: hidden;
    transition: .5s ease;
    cursor: pointer;
    position: relative;
}
.all-course-data.open {
    height: 95px;
}
.other-course-title {
    font-size: 16px;
    color: #272727;
    text-align: center;
}

.go-pose-mirror {
    background: #24798f;
    color: #fff;
    border-radius: 5px;
    font-size: 12px;
    margin-left: 5px;
    padding: 2px;
    cursor: pointer;
}
.center-mirror-btn {
     width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}
</style>