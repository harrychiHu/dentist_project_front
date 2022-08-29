<template>
  <section id="memberResever">
    <h1>線上預約</h1>
    <n-form
      class="reseverForm"
      ref="formRef"
      :model="reseverForm"
      :rules="rules"
      label-placement="left"
      label-width="auto"
      require-mark-placement="right-hanging"
      :size="size"
      :style="{
        maxWidth: '1000px',
      }"
      @submit.prevent="submitForm"
    >
      <n-form-item label="預約時間" path="date">
        <n-date-picker
          v-model:value="reseverForm.date"
          type="datetime"
          clearable
        />
      </n-form-item>
      <n-form-item label="選擇服務" path="category">
        <n-select
          v-model:value="reseverForm.category"
          placeholder="選擇服務"
          :options="reseverCategories"
        />
      </n-form-item>

      <n-form-item label="備註" path="description">
        <n-input
          v-model:value="reseverForm.description"
          placeholder="可以在這寫下備註"
          type="textarea"
          :autosize="{
            minRows: 3,
          }"
        />
        <template #clear-icon>
          <n-icon :component="TrashBinOutline" />
        </template>
      </n-form-item>

      <div
        style="display: flex; justify-content: flex-end"
        class="submitButton"
      >
        <a href="#member/">
          <n-spin :show="reseverForm.show">
            <button type="submit">送出</button>
          </n-spin>
        </a>
      </div>
    </n-form>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";
import Swal from "sweetalert2";
import { apiAuth } from "@/plugins/axios";
// import { useRouter } from "vue-router";

const formRef = ref(null);
const size = ref("medium");
// const router = useRouter();

const reseverForm = reactive({
  _id: "",
  date: Date.now(),
  category: "",
  description: "",
  idx: -1,
  show: false,
});

const rules = {
  date: {
    required: true,
  },
  category: {
    required: true,
  },
};

const reseverCategories = [
  {
    label: "齒顎矯正",
    key: "orthodontics",
    value: "齒顎矯正",
  },
  {
    label: "人工植牙",
    key: "dental implant",
    value: "人工植牙",
  },
  {
    label: "美容牙科",
    key: "aesthetic",
    value: "美容牙科",
  },
  {
    label: "家庭牙科",
    key: "family dentistry division",
    value: "家庭牙科",
  },
];

const submitForm = async () => {
  reseverForm.show = true;
  try {
    if (reseverForm._id.length === 0) {
      await apiAuth.post("/resevers", reseverForm);
      Swal.fire({
        icon: "success",
        title: "成功",
        text: "新增成功",
      });
      console.log(reseverForm);
      // router.push("/member/");
    }
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "失敗",
      text: error.isAxiosError ? error.response.data.message : error.message,
    });
  }
  reseverForm.show = false;
};
</script>