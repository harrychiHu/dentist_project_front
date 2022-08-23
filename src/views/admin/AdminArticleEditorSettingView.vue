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
      <n-form-item label="文章標題" path="articleTitle">
        <n-input
          v-model:value="articleForm.articleTitle"
          placeholder="請輸入文章標題"
        />
      </n-form-item>
      <n-form-item label="文章日期" path="articleDate">
        <n-date-picker
          v-model:value="articleForm.articleDate"
          type="datetime"
          clearable
        />
      </n-form-item>
      <n-form-item label="文章圖片" path="articlePic">
        <n-upload v-model:file-list="articleForm.articlePic" accept="image/*">
          <n-button>上傳文章圖片</n-button>
        </n-upload>
      </n-form-item>
      <n-form-item label="文章描述" path="articleDescription">
        <n-input
          v-model:value="articleForm.articleDescription"
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
      <n-form-item label="文章內容" path="articleEditor">
        <div>
          <QuillEditor
            toolbar="full"
            v-model:content="articleForm.articleEditor"
            contentType="html"
          />
        </div>
      </n-form-item>
      <n-form-item label="選擇分類" path="articleCategory">
        <n-select
          v-model:value="articleForm.articleCategory"
          :options="articleCategories"
          placeholder="選擇分類"
        />
      </n-form-item>
      <n-form-item label="是否上架" path="articleShow">
        <n-checkbox v-model:checked="articleForm.articleShow">
          上架
        </n-checkbox>
      </n-form-item>
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
  articleTitle: "",
  articleDate: Date.now(),
  articlePic: [],
  articleDescription: "",
  articleShow: false,
  idx: -1,
  show: false,
  articleEditor: "",
  articleCategory: "",
});

const rules = {
  articleTitle: {
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
  articleDescription: {
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
  articlePic: {
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
  articleEditor: {
    required: true,
  },
  articleCategory: {
    required: true,
  },
  articleDate: {
    required: true,
  },
};

const articleCategories = [
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
  articleForm.show = true;
  const fd = new FormData();
  for (const key in articleForm) {
    if (["_id", "idx", "show"].includes(key)) continue;
    else if (key === "articlePic") fd.append(key, articleForm[key][0].file);
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