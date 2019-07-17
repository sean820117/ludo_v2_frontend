<template>
    <div>
        <div class="record-page" v-if="!is_loaded">
            <mommiyoga-practice-record :bgImg="course_data.id" 
            :recordTitle="course_data.title" recordTime="30-45" :goCourse="course_data.id" 
            :is_front="course_data.is_front" @handleCourseVideoUpload="handleCourseVideoUpload"
            ></mommiyoga-practice-record>
            <div class="practice-record-content">
                <h4>练习记录</h4>
                <!-- <div class="practice-record-content-container" v-for="data in user_data"
                :key="data.id" >
                    <mamiyoga-practice-record-block></mamiyoga-practice-record-block>
                    <mamiyoga-practice-record-block></mamiyoga-practice-record-block>
                    <mamiyoga-practice-record-block></mamiyoga-practice-record-block>
                </div> -->
                <div class="practice-record-content-container" v-if="record_data != ''">
                    <mamiyoga-practice-record-block v-for="(record,i) in record_data"
                    :key="i" :recordDate="setRecordDate(record.createdAt)" :video_url="record.video_url"
                    :tags="switchTag(record)"
                    :score="record.score"></mamiyoga-practice-record-block>
                </div>
                <div class="practice-record-no-content" v-else>
                    <p>尚无拍摄纪录</p>
                </div>
            </div>
        </div>
        <mommiyoga-teach-assay @handleRetryEvent="handleRetryEvent"
         :show_record_btn="true" :goRecord="course_data.id" :pose_id="pose_id"
         @closeAssayWindow="closeAssayWindow" v-if="is_loaded" :video_result="video_result"></mommiyoga-teach-assay>
        <div class="vld-parent" >
                <loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage"></loading>
        </div>
    </div>
</template>

<script>
import MommiyogaPracticeRecord from '~/components/mamiyoga/MommiyogaPracticeRecord.vue'
import MamiyogaPracticeRecordBlock from '~/components/mamiyoga/MamiyogaPracticeRecordBlock.vue'
import MommiyogaTeachAssay from '~/components/mamiyoga/MommiyogaTeachAssay.vue';
import axios from '~/config/axios-config';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { mapMutations, mapGetters } from 'vuex';

