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
          <h2>診所介紹</h2>
          <p>
            喜樂芽牙醫診所 (原大直牙醫診所) 位於台北市松山區
            專業矯正牙醫診所，提供全方位口腔醫療照護。另在2019年在宜蘭市宜中路上,開立喜樂芽牙醫診所宜蘭分部，全新千萬等級醫療儀器設備與裝潢。<br />
            台大碩士醫師團隊醫療，提供安全 舒適的醫療環境 與 現代化儀器設備 之外
            注重無菌觀念，一人一機，手術用診療椅。診所備有醫學中心級環口數位電腦放射線診斷儀，影像清晰診斷精確，方便解說病況。診療項目包括人工植牙、齒顎矯正、固定假牙含全瓷牙冠、牙齒美白、一般牙科等等。
            強調醫療品質及服務，環境舒適。
          </p>
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