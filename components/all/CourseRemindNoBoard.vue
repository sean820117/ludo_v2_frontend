<template>
    <div class="course-remind-back-no">
        <div class="course-remind-open-no">
            <div class="course-remind-cancel" @click="closeRemind()">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/boxing/cancel.svg" alt="" >
            </div>
            <slot></slot>
            <!-- <button v-if="!have_function"
            :style="{backgroundColor:btnBack,color:ftColor}" class="course-remind-btn">
                {{btnText}}
            </button> -->
        </div>   
    </div>
</template>

<script>
export default {
    methods: {
        closeRemind() {
            this.$emit('closeRemind');
        }
    },
    props: {
        btnBack: String,
        ftColor: String,
        btnText: String,
    },
    data:()=>({
        have_function: false,
    }),
}
</script>

<style>
 .course-remind-back-no {
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}
.course-remind-open-no {
    width: 260px;
    height: 330px;
    background: white;
    border-radius: 20px;
    padding: 15px;
}
.course-remind-open-no p {
    color: #707070;
    text-align: center;
    font-size: 12px;
    margin: 30px 0 10px;
}
.course-remind-open-no img {
    display: block;
    margin: 0 auto;
    width: 50%;
}
.course-remind-cancel {
    height: 30px;
    width: 30px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 200px;
}
.course-remind-cancel img {
    width: 65%;
}
.course-remind-btn {
    width: 50px;
    height: 25px;
    border-radius:20px;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    border-style: none;
    box-shadow: 0px 2px 4px rgba(0,0,0,.3);
}
@media (min-width:769px) {
    .course-remind-back-no {
        width: 100%;
    }
    
}

</style>
