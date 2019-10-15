<template>
    <div class="privacy-page">
        <mamiyoga-teach-header class="privacy-header" headerTitle="隱私政策" v-if="$mq !== 'desktop'"></mamiyoga-teach-header>
        <mamiyoga-pay-header v-else></mamiyoga-pay-header>
        <div class="privacy-flex-box">
            <div class="privacy-nav-box" v-if="$mq === 'desktop'">
                <div class="privacy-fix-box">
                    <li @click="$router.push('/refund')">退款政策</li>
                    <li @click="$router.push('/privacy')" style="color: #24798f;">隱私政策</li>
                    <li @click="$router.push('/agreement')">用戶協議</li>
                </div>
            </div>
            <div class="privacy-container">
                <h4 class="privacy-title">隱私政策</h4>
                <p>非常歡迎您光臨「Mami yoga」（以下簡稱本網站），為了讓您能夠安心的使用本網站的各項服務與資訊
                    ，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：</p>
                <h5>一、隱私權保護政策的適用範圍</h5>
                <p>隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策
                    不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。</p>
                <h5>二、個人資料的蒐集、處理及利用方式</h5>
                <p>當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，
                    並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。<br>
                    本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。<br>
                    於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、
                    瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。<br>
                    為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外
                    ，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。</p>
                <h5>三、資料之保護</h5>
                <p>本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的
                    保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。<br>
                    如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。</p>
                <h5>四、網站對外的相關連結</h5>
                <p>本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。
                    但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。</p>
                <h5>五、與第三人共用個人資料之政策</h5>
                <p>本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。<br>
                    前項但書之情形包括不限於：<br>
                    經由您書面同意。<br>
                    法律明文規定。<br>
                    為免除您生命、身體、自由或財產上之危險。<br>
                    與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集者依其揭露方式無從識別特定之當事人。<br>
                    當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，
                    經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。<br>
                    有利於您的權益。<br>
                    本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。</p>
                <h5>六、Cookie之使用</h5>
                <p>為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，
                    您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導至網站某些功能無法正常執行。</p>
                <h5>七、隱私權保護政策之修正</h5>
                <p>本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。</p>
                <div class="privacy-btn">
                    <button class="mamiyoga-btn" @click="$router.go(-1)">返回</button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import MamiyogaTeachHeader from '~/components/mamiyoga/MamiyogaTeachHeader.vue'
import MamiyogaPayHeader from '~/components/mamiyoga/MamiyogaPayHeader.vue'
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue'
export default {
    components:{
        MamiyogaTeachHeader,
        MamiyogaPayHeader,
        MamiyogaBtn,
    }
}
</script>

<style>
.privacy-page {
    padding-bottom: 20px;
}
.privacy-header button {
    display: none;
}
.privacy-header .mamiyoga-teach-header-title h3 {
    padding-right: 20px;
    padding-left: 0;
}
.privacy-container {
    width: 83vw;
    margin: 0 8.5vw;
    text-align: justify;
}
.privacy-container p {
    font-size: 12px;
    color: #707070;
}
.privacy-container h5 {
    font-size: 14px;
    color: #000;
    font-weight: 400;
    margin-top: 15px; 
}
.privacy-btn {
    margin: 6vh 0 3vh;
}

.mamiyoga-btn {
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
    cursor: pointer;
    background-color: #9BAEB2;
    color: #fff;
}
@media (min-width: 769px) {
    .privacy-page {
        background: white;
        margin-top: 80px;
    }
    .privacy-container {
        margin: 0;
    }
    .privacy-container p {
        font-size: 15px;
    }
    .privacy-container h5 {
        font-size: 17px;
    }
    .privacy-title {
        display: block;
        font-size: 21px;
        color: #24798f;
        text-align: center;
        margin-bottom: 50px;
    }
    .privacy-flex-box {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 7vw;
    }
    .privacy-nav-box {
        width: 240px;
    }
    .privacy-fix-box {
        position: fixed;
        top: 160px;
    }
    .privacy-fix-box li {
        list-style: none;
        color: #97A8AF;
        font-weight: 500;
        font-size: 17px;
        margin-bottom: 25px;
        cursor: pointer;
    }
}


</style>
