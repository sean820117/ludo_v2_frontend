<template>
    <div class="staff-pay-form">
        <div class="staff-pay-input">
            方案選擇 : 
        </div>
        <div class="staff-pay-input">
            <select v-model="selected">
                <option selected value="1990">Mami yoga</option>
                <option value="1890" >Mami yoga 新手包</option>
                <option value="1590" >Mami yoga 正職折扣</option>
                <option value="990" >Mami yoga 舞台活動</option>
                <option value="890" >Mami yoga 舞台活動＋新手包</option>
                <option value="2590" >搭配工作坊</option>
                <option value="3640" >搭配耳機</option>
                <option value="3540" >搭配耳機＋新手包</option>
                <option value="2640" >搭配耳機＋舞台活動</option>
                <option value="2540" >搭配耳機＋舞台＋新手包</option>
                <option value="1650" >耳機</option>
            </select>
        </div>
        <div class="staff-pay-input">
            <p>價錢 ：</p>
            <p>{{ selected }}</p>
        </div>
        <div class="staff-pay-input">
            <p>負責人代號 : </p>
            <input type="password" v-model="staff_code"/>
        </div>
        <div class="staff-pay-input">
            <p>購買人姓名 : </p>
            <input type="text" v-model="name"/>
        </div>
        <div class="staff-pay-input">
            <p>手機 : </p>
            <input type="text" v-model="phone"/>
        </div>
        <div class="staff-pay-input">
            <p>信箱 : </p>
            <input type="text" v-model="email"/>
        </div>
        <div class="staff-pay-input">
            <p>付款方式 : </p>
            <select v-model="pay_method">
                <option selected value="cash">現金</option>
                <option value="ATM" >銀行轉帳</option>
                <option value="street" >街口</option>
                <option value="linepay" >linepay</option>
            </select>
        </div>
        <div class="staff-pay-input">
            <p>戶名：如荼科技股份有限公司<br>
                銀行：中國信託商業銀行(822)<br>
                分行：重陽分行(0484)<br>
                帳號：4955-4065-7696</p>
        </div>
        <div class="staff-pay-input">
            <button class="staff-pay-submit-button" @click="sendPayInfo">送出</button>
        </div>
        <div v-if="code != ''" class="staff-pay-input">
            <p>序號 : </p>
            <p>{{ code }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        selected:1990,
        staff_code:'',
        code:'',
        name:'',
        phone:'',
        email:'',
        pay_method:'cash',
    }),
    methods:{
        async sendPayInfo() {
            console.log("selected ",this.selected)
            console.log("staff_code ",this.staff_code)
            let data = {
                price:this.selected,
                staff_code:this.staff_code,
                name:this.name,
                email:this.email,
                phone:this.phone,
                pay_method:this.pay_method,
            }
            let result = await this.$sendData('/apis/generate-activation-code',data)
            if (!result) {
                alert("異常狀況，請聯絡詳哥")
            } else if (result.data.status != 200) {
                alert("員工代號有誤")
            } else {
                this.code = result.data.code;
            }
        }
    }
}
</script>

<style>
.staff-pay-form {
    display:flex;
    width:100vw;
    flex-direction: column;
    align-items: center;
}
.staff-pay-input {
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    justify-content: flex-start;
    width: 300px;
}
.staff-pay-submit-button {
    /* margin-right: 5vw; */
    width:100px;
    height: 40px;
    border:none;
    border-radius: 6px;
    color:#F2EEEC;
    background:#24798F;
}
</style>   