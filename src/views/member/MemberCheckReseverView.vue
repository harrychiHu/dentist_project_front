<template>
  <section id="ReseversSetting">
    <h1>查看預約</h1>
    <div class="reseversFormContent">
      <div>
        <n-data-table
          :columns="columns"
          :data="resevers"
          :pagination="pagination"
          :bordered="false"
        />
      </div>
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
        <n-form-item>
          <p>
            姓名：<span>{{ users.name }}</span>
          </p>
        </n-form-item>
        <n-form-item>
          <p>
            信箱：<span>{{ users.email }}</span>
          </p>
        </n-form-item>
        <n-form-item>
          <p>
            手機號碼：<span>{{ users.phoneNr }}</span>
          </p>
        </n-form-item>
        <n-form-item label="預約時間" path="date">
          <n-date-picker
            v-model:value="reseverForm.date"
            type="datetime"
            clearable
            disabled="true"
          />
        </n-form-item>
        <n-form-item label="選擇服務" path="category">
          <n-select
            v-model:value="reseverForm.category"
            placeholder="選擇服務"
            :options="reseverCategories"
            disabled="true"
          />
        </n-form-item>

        <n-form-item label="備註" path="description">
          <n-input
            v-model:value="reseverForm.description"
            placeholder="可以在這寫下備註"
            type="textarea"
            disabled="true"
            :autosize="{
              minRows: 3,
            }"
          />
          <template #clear-icon>
            <n-icon :component="TrashBinOutline" />
          </template>
        </n-form-item>
      </n-form>
    </n-modal>
  </section>
</template>

<script setup>
import { h, reactive, ref } from "vue";
import { NButton, NGradientText, NIcon } from "naive-ui";
import Swal from "sweetalert2";
import { apiAuth } from "@/plugins/axios";
import { Search as SearchIcon } from "@vicons/fa";

const size = ref("medium");
const formRef = ref(null);
const bodyStyle = { width: "600px" };

const resevers = reactive([]);

const users = ref([]);

const reseverForm = reactive({
  _id: "",
  date: Date.now(),
  category: "",
  description: "",
  idx: -1,
  show: false,
});

const openModel = (_id, idx) => {
  reseverForm._id = _id;
  if (idx > -1) {
    reseverForm.date = resevers[idx].date;
    reseverForm.description = resevers[idx].description;
    reseverForm.situation = resevers[idx].situation;
    reseverForm.category = resevers[idx].category;
    reseverForm.date = new Date(resevers[idx].date);
  }
  reseverForm.showModal = true;
  reseverForm.idx;
};

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const createColumns = () => {
  return [
    {
      title: "預約ID",
      key: "_id",
    },
    {
      title: "預約狀況",
      key: "situation",
      render(row) {
        if (row.situation === "等待") {
          return h(
            NGradientText,
            {
              type: "success",
              size: "small",
            },
            { default: () => "等待" }
          );
        } else if (row.situation === "成功") {
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
      title: "查看訂單",
      key: "reseverCheck",
      render(row) {
        return h(
          NButton,
          {
            size: "small",
            onClick: () => openModel(row._id, row.idx),
            class: "bg-check",
          },
          { default: renderIcon(SearchIcon) }
        );
      },
    },
  ];
};

const init = async () => {
  try {
    let idx = 0;
    const { data } = await apiAuth.get("/resevers/catch");
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

const init1 = async () => {
  try {
    const { data } = await apiAuth.get("/users/");
    users.value = data.result;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "失敗",
      text: error.isAxiosError ? error.response.data.message : error.message,
    });
  }
};
init1();

const pagination = { pageSize: 8 };
const columns = createColumns({});
</script>