<template>
  <section id="memberMemberContent">
    <h1>會員資料</h1>
    <div class="memberList">
      <div class="avatar">
        <n-avatar round :size="150" :src="avatar" />
      </div>
      <div class="form">
        <div class="formContent">
          <p>
            姓名：<span>{{ users.name }}</span>
          </p>
          <p>
            帳號：<span>{{ users.account }}</span>
          </p>
          <p>
            信箱：<span>{{ users.email }}</span>
          </p>
          <p>
            手機號碼：<span>{{ users.phoneNr }}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { apiAuth } from "@/plugins/axios";
import Swal from "sweetalert2";

const user = useUserStore();
const { avatar } = storeToRefs(user);
const users = ref([]);
const init = async () => {
  try {
    const { data } = await apiAuth.get("/users/");
    users.value = data.result;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "失敗",
      text: error.isAxiosError ? error.response.data.message : error.message,
    });
  }
};
init();
</script>