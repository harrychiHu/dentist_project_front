<template>
  <section id="ArticleEditor">
    <h1>文章管理</h1>
    <n-form
      class="articleForm"
      ref="formRef"
      :model="articleForm"
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
      <n-grid :cols="24" :x-gap="24">
        <n-form-item-gi :span="24" label="選擇分類" path="category">
          <n-select
            v-model:value="articleForm.category"
            :options="articleCategories"
            placeholder="選擇分類"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="24" label="文章標題" path="title">
          <n-input
            v-model:value="articleForm.title"
            placeholder="請輸入文章標題"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="12" label="文章日期" path="date">
          <n-date-picker
            v-model:value="articleForm.date"
            type="datetime"
            clearable
          />
        </n-form-item-gi>
        <n-form-item-gi
          :span="12"
          :rail-style="railStyle"
          label="是否上架"
          path="online"
        >
          <n-switch :rail-style="railStyle" v-model:value="articleForm.online">
            <template #checked></template>
            <template #unchecked></template>
          </n-switch>
        </n-form-item-gi>
        <n-form-item-gi :span="24" label="文章圖片" path="image" :max="1">
          <n-upload v-model:file-list="articleForm.image" accept="image/*">
            <n-button>上傳文章圖片</n-button>
          </n-upload>
        </n-form-item-gi>
        <n-form-item-gi :span="24" label="文章描述" path="description">
          <n-input
            v-model:value="articleForm.description"
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
        </n-form-item-gi>
        <n-form-item-gi :span="24" label="文章內容" path="editor">
          <div>
            <QuillEditor
              toolbar="full"
              v-model:content="articleForm.editor"
              contentType="html"
            />
          </div>
        </n-form-item-gi>
      </n-grid>
      <div
        style="display: flex; justify-content: flex-end"
        class="submitButton"
      >
        <a href="#admin/admin-article-setting">
          <n-spin :show="articleForm.show">
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

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const size = ref("medium");
const formRef = ref(null);
const router = useRouter();

const articleForm = reactive({
  _id: "",
  title: "",
  date: Date.now(),
  image: [],
  description: "",
  online: false,
  idx: -1,
  show: false,
  editor: "",
  category: "",
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
  title: {
    required: true,
    trigger: ["blur", "input"],
    validator(rule, value) {
      if (!value) {
        return new Error("需要標題");
      } else if (value.length <= 1) {
        return new Error("字數不能少於2");
      } else if (value.length > 29) {
        return new Error("字數不能多於30");
      }
      return true;
    },
  },
  description: {
    required: true,
    trigger: ["blur", "input"],
    validator(rule, value) {
      if (!value) {
        return new Error("需要描述");
      } else if (value.length <= 9) {
        return new Error("字數不能少於10");
      } else if (value.length > 149) {
        return new Error("字數不能多於150");
      }
      return true;
    },
  },
  img: {
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
  editor: {
    required: true,
  },
  category: {
    required: true,
  },
  date: {
    required: true,
  },
};

const articleCategories = [
  {
    label: "口腔保健",
    key: "oral hygiene",
    value: "口腔保健",
  },
  {
    label: "牙齒矯正",
    key: "orthodontics",
    value: "牙齒矯正",
  },
  {
    label: "牙齒美容",
    key: "dental beauty",
    value: "牙齒美容",
  },
  {
    label: "食譜保健",
    key: "recipe health",
    value: "食譜保健",
  },
];

const submitForm = async () => {
  articleForm.show = true;
  const fd = new FormData();
  for (const key in articleForm) {
    if (["_id", "idx", "show"].includes(key)) continue;
    else if (key === "image") fd.append(key, articleForm[key][0].file);
    else fd.append(key, articleForm[key]);
  }
  try {
    if (articleForm._id.length === 0) {
      await apiAuth.post("/articles", fd);
      Swal.fire({
        icon: "success",
        title: "成功",
        text: "新增成功",
      });
      router.push("/admin/admin-article-setting");
    }
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "失敗",
      text: error.isAxiosError ? error.response.data.message : error.message,
    });
  }
  articleForm.show = false;
};
</script>