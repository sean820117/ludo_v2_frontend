<template>
    <div class="refund-page">
        <mamiyoga-teach-header class="refund-header" headerTitle="退款政策"></mamiyoga-teach-header>
        <div class="refund-container">
            <p>為保障學生與老師雙方利益，LUDO 制定並執行相關課程退費政策。目前 LUDO 全數課程皆統一適用此政策：課程不符合需求且未觀看課程者，若符合 LUDO 退費政策之條件，可透過「電子信件」的方式提出退費申請。若有退費需求者，請確實依規定完成退費程序，並靜候 LUDO 財務團隊完成退費事宜。</p>
            <h5>一、退費政策</h5>
            <p>1.  於「課程未開課前」購買課程者：於課程「實際課程開課時間」前皆可提出退費申請；另開課後七日內未觀看課程者（除試看單元外）亦可申請退費。<br><br>
            2.「課程正式開課後」購買課程者：購買七日之內（含購買當日）認為不符合需求，且未觀看課程者（除試看單元外），可提出退費申請。<br><br>3. 如欲退費「合購優惠課程」，需符合退費政策第 2 點，並退費「合購優惠方案內」的所有課程，LUDO 無法受理僅退費合購優惠中任一課程之申請。</p>
            <h5>二、多人同行方案退費條件</h5>
            <p>1. 只要符合以下條件，LUDO 皆會協助全額退費：<br>a. 於「課程未開課前」購買課程者，於課程「實際課程開課日」前皆可提出退費申請。<br>
            b. 另於課程「實際課程開課日」的七日內，若所有同行夥伴均未觀看課程（除試看單元外）亦可申請退費。<br><br>2. 注意：若多人同行方案其中至少  1  人已觀看課程者，即無法申請退費。並且完成退費後，將同時停止多人同行方案之課程相關權益。<br><br>
            3. LUDO 保留退費與否之權利，若因特殊情形導致無法退費，LUDO 將以 Email 電郵之方式通知您，造成不便敬請見諒</p>
            <h5>三、多人同行方案退費程序</h5>
            <p>1. 為嚴謹確認身份，共同購買此方案之所有會員，皆需先進行課程兌換 - 即將各自專屬的「課程兌換序號」使用開通：<br><br>
            2. 並且，所有會員皆需向 LUDO 提出退費申請。請使用各自 LUDO 帳號之驗證信箱，寄一封電子信件至 contacts@ludonow.com，格式如下：<br><br>
            信件標題：「___________ 課程（課程名稱） 多人同行退費申請」<br>
            信件內容：「我是 ＿＿＿＿（姓名），用此帳號購買了 ___________ 課程（課程名稱），我使用的課程兌換序號為 ________________，我的聯絡電話是＿＿＿＿＿＿ 方便聯繫時間為＿＿＿＿。因為  ＿＿＿＿＿＿＿＿＿＿  原因，故提出退費申請，請協助退費程序。」<br><br>
            ＊為確保退費流程於條件期限內順利完成，以上各欄位皆為必要填寫，否則不予接受退費申請。我們僅會於必要時使用電話聯繫還請放心。<br><br>3. 注意：退費是否成立，皆依照同一訂單之會員「退費申請信件寄送之時間點」為判斷依據</p>
            <h5>四、多人方案退費方式</h5>
            <p>1. LUDO 將統一退費給當初多人同行方案的購買人（以下統一稱：購買人），並不協助「多筆多人分別退費」<br><br>
            2. 會員之間的退費金額處理，均屬會員的私人行為，LUDO 均不干涉參與<br><br>3. 退費方式：<br>
            a. 信用卡付款：購買人將會收到「LUDO 的退費信件」，實際入帳日則依照你的發卡銀行每月結算日為主，通常當月（最慢為次月）會在信用卡帳單中查看到退款。<br>
            b. ATM 轉帳付款：購買人將會收到「LUDO 的退費信件」，並請回覆希望收到退費的銀行與帳號。需要特別注意的是，LUDO 只會退回課程全額款項，不會退回當初 ATM 跨行轉帳之手續費用。<br>
            c. 超商代碼付款：購買人將會收到「LUDO 的退費信件」，並請回覆希望收到退費的銀行與帳號。需要特別注意的是，LUDO 只會退回課程全額款項，不會退回超商付款所收取之手續費用。<br><br>
            4. 有時候「退費信件」可能會不小心跑到垃圾信件匣、或其他分類，建議至「所有郵件」以關鍵字找尋看看，若確認過後仍沒有找到，請再聯絡我們。</p>
        </div>
        <div class="refund-btn">
            <button class="mamiyoga-refund-btn" @click="$router.push('/order')">返回</button>
        </div>
    </div>
</template>

<script>
import MamiyogaTeachHeader from '~/components/mamiyoga/MamiyogaTeachHeader.vue'
export default {
    layout: 'mommiyoga',
    components: {
        MamiyogaTeachHeader,
    }
}
</script>

<style>
.refund-page {
    padding-bottom: 20px;
}
.refund-header button {
    display: none;
}
.refund-header .mamiyoga-teach-header-title h3 {
    padding-right: 20px;
    padding-left: 0;
    color: #24798F;
}
.refund-container {
    width: 83vw;
    margin: 0 8.5vw;
    text-align: justify;
}
.refund-container p {
    font-size: 12px;
    color: #707070;
}
.refund-container h5 {
    font-size: 14px;
    color: #000;
    font-weight: 400;
    margin-top: 15px; 
}
.refund-btn {
    margin: 6vh 0 3vh;
}

.mamiyoga-refund-btn {
    width: 95px;
    height: 35px;
    border-radius:10px;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 3px; 
    text-align: center;
    display: block;
    margin: 10px auto;
    border-style: none;
    cursor: pointer;
    background-color: #24798F;
    color: #fff;
}
@media (min-width: 769px) {
    .refund-page {
        background: #fff;
    }
    .refund-container {
        width: 83%;
        margin: 0 8.5%;
    }
}
</style>