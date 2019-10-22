<template>
    <div>
        <carousel :perPage="1" :centerMode="true"  :autoplay="false"
            :spacePadding="0" :paginationEnabled="false" :scrollPerPage="false">
                <slide class="about-teacher about-slide">
                <div class="about-title"><h3>{{$t('about_first_title')}}</h3></div>
                <div class="about-teacher-content">
                    <div>
                        <h3>{{$t('about_first_content_name')}}</h3>
                        <h4 style="margin-bottom:30px;">{{$t('about_first_content_name_en')}}</h4>
                    </div>
                    <p style="font-weight: bold; margin-bottom: 5px;">{{$t('about_first_content_have')}}</p>
                    <p style="margin-bottom: 10px;">Yoga Alliance RYT200<br>
                        maternity yoga instructor<br>
                        aerial yoga instructor<br>
                        Body Care professional course
                    </p>
                    <p style="font-weight: bold; margin-bottom: 5px;">{{$t('about_first_content_course')}}</p>
                    <p>{{$t('about_first_content_course_text')}}</p>
                </div>
            </slide>
            <slide class="about-teacher about-slide" style="overflow:hidden;">
                <div class="about-title"><h3 style="color:#FFF;">{{$t('about_first_title')}}</h3></div>
                <div class="about-teacher-content">
                    <p style="color:#FFF;font-size:14px;" v-html="$t('about_second_content')"></p>
                </div>
            </slide>
            <slide class="about-teacher about-for-mammy" style="overflow:hidden;">
                <div class="about-title"><h3>{{$t('about_third_title')}}</h3></div>
                <div class="about-teacher-content">
                    <p v-html="$t('about_third_content')"></p>
                </div>
            </slide>
            <slide class="about-teacher about-for-mammy" style="overflow:hidden;">
                <div class="about-title"><h3>{{$t('about_four_title')}}</h3></div>
                <div class="about-teacher-content">
                    <p v-html="$t('about_four_content')"></p>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
import Vue from "vue";
export default {

}
</script>

<style>

</style>