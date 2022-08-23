<template>
  <section id="AdminReserveSetting">
    <h1>會員管理</h1>
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
          <n-form-item>
            <p>
              姓名：<span>{{ resevers[0].user.name }}</span>
            </p>
          </n-form-item>
          <n-form-item>
            <p>
              信箱：<span>{{ resevers[0].user.email }}</span>
            </p>
          </n-form-item>
          <n-form-item>
            <p>
              手機號碼：<span>{{ resevers[0].user.phoneNr }}</span>
            </p>
          </n-form-item>
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
          <n-form-item label="訂單狀況" path="reseverShow:">
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
                <button type="submit" class="saveBtn">保存</button>
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
import { NButton, NIcon } from "naive-ui";
import Swal from "sweetalert2";
import { apiAuth } from "@/plugins/axios";

const bodyStyle = { width: "600px" };
const size = ref("medium");

const createColumns = () => {
  return [
    {
      title: "會員姓名",
      key: "user.name",
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
// const users = reactive({
//   _id: "",
//   account: "",
//   email: "",
//   phoneNr: "",
//   name: "",
// });
const resevers = reactive([]);

const reseverForm = reactive({
  _id: "",
  reseverDate: Date.now(),
  reseverCategory: "",
  reseverDescription: "",
  reseverShow: "",
  idx: -1,
  show: false,
  showModal: false,
  name: "",
  email: "",
  phoneNr: "",
});

const openModel = (_id, idx) => {
  reseverForm._id = _id;
  if (idx > -1) {
    reseverForm.reseverDescription = resevers[idx].reseverDescription;
    reseverForm.reseverShow = resevers[idx].reseverShow;
    reseverForm.reseverCategory = resevers[idx].reseverCategory;
    reseverForm.reseverDate = new Date(resevers[idx].reseverDate);
    reseverForm.name = resevers[idx].name;
    reseverForm.email = resevers[idx].email;
    reseverForm.phoneNr = resevers[idx].phoneNr;
  }
  reseverForm.showModal = true;
  reseverForm.idx;
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
  })
    .then(async (result) => {
      await apiAuth.delete("/resevers/" + id);
      if (result.isConfirmed) {
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

// const init = async () => {
//   try {
//     const { data } = await apiAuth.get("./resevers/all");
//     resevers.push(...data.result);
//     // console.log(data.result);
//   } catch (error) {
//     Swal.fire({
//       icon: "error",
//       title: "失敗",
//       text: error.isAxiosError ? error.response.data.message : error.message,
//     });
//   }
// };
// init();

const init = async () => {
  try {
    const { data } = await apiAuth.get("./resevers/get");
    resevers.push(...data.result);
    // users._id = data.result._id;
    // users.account = data.result.account;
    // users.email = data.result.email;
    // users.phoneNr = data.result.phoneNr;
    // users.name = data.result.name;
    console.log(data.result);
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