<template>
    <div class="ai-upload-container">
        <div class="ai-upload-settings-container">
            <ludo-header/>
            <h1 class="ai-upload-title"> 
                <input type="text" v-model="name" class="ai-upload-title-input" placeholder="輸入名稱" @change="setName(name)">
            </h1>
            <div class="ai-upload-alert"></div>
            <div class="ai-upload-ranks-container">
                <div 
                    class="ai-single-upload"
                    v-for="single in editingRanks"
                    :key="single.rank"
                >
                    <img class="delete-image" :src="removeIcon" @click="handleRemoveRank(single.rank)">
                    <div class="ai-single-upload-alert"></div>
                    <div class="ai-single-upload-rank">{{ single.rank }}</div>
                    <label class="ai-single-upload-button" :class="{ grey : (single.examples != undefined)}">
                        <img class="image" :src="uploadButton"/>
                        <div class="ai-single-upload-button-text" >
                            <input class="ai-single-upload-file-input" type="file" id="file" :ref="'file'+single.Rank" accept=".xlsx, .xls, .csv" @change="handleFileUpload(single,$event)"/>
                            <p v-if="single.examples != undefined">
                                重新上傳
                            </p>
                            <p v-else>
                                上傳文字資料
                            </p>
                        </div>
                    </label>
                    <div class="ai-single-upload-keyword">
                        <input-tag v-model="single.keywords"></input-tag>
                    </div>
                </div>
                <div class="ai-single-upload ai-single-add-new-block" v-if="nextRank">
                    <div class="ai-single-upload-rank">{{ nextRank }}</div>
                    <button class="ai-single-add-new-button" @click="handleAddRank">
                        <img :src="addRankButton"/>
                    </button>
                </div>
            </div>
            <div class="down-button">
                <!-- <div class="down-button-modify">
                    <div class="down-button-modify-text" v-scroll-to="'#over-container'">修改關鍵字</div>
                </div> -->
                <div class="down-button-confirm"  @click="updateAssistant()">
                    <div class="down-button-confirm-text">開始運算</div>
                </div>
            </div>
        </div>
        <div class="over-container" id="over-container" v-if="accuracy > 0">
            <div class="over-container-title">請選擇準確率</div>
            <div class="predict">
                <div class="predict-time">第一次</div>
                <div class="predict-number">{{ accuracy }}%</div>
                <div @click="toInputTest" class="predict-button">
                    <div class="predict-button-text" >選擇，測試助教</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import uploadButton from 'static/upload-button.svg'
import addRankButton from 'static/grey-plus.svg'
import removeIcon from 'static/remove-icon.svg'
import LudoHeader from '~/components/desktop/LudoHeader.vue'
import axios from '~/config/axios-config';
import { mapMutations, mapGetters , mapActions } from 'vuex';
import papa from 'papaparse';
import Vue from 'vue';
import InputTag from 'vue-input-tag'
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 });

