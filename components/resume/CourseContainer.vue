<template>
    <div class="course-menu-container">
        <input class="labels first-radio" type="radio" :name="label_name" :id="label_name+'-first'" checked v-if="label_amount >= 1" />
        <input class="labels second-radio" type="radio" :name="label_name" :id="label_name+'-second'" v-if="label_amount >= 2" />
        <input class="labels third-radio" type="radio" :name="label_name" :id="label_name+'-third'" v-if="label_amount >= 3" />

        <div class="course-menu">
            <div class="three-labels">
                <label class="first-label" :for="label_name+'-first'" v-if="label_amount >= 1" >課程選單</label>
                <label class="second-label" :for="label_name+'-second'" v-if="label_amount >= 2" @click="clickAITap">AI 評測</label>
                <label class="third-label" :for="label_name+'-third'" v-if="label_amount >= 3" >下載資源</label>
            </div>

            <div class="label-content" :id="label_name+'-content'">
                <div class="first-content">
                    <slot name="first-content"></slot>
                </div>
                <div class="second-content">
                    <slot name="second-content"></slot>
                </div>
                <div class="third-content">
                    <slot name="third-content"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        label_name: String,
        label_amount: Number,
    },
    methods: {
        resetSize(){
            var content = document.getElementById(this.label_name+'-content');
            content.children[0].style.height = content.offsetHeight - 22 + "px";
            content.children[0].style.overflowY = "hidden";
            for(let i=1; i<content.children.length;i++){
                content.children[i].style.height = "unset";
            }
        },
        clickAITap() {
            this.$gtag('event', 'Display Input', {
                'event_category': 'AI',
                // 'event_label': 'Display Input',
            });
        }
    }
}
</script>
<style>
.course-menu-container{
    box-sizing: border-box;
    width: 90vw;
    margin-left: 5vw;;
    display:flex;
    flex-direction:column;
    align-items:center;
}
.labels{
    display: none;
}
.course-menu {
    display: grid;
    /* grid-template-rows: 25px auto; */
    height: 100%;
    color: white;
    font-size: 12px;
    font-weight: 500;
    border-top: solid white 1px;
}
.three-labels{
    display: grid;
    grid-template-columns: 33% 33% auto;
    text-align: center;
    max-width: 640px;
}
.three-labels label{
    border-top: solid rgba(0,0,0,0) 4px;
    margin-top: -1px;
    padding-top: 5px;
    cursor: pointer;
}
@media (min-width: 900px) {
    .three-labels label{
        font-size: 25px !important;
    }
    .three-labels {
        height: 50px;
    }
}
.label-content{
    padding-top: 10px;
    width: 90vw;
    max-width: 640px;
}
.label-content > div{
    /* height: 10px; */
    display: none;
}
.first-radio:checked ~ .course-menu .first-label,
.second-radio:checked ~ .course-menu .second-label,
.third-radio:checked ~ .course-menu .third-label{
    border-top: solid white 4px;
}

.first-radio:checked ~ .course-menu .first-content,
.second-radio:checked ~ .course-menu .second-content,
.third-radio:checked ~ .course-menu .third-content{
    display: block;
}
</style>