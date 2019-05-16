<template>
    <div>
        <div class="receipt-text" @click="showReceipt" :class="{ 'receipt-text-black' : wordDark}">
                    我們使⽤電⼦發票, 將會於得獎時以簡訊與您聯繫
                    <br>或可按此選擇使⽤載具儲存 / 輸⼊統⼀編號等
        </div>
        <div class="receipt-method"  v-if="displayReceipt">
            <input type="radio" id="e-receipt" name="receipt-carrier" value="e-receipt" checked>
            <input type="radio" id="personal-carrier" name="receipt-carrier" value="personal-carrier">
            <input type="radio" id="uid-receipt" name="receipt-carrier" value="uid-receipt">
            <label for="e-receipt" class="e-receipt">電子發票</label>
            <label for="personal-carrier" class="personal-carrier">個人載具</label>
            <label for="uid-receipt" class="uid-receipt">統一編號</label>
            <div class="receipt-number">
                <input class="personal-carrier" type="text" name="personal-carrier-number" placeholder="輸入個人載具代碼"/>
                <input class="uid-receipt" type="text" name="uid-receipt" placeholder="輸入統一編號"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        wordDark: Boolean
    },
    data:() => ({
        displayReceipt: false,
        wordDark: false,
    }),
    methods: {
        showReceipt(){
            this.displayReceipt = true;
        }
    },
}
</script>

<style>
.receipt-text{
    margin: 15px 0px;
    font-size: 11px;
    color: #D4D4D4;
}
.receipt-text-black{
    color: black;
}
.receipt-method{
    display: grid;
    grid-template-rows: 30px auto;
    grid-template-columns: 33% 33% 34%;
}
.receipt-method label{
    text-align: center;
    line-height: 30px;
    color: #8F8F8F;
    font-size: 11px;
    border-radius: 2px;
}
.receipt-method input{
    display: none;
}
#e-receipt:checked ~ .e-receipt,
#personal-carrier:checked ~ .personal-carrier,
#uid-receipt:checked ~ .uid-receipt{
    background: #DADADA;
    color: black;
}
.receipt-number{
    padding: 25px 0px 13px 0px;
    grid-column: 1 / 4;
}
.receipt-number input{
    background: white;
    border: none;
    border-bottom: 1px solid #DDD;
    display: none;
    padding: 0px 10px;
    height: 27px;
    width: 100%;
    font-size: 11px;
}
#personal-carrier:checked ~ .receipt-number .personal-carrier,
#uid-receipt:checked ~ .receipt-number .uid-receipt{
    display: block;
}
</style>