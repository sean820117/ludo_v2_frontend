<template>
    <div>
        <div class="about-course-series-data-outside-block">
            <div class="about-course-series-data-block open" >
                <div class="about-course-data-block">
                    <div class="about-course-data-title series">{{$t('desktop_index_six_list_title_1')}}</div>
                    <hr class="about-course-data-line" >
                </div>
                <div class="about-course-data-block" v-for="(course,i) in getRectifys" 
                :key="i" :class="show_listA[i]">
                    <div @click="toggleClassA(i)">
                        <div class="about-course-data-num">單元{{i+1}}</div>
                        <div class="about-course-data-title" v-html="course.title"></div>
                        <div class="about-course-data-circle" :class="show_listA[i]">
                            <span></span>
                            <span></span>
                        </div>
                        <hr class="about-course-data-line">
                    </div>
                    <div class="about-course-data-content" @click="openCourseVideo(course.id)">
                        <li  v-for="(pose,j) in course.poses" :key="j"
                        >{{(i+1)+'-'+(j+1)+'.&nbsp;'+pose.pose_brief}}</li>
                    </div>
                    <hr class="about-course-data-line">
                </div>
            </div>

            <div class="about-course-series-data-block open">
                <div class="about-course-data-block">
                    <div class="about-course-data-title series">舒壓安眠</div>
                    <hr class="about-course-data-line" >
                </div>
                <div class="about-course-data-block" v-for="(course,i) in getAlleviates" 
                :key="i" :class="show_listB[i]">
                    <div @click="toggleClassB(i)">
                        <div class="about-course-data-num">單元{{i+4}}</div>
                        <div class="about-course-data-title" v-html="course.title"></div>
                        <div class="about-course-data-circle" :class="show_listB[i]">
                            <span></span>
                            <span></span>
                        </div>
                        <hr class="about-course-data-line">
                    </div>
                    <div class="about-course-data-content" @click="openCourseVideo(course.id)">
                        <li  v-for="(pose,j) in course.poses" :key="j"
                        >{{(i+1)+'-'+(j+1)+'.&nbsp;'+pose.pose_brief}}</li>
                    </div>
                    <hr class="about-course-data-line">
                </div>
            </div>

            <div class="about-course-series-data-block open">
                <div class="about-course-data-block">
                    <div class="about-course-data-title series">美體塑身</div>
                    <hr class="about-course-data-line" >
                </div>
                <div class="about-course-data-block" v-for="(course,i) in getBeautys" 
                :key="i" :class="show_listD[i]">
                    <div @click="toggleClassD(i)" >
                        <div class="about-course-data-num">單元{{i+6}}</div>
                        <div class="about-course-data-title" v-html="course.title"></div>
                        <div class="about-course-data-circle" :class="show_listD[i]">
                            <span></span>
                            <span></span>
                        </div>
                        <hr class="about-course-data-line">
                    </div>
                    <div class="about-course-data-content" @click="openCourseVideo(course.id)">
                        <li  v-for="(pose,j) in course.poses" :key="j"
                        >{{(i+1)+'-'+(j+1)+'.&nbsp;'+pose.pose_brief}}</li>
                    </div>
                    <hr class="about-course-data-line">
                </div>
            </div>
            <div class="about-course-series-data-block open">
                <div class="about-course-data-block">
                    <div class="about-course-data-title series">調和心靈</div>
                    <hr class="about-course-data-line" >
                </div>
                <div class="about-course-data-block" v-for="(course,i) in getBlends" 
                :key="i" :class="show_listC[i]">
                    <div  @click="toggleClassC(i)" >
                        <div class="about-course-data-num">單元{{i+10}}</div>
                        <div class="about-course-data-title" v-html="course.title"></div>
                        <div class="about-course-data-circle" :class="show_listC[i]">
                            <span></span>
                            <span></span>
                        </div>
                        <hr class="about-course-data-line">
                    </div>
                    <div class="about-course-data-content" @click="openCourseVideo(course.id)">
                        <li  v-for="(pose,j) in course.poses" :key="j"
                        >{{(i+1)+'-'+(j+1)+'.&nbsp;'+pose.pose_brief}}</li>
                    </div>
                    <hr class="about-course-data-line">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        show_listA: [],
        show_listB: [],
        show_listC: [],
        show_listD: [],
    }),
    props: {
        course_data: Array,
    },
    methods:{
        openCourseVideo(i){
            this.$emit('openCourseVideo',i)
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
    },
    computed:{
        getRectifys(){
            if (this.course_data) {
                const result_array = this.course_data.filter(course => course.tags.find(tag => tag == 'rectify'));
                return result_array;
            } else {
                return [];
            }
        },
        getAlleviates(){
            if (this.course_data) {
                const result_array = this.course_data.filter(course => course.tags.find(tag => tag == 'alleviate'));
                return result_array;
            } else {
                return [];
            }
        },
        getBeautys(){
            if (this.course_data) {
                const result_array = this.course_data.filter(course => course.tags.find(tag => tag == 'beauty'));
                return result_array;
            } else {
                return [];
            }
        },
        getBlends(){
            if (this.course_data) {
                const result_array = this.course_data.filter(course => course.tags.find(tag => tag == 'blend'));
                return result_array;
            } else {
                return [];
            }
        },
    }
}
</script>

