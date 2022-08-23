<template>
  <div class="container">
    <section class="bg" id="team_header">
      <div class="title section">
        <h2>醫師介紹</h2>
        <h3>TEAM</h3>
      </div>
    </section>
    <section id="team_content">
      <div class="team_row section">
        <n-card v-for="doctor in doctors" :key="doctor._id">
          <template #cover>
            <img :src="doctor.doctorPic" />
          </template>
          <h2>{{ doctor.doctorName }}</h2>
          <p>{{ doctor.doctorDescription }}</p>
        </n-card>
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
const doctors = reactive([]);

const init = async () => {
  try {
    const { data } = await api.get("/doctors/allHome");
    doctors.push(...data.result);
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