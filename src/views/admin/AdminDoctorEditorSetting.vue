<template>
  <section id="doctorEditor">
    <h1>醫師管理</h1>
    <n-form
      class="doctorForm"
      ref="formRef"
      :model="doctorForm"
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
      <n-form-item label="醫師姓名" path="doctorName">
        <n-input
          v-model:value="doctorForm.doctorName"
          placeholder="請輸入醫師姓名"
        />
      </n-form-item>
      <n-form-item label="醫師照片" path="doctorPic">
        <n-upload v-model:file-list="doctorForm.doctorPic" accept="image/*">
          <n-button>上傳醫師照片</n-button>
        </n-upload>
      </n-form-item>
      <n-form-item label="醫師介紹" path="doctorDescription">
        <n-input
          v-model:value="doctorForm.doctorDescription"
          placeholder="Textarea"
          type="textarea"
          round
          clearable
          :autosize="{
            minRows: 3,
          }"
        />
        <template #clear-icon>
          <n-icon :component="TrashBinOutline" />
        </template>
      </n-form-item>
      <n-form-item :rail-style="railStyle" label="是否上架" path="doctorShow">
        <n-switch
          :rail-style="railStyle"
          v-model:checked="doctorForm.doctorShow"
        >
          <template #checked></template>
          <template #unchecked></template>
        </n-switch>
      </n-form-item>
      <div
        style="display: flex; justify-content: flex-end"
        class="submitButton"
      >
        <a href="#admin/admin-doctor-setting">
          <n-spin :show="doctorForm.show">
            <button type="submit">保存</button>
          </n-spin>
        </a>
      </div>
    </n-form>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import Swal from "sweetalert2";
import { apiAuth } from "@/plugins/axios";
import { useRouter } from "vue-router";

const size = ref("medium");
const formRef = ref(null);
const router = useRouter();

const doctorForm = reactive({
  _id: "",
  doctorName: "",
  doctorPic: [],
  doctorDescription: "",
  doctorShow: false,
  idx: -1,
  show: false,
});

const railStyle = ({ focused, checked }) => {
  const style = {};
  if (checked) {
    style.background = "#2473cb";
    if (focused) {
      style.boxShadow = "0 0 0 2px #2169BA";
    }
  } else {
    style.background = "#959595";
    if (focused) {
      style.boxShadow = "0 0 0 2px #595959";
    }
  }
  return style;
};

const rules = {
  doctorName: {
    required: true,
    trigger: ["blur", "input"],
    validator(rule, value) {
      if (!value) {
        return new Error("需要名字");
      } else if (
        !/^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/.test(value)
      ) {
        return new Error("名字格式錯誤");
      } else if (value.length <= 1) {
        return new Error("字數不能少於2");
      } else if (value.length >= 10) {
        return new Error("字數不能多於10");
      }
      return true;
    },
  },
  doctorDescription: {
    required: true,
    trigger: ["blur", "input"],
    validator(rule, value) {
      if (!value) {
        return new Error("需要描述");
      } else if (value.length <= 9) {
        return new Error("字數不能少於10");
      } else if (value.length >= 99) {
        return new Error("字數不能多於100");
      }
      return true;
    },
  },
  doctorPic: {
    required: true,
    validator(rule, value) {
      if (!value) {
        return new Error("需要圖片");
      } else if (
        !value.length ||
        (value[0]?.type?.includes("image") && value[0]?.size < 1024 * 1024)
      ) {
        return new Error("檔案格式不符");
      }
      return true;
    },
  },
};

const submitForm = async () => {
  doctorForm.show = true;
  const fd = new FormData();
  for (const key in doctorForm) {
    if (["_id", "idx", "show"].includes(key)) continue;
    else if (key === "doctorPic") fd.append(key, doctorForm[key][0].file);
    else fd.append(key, doctorForm[key]);
  }
  try {
    if (doctorForm._id.length === 0) {
      await apiAuth.post("/doctors", fd);
      // doctors.push(data.result);
      Swal.fire({
        icon: "success",
        title: "成功",
        text: "新增成功",
      });
      router.push("/admin/admin-doctor-setting");
    }
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "失敗",
      text: error.isAxiosError ? error.response.data.message : error.message,
    });
  }
  doctorForm.show = false;
};
</script>