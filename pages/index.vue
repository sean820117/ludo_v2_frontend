<template>
    <div class="ground_container">
        <ludo-header class="ludo-header"/>
        <div class="ground_menubar">
            <category-button-medium
                v-for="button in categoryButtonList"
                :key="button.id"
                :buttonInnerText="button.button_name"
                :bgColor="button.bgColor"
                :fontSize="button.fontSize"
            />
        </div>
    </div>
</template>

<script>
import LudoHeader from '~/components/desktop/LudoHeader.vue'
import CategoryButtonMedium from '~/components/CategoryButtonMedium.vue'

export default {
    components: {
        LudoHeader,
        CategoryButtonMedium,
    },
    data:() => ({
        categoryButtonList:[
        {
          id:0,
          button_name: "+",
          bgColor: "#676767",
          fontSize: "40px",
        },
        {
          id:1,
          button_name: "學習",
          bgColor: "#2f4b84",
          category: "studying"
        },
        {
          id:2,
          button_name: "生活",
          bgColor: "#f5ad1f",
          category: "life"
        },
        {
          id:3,
          button_name: "運動",
          bgColor: "#29a496",
          category: "sport"
        },
        {
          id:4,
          button_name: "瘦身",
          bgColor: "#f88484",
          category: "fatcut"
        },
        {
          id:5,
          button_name: "美容",
          bgColor: "#ed986f",
          category: "beauty"
        },
        {
          id:6,
          button_name: "藝術",
          bgColor: "#0A5D55",
          category: "art"
        },
        {
          id:7,
          button_name: "活動",
          bgColor: "#B10A24",
          category: "activity"
        },
        ]
    }),
}
</script>

<style>
.ground_menubar {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 32px;
}
</style>