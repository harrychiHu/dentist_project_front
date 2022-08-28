<template>
  <section id="HomeSetting">
    <h1>首頁管理</h1>
    <h2>Banner</h2>
    <div class="editorButton">
      <n-button type="primary" color="#64C1C6" @click="openModel('', -1)">
        新增
      </n-button>
    </div>
    <div class="bannerFormContent">
      <div>
        <n-data-table
          :columns="columns"
          :data="banners"
          :pagination="pagination"
          :bordered="false"
        />
      </div>

      <n-modal
        v-model:show="bannerForm.showModal"
        class="editCard"
        preset="card"
        :style="bodyStyle"
        title="編輯輪播圖表單"
        size="huge"
        :bordered="false"
      >
        <n-form
          class="bannerForm"
          ref="formRef"
          :model="bannerForm"
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
          <n-form-item label="圖片標題" path="title">
            <n-input
              v-model:value="bannerForm.title"
              placeholder="請輸入圖片標題"
            />
          </n-form-item>
          <n-form-item label="圖片" path="image">
            <n-upload
              v-model:file-list="bannerForm.image"
              accept="image/*"
              :max="1"
            >
              <n-button>上傳圖片</n-button>
            </n-upload>
          </n-form-item>
          <div
            style="display: flex; justify-content: flex-end"
            class="submitButton"
          >
            <a href="#admin/">
              <n-spin :show="bannerForm.show">
                <button type="submit" class="saveBtnBanner">保存</button>
              </n-spin>
            </a>
          </div>
        </n-form>
      </n-modal>
    </div>
  </section>
</template>

<script setup>
import { h, reactive, ref } from "vue";
import { NImage, NButton } from "naive-ui";
import Swal from "sweetalert2";
import { apiAuth } from "@/plugins/axios";
import { useRouter } from "vue-router";

const size = ref("medium");
const formRef = ref(null);
const bodyStyle = { width: "600px" };
const router = useRouter();

const createColumns = () => {
  return [
    {
      title: "標題",
      key: "title",
    },
    {
      title: "圖片",
      key: "image",
      render(row) {
        return h(
          NImage,
          {
            strong: true,
            tertiary: true,
            width: 100,
            src: row.image,
          },
          { default: () => "刪除" }
        );
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

const bannerForm = reactive({
  _id: "",
  title: "",
  image: [],
  idx: -1,
  showModal: false,
  show: false,
});

const banners = reactive([]);

const rules = {
  title: {
    required: true,
    trigger: ["blur", "input"],
    validator(rule, value) {
      if (!value) {
        return new Error("需要標題");
      } else if (value.length <= 1) {
        return new Error("字數不能少於2");
      } else if (value.length >= 10) {
        return new Error("字數不能多於10");
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
};

const openModel = (_id, idx) => {
  bannerForm._id = _id;
  if (idx > -1) {
    bannerForm.title = banners[idx].title;
    bannerForm.image = banners[idx].image;
  } else {
    bannerForm.title = "";
  }
  bannerForm.showModal = true;
  bannerForm.image = [];
  bannerForm.idx;
};

const submitForm = async () => {
  bannerForm.show = true;
  const fd = new FormData();
  for (const key in bannerForm) {
    if (["_id", "idx", "show"].includes(key)) continue;
    else if (key === "image") {
      if (bannerForm.image.length > 0) fd.append(key, bannerForm[key][0].file);
    } else fd.append(key, bannerForm[key]);
  }
  try {
    if (bannerForm._id.length === 0) {
      await apiAuth.post("/banners", fd);
      Swal.fire({
        icon: "success",
        title: "成功",
        text: "新增成功",
      });
      router.push("/admin/admin-home-setting");
    } else {
      const { data } = await apiAuth.patch("/banners/" + bannerForm._id, fd);
      banners[bannerForm.idx] = data.result;
      Swal.fire({
        icon: "success",
        title: "成功",
        text: "編輯成功",
      });
    }
    bannerForm.showModal = false;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "失敗",
      text: error.isAxiosError ? error.response.data.message : error.message,
    });
    bannerForm.showModal = false;
  }
  bannerForm.show = false;
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
        await apiAuth.delete("/banners/" + id);
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
    const { data } = await apiAuth.get("./banners/all");
    banners.push(...data.result);
    banners.forEach((item) => {
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

const pagination = { pageSize: 5 };
const columns = createColumns({});
</script>