<template>
    <div>
        <div class="index-contain" v-if="!is_practice" style="min-height:100vh;overflow:visible;" :style="{backgroundColor: '#24798f'}">
             <div class="background-video-contain" :style="{display: $i18n.locale == 'JP' ? 'none': ''}">
                <div style="width:100%;height:100vh;background: rgba(0, 0, 0,0.2);position: absolute;" :style="{minHeight: $mq == 'desktop' ? '1000px':''}"></div>
                <video muted loop autoplay playsinline class="background-video">
                    <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-new-title-4.mp4" type="video/mp4">      
                </video>
            </div>
            <mamiyoga-hamburger-header v-if="$mq !== 'desktop' && $i18n.locale == 'JP'"></mamiyoga-hamburger-header>
            <mamiyoga-desktop-nav-header v-if="$mq == 'desktop' && $i18n.locale == 'JP'" :bgColor="offsetMenu ? '#24798f':'#24798f'" :style="{position: 'unset'}"></mamiyoga-desktop-nav-header>
            
            
            <div class="mamiyoga-index-intro" style="position: absolute;" :style="{display: $i18n.locale == 'JP' ? 'none':''}">
                <mamiyoga-hamburger-header v-if="$mq !== 'desktop'"></mamiyoga-hamburger-header>
                <mamiyoga-desktop-nav-header v-else :bgColor="offsetMenu ? '#24798f':'transparent'"></mamiyoga-desktop-nav-header>

                <h1 id="mamiyoga-index-title" v-if="$mq != 'desktop'" v-html="$t('mobile_index_first_title')" :style="{fontSize: $i18n.locale == 'JP'? '35px':''}"></h1>
                <h1 id="mamiyoga-index-title" v-else>{{$t('desktop_index_first_title')}}</h1>
                <h2 id="mamiyoga-index-title-des" :style="{fontSize: $i18n.locale == 'JP' && $mq != 'desktop' ? '14px':''}">{{$t('desktop_index_first_des_1')}}</h2>
                <h2 id="mamiyoga-index-title-des" :style="{margin: $mq === 'desktop' ? '0vh 10vw 1vh':'',fontSize: $i18n.locale == 'JP'  && $mq != 'desktop'? '14px':''}">{{$t('desktop_index_first_des_2')}}</h2>
            </div>
            <div class="mamiyoga-intro-wrap" style="background:white;" id="wrap" :style="{paddingBottom: $i18n.locale == 'JP' ? '0':'',minHeight: $i18n.locale == 'JP' ? 'unset':''}">
                <div class="index-label-box" id="index-fixed-nav">
     
                    <p class="index-footer-title" :style="{fontSize: $i18n.locale == 'JP'? '14px':''}">{{$t('index_title')}}</p>
                    <div v-if="payed_or_not" class="index-label-pink-btn" @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/menu`)">{{$t('desktop_course_first_btn')}}</div>
                    
                </div>
                <div class="about-course-block" id="index-first-video">
                    <!-- 失眠焦慮 -->
                    <div class="course-info-block-1" v-if="$mq !== 'desktop'"  :style="{display: $i18n.locale == 'JP' ? 'none':''}">
                        <div class="course-info-content-1">
                            <h3 class="index-article-title" :style="{fontSize: $i18n.locale == 'JP'?'17px':''}" v-html="$t('desktop_index_second_title_1')"></h3>
                            <h6 class="index-article-little-title" :style="{fontSize: $i18n.locale == 'JP'?'15px':''}" v-html="$t('desktop_index_second_title_2')"></h6>
                            <div>
                                <div style="display:flex;align-items:center;width: 95%;margin: 20px auto 10px;">
                                    <div style="display:flex;align-items:center;">
                                        <img style="width:15%;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-v.png" alt="">
                                        <p class="index-article-text" style="margin: 0 0 0 10px;" :style="{fontSize: $i18n.locale == 'JP'?'12px':''}">{{$t('desktop_index_second_list_1')}}</p>
                                    </div>
                                    <div style="display:flex;align-items:center;">
                                        <img style="width:15%;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-v.png" alt="">
                                        <p class="index-article-text" style="margin: 0 0 0 10px;" :style="{fontSize: $i18n.locale == 'JP'?'12px':''}">{{$t('desktop_index_second_list_2')}}</p>
                                    </div>
                                </div>
                                <div style="display:flex;align-items:center;width: 95%;margin: 10px auto 20px;">
                                    <div style="display:flex;align-items:center;">
                                        <img style="width:15%;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-v.png" alt="">
                                        <p class="index-article-text" style="margin: 0 0 0 10px;" :style="{fontSize: $i18n.locale == 'JP'?'12px':''}">{{$t('desktop_index_second_list_3')}}</p>
                                    </div>
                                    <div style="display:flex;align-items:center;">
                                        <img style="width:15%;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-v.png" alt="">
                                        <p class="index-article-text" style="margin: 0 0 0 10px;" :style="{fontSize: $i18n.locale == 'JP'?'12px':''}">{{$t('desktop_index_second_list_4')}}</p>
                                    </div>
                                </div>
                            </div>
                            <img class="before-after-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-1.png" alt="">
                            <h6 class="index-article-little-title" style="margin-top: 50px;">{{$t('desktop_index_second_text_1')}}</h6>
                             <p class="index-article-text" style="margin-top:15px;margin-bottom: 40px;" v-html="$t('desktop_index_second_text_2')"></p>
                        </div>
                        <img style="width:90%;margin: 0 auto 45px;display: block;" :src="$t('desktop_index_second_img')" alt="">
                    </div>
                    <div class="course-info-block-1" v-if="$mq == 'desktop'"  :style="{display: $i18n.locale == 'JP' ? 'none':''}">
                        <div class="course-info-content-1">
                            <h3 class="index-article-title" v-html="$t('desktop_index_second_title_1')"></h3>
                            <h6 class="index-article-little-title" v-html="$t('desktop_index_second_title_2')" :style="{fontSize: '22px'}"></h6>
                            <img class="before-after-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-1.png" alt="">
                            <h6 class="index-article-little-title" style="margin-top: 50px;">{{$t('desktop_index_second_text_1')}}</h6>
                             <p class="index-article-text" v-html="$t('desktop_index_second_text_2')"></p>
                            <div style="position: absolute;top: 15vh; right: 0;display:flex; width:600px;flex-wrap: wrap;justify-content: flex-end;">
                                <div class="block-1-benefit">
                                    <img style="width:40px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-v.png" alt="">
                                    <p class="index-article-text" style="margin: 0 0 0 10px;font-weight: 500;">{{$t('desktop_index_second_list_1')}}</p>
                                </div>
                                <div class="block-1-benefit">
                                    <img style="width:40px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-v.png" alt="">
                                    <p class="index-article-text" style="margin: 0 0 0 10px;font-weight: 500;">{{$t('desktop_index_second_list_2')}}</p>
                                </div>
                            
                                <div class="block-1-benefit">
                                    <img style="width:40px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-v.png" alt="">
                                    <p class="index-article-text" style="margin: 0 0 0 10px;font-weight: 500;">{{$t('desktop_index_second_list_3')}}</p>
                                </div>
                                <div class="block-1-benefit">
                                    <img style="width:40px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-v.png" alt="">
                                    <p class="index-article-text" style="margin: 0 0 0 10px;font-weight: 500;">{{$t('desktop_index_second_list_4')}}</p>
                                </div>
                            </div>
                        </div>
                        <img id="mother-childen-img" style="width:55%;position:absolute;bottom: -9vh;right: 10vw;max-width: 700px;" :src="$t('desktop_index_second_img')" alt="">
                    </div>
                    <hr v-if="$mq !== 'desktop'" style="color:#E8E8E8;margin: 0 10%;opacity:.2;">
                    <!-- 產後復元秘訣 -->
                    <div class="course-info-block-2" :style="{minHeight: $i18n.locale == 'JP' ? '0':'100vh'}">
                        <div class="course-info-content-2" :style="{minHeight: $i18n.locale == 'JP' ? '300px':'650px', display: $i18n.locale == 'JP' ? 'none':''}">
                            <div :style="{display: $i18n.locale == 'JP' ? 'none':''}">
                                <h3 class="index-article-title" style="width:85%;margin:0 auto;" v-html="$t('desktop_index_third_title')"></h3>
                                <p class="index-article-text about-course-teach" v-html="$t('desktop_index_third_text')"></p>
                                <div class="block-2-course-brief" style="width:85%;margin:20px auto;">
                                    <img style="max-width:100%;width:435px;" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/block-2-course-brief.png">
                                </div>
                                <div class="index-article-text" style="width:85%;margin:0 auto;">從裡到外感受自己的身體，舒展延伸每一根筋骨<br>均勻的呼吸法幫助妳平靜產後心靈的壓力</div>
                                <div v-if="$mq != 'desktop'">
                                    <img class="about-course-teach-img" :src="$t('desktop_index_third_img')" alt="">
                                </div>
                                <div v-else>
                                    <div class="index-article-out-btn mirror-btn go-info" :style="{fontSize: $i18n.locale == 'JP'?'20px':'',opacity:0}">{{$t('desktop_index_third_btn')}}</div>
                                    <img class="about-course-teach-img" :src="$t('desktop_index_third_img')" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 自拍魔境 -->
                    <div id="mirror-block" class="index-article-use-video">
                        <div class="course-info-block-mirror">
                            <p class="index-article-out-container-text">{{$t('desktop_index_four_title')}}</p>
                            <p class="index-article-out-container-text-li" :style="{fontSize: $i18n.locale  == 'JP'  && $mq != 'desktop'?'16px':''}">{{$t('desktop_index_four_little')}}</p>
                            <div class="course-flex-block-mirror">
                                <img class="mirror-img" :src="$t('desktop_index_four_img')" alt="">
                                <div class="course-flex-block-mirror-2">
                                    <p class="index-article-out-text index-mirror-text" v-html="$t('desktop_index_four_text')" :style="{fontSize: $i18n.locale == 'JP' && $mq != 'desktop'?'13px !important':''}"></p>
                                    <div class="index-article-out-icon-block">
                                        <div class="index-article-out-icon">
                                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-icon-1.png" alt="">
                                            <p :style="{fontSize: $i18n.locale == 'JP' && $mq != 'desktop'?'13px':''}">{{$t('desktop_index_four_list_1')}}</p>
                                        </div>
                                        <div class="index-article-out-icon">
                                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-icon-2.png" alt="">
                                            <p :style="{fontSize: $i18n.locale == 'JP' && $mq != 'desktop'?'13px':''}">{{$t('desktop_index_four_list_2')}}</p>
                                        </div>
                                        <div class="index-article-out-icon">
                                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-icon-3.png" alt="">
                                            <p :style="{fontSize: $i18n.locale == 'JP' && $mq != 'desktop'?'13px':''}">{{$t('desktop_index_four_list_3')}}</p>
                                        </div>
                                    </div>
                                    <!-- <button  @click="is_practice = true" :style="{fontSize: $i18n.locale == 'JP' ? '16px':''}" class="index-article-out-btn mirror-btn go-info">{{$t('desktop_index_four_btn')}}</button> -->
                                    <button  @click="$router.push(exp_pose_url)" :style="{fontSize: $i18n.locale == 'JP' ? '16px':''}" class="index-article-out-btn mirror-btn go-info">{{$t('desktop_index_four_btn')}}</button>
                                </div>
                            </div>
                        </div>
                        <!-- <button v-if="$mq !== 'desktop'" @click="$router.push('/mirror-mirror')" style="font-size: 26px;border-radius: 16px;" class="index-article-out-btn">進入課程</button> -->
                    </div>
                    <!-- 介面示意 -->
                    <div class="block-mirror-demo">
                        <img v-if="$mq == 'desktop'" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mirror-demo.jpg"/>
                        <img v-else src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mirror-demo-mobile.jpg"/>
                    </div>
                    <!-- 客製化運動日記 -->
                    <div class="course-info-block-3" v-if="$mq != 'desktop' && $i18n.locale != 'JP'">
                        <p class="index-article-out-container-text" style="color:#24798F;text-shadow:none;" :style="{fontSize: $i18n.locale == 'JP'?'30px':''}">{{$t('desktop_index_five_title')}}</p>
                        <h6 class="index-article-little-title" style="margin-bottom: 5px;text-align:center;" :style="{fontSize: $i18n.locale == 'JP'?'13px':''}">{{$t('desktop_index_five_little')}}</h6>
                        <p class="index-article-text" style="margin-bottom: 10px;text-align:center;">針對媽咪設計的專屬功能，<br>按照主題式課表練習讓你達成目標更容易！</p>
                        <div class="intro-wrap-block-new-five-curriculum">
                            <no-ssr><mamiyoga-carousel-curriculum></mamiyoga-carousel-curriculum></no-ssr>
                        </div>
                        <img id="get-course-link" @click="goOtherPage('https://m.me/1557980337838066?ref=B9FG09FD9JA')" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-5-1.png" alt="">
                        <!-- 四段式課程大綱 -->
                        <div class="intro-wrap-block-new-second">
                            <h4 class="intro-wrap-block-title" style="color:#24798F;">{{$t('desktop_index_six_title')}}</h4>
                            <div class="about-course-data-wrap" :class="show_menu"  >
                                <div class="about-course-data-block" @click="toggleMenu()">
                                    <div class="about-course-data-num" :class="show_menu">探索課程</div>
                                    <div class="about-course-data-title" :class="show_menu">點擊打開課程大綱</div>
                                    <div class="about-course-data-circle outside" :class="show_menu">
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <hr class="about-course-data-line" style="display:none;" :class="show_menu">
                                </div>
                                <div class="about-course-series-data-block" :class="show_series[0]">
                                    <div class="about-course-data-block"  @click="toggleSeries(0)">
                                        <div class="about-course-data-title series" v-html="$t('desktop_index_six_list_title_1')"></div>
                                        <div class="about-course-data-circle outside series" :class="show_series[0]">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <hr class="about-course-data-line" >
                                    </div>
                                    <div class="about-course-data-block" v-for="(course,i) in getRectifys" 
                                    :key="i" @click="toggleClassA(i)" :class="show_listA[i]">
                                        <div class="about-course-data-num">單元{{i+1}}</div>
                                        <div class="about-course-data-title" v-html="course.title"></div>
                                        <div class="about-course-data-circle" :class="show_listA[i]">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <hr class="about-course-data-line">
                                        <div class="about-course-data-content">
                                            <li  v-for="(pose,j) in course.poses" :key="j"
                                            >{{(i+1)+'-'+(j+1)+'.&nbsp;'+pose.pose_brief}}</li>
                                        </div>
                                        <hr class="about-course-data-line">
                                    </div>
                                </div>
                                <div class="about-course-series-data-block" :class="show_series[1]">
                                    <div class="about-course-data-block"  @click="toggleSeries(1)">
                                        <div class="about-course-data-title series">舒壓安眠</div>
                                        <div class="about-course-data-circle outside series" :class="show_series[1]">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <hr class="about-course-data-line" >
                                    </div>
                                    <div class="about-course-data-block" v-for="(course,i) in getAlleviates" 
                                    :key="i" @click="toggleClassB(i)" :class="show_listB[i]">
                                        <div class="about-course-data-num">單元{{i+4}}</div>
                                        <div class="about-course-data-title" v-html="course.title"></div>
                                        <div class="about-course-data-circle" :class="show_listB[i]">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <hr class="about-course-data-line">
                                        <div class="about-course-data-content">
                                            <li  v-for="(pose,j) in course.poses" :key="j"
                                            >{{(i+1)+'-'+(j+1)+'.&nbsp;'+pose.pose_brief}}</li>
                                        </div>
                                        <hr class="about-course-data-line">
                                    </div>
                                </div>
                                <div class="about-course-series-data-block" :class="show_series[2]">
                                    <div class="about-course-data-block"  @click="toggleSeries(2)">
                                        <div class="about-course-data-title series">美體塑身</div>
                                        <div class="about-course-data-circle outside series" :class="show_series[2]">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <hr class="about-course-data-line" >
                                    </div>
                                    <div class="about-course-data-block" v-for="(course,i) in getBeautys" 
                                    :key="i" @click="toggleClassD(i)" :class="show_listD[i]">
                                        <div class="about-course-data-num">單元{{i+6}}</div>
                                        <div class="about-course-data-title" v-html="course.title"></div>
                                        <div class="about-course-data-circle" :class="show_listD[i]">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <hr class="about-course-data-line">
                                        <div class="about-course-data-content">
                                            <li  v-for="(pose,j) in course.poses" :key="j"
                                            >{{(i+1)+'-'+(j+1)+'.&nbsp;'+pose.pose_brief}}</li>
                                        </div>
                                        <hr class="about-course-data-line">
                                    </div>
                                </div>
                                <div class="about-course-series-data-block" :class="show_series[3]">
                                    <div class="about-course-data-block"  @click="toggleSeries(3)">
                                        <div class="about-course-data-title series">調和心靈</div>
                                        <div class="about-course-data-circle outside series" :class="show_series[3]">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <hr class="about-course-data-line" >
                                    </div>
                                    <div class="about-course-data-block" v-for="(course,i) in getBlends" 
                                    :key="i" @click="toggleClassC(i)" :class="show_listC[i]">
                                        <div class="about-course-data-num">單元{{i+10}}</div>
                                        <div class="about-course-data-title" v-html="course.title"></div>
                                        <div class="about-course-data-circle" :class="show_listC[i]">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <hr class="about-course-data-line">
                                        <div class="about-course-data-content">
                                            <li  v-for="(pose,j) in course.poses" :key="j"
                                            >{{(i+1)+'-'+(j+1)+'.&nbsp;'+pose.pose_brief}}</li>
                                        </div>
                                        <hr class="about-course-data-line">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="course-info-block-3" v-if="$mq == 'desktop'" :style="{display: $i18n.locale == 'JP' ? 'none':''}">
                        <div class="course-info-block-3-content">
                            <p class="index-article-out-container-text" style="color:#24798F;text-shadow:none;">{{$t('desktop_index_five_title')}}</p>
                            <h6 class="index-article-little-title" style="margin-bottom: 5px;text-align:center;font-size: 20px">{{$t('desktop_index_five_little')}}</h6>
                            <div style="display: flex;align-items: flex-end;justify-content: center;width: 90%;margin: 70px auto 100px;">
                                <div class="intro-wrap-block-new-five-curriculum">
                                    <!-- <no-ssr><mamiyoga-carousel-curriculum></mamiyoga-carousel-curriculum></no-ssr> -->
                                    <img style="width: 95%;" :src="$t('desktop_index_five_img')" alt="">
                                </div>
                                <div class="get-course-block">
                                    <div class="index-article-text" style="margin-bottom: 5vh;font-weight: 500;">針對每位媽咪設計的專屬妳的個人課表<br>按照主題式課表練習讓你達成目標更容易！</div>
                                    <img class="get-course-link-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-contact-img.png" alt="">
                                     <div id="get-routine-btn" @click="goOtherPage('https://m.me/1557980337838066?ref=B9FG09FD9JA')"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 主題式單元 -->
                    <div class="course-info-content-3" v-if="$mq == 'desktop' && $i18n.locale != 'JP'">
                        <!-- 四段式課程大綱 -->
                        <div class="intro-wrap-block-new-second">
                            <h4 class="index-article-out-container-text" style="color:#24798F;text-shadow: none;">{{$t('desktop_index_six_title')}}</h4>
                            <mamiyoga-desktop-course-outline :course_data="course_data"></mamiyoga-desktop-course-outline>
                        </div>
                    </div>
                    <hr style="color:#E8E8E8;margin: 30px 10% 0;opacity:.2;" :style="{display: $i18n.locale == 'JP' ? 'none':''}">
                    <!-- 收費方式 -->
                    <div class="course-info-block-6" :style="{display: $i18n.locale == 'JP' ? 'none':''}">
                        <h4 class="intro-wrap-block-title last-pay-title" style="color:#24798F;margin-left: 40px;">{{$t('desktop_index_eleven_title')}}</h4>
                        <no-ssr><mamiyoga-carousel></mamiyoga-carousel></no-ssr>
                    </div>  
                    <!-- 使用者回饋 -->
                    <div class="course-info-block-5" :style="{display: $i18n.locale == 'JP' ? 'none':'',marginBottom:'20px',}">
                        <h4 class="intro-wrap-block-title last-title" style="color: #24798f;">{{$t('desktop_index_ten_title')}}</h4>
                        <no-ssr><mamiyoga-carousel-comment-ins></mamiyoga-carousel-comment-ins></no-ssr>
                    </div>
                    <!-- 媽咪新手村 -->
                    <div class="course-info-block-4" :style="{display: $i18n.locale == 'JP' ? 'none':''}">
                        <p class="index-article-out-container-text new-mami">「 媽咪新手村 」</p>
                        <img class="mami-mura-img" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-7-1.png" alt="">
                        <h6 class="index-article-little-title new-mami">初為人母一定有非常多驚喜與疑惑吧！</h6>
                        <p class="index-article-text new-mami">媽咪新手村提供從產前到產後全方位知識攻略，<br>陪媽咪們一起解任務！</p>
                        <div class="go-new-mamimura">
                            <img id="go-to-club" @click="goOtherPage('https://lihi1.com/mYAUQ')" src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-btn.png" alt="">
                        </div>
                        <hr v-if="$mq !== 'desktop'" style="color:#E8E8E8;margin: 0 10% 50px;opacity:.2;">
                    </div>
                    <!-- 官方認證 desktop -->
                    <div v-if="$mq !== 'desktop'" :style="{display: $i18n.locale == 'JP' ? 'none':''}">
                        <div>
                            <h4 class="intro-wrap-block-title" style="color:#24798F;margin: 0 auto;width: fit-content;" v-html="$t('desktop_index_nine_text')"></h4>
                            <img style="width: 90%;display: block;margin: 20px auto 50px;" :src="$t('desktop_index_nine_img')" alt="">
                        </div>
                        <hr style="color:#E8E8E8;margin: 30px 10% 0;opacity:.2;">
                        <div style="margin-top: 20px;">
                            <p class="intro-wrap-block-title" style="color:#24798F;font-weight: bold;">官方認證</p>
                            <div class="index-official-certification">
                                <p>Kokorokarada Anshin Lab</p>
                                <p>{{$t('desktop_index_eight_block_1_1')}}</p>
                                <p>{{$t('desktop_index_eight_block_1_2')}}</p>
                                <p>{{$t('desktop_index_eight_block_1_3')}}</p>
                            </div>
                            <div class="index-official-certification">
                                <p>LUDO</p>
                                <p>台灣科技部認證運動分析技術</p>
                                <p>日本 NEDO TCP 唯一認證海外團隊</p>
                                <p style="margin:6px auto 0px;">進駐 SPIN Accelerator Taiwan</p>
                                <p style="margin:0px auto ;">亞洲第一運動加速器</p>
                            </div>
                            <div class="index-official-certification">
                                <p>白鹿動畫</p>
                                <p>電影KANO 視覺特效</p>
                                <p>Netflix 路人超能100 視覺特效</p>
                                <p>銀魂電影版視覺特效</p>
                            </div>
                        </div>
                    </div>
                    <!-- 官方認證 mobile -->
                    <div v-else :style="{display: $i18n.locale == 'JP' ? 'none':''}">
                        <div style="padding-top: 15vh;min-height: 60vh;">
                            <p class="index-article-out-container-text" style="color:#24798F;font-weight: bold;text-shadow: none;">官方認證</p>
                            <div style="display: flex; align-items: center;justify-content: space-around;max-width: 1366px;margin: 5vh auto 0;">
                                <div class="index-official-certification">
                                    <p>Kokorokarada Anshin Lab</p>
                                    <p>{{$t('desktop_index_eight_block_1_1')}}</p>
                                    <p>{{$t('desktop_index_eight_block_1_2')}}</p>
                                    <p>{{$t('desktop_index_eight_block_1_3')}}</p>
                                </div>
                                <div class="index-official-certification">
                                    <p>LUDO</p>
                                    <p>台灣科技部認證運動分析技術</p>
                                    <p>日本 NEDO TCP 唯一認證海外團隊</p>
                                    <p style="margin:6px auto 0px;">進駐 SPIN Accelerator Taiwan</p>
                                    <p style="margin:0px auto ;">亞洲第一運動加速器</p>
                                </div>
                                <div class="index-official-certification">
                                    <p>白鹿動畫</p>
                                    <p>電影KANO 視覺特效</p>
                                    <p>Netflix 路人超能100 視覺特效</p>
                                    <p>銀魂電影版視覺特效</p>
                                </div>
                            </div>
                        </div>
                        <div style="background: #FCFCFC;padding-top: 150px;padding-bottom: 100px;" >
                            <div style="display:flex;justify-content: space-between;width: 90%;max-width: 1366px;margin: 0 auto;">
                                <div>
                                    <h5 class="index-article-out-container-text why-to-select-title">{{$t('desktop_index_nine_title')}}</h5>
                                    <h4 class="intro-wrap-block-title why-to-select-text" style="color:#000;margin:2vh 0;"  v-html="$t('desktop_index_nine_text')"></h4>
                                    <button  @click="$router.push(`${$i18n.locale == 'zh-TW' ? '':'/'+$i18n.locale}/syllabus`)" class="index-article-out-btn mirror-btn go-info" style="margin: 5vh 0;" :style="{fontSize: $i18n.locale == 'JP' && $mq == 'desktop' ? '14px':''}">{{$t('desktop_index_four_btn')}} </button>
                                </div>
                                <div style="display: flex;flex-direction: column;align-items: flex-end;">
                                    <img style="width: 100%;" :src="$t('desktop_index_nine_img')" alt="">
                                    <p class="index-article-text about-course-teach" style="font-size: 1em;width: fit-content;margin-right: 30px;">*Mamiyoga動態捕捉科技，精準判斷0死角</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 三段式常見問題 -->
                    <div class="intro-wrap-block-new-second" v-if="$mq != 'desktop' && $i18n.locale != 'JP'">
                        <h4 class="intro-wrap-block-title" style="color:#24798F;">常見問題</h4>
                        <div class="about-course-data-wrap qa" :class="show_qa">
                            <div class="about-course-data-block" @click="toggleQA()">
                                <div class="about-course-data-num" :class="show_qa">探索內容</div>
                                <div class="about-course-data-title" :class="show_qa">點擊打開常見問題</div>
                                <div class="about-course-data-circle outside" :class="show_qa">
                                    <span></span>
                                    <span></span>
                                </div>
                                <hr class="about-course-data-line" style="display:none;" :class="show_qa">
                            </div>
                            <div class="about-course-data-block qa" v-for="(qa,i) in qa_data" 
                            :key="i" @click="toggleQAClass(i)" :class="show_qa_list[i]">
                                <div class="about-course-data-num">{{qa.des}}</div>
                                <div class="about-course-data-title">{{qa.title}}</div>
                                <div class="about-course-data-circle" :class="show_qa_list[i]">
                                    <span></span>
                                    <span></span>
                                </div>
                                <hr class="about-course-data-line">
                                <div class="about-course-data-content" v-html="qa.content"></div>
                                <hr class="about-course-data-line">
                            </div>
                        </div>
                    </div>
                    <div class="course-info-block-7" v-if="$mq == 'desktop' && $i18n.locale != 'JP'">
                         <h4 class="intro-wrap-block-title last-pay-title" style="color:#24798F;">常見問題</h4>
                         <div style="display: flex;align-items:baseline;justify-content: space-evenly;max-width: 1366px;margin: 0 auto;">
                            <div class="about-course-data-wrap qa long-style">
                                <div class="about-course-data-block qa" v-for="(qa,i) in ds_qa_data_1" 
                                :key="i" @click="toggleQAClass(i)" :class="show_qa_list[i]">
                                    <div class="about-course-data-num">{{qa.des}}</div>
                                    <div class="about-course-data-title">{{qa.title}}</div>
                                    <div class="about-course-data-circle" :class="show_qa_list[i]">
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <hr class="about-course-data-line">
                                    <div class="about-course-data-content" v-html="qa.content"></div>
                                    <hr class="about-course-data-line">
                                </div>
                            </div>
                            <div class="about-course-data-wrap qa long-style">
                                <div class="about-course-data-block qa" v-for="(qa,i) in ds_qa_data_2" 
                                :key="i" @click="toggleQAClass2(i)" :class="show_qa_list2[i]">
                                    <div class="about-course-data-num">{{qa.des}}</div>
                                    <div class="about-course-data-title">{{qa.title}}</div>
                                    <div class="about-course-data-circle" :class="show_qa_list2[i]">
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <hr class="about-course-data-line">
                                    <div class="about-course-data-content" v-html="qa.content"></div>
                                    <hr class="about-course-data-line">
                                </div>
                            </div>
                        </div>
                    </div>
                    <p v-if="$mq !== 'desktop'"  :style="{display: $i18n.locale == 'JP' ? 'none':''}" style="margin-top:5vh;margin-bottom:0;color: #707070;font-size: 12px;text-align: center;">{{$t('index_share')}}</p>
                    <div v-if="$mq !== 'desktop'" class="mamiyoga-assay-share-icon-box"  :style="{display: $i18n.locale == 'JP' ? 'none':''}">
                        <div class="mamiyoga-assay-share-icon">
                            <a href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fmamiyoga.ludonow.com%2F&amp;linkname=" target="_blank">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-facebook.png" alt="">
                            </a>
                        </div>
                        <div class="mamiyoga-assay-share-icon">
                            <a href="https://www.addtoany.com/add_to/facebook_messenger?linkurl=https%3A%2F%2Fmamiyoga.ludonow.com%2F&amp;linkname=" target="_blank">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-fb-icon-chat-1.png" alt="">
                            </a>
                        </div>
                        <div class="mamiyoga-assay-share-icon">
                            <a href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fmamiyoga.ludonow.com%2F&amp;linkname=" target="_blank">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-twitter.png" alt="">
                            </a>
                        </div>
                        <div class="mamiyoga-assay-share-icon">
                            <a href="https://www.addtoany.com/add_to/wechat?linkurl=https%3A%2F%2Fmamiyoga.ludonow.com%2F&amp;linkname=" target="_blank">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-wechat.png" alt="">
                            </a>
                        </div>
                        <div class="mamiyoga-assay-share-icon">
                            <a href="https://www.addtoany.com/share#url=https%3A%2F%2Fmamiyoga.ludonow.com%2F&amp;title=" target="_blank">
                            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/share-icon-more.png" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="agree-block" :style="{display: $i18n.locale == 'JP' ? 'none':''}">
                        <p class="mamiyoga-intro-agree">登入及同意&nbsp;LUDO&nbsp;<a href="/agreement">用戶協議</a>&nbsp;和&nbsp;<a href="/privacy">隱私政策</a></p>
                        <p class="mamiyoga-intro-agree">&copy;2019 LUDO All Rights Reserved</p>
                        <p class="mamiyoga-intro-agree">contact@ludonow.com</p>
                    </div>
                </div>
            </div>
            <!-- deprecated -->
            <!-- <div class="index-new-footer" id="index-fixed-footer" :style="{backgroundImage: $mq != 'desktop' ? `url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-new-footer-img.png')`:'', display: $i18n.locale == 'JP' ? 'none':''}">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/index-new-footer-img.png" alt="">
                <div class="index-new-footer-btn-block">
                    <p class="index-new-footer-btn-text" v-if="$mq != 'desktop'">想了解更多<br>課程內容？</p>
                    <p class="index-new-footer-btn-text" v-else>想了解更多課程內容？</p>
                    <p class="index-new-footer-btn" @click="goOtherPage('https://m.me/1557980337838066?ref=p2FkZKT7rKP')">呼叫專業顧問</p>
                </div>
            </div> -->
            <div v-if="$mq == 'desktop'" class="index-fixed-footer">
                <div class="index-fixed-footer-left-block">
                    <p class="index-fixed-footer-title">Mami yoga日本人氣瑜珈</p>
                    <p class="index-fixed-footer-price">NTD.1990</p>
                </div>
                <div class="index-fixed-footer-right-block">
                    <button @click="$router.push('/pay')" class="index-fixed-footer-button index-fixed-footer-button-buy">我要購買</button>
                    <button @click="$router.push(exp_pose_url)" class="index-fixed-footer-button index-fixed-footer-button-exp">體驗魔鏡</button>
                </div>
            </div>
            <div v-else class="index-fixed-footer-mobile">
                <a href="/pay">我&nbsp;&nbsp;&nbsp;&nbsp;要&nbsp;&nbsp;&nbsp;&nbsp;購&nbsp;&nbsp;&nbsp;&nbsp;買</a>
            </div>
         </div>

        <!-- 新版alert -->
        <mamiyoga-new-window-alert-box v-if="show_alert" @closeBox="show_alert = false" :alertBtn="alertBtn"
        :alertTitle="alertTitle" :alertImg="alertImg" :alertText="alertText" :alertBtnColor="alertBtnColor"
        @enterBox="enterBox(nextGo)"></mamiyoga-new-window-alert-box>

        <!-- 開啟體驗魔境 -->
        <mamiyoga-new-practice-video-block v-if="is_practice" @goBack="goBack()" 
        @closeResult="closeResult" :routine="routine.default[1]"></mamiyoga-new-practice-video-block>

        <!-- 電腦版提示(已關閉) -->
        <mamiyoga-window-alert-box v-if="$mq == 'desktop' && !is_desktop" class="desktop-window">
            <div class="cancel-box" @click="is_desktop= false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-cancel.png" alt="">
            </div>
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/intro-wrap-img-new-2.png" alt="" style="margin-top:30px;width:45%;">
            <p style="margin:5px 0 ;font-size: 16px;"><br><br>手機為最佳使用體驗<br>桌機版正在加緊腳步開發</p>
            <div class="star-line-box">
                <button class="mamiyoga-assay-contact-btn" style="width:90px;letter-spacing:0;margin-top:20px;background:#24798F;" @click="is_desktop = false">好的</button>
            </div>
        </mamiyoga-window-alert-box>

        <!-- Android版提示(已關閉) -->
        <mamiyoga-window-alert-box v-if="is_android && show_android_box">
            <div class="cancel-box" @click="show_android_box = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-pay-cancel.png" alt="">
            </div>
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-writing-submit.png" alt="" style="margin-top:30px;width:60%;">
            <p ><strong style="line-height:20px;">AI助教優先支援 iOS 手機顯示<br>其他裝置預計九月底開通，敬請期待！</strong><br><br>輸入電子信箱，我們會在準備好時邀請您</p>
            <input class="android-input" style="width:90%;" placeholder="輸入電子信箱" type="email" name="android-mail" id="android-mail" v-model="android_mail">
            <div class="star-line-box">
                <button class="mamiyoga-assay-contact-btn" style="width:90px;letter-spacing:0;margin-top:20px;background:#24798F;" @click="subscriber">{{$t('teach_assay_button_development')}}</button>
            </div>
        </mamiyoga-window-alert-box>

        <!-- 上線預告(已關閉) -->
        <mamiyoga-window-alert-box v-if="is_open">
            <div class="cancel-box" @click="is_open = false">
                <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/cancel.svg" alt="">
            </div>
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/comment-box-human.png" alt="" style="margin-top:40px;width:40%;">
            <p v-html="$t('teach_assay_text_development')"></p>
            <div class="star-line-box">
                <button class="mamiyoga-assay-contact-btn" style="width:120px;letter-spacing:0;margin-top:20px" @click="is_open = false">{{$t('teach_assay_button_development')}}</button>
            </div>
        </mamiyoga-window-alert-box>

        <!-- 複製連接(已關閉) -->
        <div class="item" style="position:fixed;bottom:-100px;">
            <input type="text" value="https://mamiyoga.ludonow.com" class="copy-area" id="urlCopied"> 
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import MamiyogaHeader from '~/components/mamiyoga/MamiyogaHeader.vue';
import MamiyogaHamburgerHeader from '~/components/mamiyoga/MamiyogaHamburgerHeader.vue';
import MamiyogaDesktopNavHeader from '~/components/mamiyoga/MamiyogaDesktopNavHeader.vue';
import MamiyogaIndexHeader from '~/components/mamiyoga/MamiyogaIndexHeader.vue';
import MamiyogaBtn from '~/components/mamiyoga/MamiyogaBtn.vue';
import MamiyogaLoginSelect from '~/components/mamiyoga/MamiyogaLoginSelect.vue';
import MamiyogaWindowAlertBox from '~/components/mamiyoga/MamiyogaWindowAlertBox.vue';
import MamiyogaNewWindowAlertBox from '~/components/mamiyoga/MamiyogaNewWindowAlertBox.vue';
import MamiyogaCarousel from '~/components/mamiyoga/MamiyogaCarousel.vue';
import MamiyogaCarouselPreview from '~/components/mamiyoga/MamiyogaCarouselPreview.vue'
import MamiyogaCarouselComments from '~/components/mamiyoga/MamiyogaCarouselComments.vue'
import MamiyogaCarouselCurriculum from '~/components/mamiyoga/MamiyogaCarouselCurriculum.vue'
import MamiyogaCourseHelpCarousel from '~/components/mamiyoga/MamiyogaCourseHelpCarousel.vue'
import MamiyogaCarouselCommentIns from '~/components/mamiyoga/MamiyogaCarouselCommentIns.vue'
import MamiyogaNewPracticeVideoBlock from '~/components/mamiyoga/MamiyogaNewPracticeVideoBlock.vue'
import MamiyogaDesktopCourseOutline from '~/components/mamiyoga/MamiyogaDesktopCourseOutline.vue'
import Vue2TouchEvents from 'vue2-touch-events'
import { mapMutations, mapGetters } from 'vuex';
import axios from '~/config/axios-config'
import { EMAIL_REGEX } from '~/components/regex.js'
 
