<template>
  <div class="container">
    <section id="home_header">
      <n-carousel show-arrow autoplay draggable>
        <img
          class="carousel-img"
          v-for="img in banners"
          :src="img.bannerPic"
          :key="img._id"
        />
      </n-carousel>
    </section>
    <section class="bg" id="home_content">
      <div class="servers section">
        <div class="servers_card">
          <img src="../../assets/home/server01.png" />
          <h3>家庭牙科</h3>
          <p>
            家庭牙科以推動全人照護醫療為出發點，以病患為治療中心，提供患者全方位的牙醫醫療諮詢與服務，使病患獲得整體性的口腔治療計畫及照護
          </p>
        </div>
        <div class="servers_card">
          <img src="../../assets/home/server02.png" />
          <h3>美容牙科</h3>
          <p>
            恢復牙體的形態、功能與美觀之牙科治療，並提供病人口腔衛教，牙齒形態、咬合功能及美觀重建發展全方位美容牙科治療
          </p>
        </div>
        <div class="servers_card">
          <img src="../../assets/home/server03.png" />
          <h3>人工植牙</h3>
          <p>
            以外科手術植入齒槽骨中，待人工牙根與齒槽骨緊密結合後，便具有類似原牙齒牙根的功能
          </p>
        </div>
        <div class="servers_card">
          <img src="../../assets/home/server04.png" />
          <h3>齒顎矯正</h3>
          <p>
            治療不整齊的牙齒排列及不和諧的上下顎骨，以達
            到符合「美觀、功能及健康」的顏面齒顎口腔系統
          </p>
        </div>
      </div>
    </section>
    <section id="home_timetable">
      <div class="timetable section">
        <h2>看診時間</h2>
        <div class="timetable_img">
          <img src="../../assets/home/timetable.png" />
        </div>
      </div>
    </section>
    <section id="home_team" class="bg">
      <div class="team section">
        <h2>專業醫療團隊</h2>
        <h3>想更了解牙醫師們嗎？</h3>
        <h3>點擊下方按鈕，來了解一下吧!</h3>
        <n-button type="primary" color="#64C1C6" size="large" @click="team">
          團隊介紹
        </n-button>
      </div>
    </section>
    <section id="home_article">
      <div class="article section">
        <div class="article_title">
          <h2>保健文章</h2>
          <h3>最新的牙齒保健訊息與相關專業知識都在這</h3>
        </div>
        <div class="article_card">
          <n-card v-for="article in articles" :key="article._id">
            <template #cover>
              <img :src="article.articlePic" />
            </template>
            <h2>
              {{ article.articleTitle }}
            </h2>
            <n-ellipsis style="max-width: 240px" :tooltip="false">
              {{ article.articleDescription }}
            </n-ellipsis>
            <div class="article_btn">
              <n-button
                type="primary"
                color="#64C1C6"
                size="large"
                @click="team"
              >
                Read More
              </n-button>
            </div>
          </n-card>
        </div>
        <div class="article_more_btn">
          <n-button type="primary" color="#64C1C6" size="large" @click="team">
            更多文章
          </n-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { api } from "@/plugins/axios";
import Swal from "sweetalert2";

const router = useRouter();

const banners = reactive([]);
const articles = reactive([]);

const team = () => {
  router.push("/team");
};

const init = async () => {
  try {
    const { data } = await api.get("/banners/allHome");
    banners.push(...data.result);
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "失敗",
      text: "取得商品資料失敗",
    });
    router.go(-1);
  }
};
init();

const init1 = async () => {
  try {
    const { data } = await api.get("/articles/allHome");
    articles.push(...data.result.slice(-4));
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "失敗",
      text: "取得商品資料失敗",
    });
    router.go(-1);
  }
};
init1();
</script>