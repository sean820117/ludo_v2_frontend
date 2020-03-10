<template>
    <div>
      <div class="index-contain" style="min-height:100vh;overflow:visible;">
          <div class="background-video-contain" :style="{display: $i18n.locale == 'JP' ? 'none': ''}">
              <div style="width:100%;height:100vh;background: rgba(0, 0, 0,0.2);position: absolute;" :style="{minHeight: $mq == 'desktop' ? '1000px':''}"></div>
              <video muted loop autoplay playsinline class="background-video">
                  <source src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/mamiyoga-new-title-4.mp4" type="video/mp4">      
              </video>
          </div>
          <mamiyoga-hamburger-header v-if="$mq !== 'desktop' && $i18n.locale == 'JP'"></mamiyoga-hamburger-header>
          <mamiyoga-desktop-nav-header v-if="$mq == 'desktop' && $i18n.locale == 'JP'" :bgColor="'#24798f'" :style="{position: 'unset'}"></mamiyoga-desktop-nav-header>
          
          
          <div class="mamiyoga-index-intro" style="position: absolute;" :style="{display: $i18n.locale == 'JP' ? 'none':''}">
              <mamiyoga-hamburger-header v-if="$mq !== 'desktop'"></mamiyoga-hamburger-header>
              <mamiyoga-desktop-nav-header v-else :bgColor="'#24798f'"></mamiyoga-desktop-nav-header>

              <h1 id="mamiyoga-index-title" v-if="$mq != 'desktop'" v-html="$t('mobile_index_first_title')" :style="{fontSize: $i18n.locale == 'JP'? '35px':''}"></h1>
              <h1 id="mamiyoga-index-title" v-else>{{$t('desktop_index_first_title')}}</h1>
              <h2 id="mamiyoga-index-title-des" :style="{fontSize: $i18n.locale == 'JP' && $mq != 'desktop' ? '14px':''}">{{$t('desktop_index_first_des_1')}}</h2>
              <h2 id="mamiyoga-index-title-des" :style="{margin: $mq === 'desktop' ? '0vh 10vw 1vh':'',fontSize: $i18n.locale == 'JP'  && $mq != 'desktop'? '14px':''}">{{$t('desktop_index_first_des_2')}}</h2>
          </div>
      </div>
      <main>
        <section style="position: relative;">
          <h1 class="title">產後為什麼要做瑜珈 ?</h1>
          <p class="pregnant-yoga-content">
            女性在懷孕後，體內的孕酮開始增加，以幫助胚胎著床穩固會增加尿液中鈉的濃度，造成浮腫現象。<br />
            孕婦瑜伽能增進體內血液循環及新陳代謝，減輕孕期水腫的現象，還媽咪們一個好模樣。<br />
            <br />
            鍛鍊肌肉的彈性，有助於產後形體的恢復，預防子宮脫垂、尿失禁等問題。<br />
            隨著我們關節與肌肉增強，我們的循環也跟著增強，自然也促進了我們免疫力的提升，<br />
            更重要的是創造了一個孕育健康寶寶的環境。
          </p>
        </section>
        <section>
          <h1 class="title">產後瑜珈能幫助我什麼？</h1>
          <p class="pregnant-yoga-content">
            孕婦瑜伽許多招式都可以促進腸胃蠕動，幫助排便與排氣，減輕脹氣與便秘問題。<br />
            瑜伽有益於改善睡眠，消除失眠，讓人健康舒適.形成積極健康的生活態度。<br />
            瑜伽還幫助人們進行自我調控，使身心合而為一。
          </p>
        </section>
        <section>
          <h1 class="title">瑜珈能訓練到哪些肌群？</h1>
          <p class="pregnant-yoga-content">
            孕婦瑜珈可以幫助我們在加強骨盆，臀大肌，手臂以及肩膀的力量。
          </p>
        </section>
        <section>
          <h1 class="title">我能改善長期痠痛的問題嗎？</h1>
          <p class="pregnant-yoga-content">
            我們的背部，臀部，胸部，上背部和肩部的肌肉承受的負重也越多。<br />
            甚至會有脊柱前凸和下背部過於彎曲等現象。<br />
            <br />
            而我們的骨盆也會因寶寶的成長越來越緊繃，正如我們的胸部成長，<br />
            讓我們的上背部承受更多的張力，導致我們的肩頸也容易覺得僵硬。而孕婦瑜珈正好可以舒緩這幾個現象。
          </p>
        </section>
        <section>
          <h1 class="title">呼吸，是瑜珈的關鍵</h1>
          <p class="pregnant-yoga-content">
            透過呼吸練習，我們的神經系統會慢慢進入副交感神經區，而此區正是負責管理放鬆的機制。<br />
            當我們的身體透過呼吸進入此放鬆區，我們的消化系統得以正常運作，<br />
            我們也容易得到比較好的睡眠，進而增強我們的免疫系統。<br />
            <br />
            呼吸提供人體必要的氧氣，而伴隨著呼吸與調勻的練習，可以確保我們的血壓與心跳不過度升高，<br />
            並協助我們的副交感神經在放鬆的模式，舒緩我們生產的緊張，只要我們不過度情緒化與緊張，寶寶也會很穩定平靜。
          </p>
          <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/introduction/pregnant-yoga/09.png" alt="09.png" />
        </section>
        <section>
          <h1 class="title">為什麼選擇孕產瑜珈</h1>
          <p class="pregnant-yoga-content">
            懷孕期間運動到底可以做到哪個強度一直是許多有運動習慣的媽咪最常的問題之一，<br />
            事實上有個非常適合各位孕媽咪做的運動就是『孕婦瑜珈』。<br />
            <br />
            媽咪在懷孕期間做孕婦瑜伽，不僅可以增強肌肉張力，同時也可提高肌肉組織的柔韌度，<br />
            也因為孕婦瑜伽的動作比較緩慢，有助於孕婦和寶寶的健康，同時可幫助孕媽順產。<br />
            <br />
            今天就來跟大家介紹一下孕婦瑜珈能帶來的好處吧！
          </p>
          <div id="grid">
            <!-- cloumn 1 -->
            <div class="grid-wrapper">
              <div class="grid-item">
                <div class="grid-title">緩解緊張情緒</div>
                <div class="grid-img" style="margin-bottom: 25px">
                  <img
                    src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/introduction/pregnant-yoga/body_cell_shinkei.png"
                    style="transform: rotate(45deg);position: absolute; top: -20px;"
                  />
                </div>
                <p class="grid-text">
                  透過呼吸練習，讓神經系統會緩慢<br />
                  進入副交感神經區，使身體全面放鬆
                </p>
              </div>
            </div>
            <!-- cloumn 2 -->
            <div class="grid-wrapper">
              <div class="grid-item">
                <div class="grid-title">緩解緊張情緒</div>
                <div class="grid-img" style="margin-bottom: 25px">
                  <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/introduction/pregnant-yoga/muscle.png" style="position: absolute;" />
                </div>
                <p class="grid-text">
                  減緩懷孕導致身型改變的痠痛，<br />
                  放鬆身體肌肉
                </p>
              </div>
            </div>
            <!-- cloumn 3 -->
            <div class="grid-wrapper">
              <div class="grid-item">
                <div class="grid-title">改善睡眠品質</div>
                <div class="grid-img" style="margin-bottom: 28px">
                  <img
                    src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/introduction/pregnant-yoga/sleep_dakimakura.png"
                    style="position: absolute;"
                  />
                </div>
                <p class="grid-text">
                  練習方式能影響自主神經系統，<br />
                  使情緒更加穩定達到深層的放鬆，<br />
                  減低內外在壓力
                </p>
              </div>
            </div>
            <!-- cloumn 4 -->
            <div class="grid-wrapper">
              <div class="grid-item">
                <div class="grid-title">與寶寶建立聯繫</div>
                <div class="grid-img" style="margin-bottom: 28px">
                  <img
                    src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/introduction/pregnant-yoga/baby_shake_hands.png"
                    style="position: absolute;"
                  />
                </div>
                <p class="grid-text">
                  媽媽愉快的情緒會直接影響寶寶，<br />
                  能夠與寶寶建立更親密的聯結
                </p>
              </div>
            </div>
            <!-- cloumn 5 -->
            <div class="grid-wrapper">
              <div class="grid-item">
                <div class="grid-title">加速產後修復</div>
                <div class="grid-img" style="margin-bottom: 25px;height: 120px;">
                  <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/introduction/pregnant-yoga/blood.png" style="position: absolute;" />
                </div>
                <p class="grid-text">
                  控制懷孕增加的體重，增進體內血液循環<br />
                  與新陳代謝改善因孕酮增加造成的水腫
                </p>
              </div>
            </div>
            <!-- cloumn 6 -->
            <div class="grid-wrapper">
              <div class="grid-item">
                <div class="grid-title">縮短分娩時間</div>
                <div class="grid-img" style="margin-bottom: 28px">
                  <img
                    src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/introduction/pregnant-yoga/kega_dakkyu_kotsuban.png"
                    style="position: absolute;"
                  />
                </div>
                <p class="grid-text">
                  增強肌肉張力與平衡感，<br />
                  提高柔韌度與靈活度有助於盆底的調整，<br />
                  更好地控制分娩
                </p>
              </div>
            </div>
          </div>
          <div id="grid-cell-list">
            <div class="grid-cell" style="opacity: 1;background-color: #707070;"></div>
            <div class="grid-cell"></div>
            <div class="grid-cell"></div>
            <div class="grid-cell"></div>
            <div class="grid-cell"></div>
          </div>
        </section>
        <section id="howlong">
          <div>
            <h1 class="title">多久做一次瑜珈才有效</h1>
            <p class="pregnant-yoga-content">
              練習瑜伽要有耐心，沒有人可以在2-3周就可以看到自己很明顯的進步，<br />
              普通練習者而言，每周保證3次及以上的頻率比較好。<br />
              <br />
              我們身體的很多肌群是需要至少3個月的密集練習才能看到成效，<br />
              非密集的練習則需要一年甚至更長的時間，<br />
              一般練習半年的時間身體線條會有較明顯的變化，<br />
              所以循序漸進，持之以恆地堅持練習吧！
            </p>
          </div>
          <div>
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/introduction/pregnant-yoga/growing up.png" />
          </div>
        </section>
        <section>
          <h1 class="title">瑜珈千萬種，哪些動作是基礎必要的？</h1>
          <p class="pregnant-yoga-content">
            事實上，沒有所謂最適合在家練的瑜珈，只有最適合你的瑜珈，<br />
            初學者可以先從艾揚格、哈達、熱瑜珈、孕婦瑜珈等較為緩和的瑜珈先開始練習。
          </p>
          <div class="position">
            <!-- position 1 -->
            <div class="position-item">
              <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/introduction/pregnant-yoga/Restorative yoga.png" id="position-img-1" />
            </div>
            <!-- position 2 -->
            <div class="position-item">
              <img
                src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/introduction/pregnant-yoga/Iyengar yoga.png"
                id="position-img-2"
              />
            </div>
            <!-- position 3 -->
            <div class="position-item">
              <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/introduction/pregnant-yoga/mom yoga.png" id="position-img-3" />
            </div>
            <!-- position 4 -->
            <div class="position-item">
              <img
                src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/introduction/pregnant-yoga/Hatha.png"
                id="position-img-4"
              />
            </div>
            <!-- position 5 -->
            <div class="position-item">
              <img
                src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/introduction/pregnant-yoga/Bikram yoga.png"
                id="position-img-5"
              />
            </div>
          </div>
          <div id="position-cell-list">
            <div class="position-cell" style="background-color: #707070;opacity: 1;"></div>
            <div class="position-cell"></div>
            <div class="position-cell"></div>
            <div class="position-cell"></div>
            <div class="position-cell"></div>
          </div>
        </section>
        <section>
          <h1 class="title">我該如何安排自己的課？</h1>
          <p class="pregnant-yoga-content">
            在家練習最大的敵是「懶惰」，由於沒有人監督，有些人通常練一下覺得累了，就會自我放鬆，<br />
            比如說間斷一下，或是乾脆停下來休息，這樣練習瑜珈是不會有什麼效果的。<br />
            <br />
            所以若有先進行完整的課程安排會是更好的方法，排定課程時切記，<br />
            若是過去沒有運動習慣可以先排較輕鬆並且不會花費太多時間的方式開始，以避免因為太累無法持之以恆。<br />
            <br />
            決定了身心需要哪種練習後，下一步就是時間問題。不同的時間選擇不同的練習就能有要達到好的運動效果。<br />
            如果是自己練習，把鬧鐘定在想結束前 10
            分鐘，才知道何時開始收尾。練習時間甚至可依據咖啡沖好、<br />
            泡澡水放好、或是伴侶餵小孩吃早餐的時間而定，掌握自己的時間，適合自己就好。
          </p>
          <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/introduction/pregnant-yoga/diary.png" />
        </section>
        <section>
          <h1 class="title">入門瑜珈的必備用品</h1>
          <p class="pregnant-yoga-content">
            在家練習瑜珈，第一件事當然是一張瑜伽墊啦，千萬不要在床墊或是地板上練習，容易扭傷。<br />
            建議選用那些比較環保，耐壓和防滑性能比較好的瑜伽墊。<br />
            <br />
            瑜珈磚與瑜伽伸展帶，每人身形與柔軟度都不同，磚與伸展帶可協助你更加照顧到目標區域。<br />
            音響，有經驗者可以用自己熟悉的音樂，或是直接觀看APP或影片教學得搭配音樂。
          </p>
          <div id="items">
            <div></div>
            <img src="https://ludo-beta.s3-ap-southeast-1.amazonaws.com/static/mommiyoga/introduction/pregnant-yoga/yoga mat.png" style="margin: 0; min-width: 246px;" />
          </div>
          <div style="display: grid; grid-template-columns: 1fr;">
            <button id="experience" @click="$router.push('/menu')">
              <span
                style="text-align: center; color: #f7f7f7; font-size: 2.33rem;"
                >體驗課程</span
              >
            </button>
          </div>
        </section>
      </main>
    </div>
