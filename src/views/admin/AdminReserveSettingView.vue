<template>
  <section id="AdminReserveSetting">
    <h1>預約管理</h1>
    <div class="AdminResFormContent">
      <div>
        <n-data-table
          :columns="columns"
          :data="resevers"
          :pagination="pagination"
          :bordered="false"
        />
      </div>
      <n-modal
        v-model:show="reseverForm.showModal"
        class="editCard"
        preset="card"
        :style="bodyStyle"
        title="預約表單"
        size="huge"
        :bordered="false"
      >
        <n-form
          class="reseverForm"
          ref="formRef"
          :rules="rules"
          :model="reseverForm"
          label-placement="left"
          label-width="auto"
          require-mark-placement="right-hanging"
          :size="size"
          :style="{
            maxWidth: '1000px',
          }"
          @submit.prevent="submitForm"
        >
          <n-form-item label="預約時間" path="reseverDate">
            <n-date-picker
              v-model:value="reseverForm.reseverDate"
              type="datetime"
              clearable
            />
          </n-form-item>
          <n-form-item label="選擇服務" path="reseverCategory">
            <n-select
              v-model:value="reseverForm.reseverCategory"
              placeholder="選擇服務"
              :options="reseverCategories"
            />
          </n-form-item>
          <n-form-item label="備註" path="reseverDescription">
            <n-input
              v-model:value="reseverForm.reseverDescription"
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
          <n-form-item label="訂單狀況" path="reseverShow">
            <n-select
              v-model:value="reseverForm.reseverShow"
              placeholder="選擇訂單狀況"
              :options="reseverShows"
            />
          </n-form-item>
          <div
            style="display: flex; justify-content: flex-end"
            class="submitButton"
          >
            <a href="#admin/admin-reserve-setting">
              <n-spin :show="reseverForm.show">
                <button type="submit" class="saveBtnRes">保存</button>
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
import { NButton, NIcon, NGradientText } from "naive-ui";
import Swal from "sweetalert2";
import { apiAuth } from "@/plugins/axios";

const bodyStyle = { width: "600px" };
const size = ref("medium");
const formRef = ref(null);

const reseverForm = reactive({
  _id: "",
  reseverDate: Date.now(),
  reseverCategory: "",
  reseverDescription: "",
  reseverShow: "",
  idx: -1,
  show: false,
  showModal: false,
});

const openModel = (_id, idx) => {
  reseverForm._id = _id;
  if (idx > -1) {
    reseverForm.reseverDescription = resevers[idx].reseverDescription;
    reseverForm.reseverShow = resevers[idx].reseverShow;
    reseverForm.reseverCategory = resevers[idx].reseverCategory;
    reseverForm.reseverDate = new Date(resevers[idx].reseverDate);
  }
  reseverForm.showModal = true;
  reseverForm.idx;
};

const createColumns = () => {
  return [
    {
      title: "會員姓名",
      key: "user.name",
    },
    {
      title: "訂單狀況",
      key: "reseverShow",
      render(row) {
        if (row.reseverShow === "等待") {
          return h(
            NGradientText,
            {
              type: "success",
              size: "small",
            },
            { default: () => "等待" }
          );
        } else if (row.reseverShow === "成功") {
          return h(
            NGradientText,
            {
              type: "info",
              size: "small",
            },
            { default: () => "成功" }
          );
        } else {
          return h(
            NGradientText,
            {
              type: "error",
              size: "small",
            },
            { default: () => "失敗" }
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

const resevers = reactive([]);

const rules = {
  reseverDate: {
    required: true,
  },
  reseverCategory: {
    required: true,
  },
};

const reseverShows = [
  {
    label: "成功",
    key: "success",
    value: "成功",
  },
  {
    label: "失敗",
    key: "error",
    value: "失敗",
  },
  {
    label: "等待",
    key: "wait",
    value: "等待",
  },
];

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
    const { data } = await apiAuth.patch(
      "/resevers/" + reseverForm._id,
      reseverForm
    );
    resevers[reseverForm.idx] = data.result;
    Swal.fire({
      icon: "success",
      title: "成功",
      text: "編輯成功",
    });
    reseverForm.showModal = false;
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "失敗",
      text: error.isAxiosError ? error.response.data.message : error.message,
    });
    reseverForm.showModal = false;
  }
  reseverForm.show = false;
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
        await apiAuth.delete("/resevers/" + id);
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
    const { data } = await apiAuth.get("./resevers/get");
    resevers.push(...data.result);
    resevers.forEach((item) => {
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