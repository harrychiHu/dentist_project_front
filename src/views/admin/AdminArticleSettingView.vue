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
      title="編輯文章表單"
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
            <n-switch
              :rail-style="railStyle"
              v-model:value="articleForm.online"
            >
              <template #checked></template>
              <template #unchecked></template>
            </n-switch>
          </n-form-item-gi>
          <n-form-item-gi :span="24" label="文章圖片" path="image">
            <n-upload
              v-model:file-list="articleForm.image"
              accept="image/*"
              :max="1"
            >
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
              <button type="submit" class="saveBtnART">保存</button>
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
const bodyStyle = { width: "800px" };

const articleForm = reactive({
  _id: "",
  title: "",
  date: Date.now(),
  image: [],
  description: "",
  online: false,
  idx: -1,
  show: false,
  showModal: false,
  editor: "",
  category: "",
});

const openModel = (_id, idx) => {
  articleForm._id = _id;
  if (idx > -1) {
    articleForm.title = articles[idx].title;
    articleForm.description = articles[idx].description;
    articleForm.online = articles[idx].online;
    articleForm.editor = articles[idx].editor;
    articleForm.category = articles[idx].category;
    articleForm.date = articles[idx].date;
  } else {
    articleForm.title = "";
    articleForm.category = "";
    articleForm.online = false;
    articleForm.description = "";
    articleForm.editor = "";
  }
  articleForm.showModal = true;
  articleForm.image = [];
  articleForm.idx;
  articleForm.date = Date.now();
};

const createColumns = () => {
  return [
    {
      title: "文章標題",
      key: "title",
    },
    {
      title: "上架",
      key: "online",
      render(row) {
        if (row.online === false) {
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
            class: "bg-editor",
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
            class: "bg-del",
            onClick: () => delModel(row._id),
          },
          { default: () => "刪除" }
        );
      },
    },
  ];
};

const articles = reactive([]);

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
  description: {
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
  image: {
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
    else if (key === "image") {
      if (articleForm.image.length > 0)
        fd.append(key, articleForm[key][0].file);
    } else fd.append(key, articleForm[key]);
  }
  try {
    const { data } = await apiAuth.patch("/articles/" + articleForm._id, fd);
    console.log(fd);
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
        Swal.fire("刪除成功", "成功");
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