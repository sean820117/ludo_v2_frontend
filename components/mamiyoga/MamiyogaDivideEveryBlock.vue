<template>
    <div class="mamiyoga-divide-every">
        <h4>骨盆矯正的姿勢</h4>
        <video class="mamiyoga-divide-every-video" controls>
                <source :src="video_url" type="video/mp4">
                Your browser does not support the video tag.
        </video>
        <div class="mamiyoga-divide-every-middle">
            <img src="/mamiyoga/eye.svg" alt=""><p>110</p>
        </div>
        <div class="mamiyoga-divide-every-bottom-content">
            <h5>姿勢步驟</h5>
            <p>{{courseTime}}分鐘</p>
            <div class="mamiyoga-divide-every-bottom">
                <p>站在墊子上面，把雙腳張開，腳掌距離稍微比腰還要寬一點，並用兩手壓住前後的骨盆。<br><br>接著，將骨盆往前後移動，切記，練習的時候，不要駝背。<br><br>然後，我們要重複這個動作各10次。</p>
                
            </div>
            <button class="teach-assay-btn" @click="goToAssay()">上傳影片</button>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        courseTime:Number,
    },
    methods: {
        goToAssay(){
            // this.isLoading = true;
            setTimeout(()=>{
                document.location.href='/mamiyoga/assay';
            },3000)
            // return console.log('YA');
        },
    }

}
</script>

<style>
@media (max-width: 899px) {
    .mamiyoga-divide-every h4 {
        font-size: 12px;
        color: #707070;
        text-align: center;
        margin: 3vh 0;
    }
    .mamiyoga-divide-every-video {
        width: 100vw;
        height: 30vh;
    }
    .mamiyoga-divide-every-middle {
        width: 100vw;
        /* background: green; */
        padding: 1vh 5vw;
        text-align: right;
        border-bottom: solid thin rgba(112,112,112,.3); 
    }
    .mamiyoga-divide-every-middle p {
        font-size: 12px;
        color: #5C5C5C;
    }
    .mamiyoga-divide-every-middle img {
        width: 18px;
        float: left;
        margin-left: 77vw;
    }
    .mamiyoga-divide-every-bottom-content {
        /* background: gray; */
        width: 100vw;
        height: auto;
        padding: 2vh 5vw;
    }
    .mamiyoga-divide-every-bottom-content h5 {
        font-size: 14px;
        color: #272727;
        font-weight: 400;
    }
    .mamiyoga-divide-every-bottom-content p {
        font-size: 12px;
        color: #707070;
    }
    .mamiyoga-divide-every-bottom {
        padding: 5vw;
    }
    .teach-assay-btn {
        width: 135px;
        height: 35px;
        border-radius:20px;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 3px; 
        text-align: center;
        display: block;
        margin: 10px auto;
        border-style: none;
        box-shadow:5px 5px 10px rgba(0,0,0,.2);
        background: #9BAEB2;
        color: #fff;
    }
}
</style>