<style>
.about-course-series-data-block {
    overflow: hidden;
    max-height: 70px;
    min-height: 0;
    transition: ease .4s;
}
 .about-course-series-data-block:nth-child(5) {
    max-height: 80px;
}
.about-course-series-data-block.open {
    min-height: 260px;
    max-height: 500px;
}
.about-course-series-data-block:nth-child(3).open {
    min-height: 180px;
    max-height: 400px;
}
.about-course-series-data-block:nth-child(4).open {
    min-height: 260px;
    max-height: 500px;
}
.about-course-series-data-block:nth-child(5).open {
    min-height: 430px;
    max-height: 520px;
}
.about-course-data-block {
    width: 85%;
    height: 55px;
    overflow: hidden;
    margin: 15px auto 0;
    text-align: center;
    transition: ease .4s;
    position: relative;
}
.about-course-data-block.open {
    height: 110px;
}
.about-course-series-data-block:nth-child(2).open .about-course-data-block:nth-child(2).open,
.about-course-series-data-block:nth-child(2).open .about-course-data-block:nth-child(3).open,
.about-course-series-data-block:nth-child(4).open .about-course-data-block:nth-child(3).open,
.about-course-series-data-block:nth-child(4).open .about-course-data-block:nth-child(5).open,
.about-course-series-data-block:nth-child(5).open .about-course-data-block:nth-child(5).open {
    height: 130px;
}
.about-course-series-data-block:nth-child(5).open .about-course-data-block:nth-child(6).open {
    height: 140px;
}
.about-course-data-num {
    font-size: 12px;
    font-weight: 600;
    color:#272727;
}
.about-course-data-title {
    color: #272727;
    font-weight: 300;
    font-size: 16px;
}
.about-course-data-title.series {
    font-size: 19px;
    font-weight:bold;
    color:#24798f;
    padding: 6px 0;
}
.about-course-data-line {
    opacity: .3;
    margin: 10px 0;
}
.about-course-data-circle {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    top: 18px;
    right: 5px;
    transition: ease .4s;
}
.about-course-data-circle.open {
    transform: rotate(-180deg);
}
.about-course-data-circle span:first-child,
.about-course-data-circle span:last-child {
    width: 2px;
    height: 10px;
    background: #272727;
    position: absolute;
    top: 5px;
}
.about-course-data-circle span:first-child {
    transform: rotate(45deg);
    right: 7px;
}
.about-course-data-circle span:last-child {
    transform: rotate(135deg);
    right: 13px;
}
.about-course-data-content {
    width: 80%;
    margin: 0 auto;
    text-align: left;
    font-size: 12px;
    color: #707070;
}
.about-course-data-content li {
    list-style-type: none;
    text-align: left;
    color: #707070;
    font-size: 12px;
}
@media  (min-width:769px) {
    .about-course-series-data-outside-block {
        display: flex;
        align-items: baseline;
        justify-content: center;
    }
    .about-course-series-data-block.open {
        width: 21%;
        background: #f7f7f7;
        border: 1px solid #bfbdbd;
        margin: 6vh 1vw 0;
        border-radius: 10px;
        padding-bottom: 15px;
        min-height: 220px !important;
        max-height: 500px !important;
    }
    .about-course-data-block {
        cursor: pointer;
    }
    .about-course-data-block.open {
        height: 125px;
    }
}
@media (min-width: 769px) and (max-width: 1500px) {
    .about-course-data-circle {
        top: 0 !important;
    }
}
</style>