export default {
    middleware: ['checkAuthority'],
    components: {
        LudoHeader,
        InputTag,
    },
    computed: mapGetters({
        user : 'user/getData',
        ranks : 'assistant/getRanks', 
        getName : 'assistant/getName',
        nextRank: 'assistant/getNextRank',
        getAllData: 'assistant/getAllData',  
        getBasicInfo: 'assistant/getBasicInfo',
    }),
    methods: {
        handleFileUpload(single,event) {
            const file  = event.target.files[0];
            const examples = [];
            const addExamples = this.addExamples;
            const checkSingleExamples = this.checkSingleExamples;
            const uploadExamples = this.uploadExamples;
            // const json = papa.parse(file);
            
            papa.parse(file, {
                // worker:true,
                step: function(results, parser) {
                    results.data[0].forEach((column) => {
                        if (column.trim()) {
                            examples.push(column);
                        }
                        // console.log(column);
                    });
                },
                complete: function(results) {
                    // console.log(examples);
                    // addExamples({rank:single.rank,examples:examples});
                    single.examples=examples;
                    uploadExamples(examples,single.rank);
                    checkSingleExamples(single);
                }
            });
        },
        uploadExamples(examples,rank) {
            axios.post('/apis/ai-assistant/database/text/upload',{examples:examples,rank:rank,assistant_id:this.getBasicInfo.assistant_id})
                .then((response) => {
                    if (response.data.status == '200') {
                        console.log("upload examples success")
                        return response.data.status
                    } else {
                        console.log(response)
                    }
                })
                .catch((error) => {
                })
        },
        checkSingleExamples(single) {
            const thisObj = this;
            axios.post('/apis/ai-assistant/database/text/get-examples-by-rank',{rank:single.rank,assistant_id:this.getBasicInfo.assistant_id})
                .then((res) => {
                    if (res.data.status == 200) {
                        console.log("data : " + res.data)
                        single.examples = res.data.Items;
                        thisObj.$forceUpdate();
                    } else {
                        console.log("status : " + res.data.status)
                    }
                    return true
                }).catch((e) => {
                    console.log("call api error : \n" + e);
                    return { data: new Object() }
                })
            // if (single.examples != undefined) {
            //     // single.buttonText = "重新上傳"
            //     this.$forceUpdate();
            // } else {
            //     // single.buttonText = "上傳文字資料"
            // }
        },
        async updateAssistant() {
            this.setRanks(this.editingRanks);
            this.setCreator(this.user.user_id);
            const assistant_data = this.getAllData;
            const assistant_id = assistant_data.assistant_id;
            console.log(assistant_data);
            try {
                let res = await axios.put('/apis/ai-assistant/'+assistant_id,assistant_data);
                VueScrollTo.scrollTo("#over-container");
                let accuracy = await axios.get('/apis/ai-assistant/train/'+assistant_id);
                this.accuracy = accuracy.data.accuracy;                
            } catch (error) {
                console.log(error)
            }
        },
        createAssistant(assistant_data) {
            return axios.post('/apis/ai-assistant/create',assistant_data)
                // .then((response) => {
                //     if (response.data.status === '200') {
                //         console.log("upload success")
                //         return response.data.assistant_id
                //     } else {
                //     }
                // })
                // .catch((error) => {
                // })
        },
        handleAddKeyword(e) {
            console.log("add keyword")
            addKeyword({rank:single.rank,keyword:e.value})
        },
        handleAddRank() {
            this.addRank(this.nextRank);
            this.refreshRanks();
        },
        handleRemoveRank(rank) {
            this.removeRank(rank);
            this.refreshRanks();
        },
        toInputTest() {
            this.$router.push('/ai-assistant/input-test/'+this.getAllData.assistant_id)
        },
        refreshRanks() {
            this.editingRanks = JSON.parse(JSON.stringify(this.ranks.filter(activeRank => activeRank.active)));
            this.$forceUpdate();
        },
        ...mapMutations({
            addRank: 'assistant/addRank',
            addKeyword: 'assistant/addKeyword',
            addExamples: 'assistant/addExamples',
            setRanks: 'assistant/setRanks',
            setCreator: 'assistant/setCreator',
            setName: 'assistant/setName',
            setId: 'assistant/setId',
            removeRank: 'assistant/removeRank',
        }),
        ...mapActions({
            // getAssistantFromId: 'assistant/getAssistantFromId'
        })
    },
    data:() => ({
        uploadButton:uploadButton,
        addRankButton:addRankButton,
        removeIcon:removeIcon,
        accuracy:"0",
        editingRanks:[],
        name,
    }),
    created: async function () {
        console.log("created")
    },
    mounted: function () {
        this.editingRanks = JSON.parse(JSON.stringify(this.ranks.filter(activeRank => activeRank.active)));
        this.editingRanks.forEach(element => {
            this.checkSingleExamples(element);
        })
        this.name = this.getName;
    },
    asyncData({ store, params }) {
    // We can return a Promise instead of calling the callback
        return axios.get('/apis/ai-assistant/'+params.id)
        .then((res) => {
            if (res.data.status == 200) {
                store.commit('assistant/setAll',res.data.assistant);
            } else {
                console.log("status : " + res.data.status)
            }
            return true
        }).catch((e) => {
            console.log("call api error : \n" + e);
            return { data: new Object() }
        })
    },
    
}
</script>

<style>
.logo {
    width: 120px;
    height: 36px;
    margin-left: 36px;
    margin-top: 30px;
}
body {
    background: #FDFCF7;
}
.ai-upload-settings-container {
    /* height: 100vh; */
}
.ai-upload-title{
	/* margin-top: 58.2px; */
	display: flex;
	justify-content: center;
}

