<template>
  <div class="container">
    <section class="bg" id="about_header">
      <div class="title section">
        <h2>診所資訊</h2>
        <h3>ABOUT</h3>
      </div>
    </section>
    <section id="about_content">
      <div class="about_wrap section">
        <div class="about_card">
          <img src="../../assets/information01.png" />
        </div>
        <div class="about_card">
          <div class="card">
            <h2>診所介紹</h2>
            <p>
              喜樂芽牙醫診所是一對喜愛宜蘭的台北夫妻醫生來此特別設立的。我們具有專業又細心的醫生、親切又活潑的助理和全新的醫療儀器設備；以及舒適乾淨的看診環境，讓每一位不只解決口腔內的問題，心理上也有所撫慰
            </p>
          </div>
          <div class="card">
            <h2>診所理念</h2>
            <p>
              我們希望透過醫師的專業判斷與療程計畫，以及的助理協助來幫助每位病患解決疑難雜症和指導正確的牙醫保健觀念，讓人們重拾健康和自信的笑容
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="about_timetable" class="bg">
      <div class="timetable section">
        <h2>看診時間</h2>
        <div class="timetable_img">
          <img src="../../assets/home/timetable.png" />
        </div>
      </div>
    </section>
    <section id="about_pic">
      <div class="section pic">
        <h2>環境與設備</h2>
        <n-carousel show-arrow autoplay draggable>
          <img
            class="carousel-img"
            v-for="img in banners"
            :src="img.image"
            :key="img._id"
          />
        </n-carousel>
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
</script>