</template>

<script>
import MamiyogaHamburgerHeader from '~/components/mamiyoga/MamiyogaHamburgerHeader.vue';
import MamiyogaDesktopNavHeader from '~/components/mamiyoga/MamiyogaDesktopNavHeader.vue';

export default {
    layout:'introduction',
    head(){
        return  {
            meta: [
                { httpEquiv : 'X-UA-Compatible' , content:"ie=edge"},
            ],
        }
    },
    components: {
        // MamiyogaHeader,
        MamiyogaHamburgerHeader,
        MamiyogaDesktopNavHeader,
        // MamiyogaIndexHeader,
    },
}
</script>

<style scoped>
img {
  width: 100%;
  object-fit: contain;
  margin-top: 21px;
}

main {
  width: 100vw;
  background-image: linear-gradient(to bottom, #f2eeec 19%, #ced8db 67%);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 2rem 4.3vw 0 4.3vw;
}

section {
  width: 100%;
}

/* class */
.title {
  font-family: PingFangHK;
  font-size: 3rem;
  color: #24798f;
  margin-top: 5rem;
  margin-bottom: 1.16rem;
}

.pregnant-yoga-content {
  font-family: PingFangTC-B5pc-H;
  font-size: 1.6rem;
  color: #272727;
}

/* grid */
#grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

#grid::-webkit-scrollbar {
  width: 0px;
  background-color: transparent;
}

