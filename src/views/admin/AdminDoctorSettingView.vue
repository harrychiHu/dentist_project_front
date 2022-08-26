<template>
  <section id="DoctorSetting">
    <h1>醫師管理</h1>
    <div class="editorButton">
      <a href="#admin/admin-doctor-editor-setting">
        <button type="submit" class="create_btn">新增</button>
      </a>
    </div>
    <div class="doctorFormContent">
      <div>
        <n-data-table
          :columns="columns"
          :data="doctors"
          :pagination="pagination"
          :bordered="false"
        />
      </div>
    </div>
    <n-modal
      v-model:show="doctorForm.showModal"
      class="editCard"
      preset="card"
      :style="bodyStyle"
      title="編輯醫師表單"
      size="huge"
      :bordered="false"
    >
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
        <n-form-item label="醫師姓名" path="name">
          <n-input
            v-model:value="doctorForm.name"
            placeholder="請輸入醫師姓名"
          />
        </n-form-item>
        <n-form-item label="醫師照片" path="image">
          <n-upload
            v-model:file-list="doctorForm.image"
            accept="image/*"
            :max="1"
          >
            <n-button>上傳醫師照片</n-button>
          </n-upload>
        </n-form-item>
        <n-form-item label="醫師介紹" path="description">
          <n-input
            v-model:value="doctorForm.description"
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
        <n-form-item :rail-style="railStyle" label="是否上線" path="online">
          <n-switch :rail-style="railStyle" v-model:value="doctorForm.online">
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
              <button type="submit" class="saveBtnDOC">保存</button>
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

const size = ref("medium");
const formRef = ref(null);
const bodyStyle = { width: "600px" };

const doctorForm = reactive({
  _id: "",
  name: "",
  image: [],
  description: "",
  online: false,
  idx: -1,
  show: false,
  showModal: false,
});

const openModel = (_id, idx) => {
  doctorForm._id = _id;
  if (idx > -1) {
    doctorForm.name = doctors[idx].name;
    doctorForm.image = doctors[idx].image;
    doctorForm.description = doctors[idx].description;
    doctorForm.online = doctors[idx].online;
  } else {
    doctorForm.name = "";
    doctorForm.online = false;
    doctorForm.description = "";
  }
  doctorForm.showModal = true;
  doctorForm.image = [];
  doctorForm.idx;
};

const createColumns = () => {
  return [
    {
      title: "醫生名字",
      key: "name",
    },
    {
      title: "上線",
      key: "online",
      render(row) {
        if (row.online === false) {
          return h(
            NGradientText,
            {
              type: "danger",
              size: "small",
            },
            { default: () => "未上線" }
          );
        } else {
          return h(
            NGradientText,
            {
              type: "info",
              size: "small",
            },
            { default: () => "上線" }
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

const doctors = reactive([]);

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
  name: {
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
};

const submitForm = async () => {
  doctorForm.show = true;
  const fd = new FormData();
  for (const key in doctorForm) {
    if (["_id", "idx", "show"].includes(key)) continue;
    else if (key === "image") {
      if (doctorForm.image.length > 0) fd.append(key, doctorForm[key][0].file);
    } else fd.append(key, doctorForm[key]);
  }
  try {
    const { data } = await apiAuth.patch("/doctors/" + doctorForm._id, fd);
    doctors[doctorForm.idx] = data.result;
    Swal.fire({
      icon: "success",
      title: "成功",
      text: "編輯成功",
    });
    doctorForm.showModal = false;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "失敗",
      text: error.isAxiosError ? error.response.data.message : error.message,
    });
    doctorForm.showModal = false;
  }
  doctorForm.show = false;
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
        await apiAuth.delete("/doctors/" + id);
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
  let idx = 0;
  try {
    const { data } = await apiAuth.get("./doctors/all");
    doctors.push(...data.result);
    doctors.forEach((item) => {
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