export default {
    layout:'mommiyoga',
    data:()=>({
        courses:[],
        course_id:'',
        course_data:{},
        record_data:{},

        is_loaded: false,
        isLoading: false,
        fullPage: true,
        video_result: {},

        user_data:[],
        have_user_data:false,
        pose_id:'',
    }),
    components: {
        MommiyogaPracticeRecord,
        MamiyogaPracticeRecordBlock,
        Loading,
        MommiyogaTeachAssay,
    },
    async mounted() {
        if (process.client) {
            this.courses = await require('~/config/mommiyoga-course');
            this.course_data = this.courses.find(course => this.$route.params.id == course.upload_id);
            this.course_id = this.course_data.id;
            
            this.pose_id = 'yoga_'+this.course_data.upload_id;
            console.log(this.course_id)

            try {
                let send_data = {user_id:'0000',pose_id:this.pose_id};
                const res = await axios.post('/apis/get-pose-results',send_data);
                if (res.data.status == 200) {
                    this.record_data = res.data.Items
                    console.log(this.record_data)
                } else {
                    window.alert('读取失败')
                }
            } catch (error) {
                
            }
        }
    },
    methods: {
        async handleVideoUpload(e) {
            this.isLoading = true;
            let form = new FormData();
            form.append('file',e.target.files[0])
            form.append('pose_id',this.pose_id)
            form.append('language','zh-tw')
            const res = await axios.post('/apis/video-upload',form)
            console.log(res.data)
            // for(var i =0; i< res.data.reps_wrong_tags.length; i++){
            //   for(var j = 0; j<res.data.reps_wrong_tags[i].length; j++){
            //       if(res.data.reps_wrong_tags[i][j] == "y_6_1") res.data.reps_wrong_tags[i][j] = "膝盖弯曲";
            //       else if (res.data.reps_wrong_tags[i][j] == "y_6_2") res.data.reps_wrong_tags[i][j] = "膝盖弯曲";
            //       else if (res.data.reps_wrong_tags[i][j] == "y_6_3") res.data.reps_wrong_tags[i][j] = "抬腿速度太快";
            //       else if (res.data.reps_wrong_tags[i][j] == "y_6_4") res.data.reps_wrong_tags[i][j] = "抬腿速度太快";
            //       else if (res.data.reps_wrong_tags[i][j] == "y_6_5") res.data.reps_wrong_tags[i][j] = "轴心不稳";
            //       else if (res.data.reps_wrong_tags[i][j] == "correct") res.data.reps_wrong_tags[i][j] = "姿势正确";
            //   }
            // }
            for(var i =0; i< res.data.reps_wrong_tags.length; i++){
              for(var j = 0; j<res.data.reps_wrong_tags[i].length; j++){
                    res.data.reps_wrong_tags[i][j] = this.course_data.upload_notices[res.data.reps_wrong_tags[i][j]]
              }
            }
            this.isLoading = false;
            console.log(res.data)
            this.reps_wrong_tags = res.data.reps_wrong_tags;
            this.video_result = res.data;
            this.is_loaded = true;
            // setTimeout(()=> {
            //     clearInterval(this.interval);
            //     this.is_uploading = false;
            //     this.value = 0;
            //     this.is_showing = true;
            // }, 1000)
            // setTimeout(()=> {
            //     this.$scrollTo('#result-box',"start");
            // },1500)
            // window.alert('Done');
        },
        handleRetryEvent(e){
            console.log("ok");
            this.is_loaded = false;
            this.handleVideoUpload(e);
        },
        closeAssayWindow(){
            this.is_loaded = false;
        },
        handleCourseVideoUpload(e) {
            this.is_loaded = false;
            console.log('OK');
            this.handleVideoUpload(e);
        },
        switchTag(record) {
            // let errorMessage = {
            //     'action_1': {
            //         '1': 'Hello world'
            //     }
            // };
            // console.log(errorMessage['action_1']['1']);
            for (var i =0; i<record.reps_wrong_tags.length; i++){
                for(var j=0; j<record.reps_wrong_tags[i].length; j++)
                if (record.reps_wrong_tags[i][j]){
                    record.reps_wrong_tags[i][j] = this.course_data.upload_notices[record.reps_wrong_tags[i][j]]
                }
            }
            console.log(record.reps_wrong_tags)
            return record.reps_wrong_tags;
        },
        setRecordDate(date){
            let update = new Date(date) 
            let day = update.getDate() < 10 ? '0'+update.getDate() : update.getDate();
            let month = update.getMonth() < 10 ? '0'+update.getMonth() : update.getMonth();
            return update.getFullYear()+'/'+month+'/'+day;
        }
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
        
    },
    async beforeCreate() {
        if (process.client) {
            this.ui_config = await require('~/config/mommiyoga-config')
            this.is_ui_config_loaded = true;

            let login_or_not = await this.$checkLogin(this.$store);
            if (login_or_not == false) {
                window.alert("尚未登入帳號，請先前往登入～");
                this.$router.push('/mommiyoga/login');
            } else {
                let payed_or_not = await this.$checkPayed(this.user.user_id,"resume_01");
                if (!payed_or_not) {
                    console.log("not payed");
                    window.alert("尚未開通課程，請先前往購買～");
                    this.$router.push('/resume/pay');
                } else {
                    console.log("payed")
                }
            }
        }
    }
    
}
</script>

<style>
.record-page {
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
    padding-bottom: 3vh;
}
.practice-record-content {
    width: 100vw;
    height: auto;
}
.practice-record-content h4 {
    text-align: center;
    font-size: 18px;
    color: #51636F;
    font-weight: 400;
    border-bottom: solid 1px rgba(112,112,112,.3);
    padding-bottom: 1vh;
    margin: 3vh 5vw;
}
.practice-record-no-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20vh;
    color:#707070;
}
.vld-overlay .vld-background {
    background-color:black;
}
.vld-icon svg {
    stroke: #DCD8CF;
}
@media (min-width: 769px) {
    .record-page,.practice-record-content {
        width: 100%;
    }
    .practice-record-content h4 {
        margin: 20px 30px;
    }
}

</style>