.ai-upload-title-input{
	font-family: HelveticaNeue;
	font-size: 28px;
	font-weight: 300;
	line-height: 1.19;
	color: #535353;
    border: none;
    border-bottom: solid 1px #676767;
    background: transparent;
    text-align: center;
}
.ai-upload-alert{
	margin-top: 33px;
	display: flex;
	justify-content: center;
	font-family: HelveticaNeue;
	font-size: 24px;
	line-height: 1.22;
	color: #5115d9;
}
.ai-upload-ranks-container{
	margin-top: 30px;
	display: flex;
	justify-content: center;
}
.ai-single-upload {
	display: flex;
	flex-direction: column;
	align-items: center;
    width: 250px;
    /* height: 400px; */
	margin: 20px;
    border-radius: 15px;
    border: 5px solid lightgrey;
}
.delete-image{
    width: 20px;
    margin-top: 5px;
    margin-left: 218px; 
    cursor: pointer;
}
.ai-single-upload-alert{
    margin-top: 10px;
    font-family: HelveticaNeue;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.21;
    color: #b10a24;
    height: 18px;
}
.ai-single-upload-rank{
    margin-top: 19px;
    display: flex;
    font-family: HelveticaNeue;
    font-size: 96px;
    font-weight: 300;
    line-height: 1.21;
    color: #5115d9;
}
.ai-single-upload-button{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 210px;
    height: 60px;
    border-radius: 15px;
    background-color: #b10a24;
    cursor: pointer;
}
.grey {
	background-color: #959595 !important;
}
.image{
    width: 17px;
    margin-right: 16px;
}
.ai-single-upload-button-text{
	font-family: HelveticaNeue;
    font-size: 17px;
    font-weight: 500;
    color: #ffffff;
}
.ai-single-upload-file-input {
    display: none;
}
.ai-single-upload-keyword{
	margin-top: 15px;
    font-family: HelveticaNeue;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.21;
    color: #5115d9;
}
.down-button{
	margin-top: 60px;
	display: flex;
	justify-content: center;
}
.down-button-modify{
	margin: 10px;
	display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 60px;
    border-radius: 15px;
    background-color: #919191;
}
.down-button-modify-text{
	font-family: HelveticaNeue;
	font-size: 17px;
	font-weight: 500;
	line-height: 1.24;
	text-align: center;
	color: #ffffff;
}
.down-button-confirm{
	margin: 10px;
	display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 60px;
    border-radius: 15px;
    background-color: #5115d9;
    cursor: pointer;
}
.down-button-confirm-text{
	font-family: HelveticaNeue;
	font-size: 17px;
	font-weight: 500;
	line-height: 1.24;
	text-align: center;
	color: #ffffff;
}
.over-container{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 600px;
}
.over-container-title{
    margin-top: 10px;
    display: flex;
    justify-content: center;
    font-family: HelveticaNeue;
    font-size: 35px;
    color: #5115d9;
}
.predict{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 330px;
    border-radius: 15px;
    border: 3px solid lightgrey;
}
.predict-time{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    font-family: HelveticaNeue;
    font-size: 20px;
    color: #5115d9;
}
.predict-number{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    font-family: HelveticaNeue;
    font-size: 90px;
    font-weight: 200;
    color: #5115d9;
}
.predict-button{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 210px;
    height: 60px;
    border-radius: 15px;
    background-color: #f5ad1f;
}
.predict-button-text{
    display: flex;
    justify-content: center;
    color: white;
}
.ai-single-add-new-block {
    background: white;
}
.ai-single-add-new-block .ai-single-upload-rank{
    color: #ADADAD !important;
    padding-top: 60px;
}
.ai-single-add-new-button {
    margin-top: 25px;
    border: none;
    background: transparent;
}
.ai-single-add-new-button img{
    width:48px;
}
/* input-tag css*/
.input-tag {
    background: transparent !important;
    border-color: black !important;
    color: black !important;

}
.remove {
    color: black !important;
}
.vue-input-tag-wrapper {
    background: transparent !important;
    border: none !important;
}
</style>
