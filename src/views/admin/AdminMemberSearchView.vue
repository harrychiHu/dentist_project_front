<template>
  <section id="memberMemberContent">
    <h1>會員資料</h1>
    <div class="memberList">
      <div class="avatar">
        <n-avatar
          round
          :size="150"
          :src="'https://source.boringavatars.com/beam/120/' + users.account"
        />
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
import { reactive } from "vue";
import { apiAuth } from "@/plugins/axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";

const router = useRoute();
const users = reactive({
  _id: "",
  account: "",
  email: "",
  phoneNr: "",
  name: "",
});
const init = async () => {
  try {
    const { data } = await apiAuth.get("/users/search/" + router.params.id);
    users._id = data.result._id;
    users.account = data.result.account;
    users.email = data.result.email;
    users.phoneNr = data.result.phoneNr;
    users.name = data.result.name;
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