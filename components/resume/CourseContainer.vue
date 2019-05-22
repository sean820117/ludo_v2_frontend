<template>
    <div class="course-menu-container">
        <input class="labels first-radio" type="radio" :name="labelName" :id="labelName+'-first'" checked/>
        <input class="labels second-radio" type="radio" :name="labelName" :id="labelName+'-second'" />
        <input class="labels third-radio" type="radio" :name="labelName" :id="labelName+'-third'" />

        <div class="course-menu">
            <div class="three-labels">
                <label class="first-label" :for="labelName+'-first'">課程選單</label>
                <!-- <label class="second-label" :for="labelName+'-second'">AI 評測</label>
                <label class="third-label" :for="labelName+'-third'">下載資源</label> -->
            </div>

            <div class="label-content" :id="labelName+'-content'">
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
        labelName: String,
    },
    methods: {
        resetSize(){
            var content = document.getElementById(this.labelName+'-content');
            content.children[0].style.height = content.offsetHeight - 22 + "px";
            content.children[0].style.overflowY = "hidden";
            for(let i=1; i<content.children.length;i++){
                content.children[i].style.height = "unset";
            }
        },
    }
}
</script>
<style>
.course-menu-container{
    box-sizing: border-box;
    width: 100%;
    border-left: solid rgba(0,0,0,0) 25px;
    border-right: solid rgba(0,0,0,0) 25px;
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
}
.labels{
    display: none;
}
.course-menu{
    display: grid;
    grid-template-rows: 25px auto;
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
}
.label-content{
    padding-top: 10px;
    max-width: 640px;
}
.label-content > div{
    height: 10px;
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