Vue.use(Vue2TouchEvents)
export default {

    data:()=>({
        exp_pose_url:'/mirror/yoga_20',
        login_or_not: false,
        payed_or_not: false,

        is_open: false,
        slideIndex: 0,
        is_ui_config_loaded:false,
        ui_config: Object,

        course_data: [],
        qa_data: Object, 
        ds_qa_data_1: [],
        ds_qa_data_2: [],
        show_menu: [],
        show_series: [],
        show_listA: [],
        show_listB: [],
        show_listC: [],
        show_listD: [],
        show_qa: [],
        show_qa_list: [],
        show_qa_list2: [],

        window_height: '',
        previewCourse: {},
        is_switched: false,
        select_plan: 0,
        products: [
            {
                item_id: 'MY01',
            },
            {
                item_id: 'MY02',
            }
        ],
        single_plan: {},
        four_person_program: {},

        is_android: false,
        show_android_box: false,
        android_mail: '',
        is_desktop: true,

        email: '',
        password: '',
        hint:'請填寫',
        hint_color:'transparent',

        offsetMenu: false,

        show_alert: false,
        alertTitle: '',
        alertImg: '',
        alertText: '',
        alertBtn: '好的',
        alertBtnColor: '#24798F',
        nextGo: '',

        is_practice: false,
        routine:[],

        have_trial: false,
    }),
    components: {
        MamiyogaHeader,
        MamiyogaHamburgerHeader,
        MamiyogaDesktopNavHeader,
        MamiyogaIndexHeader,
        MamiyogaBtn,
        MamiyogaLoginSelect,
        MamiyogaWindowAlertBox,
        MamiyogaNewWindowAlertBox,
        MamiyogaCarousel,
        MamiyogaCarouselPreview,
        MamiyogaCarouselComments,
        MamiyogaCarouselCurriculum,
        MamiyogaCourseHelpCarousel,
        MamiyogaCarouselCommentIns,
        MamiyogaNewPracticeVideoBlock,
        MamiyogaDesktopCourseOutline,
    },
    props: {
        title: String,
    },
    async mounted(){
        if(process.client) {

            this.login_or_not = await this.$checkLogin(this.$store);
            if (this.login_or_not) {
                this.payed_or_not = await this.$checkPayed(this.user.user_id,"mamiyoga");
            }
            if(this.$mq === 'desktop'){
                document.getElementById('go_index').classList.add('click-active');
            }

            window.onscroll = this.fixNav;
            this.ui_config = await require('~/config/mamiyoga-config')
            this.is_ui_config_loaded = true;

            try {
                if(this.$i18n.locale == 'JP'){
                    this.course_data = await require('~/config/mamiyoga-course-jp')
                    this.routine = await require('~/config/routine-jp');
                } else {
                    this.course_data = await require('~/config/mamiyoga-course')
                    this.routine = await require('~/config/routine');
                }
            } catch (error) {
                console.error(error)
                this.$errorLogger('/',"loadRoutine",error);
                this.course_data = await require('~/config/mamiyoga-course')
                this.routine = await require('~/config/routine');
            }
            this.qa_data = await require('~/config/mamiyoga-qa')
            this.ds_qa_data_1 = this.qa_data.slice(0,4)
            this.ds_qa_data_2 = this.qa_data.slice(4,8)

            this.previewCourse = this.course_data[0]
            
            for (let i = 0; i < this.products.length; i++) {
                let send_data = {item_id: this.products[i].item_id};
                const response = await axios.post('/apis/get-shop-item',send_data);
                this.products[i].item_name = response.data.item_name
                this.products[i].price = response.data.price
                this.products[i].slogan = response.data.slogan
                this.products[i].description = response.data.description
                
            }
            this.single_plan = this.products.find(plan => plan.item_id == 'MY01')
            this.four_person_program = this.products.find(plan => plan.item_id == 'MY02')
            this.select_plan = this.single_plan.price
        }
    },
    beforeDestroy(){
        window.onscroll = null
    },
    methods:{
        onloadEventHandler(){
            console.log('ya')
            this.show_loading = false
        },
        goTeach(){
            if (this.$i18n.locale == 'JP') {
                this.$router.push({path:'/jp/teach'})
            } else if (this.$i18n.locale == 'zh-CN'){
                this.$router.push({path:'/zh-CN/teach'})
            } else {
                this.$router.push({path:'/teach'})
            }
        },
        openRemindBox(){
            this.is_open = true;
        },
        goDown(){
            this.$scrollTo('#index-wrap',"start");
        },
        goDownWrap(){
            this.$scrollTo('#wrap','start')
        },
        toggleMenu(){
            if(this.show_menu === 'long-style'){
                this.show_menu = []
            } else {
                this.show_menu = 'long-style'
            }
        },
        toggleSeries(index) {
            if (this.show_series[index] === 'open') {
                this.show_series = [];
            } else {
                this.show_series = [];
                this.show_series[index] = 'open'
            }
        },
        toggleClassA(index) {
            if (this.show_listA[index] === 'open') {
                this.show_listA = [];
            } else {
                this.show_listA = [];
                this.show_listA[index] = 'open'
            }
        },
        toggleClassB(index) {
            if (this.show_listB[index] === 'open') {
                this.show_listB = [];
            } else {
                this.show_listB = [];
                this.show_listB[index] = 'open'
            }
        },
        toggleClassC(index) {
            if (this.show_listC[index] === 'open') {
                this.show_listC = [];
            } else {
                this.show_listC = [];
                this.show_listC[index] = 'open'
            }
        },
        toggleClassD(index) {
            if (this.show_listD[index] === 'open') {
                this.show_listD = [];
            } else {
                this.show_listD = [];
                this.show_listD[index] = 'open'
            }
        },
        toggleQA(){
            if(this.show_qa === 'long-style'){
                this.show_qa = []
            } else {
                this.show_qa = 'long-style'
            }
        },
        toggleQAClass(index) {
            if (this.show_qa_list[index] === 'open') {
                this.show_qa_list = [];
            } else {
                this.show_qa_list = [];
                this.show_qa_list[index] = 'open'
            }
        },
        toggleQAClass2(index) {
            if (this.show_qa_list2[index] === 'open') {
                this.show_qa_list2 = [];
            } else {
                this.show_qa_list2 = [];
                this.show_qa_list2[index] = 'open'
            }
        },
        fixNav(){
            let v_offset_top = document.getElementById('wrap').offsetTop;
            let d_offset_top = document.getElementById('mamiyoga-index-title').offsetTop
            if(window.pageYOffset > v_offset_top) {
                document.getElementById('index-fixed-nav').classList.add('sticky')
            } else if (window.pageYOffset < v_offset_top) {
                document.getElementById('index-fixed-nav').classList.remove('sticky')     
            }
            if(window.pageYOffset > d_offset_top) {
                this.offsetMenu = true
            } else if(window.pageYOffset < d_offset_top) {
                this.offsetMenu = false
            }
        },
        getFreeCourse(){
            let course = document.getElementById('love-feedback-label');
            course.click();
        },
        goPreview(){
            sessionStorage["course_1_current_pose_id"] = 'first'
            this.$router.push('/test/pose')
        },
        goPay(){
            sessionStorage['method_picked_plan'] = this.select_plan;
            this.$router.push('/pay')
        },
        copyUrl(){
            let Url = document.getElementById("urlCopied");
            console.log(Url)
            console.log(Url.value.length)
            Url.select();
            Url.setSelectionRange(0, Url.value.length)
            document.execCommand('Copy');
            window.alert('已複製連結')
            this.$scrollTo('#wrap','start')
        },
        async subscriber(){
            // let send_data = {email:this.android_mail,name: 'Android用戶'}
            if(this.android_mail == '') {
                alert('請輸入電子信箱')
            } else if(!EMAIL_REGEX.test(this.android_mail)){
                alert('電子信箱格式錯誤')
            } else {
                this.$sendData('/apis/subscribe-mamiyoga',{email:this.android_mail,name: 'Android用戶'})
                // const res = await axios.post('/apis/subscribe-mamiyoga',send_data);
                alert('已收到您的電子信箱！敬請期待～')
                this.show_android_box = false
            }
        },
        goOtherPage(page){
            window.location.href = page;
        },
        handleFBClick() {
            window.location.href = 'https://api.ludonow.com/auth/facebook?from=' + this.$route.path;
        },
        handleGoogleClick() {
            window.location.href = 'https://api.ludonow.com/auth/google?from=' + this.$route.path;
        },
        onSubmit(type) {
            if (this.email.length === 0 || this.password.length === 0) {
                this.hint = '請填寫所有欄位！'
                this.hint_color = "red"
                return
            }
            if (!EMAIL_REGEX.test(this.email)) {
                this.hint = '電子信箱格式錯誤'
                this.hint_color = "red"
                return
            }
            if (this.password.length < 8) {
                this.hint = '密碼過短'
                this.hint_color = "red"
                return
            }
            if (this.password !== this.confirmPassword && type === "signup") {
                this.hint = '密碼需大於八個字'
                this.hint_color = "red"
                return
            }

            this.hint = null
            this.hint_color = ""

            if (type === "signup") {
                this.signup(this.email, this.password, this.confirmPassword)    
            } else {
                this.login(this.email, this.password)
            }
        },
        async login(email,password) {
            try {
                let response = await axios.post('/login',{email:email,password:password})
                if (response.data.status == '200') {
                    console.log("login success")
                    console.log(response)
                    let login_result = await this.$checkLogin(this.$store);
                    // this.$router.push('/login-redirect')
                    if(localStorage.redirect == '/teach') {
                        this.$router.push(localStorage.redirect)
                    } else {
                        this.$router.push('/menu')
                    }
                } else {
                    console.log(response)
                    this.hint = response.data.message;
                    this.hint_color = "red"
                }
            } 
            catch (error) {
                console.log(error)
                this.hint = "傳送失敗，請重新嘗試"
                this.hint_color = "red"
            }
        },
        goTrial(){
            if(!this.login_or_not){
                localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/`
                this.show_alert = true
                this.alertText = `${this.$t('desktop_go_login')}`
                this.alertBtn = `${this.$t('teach_button_ok')}`
                this.nextGo = 'login'
            } else {
                localStorage.redirect = `${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/`
                this.$router.push(`${this.$i18n.locale == 'zh-TW' ? '':'/' +this.$i18n.locale}/free-trial`)  
            }
        },
        enterBox(i){
            if(i == '0'){
                this.show_alert = false
            }else {
                this.$router.push(`${this.$i18n.locale == 'zh-TW' ? '':'/'+this.$i18n.locale}/${i}`)
            }
        },
        goBack(){
            this.is_practice = false
        },
        closeResult(score = null){
            this.is_practice = false
        },
    },
    computed:{
        ...mapGetters({
            user : 'user/getData',
        }),
        getRectifys(){
            if (this.course_data) {
                const result_array = this.course_data.filter(course => course.tags.find(tag => tag == 'rectify'));
                return result_array;
            } else {
                return [];
            }
        },
        getAlleviates(){
            if (this.course_data) {
                const result_array = this.course_data.filter(course => course.tags.find(tag => tag == 'alleviate'));
                return result_array;
            } else {
                return [];
            }
        },
        getBeautys(){
            if (this.course_data) {
                const result_array = this.course_data.filter(course => course.tags.find(tag => tag == 'beauty'));
                return result_array;
            } else {
                return [];
            }
        },
        getBlends(){
            if (this.course_data) {
                const result_array = this.course_data.filter(course => course.tags.find(tag => tag == 'blend'));
                return result_array;
            } else {
                return [];
            }
        },
    },
    watch:{

    }
}
</script>

<style>
@font-face {
    font-family: 'ShueiGoGinStd';
    src: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/A-OTF-GothicMB101Pro-Ultra.otf');
}
.block-1-benefit {
    display:flex;
    align-items:center;
    margin: 0 20px 40px;
}
.index-contain {    
    overflow: hidden;
    min-height: 300vh;
    height: auto;
}
.mamiyoga-index-intro {
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
}
#mamiyoga-index-title{
    width: 85vw;
    margin: 3vh auto;
    color: #FCF9F2;
    font-size: 39px;
    font-weight: bold;
}
#mamiyoga-index-title-des {
    width: 85vw;
    margin: 0 auto 1vh;
    font-size: 15px;
    color: #F7F7F7;
    font-weight: 500;
}
#mamiyoga-index-title-eng {
    width: 85vw;
    margin: 0 auto;
    font-size: 16px;
    color: #F7F7F7;
    font-weight: 500;
}
.mamiyoga-intro-title {
    display: block;
    margin: 30vh auto 3vh;
    width: 25vw;

}
.mamiyoga-intro-btn {
    margin: 0 auto 2vh; 
    width: 135px;
}
.mamiyoga-godown-btn {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 2vh auto 0;
    width: 15%;
    cursor: pointer;
}
.mamiyoga-intro-agree {
    font-size: 12px;
    color: #DCD8CF;
    text-align: center;
    padding-bottom: 3px;
    line-height: 20px;
}
.mamiyoga-intro-agree a,.mamiyoga-intro-agree a:visited {
    color: #DCD8CF;
}
.background-video {
    /* position: fixed; */
    top: -3vh;
    /* width: auto; */
    width: auto;
    min-height: 100vh;
}
.hooper {
    width: 100vw;
    height: 100vh;
}
.cancel-box {
    /* background: red; */
    height: 30px;
    width: 30px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.cancel-box img {
    width: 65%;
}
.mamiyoga-assay-contact-open p {
    color: #707070;
    text-align: center;
    font-size: 12px;
    margin: 30px 0 10px;
}
.mamiyoga-assay-contact-open img {
    display: block;
    margin: 0 auto;
    width: 50%;
}
.mamiyoga-assay-contact-btn {
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
    box-shadow:5px 5px 10px rgba(0,0,0,.2);
    background: #9BAEB2;
    color: #fff;
    cursor: pointer;
}
.mamiyoga-intro-wrap input {
    display: none;
}
.index-label-box {
    width: 100%;
    height: 40px;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
    padding: 5px 0;
}
.index-label-pink-btn {
    width: 110px;
    height: 30px;
    color:#F8F7F8;
    background: #FF9898;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}
.index-label-inside-box {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
}
.sticky {
    position: fixed;
    top: 0;
    z-index: 999;
    box-shadow: 0 10px 10px rgba(0,0,0,.1);
}
.index-label-box label {
    color: #24798F;
    font-size: 16px;
    font-weight: bold;
    opacity: .5;
    user-select: none;
}
.about-course-block,.love-feedback-block  {
    /* padding-bottom: 45px; */
}
#about-course:checked ~ .index-label-box .about-course-btn,
#love-feedback:checked ~ .index-label-box .love-feedback-btn {
    opacity: 1;
    border-bottom: 2px solid #24798F;
}
.course-info-block-1 {
    background: linear-gradient(180deg,#FCF8ED, white);
}
.course-info-content-1 {
    width: 85%;
    margin: 0 auto;
    padding-top: 40px;
}
.course-info-block-2 {
    background: linear-gradient(180deg, rgba(255,247,247,.49),rgba(212,222,227,.41),rgba(36,121,143,.08),rgba(36,121,143,.08),rgba(36,121,143,.08));
}
.course-info-content-2 {
    padding-top:40px;
}
.course-info-block-3 {
    background: linear-gradient(180deg,#FFFDF7, white);
    padding-top: 40px;
}
.course-info-block-4 {
    background: linear-gradient(180deg,rgba(0,193,244,.2),rgba(0,193,244,.08),rgba(212,222,227,.41), white);
    padding-top: 40px;
    overflow: hidden;
}
.course-info-block-6 {
    margin-top:40px;
}
.intro-wrap-block-new-five-curriculum {
    height:400px;
    overflow:hidden;
}
#get-course-link {
    cursor: pointer;
    width: 80%;
    display: block;
    margin: 0 auto 20px;
}
#get-routine-btn {
    width: 260px;
    height: 60px;
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/get-rotine-btn.png');
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 50%;
    cursor: pointer;
}
.intro-wrap-block-first {
    width: 100vw;
    padding-bottom: 10px;
    background-color: #F7F7F7;

}
.intro-wrap-block-title {
    font-size: 18px;
    color:#707070;
    margin-left: 40px; 
}
.intro-wrap-block-first-content {
    font-size: 14px;
    padding: 5px 30px 0;
    color: #707070;
}
.index-wrap-video {
    width: 100%;
    margin: 0 0 10px;
}
.intro-wrap-block-first-content h1 {
    color: #24798F;
    font-size: 16px;
    font-weight: bold;
}
.select-pay-program {
    border: 1px solid #24798F;
    background: white;
    border-radius: 5px;
    width: 68%;
    height: 30px;
    color: #24798F;
    font-size: 13px;
    font-weight: 600;
}
.goto-buy-btn {
    width: 30%;
    height: 30px;
    border-style: none;
    border-radius: 5px;
    color: #f7f7f7;
    background: linear-gradient(180deg, #FF9A7B ,#FF9898);
    letter-spacing: 3px;
    font-weight: 600;
    box-shadow: 0px 3px 5px rgba(0,0,0,.2);
    font-size: 14px;
    padding:0;
}
.before-after-img {
    width: 100%;
}
.index-article-title {
    color: #24798F;
    font-size: 19px;
    text-align:left;
}
.index-article-little-title {
    font-size: 16px;
    margin: 20px 0 15px;
}
.index-article-text {
    color: #707070;
    font-size: 14px;
    margin-bottom: 40px;
    font-weight: 300;
}
.about-course-teach{
    width: 85%;
    margin: 10px auto 0;
    font-weight: 400;
}
.about-course-teach-img {
    width:100%;
}
.have-finger {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    color: rgb(255, 152, 152);
    text-align: right;
    font-weight: bold;
    width: 85%;
    margin: 20px auto 40px;
    user-select: none;
    font-size: 16px;
}
.have-finger::after {
    width: 25px;
    height: 25px;
    display: block;
    content: '';
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/tap.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    float: right;
}
.index-article-use-video {
    /* border-radius: 40px 40px 0 0; */
    position: relative;
    padding-top: 40px;
    padding-bottom: 50px;
    background-image: linear-gradient(black, #24798F, #24798F,#24798F);
}
.mirror-img {
    margin:35px 0;
    width: 100%;
}
.index-mirror-text {
    text-align: center;
    font-size: 16px !important;
}
.index-article-use-video-sample {
    display: block;
    margin: 20px auto 10px;
    width: 65%;
}
.index-article-use-video-sample-img {
    position: absolute;
    top: 82px;
    width: 80%;
    left: 10%;
}
.block-mirror-demo {
    width: 100vw;
}
.block-mirror-demo img{
    width: 100%;
}
.index-article-out-container {
    width: 70%;
    height: 70px;
    position: absolute;
    top: -30px;
    left: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #24798F, #97A8AF);
    border-radius: 20px;
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
}
.index-article-out-container-text {
    color: #F8F7F8;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    text-shadow: 0px 5px 10px rgba(0,0,0,.2);
}
.index-article-out-container-text.new-mami {
    width: 100%;
    color:#24798F;
    text-shadow:none;
    position: absolute;
}
.index-article-little-title.new-mami {
    margin-bottom: 5px;
    text-align: center;
    font-size: 20px;
}
.index-article-text.new-mami {
    margin: 0 auto 50px;
    width: 90%;
    font-size:16px;
}
.mami-mura-img {
    width: 110%;
}
.index-article-out-container-text-li {
    color: #f7f7f7;
    font-size: 26px;
    text-align: center;
    margin-top: 15px;
}
.index-article-out-icon-block {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 60px 0 40px;
}
.index-article-out-icon {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 25%;
}
.index-article-out-icon img {
    height: 70px;

}
.index-article-out-icon p {
    color: #F8F7F8;
    font-size: 16px;
    font-weight: bold;
    margin-top: 15px;
}
.index-article-out-container img {
    width: 50px;
    position: absolute;
    right: 5%;
    top: -25px;
}
.index-article-out-text {
    color: #F8F7F8;
    font-size: 14px;
    font-weight: 600;
    /* width: 75%; */
    margin: 0 auto;
}

.index-article-out-btn {
    width: 65%;
    border-style: none;
    margin: 30px auto 0;
    display: block;
    font-size: 20px;
    font-weight: bold;
    color: #F7F7F7;
    background: linear-gradient(180deg, #FF9A7B, #FF9898);
    height: 60px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0,0,0,.2);
    letter-spacing: 3px;
}
.mirror-btn {
    font-size: 26px;
    border-radius: 16px;
}
.index-article-out-btn.mirror-btn.go-info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
}
.index-official-certification {
    background: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-10.png');
    height: 150px;
    margin: 40px auto;
    width: 80%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
}
.index-official-certification p {
    color: #707070;
    font-size: 12px;
    text-align: center;
    margin: 6px 0;
}
.index-official-certification p:first-child {
    font-size: 14px;
    font-weight: bold;
    color: #000;
    text-align: center;
    margin-bottom: 15px;
    padding-top: 20px;
}

.intro-wrap-block-third,
.intro-wrap-block-four,
.intro-wrap-block-five {
    width: 100vw;
    height: 750px;
    padding: 20px 0;
}
.intro-wrap-block-third {
    height: 630px;
}
.intro-wrap-block-new-second {
    width: 100%;
    /* min-height: 750px; */
    padding: 20px 0;
}
.intro-wrap-block-new-five {
    width: 100%;
    min-height: 500px;
    padding: 20px 0;
    background: url('');
    position: relative;
}
.about-teacher-pic {
    position: absolute;
    width: 200px;
    height: 400px;
    background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-intro-about-back.png');
    background-size: cover;
    background-repeat: no-repeat;
    bottom: -5px;
    right: 0px;
}
.about-course-data-wrap {
    width: 85%;
    background: #f7f7f7;
    border: 1px solid #bfbdbd;
    margin: 20px auto 0;
    border-radius: 10px;
    max-height: 80px;
    min-height: 0;
    overflow: hidden;
    transition: ease .4s;
}
.about-course-data-wrap.qa.long-style {
    min-height: 650px;
    max-height: 1200px;
}
.about-course-data-wrap.long-style{
    min-height: 370px;
    max-height: 1200px;
}
.about-course-data-num.long-style,
.about-course-data-title.long-style{
    color: #24798F;
}
.about-course-data-line.long-style {
    display: block !important;
}
.about-course-data-circle.outside.series {
    top: 8px;
}
.about-course-data-circle.outside.series.open {
    transform: rotate(-180deg);
}
.about-course-data-circle.outside.series span {
    background: #24798f;
}
.about-course-data-circle.outside span:first-child,
.about-course-data-circle.outside span:last-child {
    width: 4px;
    height: 15px;
}
.about-course-data-circle.outside span:first-child {
    right: 4px;
}
.about-course-data-circle.outside span:last-child {
    right: 12px;
}
.about-course-data-circle.outside.long-style{
    transform: rotate(-180deg);
}
.about-course-data-circle.outside.long-style span {
    background: #24798F;
}
.about-course-series {
    height: 50px;
    overflow: hidden;
}
.about-course-series.open {
    min-height: 270px;
    max-height: 300px;
}
.about-course-series-data-block {
    overflow: hidden;
    max-height: 70px;
    min-height: 0;
    transition: ease .4s;
}
 .about-course-series-data-block:nth-child(5) {
    max-height: 80px;
}
.about-course-series-data-block.open {
    min-height: 260px;
    max-height: 500px;
}
.about-course-series-data-block:nth-child(3).open {
    min-height: 180px;
    max-height: 400px;
}
.about-course-series-data-block:nth-child(4).open {
    min-height: 260px;
    max-height: 500px;
}
.about-course-series-data-block:nth-child(5).open {
    min-height: 430px;
    max-height: 520px;
}
.about-course-data-block {
    width: 85%;
    height: 55px;
    overflow: hidden;
    margin: 15px auto 0;
    text-align: center;
    transition: ease .4s;
    position: relative;
}
.about-course-data-block.open {
    height: 110px;
}
.about-course-series-data-block:nth-child(2).open .about-course-data-block:nth-child(2).open,
.about-course-series-data-block:nth-child(2).open .about-course-data-block:nth-child(3).open,
.about-course-series-data-block:nth-child(4).open .about-course-data-block:nth-child(3).open,
.about-course-series-data-block:nth-child(4).open .about-course-data-block:nth-child(5).open,
.about-course-series-data-block:nth-child(5).open .about-course-data-block:nth-child(5).open {
    height: 130px;
}
.about-course-series-data-block:nth-child(5).open .about-course-data-block:nth-child(6).open {
    height: 140px;
}
.about-course-data-block.qa.open {
    height: 110px;
}
.about-course-data-block:nth-child(4).qa.open {
    height: 190px;
}
.about-course-data-block:nth-child(5).qa.open,
.about-course-data-block:nth-child(9).qa.open {
    height: 130px;
}
.about-course-data-block:nth-child(6).qa.open {
    height: 470px;
}
.about-course-data-block.qa .about-course-data-content {
    width: 85%;
}
.about-course-data-block:nth-child(6).qa .about-course-data-content {
    width: 100%;
}
.about-course-data-block.qa:last-child{
    margin-bottom: 15px;
}
.about-course-data-num {
    font-size: 12px;
    font-weight: 600;
    color:#272727;
}
.about-course-data-title {
    color: #272727;
    font-weight: 300;
    font-size: 16px;
}
.about-course-data-title.series {
    font-size: 19px;
    font-weight:bold;
    color:#24798f;
    padding: 6px 0;
}
.about-course-data-line {
    opacity: .3;
    margin: 10px 0;
}
.about-course-data-circle {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    top: 18px;
    right: 5px;
    transition: ease .4s;
}
.about-course-data-circle.open {
    transform: rotate(-180deg);
}
.about-course-data-circle span:first-child,
.about-course-data-circle span:last-child {
    width: 2px;
    height: 10px;
    background: #272727;
    position: absolute;
    top: 5px;
}
.about-course-data-circle span:first-child {
    transform: rotate(45deg);
    right: 7px;
}
.about-course-data-circle span:last-child {
    transform: rotate(135deg);
    right: 13px;
}
.about-course-data-content {
    width: 80%;
    margin: 0 auto;
    text-align: left;
    font-size: 12px;
    color: #707070;
}
.about-course-data-content li {
    list-style-type: none;
    text-align: left;
    color: #707070;
    /* font-weight: lighter; */
    font-size: 12px;
}
.intro-wrap-block-second {
    position: relative;
}
.intro-wrap-block-five {
    height: 1050px;
}
.intro-wrap-block-second-hooper {
    width: 100%;
    padding-bottom: 40px;
    overflow: hidden;
}

.intro-wrap-children-logo {
    width: 70%;
    display: block;
    margin: 40px auto;
}

.slideIn {
    animation: slidein .5s ;
}
@keyframes slidein {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: .5s;
  animation-name: fade;
  animation-duration: .5s;
  display: none;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}
.slideInLeft {
  animation: slideInLeft .5s;
}
@keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}



.intro-wrap-block-second .dot {
    width: 7px;
    height: 7px;
    background-color:#D1D1D1; 
    margin: 0 4px; 
    display: inline-block;
    border-radius: 4px;
}
.index-dotactive, .intro-wrap-block-second .dot:hover {
  background-color: #707070 !important;
}
.intro-wrap-block-second .hooper-dot {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 3vh;
}

.intro-wrap-block-third-score {
    display: flex;
    align-items: center;
    padding: 0 40px;
    justify-content: space-between;
    margin-top: 15px;
}
.curriculum-dot {
    width: 7px;
    height: 7px;
    background-color:#D1D1D1; 
    margin: 0 4px; 
    display: inline-block;
    border-radius: 4px;
}
.curriculum-dotactive {
    background: #707070 !important;
}
.intro-pay-dot-line {
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}
.intro-pay-dot {
    width: 7px;
    height: 7px;
    border-radius: 7px;
    background: #D1D1D1;
    margin: 0 4px;
}
.intro-pay-dotactive {
    background: #707070 !important;
}
.about-articele-text {
    color: #707070;
    font-size: 12px;
}


.intro-wrap-block-five-every {
    width: 95%;
    height: 220px;
    border: 1px solid rgba(191, 189, 189, .5);
    border-radius: 5px;
    margin-top: 20px;
    position: relative;
}
.intro-wrap-block-five-every-img {
    width: 90%;
    height: 80px;
    margin: 10px auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center; 
}
.intro-wrap-block-five-every-title {
    font-size: 15px;
    margin-left: 5%;
    color: #707070;
}
.intro-wrap-block-five-every-text {
    font-size: 12px;
    margin: 5px 5% 10px;
    color: #707070;
    font-weight: 300;
}
.intro-wrap-block-five-every-next {
    position: absolute;
    right: -10%;
    top: 50%;
    height: 15px;
}
.index-new-footer {
    height: 250px;
    width: 100%;
    background-color: #24798f;
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: -20px 15px;
    display: flex;
    align-items: center;
    overflow: hidden;
}
.index-new-footer img {
    opacity: 0;
    width: 60%;
}
.index-new-footer-btn-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.index-new-footer-btn-text {
    color: #fff;
    font-size: 25px;
    font-weight: bold;
}
.index-new-footer-btn {
    background: #fff;
    color: #24798f;
    margin-top: 15px;
    padding: 10px 15px;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
}
.index-footer-content {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.index-footer-title {
    font-size: 16px;
    font-weight: bold;
    color:#24798F;
    letter-spacing: 0;
}
.delect-text {
    color:#FF9898;
    font-size: 16px;
}
.index-footer-tag {
    font-size: 14px;
    background: #24798F;
    font-weight: 400;
    padding: 5px 15px;
    letter-spacing: 0;
}
.index-footer-btn {
    width: 48%;
    height: 40px;
    border-radius: 10px;
    border: 3px solid #24798F;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.footer-sticky {
    position: fixed;
    bottom: 0;
    z-index: 999;
    /* visibility: visible; */
}
.love-feedback-block {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
}
.love-feedback-block h3 {
    font-size: 24px;
    color: #51636F;
    text-align: center;
    font-weight: 400; 
    padding-top: 30px;
    margin-bottom: 2vh; 
}
.love-feedback-block .iframe-container, .about-course-block .iframe-container {
    width: 100%;
    min-height:31vh;
    position:relative;
}
.love-feedback-block .course-bookmark {
    width: 30px;
    position: absolute;
    top: -10px;
    left: 20px;
}
.switch-lang input {
    display: none;
}
.switch-lang-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width:40px;
    height:20px;
    background: #BFBDBD;
    color:#fff;
    padding:0;
    font-size:12px;
    border-radius: 20px;
    box-shadow: 1px 2px 6px rgba(0,0,0,.3);
}
.switch-lang-label {
    width: 85px;
    height: 25px;
    float: right;
}
#lang-ch:checked ~ .switch-lang-label .switch-lang-btn.btn-ch,
#lang-jp:checked ~ .switch-lang-label .switch-lang-btn.btn-jp {
    background: #97A8AF;
}
.mamiyoga-course-bottom {
    width: 100vw;
    margin-top:2vh; 
    padding: 0 5vw 3vh;
}
.mamiyoga-course-bottom-content {
    width: 90vw;
    height: auto;
}
.mamiyoga-course-bottom-content.first {
    margin-bottom: 1vh;
}
.mamiyoga-course-bottom-content h5 {
    font-size: 14px;
    color: #272727;
    font-weight: 400;
}
.mamiyoga-course-bottom-content p {
    font-size: 12px;
    color: #707070;
}
.mamiyoga-course-bottom-first,.mamiyoga-course-bottom-second {
    width: 90vw;
    padding: 3vw;
}
.course-divide-btn button {
    box-shadow:5px 5px 10px rgba(0,0,0,.2);
}
.mamiyoga-go-to-divide-btn {
    position: relative;
}
.mamiyoga-go-btn {
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
}
.mamiyoga-course-bottom-second-content-li {
    min-height: 25px;
}
.mamiyoga-course-bottom-second-content-li p:first-child {
    float: left;
    background-color: #98A9AF;
    padding: 1px 5px;
    border-radius: 10px;
    color: white;
    margin: 0 6px 6px 0;  
}
.intro-wrap-block-second-hooper .eg-flick-viewport {
    height: 700px !important;
}
.android-input {
    display: block;
    margin: 0 auto;
    /* width: 90%; */
    height: 35px;
    border: #BFBDBD 1px solid;
    border-radius: 8px;
    box-shadow: 0px 5px 10px rgba(0,0,0,.1);
    text-align: center;
}
.go-new-mamimura {
    position: relative;
    height: 200px;
    background: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/new-index-img-8-1.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: -20px 10px;
}
#go-to-club {
    right: 10vw;
    cursor:pointer;
    width: 40%;
    position: absolute;
    bottom: 40px;
}
.info-desktop-red-btn{
    color: #F8F7F8;
    font-size: 16px;
    font-weight: bold;
    background: #C74F4F;
    border: 3px solid #C74F4F;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    margin-top: 35px;
    cursor: pointer;
    -webkit-user-select: none;
}
.info-desktop-red-btn.index-first{
    margin: 30vh auto 0;
}

/*行銷變更內容*/
.background-video-contain {
    height: 100vh;
    overflow: hidden;
}
.mamiyoga-intro-wrap {
    background: linear-gradient(#DCD8CF,#E4E7E3,#E4E7E3,#EEEFEA,#EEEFEA,#EEEFEA,#EEEFEA);
    min-height: 100vh;
    padding-bottom: 1vh;
}
.mamiyoga-intro-wrap-block {
    margin: 0 auto;
    width: 90%;
}
.mamiyoga-intro-wrap-block h1,
.mamiyoga-intro-wrap-block h2,
.mamiyoga-intro-wrap-block h3,
.mamiyoga-intro-wrap-block h5 {
    color: #24798F;
    font-size: 20px;
    text-align: center;
    margin: 6vh auto;
}
.mamiyoga-intro-wrap-block img {
    display: block;
    margin: 3vh auto;
}
.mamiyoga-intro-wrap-block p {
    color: #707070;
    font-size: 13px;
    text-align: center;
}
.mamiyoga-intro-wrap .mamiyoga-assay-share-icon-box {
    width: 80%;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    margin: 2vh auto 4vh; 
}
.mamiyoga-intro-wrap .mamiyoga-assay-share-icon {
    width: 15vw;
    height: 7vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;  
}
.mamiyoga-assay-share-icon img {
    width: 36px;
    height: 36px;
    cursor: pointer;
}
#title-first,#title-secord,#title-third {
    opacity: 0;
}


.desktop-window .mamiyoga-assay-contact-open {
    width: 350px;
    height: 500px;
}

.index-fixed-footer {
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    position:fixed;
    bottom:0;
    background: #24798F;
    height: 74px;
    width:100vw;
}
.index-fixed-footer-left-block {
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    margin-left: 7vw;
}
.index-fixed-footer-title {
    font-size: 24px;
    color:white;
    font-weight: bold;
}
.index-fixed-footer-price {
    color:#FF9898;
    font-size: 19px;
}
.index-fixed-footer-button {
    margin-right: 5vw;
    width:195px;
    height: 40px;
    border:none;
    border-radius: 6px;
    cursor:pointer;
}
.index-fixed-footer-button-buy {
    color:#24798F;
    background:#F2EEEC;
}
.index-fixed-footer-button-exp {
    color:#F2EEEC;
    background:#24798F;
    border: 2px solid #F2EEEC;
}
.index-fixed-footer-mobile {
    width:100vw;
    height:50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.index-fixed-footer-mobile p {
    font-size: 20px;
    color:white;
    cursor:pointer;
}
@media  (min-width:769px) {
    .about-course-block {
        /* padding-bottom: 120px; */
    }
    .mamiyoga-origin-header {
        /* display: none !important; */
    }
    .mamiyoga-index-header img {
        width: 60px;
        margin: 20px 0 0 30px;
        cursor: pointer;
    }
    .background-video-contain {
        background: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/desktop/desktop-background.jpg');
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        min-height: 1000px;
    }
    .background-video,.mamiyoga-intro-title,.mamiyoga-godown-btn {
        display: none;
    }
    .mamiyoga-index-intro {
        width: auto;
        height: 100vh;
    }
    .index-login-block {
        width: 340px;
        height: 460px;
        background: #fff;
        border-radius: 20px;
        position: absolute;
        top: 300px;
        right: 10vw;
    }
    .index-login-block-inside {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 20px;
    }
    .index-login-block-text {
        font-size: 13px;
        font-weight: 500;
        color: #24798F;
        text-align: left;
        width: 65%;
    }

    #mamiyoga-index-title{
        width: fit-content;
        margin: 300px 10vw 0;
        font-size: 54px;
        font-weight: bold;
        line-height: 75px;
    }
    
    #mamiyoga-index-title-des {
        width: fit-content;
        margin: 5vh 10vw 1vh;
        font-size: 24px;
    }
    #mamiyoga-index-title-eng {
        width: fit-content;
        margin: 0 10vw 0;
        font-size: 17px;
    }
    .index-label-box {
        display: none;
        height:100px;
        flex-wrap: unset;
        padding: 0 10vw;
    }
    .index-nav-flex-box {
        flex-wrap: unset;
    }
    .index-footer-title {
        font-size: 1.5em;
    }
    .index-footer-content {
        justify-content: space-evenly;
    }
    .index-footer-btn {
        width: 40%;
    }
    .course-info-block-1{
        min-height: 1000px;
        background: linear-gradient(180deg,#FFFDF7, white);
        position: relative;
    }
    .course-info-content-1,.course-info-content-2,.course-info-block-4,
    .course-info-block-5,.course-info-block-7 {
        padding-top: 10vh;
    }
    .course-info-content-1,.course-info-content-2,.course-info-block-mirror,
    .course-info-block-3-content {
        max-width: 1366px;
        position: relative;
        margin: 0 auto;
    }
    .course-info-block-2,.course-info-block-4 {
        min-height: 100vh;
    }
    .course-info-content-3 {
        margin-top: 10vh;
    }
    .course-info-content-3,.course-info-block-7 {
        min-height: 80vh;
    }
    .course-info-content-2,.course-info-block-3,.course-info-block-4 {
        position: relative;
    }
    .course-info-block-5 {
        min-height: 750px;
        padding-bottom: 10vh;
    }
    .course-info-block-6 {
        margin: 0;
        min-height: 850px;
        padding-top: 100px;
        background: #FCFCFC;
    }
    .course-flex-block-mirror {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .course-flex-block-mirror-2 {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .index-article-title {
        width: fit-content;
        font-size: 2.5em;
    }
    .index-article-little-title {
        font-size: 1.5em;
    }
    .before-after-img{
        width: 40%;
        margin: 3vh 0 0;
    }
    .index-article-text {
        font-size: 1.4em;
    }
    .index-article-text.about-course-teach {
        font-size: 1.4em;
        margin: 3vh 0 0 7.5%;
    }
    .about-course-teach-img {
        width: 80%;
        max-width: 900px;
    }
    .index-article-text.have-finger {
        position: absolute;
        width: fit-content;
        left: 7.5%;
        margin-top: 5vh;
    }
    .have-finger::after {
        display: none;
    }
    .have-finger::before {
        width: 35px;
        height: 35px;
        display: block;
        content: '';
        background-image: url('https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/tap.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
        float: left;
        margin-right: 1vw;
    }
    .index-article-use-video {
        padding-top: 5vh;
        border-radius: 0;
    }
    .mirror-img {
        width: 48%;
        margin: 10vh 1% 0;
        float: left;
    }
    .index-article-out-text.index-mirror-text {
        font-size: 1.2em !important;
        float: left;
        margin: 15vh 0 5vh;
    }
    .index-article-out-icon-block {
        float: left;
        margin: 0 auto;
        /* width: 30%; */
    }
    .index-article-out-container-text {
        font-size: 48px;
    }
    .index-article-out-container-text-li {
        font-size: 35px;
        font-weight: 300;
    }
    .index-article-out-container-text.why-to-select-title {
        color: rgb(36, 121, 143);
        font-weight: bold;
        text-shadow: none;
        text-align: left;
    }
    .index-article-out-btn.mirror-btn {
        float: left;
        /* width: 20%; */
        margin: 10vh 5%;
        cursor: pointer;
    }
    .index-article-out-btn.mirror-btn.go-info {
        width: 250px;
        margin-left: 7.5%;
        margin-bottom: unset;
    }
    .intro-wrap-block-new-five-curriculum {
        height: auto;
    }
    .get-course-block {
        /* position: absolute;
        top: 28vh;
        right: -10%; */
        width: 70%;
        position: relative;
    }
    #get-course-link {
        width: 260px;
        height: 60px;
        background: linear-gradient(180deg,#FF9A7B,#FF9898);
        border-radius: 15px;
        color: #F7F7F7;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        font-weight: 500;
        margin-top: 4vh;
    }
    .get-course-link-img {
        width: 100%;
    }
    .about-course-series-data-outside-block {
        display: flex;
        align-items: baseline;
        justify-content: center;
    }
    .about-course-series-data-block.open {
        width: 21%;
        background: #f7f7f7;
        border: 1px solid #bfbdbd;
        margin: 6vh 1vw 0;
        border-radius: 10px;
        padding-bottom: 15px;
        min-height: 220px !important;
        max-height: 500px !important;
    }
    .about-course-data-block {
        cursor: pointer;
    }
    .about-course-data-block.open {
        height: 125px;
    }
    .index-article-out-container-text.new-mami {
        text-align: center;
        z-index: 1;
    }
    .index-article-little-title.new-mami {
        width: fit-content;
        font-size: 25px;
        margin: 150px 0 2vh 5vw;
    }
    .index-article-text.new-mami {
        font-size: 25px;
        margin-left: 5vw;
        width: fit-content;
        font-weight: 500;
    }
    .mami-mura-img {
        position: absolute;
        bottom: 0;
        right: -5vw;
        width: 70%;
    }
    .go-new-mamimura {
        height: 40vh;
        min-height: 300px;
        background-position: -30px 10px;
    }
    .index-official-certification {
        margin: 5vh 1vw;
        width: 28%;
        height: 190px;
    }
    .index-official-certification p {
        font-size: 15px;
    }
    .index-official-certification p:first-child {
        font-size: 20px;
    }
    .last-title {
        font-size: 48px;
        color:#24798F;
        font-weight: bold;
        margin: 0 auto;
        width: 90%;
        max-width: 1366px;
        text-align: center;
    }
    .last-pay-title {
        font-size: 48px;
        text-align: center;
    }
    .mamiyoga-assay-share-icon-box {
        display: none;
    }
    .agree-block {
        display: flex;
        align-items: center;
        justify-content: center;
        margin:5vh auto 0;
        width: 60%;
    }
    .agree-block .mamiyoga-intro-agree {
        margin: 0 1vw;
        color: #989898;
    }
    .agree-block .mamiyoga-intro-agree:last-child {
        display: none;
    }
    .mamiyoga-intro-agree a, .mamiyoga-intro-agree a:visited {
        color: #989898;
    }
    .about-course-data-wrap.qa {
        margin: 5vh 0 0;
        width: 40%;
    }
    .about-course-data-block:nth-child(4).qa.open {
        height: 110px;
    }
    .about-course-data-wrap.qa.long-style {
        min-height: 295px;
    }
    .about-course-data-wrap.qa.long-style:first-child .about-course-data-block.qa.open:nth-child(3) {
        height: 220px;
    }
    .about-course-data-wrap.qa.long-style:last-child .about-course-data-block.qa.open:first-child {
        height: 530px;
    }
    .about-course-data-wrap.qa.long-style:first-child .about-course-data-block.qa.open:nth-child(3) img {
        max-height: 120px;
        min-height: 95px;
    }
    .about-course-data-wrap.qa.long-style:last-child .about-course-data-block.qa.open:first-child img {
        max-height: 430px;
        min-height: 430px;
    }
    /* 登入面板 */
    .login-column{
        margin-top: 11px;
        width: 67%;
        height: 53px;
    }
    .login-column-label{
        text-align: left;
        color: #707070;
        font-size: 11px;
        line-height: 20px;
        margin-bottom: 6px; 
        padding-left: 5px;
    }
    .login-column-input{
        height: 27px;
        width: 100%;
        border-radius: 8px;
        border: none;
        background: #F3F3F3;
    }
    .reg-text2{
        margin-top: 11px;
        font-size: 13px;
        color: #8F8F8F;
    }
    .btn-login-and-signup-container {
        display: flex;
        margin-top: 3vh;
        justify-content: flex-end;
        width: 67%;
    }
    .mamiyoga-login-btn-to-login {
        width: 100%;
        height: 45px;
        color: #F8F7F8;
        margin: 0 auto;
        background: #24798F;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 2px;
        border-style: none;
        cursor: pointer;
    }
    .third-party-login {
        color: #24798F;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0;
        display: flex;
        align-items: center;
    }
    .third-party-login img {
        height: 25px;
    }
    /* 底部面板 */
    .mamiyoga-intro-wrap {
        padding-bottom: 100px;
    }
    .index-new-footer {
        overflow: unset;
        position: relative;
    }
    .index-new-footer img {
        opacity: 1;
        width: 35%;
        max-width: 400px;
        position: absolute;
        bottom: 0;
        left: 10%;
    }
    .index-new-footer-btn-block {
        margin-left: 50%;
        align-items: center;
    }
    .index-new-footer-btn-text {
        font-size: 35px;
    }
    .index-new-footer-btn {
        font-size: 25px;
        padding: 15px 20px;
        border-radius: 50px;
    }



    .intro-wrap-block-first,
    .intro-wrap-block-second,
    .intro-wrap-block-third, 
    .intro-wrap-block-four, 
    .intro-wrap-block-five {
        width: 450px;
    }
    .sticky {
        top: unset;
        bottom: 0;
        z-index: 999;
        box-shadow: 0 10px 10px rgba(0,0,0,.1);
    }
    
    .mamiyoga-each-course,.mamiyoga-course-video,
    .mamiyoga-course-middle,.mamiyoga-course-bottom,
    .mamiyoga-course-bottom-content,
    .mamiyoga-course-bottom-first, .mamiyoga-course-bottom-second,
    .iframe-container {
        width: 100%;
    }
    .iframe-container {
        min-height: 260px;
    }
    .mamiyoga-course-middle {
        padding: 8px 25px;
    }
    .mamiyoga-course-bottom-first, .mamiyoga-course-bottom-second {
        padding: 15px 0 15px 15px;
    }
    .mamiyoga-course-bottom {
        margin-top:30px;
        padding: 0 25px 10px;
    }
    .mamiyoga-go-to-divide-btn img {
        top: -15px;
        left: 130px;
    }
    #go-to-club {
        width: 17vw;
        left: 22vw;
        bottom: 7vh;
        min-width: 230px;
        max-width: 300px;
    }
    .info-desktop-red-btn.index-first{
        margin: 40px 10vw 0;
    }
}
@media (min-width: 769px) and (max-width: 1300px) {
    .about-course-teach-img{
        width: 50% !important;
    }
}
@media (max-width: 1300px) {
    #mother-childen-img {
        width: 40% !important;
        right: 5vw !important;
        min-width: 500px;
    }
}
@media (min-width: 480px) and (max-width: 600px) {
    .background-video {
        width: 100vw;
        position: absolute;
        z-index: -10;
        top: 0vh;
    }
}
@media (min-width: 601px) and (max-width: 768px) {
    .background-video {
        width: 100vw;
        position: absolute;
        z-index: -10;
        top: -25vh;
    }
}
@media (min-width: 769px) and (max-width: 860px) {
    .index-footer-title {
        font-size: 1.3em;
        width: 39%;
    }
    .index-official-certification p {
        font-size: 12px;
    }
    .index-article-out-container-text.why-to-select-title {
        font-size: 2.5em;
    }
    .intro-wrap-block-title.why-to-select-text {
        font-size: 16px;
    }
    .last-title {
        margin-left: 30px;
    }
}
@media (min-width: 769px) and (max-width: 1174px) {
    .about-course-data-title {
        font-size:  13px;
    }
    /* .about-course-series-data-block:nth-child(1) .about-course-data-block:nth-child(3),
    .about-course-series-data-block:nth-child(3) .about-course-data-block:nth-child(2) {
        height: 65px;
    } */
    .intro-wrap-block-new-second .about-course-data-block.open {
        height: 175px !important;
    }
    .intro-wrap-block-new-second .about-course-series-data-block.open:nth-child(1) .about-course-data-block.open:nth-child(4),
    .intro-wrap-block-new-second .about-course-series-data-block.open:nth-child(2) .about-course-data-block.open:nth-child(2),
    .intro-wrap-block-new-second .about-course-series-data-block.open:nth-child(2) .about-course-data-block.open:nth-child(3),
    .intro-wrap-block-new-second .about-course-series-data-block.open:nth-child(3) .about-course-data-block.open:nth-child(2),
    .intro-wrap-block-new-second .about-course-series-data-block.open:nth-child(3) .about-course-data-block.open:nth-child(4),
    .intro-wrap-block-new-second .about-course-series-data-block.open:nth-child(3) .about-course-data-block.open:nth-child(5),
    .intro-wrap-block-new-second .about-course-series-data-block.open:nth-child(4) .about-course-data-block.open:nth-child(2),
    .intro-wrap-block-new-second .about-course-series-data-block.open:nth-child(4) .about-course-data-block.open:nth-child(3),
    .intro-wrap-block-new-second .about-course-series-data-block.open:nth-child(4) .about-course-data-block.open:nth-child(4)   {
        height: 150px !important;
    }
    .intro-wrap-block-new-second .about-course-series-data-block:nth-child(4).open {
        min-height: 260px !important;
        max-height: 550px !important;
    }
}
@media (min-width: 769px) and (max-width: 1500px) {
    .about-course-data-circle {
        top: 0 !important;
    }
}
@media (max-width: 830px) and  (orientation:landscape) {
    .index-contain {
        height: 200vh;
    }
    .mamiyoga-index-intro {
        position: absolute;
    }
    
}
</style>