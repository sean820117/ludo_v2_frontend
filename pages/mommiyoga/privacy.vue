<template>
    <div class="privacy-page">
        <mamiyoga-teach-header class="privacy-header" headerTitle="隐私政策"></mamiyoga-teach-header>
        <div class="privacy-container">
            <p>非常欢迎您光临「Mami yoga」（以下简称本网站），为了让您能够安心的使用本网站的各项服务与资讯，
                特此向您说明本网站的隐私权保护政策，以保障您的权益，请您详阅下列内容：</p>
            <h5>一、隐私权保护政策的适用范围</h5>
            <p>隐私权保护政策内容，包括本网站如何处理在您使用网站服务时收集到的个人识别资料。隐私权保护政策不适
                用于本网站以外的相关连结网站，也不适用于非本网站所委托或参与管理的人员。</p>
            <h5>二、个人资料的搜集、处理及利用方式</h5>
            <p>当您造访本网站或使用本网站所提供之功能服务时，我们将视该服务功能性质，请您提供必要的个人资料，
                并在该特定目的范围内处理及利用您的个人资料；非经您书面同意，本网站不会将个人资料用于其他用途。<br>
                本网站在您使用服务信箱、问卷调查等互动性功能时，会保留您所提供的姓名、电子邮件地址、联络方式及使用时间等。<br>
                于一般浏览时，伺服器会自行记录相关行径，包括您使用连线设备的IP位址、使用时间、使用的浏览器、浏览及点选资料记录等
                ，做为我们增进网站服务的参考依据，此记录为内部应用，决不对外公布。<br>
                为提供精确的服务，我们会将收集的问卷调查内容进行统计与分析，分析结果之统计数据或说明文字呈现，除供内部研究外，
                我们会视需要公布统计数据及说明文字，但不涉及特定个人之资料。</p>
            <h5>三、资料之保护</h5>
            <p>本网站主机均设有防火墙、防毒系统等相关的各项资讯安全设备及必要的安全防护措施，加以保护网站及您的个人资料采用严格
                的保护措施，只由经过授权的人员才能接触您的个人资料，相关处理人员皆签有保密合约，如有违反保密义务者，将会受到相关的法律处分。<br>
                如因业务需要有必要委托其他单位提供服务时，本网站亦会严格要求其遵守保密义务，并且采取必要检查程序以确定其将确实遵守。</p>
            <h5>四、网站对外的相关连结</h5>
            <p>本网站的网页提供其他网站的网路连结，您也可经由本网站所提供的连结，点选进入其他网站。
                但该连结网站不适用本网站的隐私权保护政策，您必须参考该连结网站中的隐私权保护政策。</p>
            <h5>五、与第三人共用个人资料之政策</h5>
            <p>本网站绝不会提供、交换、出租或出售任何您的个人资料给其他个人、团体、私人企业或公务机关，但有法律依据或合约义务者，不在此限。<br>
                前项但书之情形包括不限于：<br>
                经由您书面同意。<br>
                法律明文规定。<br>
                为免除您生命、身体、自由或财产上之危险。<br>
                与公务机关或学术研究机构合作，基于公共利益为统计或学术研究而有必要，且资料经过提供者处理或搜集者依其揭露方式无从识别特定之当事人。<br>
                当您在网站的行为，违反服务条款或可能损害或妨碍网站与其他使用者权益或导致任何人遭受损害时，
                经网站管理单位研析揭露您的个人资料是为了辨识、联络或采取法律行动所必要者。<br>
                有利于您的权益。<br>
                本网站委托厂商协助搜集、处理或利用您的个人资料时，将对委外厂商或个人善尽监督管理之责。</p>
            <h5>六、Cookie之使用</h5>
            <p>为了提供您最佳的服务，本网站会在您的电脑中放置并取用我们的Cookie，若您不愿接受Cookie的写入，
                您可在您使用的浏览器功能项中设定隐私权等级为高，即可拒绝Cookie的写入，但可能会导至网站某些功能无法正常执行。</p>
            <h5>七、隐私权保护政策之修正</h5>
            <p>本网站隐私权保护政策将因应需求随时进行修正，修正后的条款将刊登于网站上。</p>
        </div>
        <div class="privacy-btn">
            <a @click="$router.go(-1)" style="text-decoration:none;">
                <mamiyoga-btn btnText="返回" bgColor="#9BAEB2" ftColor="#ffffff"></mamiyoga-btn>
            </a>
        </div>
    </div>
</template>

<script>
import MamiyogaTeachHeader from '~/components/mamiyoga/MamiyogaTeachHeader.vue'
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue'
export default {
    components:{
        MamiyogaTeachHeader,
        MamiyogaBtn,
    }
}
</script>

<style>
@media (max-width: 899px) {
    .privacy-header button {
        display: none;
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
}
</style>