.grid-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid-item {
  width: 320px;
  height: 320px;
  border-radius: 30px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px 30px 30px 0;
  z-index: 1000;
}

.grid-title {
  font-family: GenJyuuGothicP;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #1d7182;
}

.grid-img {
  width: 140px;
  height: 140px;
  position: relative;
} 

.grid-text {
  font-family: HiraginoSansCNS-W3-B5pc-H;
  font-size: 1.27rem;
  color: #333333;
  text-align: center;
}

#grid-cell-list {
  display: none;
  justify-content: center;
  align-items: center;
}

.grid-cell {
  width: 10px;
  height: 10px;
  opacity: 0.7;
  background-color: #d1d1d1;
  border-radius: 50%;
  margin: 4px;
}

/* position */
.position {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.position-item {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
#position-img-1 {
  width: 35vw;
}
#position-img-2 {
  width: 35vw; margin-top: 120px;
}
#position-img-3 {
  width: 35vw;
}
#position-img-4 {
  width: 35vw; margin-top: 120px;
}
#position-img-5 {
  width: 35vw; margin-left: 200px;
}
#position-cell-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.position-cell {
  width: 10px;
  height: 10px;
  opacity: 0.7;
  background-color: #d1d1d1;
  border-radius: 50%;
  margin: 4px;
}

/* id */
#howlong {
  display: grid;
  grid-template-columns: 60% 40%;
}

#experience {
  width: 514px;
  height: 70px;
  border-radius: 33px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #24798f;
  margin: 100px auto 30px auto;
  text-decoration: none;
}

#items {
  display: grid;
  grid-template-columns: 1fr 35vw;
}

/* media query */
@media (max-width: 600px) {
  .grid-item {
    width: 275px;
    height: 275px;
  }
  #howlong {
    grid-template-columns: 1fr;
  }
  #experience {
    width: 210px;
    height: 43px;
  }
  #items {
    grid-template-columns: 1fr 246px;
    margin-top: 40px;
  }
  #grid {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
  #grid-cell-list {
    display: flex;
  }
}

@media (max-width: 1000px) {
  .position {
    display: flex;
    overflow-x: scroll;
  }
  .position::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background-color: transparent;
  }
  #position-img-1,
  #position-img-2,
  #position-img-3,
  #position-img-4,
  #position-img-5 {
    width: 80vw;
    margin: 40px 30px 0 0;
  }
}

/* header */
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
.background-video-contain {
    height: 100vh;
    overflow: hidden;
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
}
</style>