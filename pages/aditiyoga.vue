<template>
    <div v-show="is_loaded" class="smartyoga-LP-container">
        <div :class="`smartyoga-LP-block smartyoga-LP-block${num}`" v-for=" num in max_block_num" :key="num">
            <img v-if="num - 1 != 3 || num - 1 != 7 || num - 1 != 13 || num - 1 != 19" class="main-img" :src="`${img_base_url}/${num-1}@2x.jpg`" alt="">
            <a href="/pay" v-else class="smartyoga-LP-block-with-btn" >
                <img class="main-img" :src="`${img_base_url}/${num-1}@2x.jpg`" alt="">
                <!-- <a class="buyblock-btn" href="/pay"></a> -->
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        img_base_url: "https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/aditiyoga",
        img_colors:[
            "brown",
            "pink",
            "blue",
            "purple",
        ],
        max_block_num: 20, 
        color:"blue",
        is_loaded:false,
    }),
    mounted() {
        if (process.client) {
            this.color = this.img_colors.find(color => color == this.$route.query.color) || this.color;
            this.loader = this.$loading.show({
                color: this.color,
                loader: 'dots',
                width: 64,
                height: 64,
                backgroundColor: '#000000',
                opacity: 0.5,
                zIndex: 999,
            });
            setTimeout(() => {
                this.loader.hide();
                this.is_loaded = true;
            }, 3000);
        }
        
    },
    destroyed() {
        this.loader.hide();
    },
}
</script>

<style scoped>
.smartyoga-LP-container {
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.smartyoga-LP-block {
    width: 100vw;
    max-width: 400px;
}
.smartyoga-LP-block img{
    width: 100%;
    display: block;
}
.smartyoga-LP-block-with-btn {
    width: 100vw;
    max-width: 400px;
    padding: 13px 0 24px 0;
    display: flex;
    background: white;
    align-items: center;
    justify-content: center;
}
.smartyoga-LP-block-with-btn img{
    width: 80vw !important;
    max-width: 320px !important;
}
.buyblock-btn {
    width: 89%;
    margin-left: 5.5%;
    height: 10%;
    margin-top: 86.5%;
    display: inline-block;
    overflow: hidden;
    position: relative;
}
.diary-btn {
    width: 89%;
    max-width: 360px;
    margin-left: 5.5%;
    height: 10%;
    max-height: 75px;
    margin-top: -25%;
    display: inline-block;
    overflow: hidden;
    position: absolute;
}
@media (min-width: 401px) {
    .diary-btn {
        margin-left: 30px;
        height: 10%;
        max-height: 75px;
        margin-top: -100px;
    }
}
.buyblock-btn:after {
  
  animation: shine 5s ease-in-out  infinite;
  animation-fill-mode: forwards;  
  content: "";
  position: absolute;
  top: -110%;
  left: -210%;
  width: 200%;
  height: 200%;
  opacity: 0;
  transform: rotate(10deg);
  
  background: rgba(255, 255, 255, 0.13);
  background: linear-gradient(
    to right, 
    rgba(255, 255, 255, 0.13) 0%,
    rgba(255, 255, 255, 0.13) 77%,
    rgba(255, 255, 255, 0.5) 92%,
    rgba(255, 255, 255, 0.0) 100%
  );
}
@keyframes shine{
  10% {
    opacity: 1;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
    transition-duration: 0.7s, 0.7s, 0.15s;
    transition-timing-function: ease;
  }
  100% {
    opacity: 0;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
  }
}
</style>