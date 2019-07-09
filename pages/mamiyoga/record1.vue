<template>
    <div class="record-page">
        <mamiyoga-practice-record bgImg="/mamiyoga/teach-title-img.png" photoBy="/mamiyoga/teach-photoby.svg"
        recordTitle="產後矯正姿勢" recordTime="30-45"
        ></mamiyoga-practice-record>
        <div class="practice-record-content">
            <h4>練習記錄</h4>
            <div class="practice-record-content-container">
                <mamiyoga-practice-record-block></mamiyoga-practice-record-block>
                 <mamiyoga-practice-record-block></mamiyoga-practice-record-block>
                  <mamiyoga-practice-record-block></mamiyoga-practice-record-block>
            </div>
        </div>
    </div>
</template>

<script>
import MamiyogaPracticeRecord from '~/components/mamiyoga/MamiyogaPracticeRecord.vue'
import MamiyogaPracticeRecordBlock from '~/components/mamiyoga/MamiyogaPracticeRecordBlock.vue'
export default {
    components: {
        MamiyogaPracticeRecord,
        MamiyogaPracticeRecordBlock
    }
}
</script>

<style>
@media (max-width: 899px) {
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
}
</style>
