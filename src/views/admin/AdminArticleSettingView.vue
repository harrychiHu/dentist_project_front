<template>
  <section id="ArticleSetting">
    <h1>文章管理</h1>
    <div class="editorButton">
      <a href="#admin/admin-article-editor-setting">
        <button type="submit" class="create_btn">新增</button>
      </a>
    </div>
    <div class="articleFormContent">
      <div>
        <n-data-table
          :columns="columns"
          :data="articles"
          :pagination="pagination"
          :bordered="false"
        />
      </div>
    </div>
    <n-modal
      v-model:show="articleForm.showModal"
      class="editCard"
      preset="card"
      :style="bodyStyle"
      title="編輯表單"
      size="huge"
      :bordered="false"
    >
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
              <button type="submit" class="saveBtn">保存</button>
            </n-spin>
          </a>
        </div>
      </n-form>
    </n-modal>
  </section>
</template>

<script setup>
import { h, reactive, ref } from "vue";
import { NButton, NGradientText } from "naive-ui";
import Swal from "sweetalert2";
import { apiAuth } from "@/plugins/axios";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const size = ref("medium");
const formRef = ref(null);
const bodyStyle = { width: "600px" };

const articleForm = reactive({
  _id: "",
  articleTitle: "",
  articleDate: Date.now(),
  articlePic: [],
  articleDescription: "",
  articleShow: false,
  idx: -1,
  show: false,
  showModal: false,
  articleEditor: "",
  articleCategory: "",
});

const openModel = (_id, idx) => {
  articleForm._id = _id;
  if (idx > -1) {
    articleForm.articleTitle = articles[idx].articleTitle;
    articleForm.articlePic = articles[idx].articlePic;
    articleForm.articleDescription = articles[idx].articleDescription;
    articleForm.articleShow = articles[idx].articleShow;
    articleForm.articleEditor = articles[idx].articleEditor;
    articleForm.articleCategory = articles[idx].articleCategory;
    articleForm.articleDate = articles[idx].articleDate;
  }
  articleForm.showModal = true;
  articleForm.articlePic = [];
  articleForm.idx;
  articleForm.articleDate = Date.now();
};

const createColumns = () => {
  return [
    {
      title: "文章標題",
      key: "articleTitle",
    },
    {
      title: "上架",
      key: "articleShow",
      render(row) {
        if (row.articleShow === false) {
          return h(
            NGradientText,
            {
              type: "danger",
              size: "small",
            },
            { default: () => "未上架" }
          );
        } else {
          return h(
            NGradientText,
            {
              type: "info",
              size: "small",
            },
            { default: () => "上架" }
          );
        }
      },
    },
    {
      title: "編輯",
      key: "editor",
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: "small",
            onClick: () => openModel(row._id, row.idx),
          },
          { default: () => "編輯" }
        );
      },
    },
    {
      title: "刪除",
      key: "del",
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: "small",
            onClick: () => delModel(row._id),
          },
          { default: () => "刪除" }
        );
      },
    },
  ];
};

const articles = reactive([]);

const rules = {
  articleTitle: {
    required: true,
    trigger: ["blur", "input"],
    validator(rule, value) {
      if (!value) {
        return new Error("需要標題");
      } else if (
        !/^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/.test(value)
      ) {
        return new Error("標題格式錯誤");
      } else if (value.length <= 1) {
        return new Error("字數不能少於2");
      } else if (value.length >= 10) {
        return new Error("字數不能多於10");
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
      } else if (value.length >= 99) {
        return new Error("字數不能多於100");
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
    else if (key === "articlePic") {
      if (articleForm.articlePic.length > 0)
        fd.append(key, articleForm[key][0].file);
    } else fd.append(key, articleForm[key]);
  }
  try {
    const { data } = await apiAuth.patch("/articles/" + articleForm._id, fd);
    articles[articleForm.idx] = data.result;
    Swal.fire({
      icon: "success",
      title: "成功",
      text: "編輯成功",
    });
    articleForm.showModal = false;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "失敗",
      text: error.isAxiosError ? error.response.data.message : error.message,
    });
    articleForm.showModal = false;
  }
  articleForm.show = false;
};

const delModel = (id) => {
  Swal.fire({
    title: "確定刪除嗎?",
    text: "刪除後無法回復!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "對，刪除!",
    cancelButtonText: "取消!",
  })
    .then(async (result) => {
      if (result.isConfirmed) {
        await apiAuth.delete("/articles/" + id);
        Swal.fire("刪除成功", "success");
      }
      init();
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "失敗",
        text: error.isAxiosError ? error.response.data.message : error.message,
      });
    });
};

const init = async () => {
  try {
    let idx = 0;
    const { data } = await apiAuth.get("./articles/all");
    articles.push(...data.result);
    articles.forEach((item) => {
      item.idx = idx++;
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "失敗",
      text: error.isAxiosError ? error.response.data.message : error.message,
    });
  }
};
init();

const pagination = { pageSize: 8 };
const columns = createColumns({});
</script>