<template>
  <section id="MemberSetting">
    <h1>會員管理</h1>
    <div class="memberFormContent">
      <div>
        <n-data-table
          :columns="columns"
          :data="users"
          :pagination="pagination"
          :bordered="false"
        />
      </div>
      <!-- <div class="editorButton">
        <a href="#admin/admin-doctor-editor-setting">
          <button type="submit" class="create_btn">新增</button>
        </a>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { h, reactive } from "vue";
import { NButton } from "naive-ui";
import Swal from "sweetalert2";
import { apiAuth } from "@/plugins/axios";
import { Search as SearchIcon } from "@vicons/fa";
import { NIcon } from "naive-ui";
import router from "../../router";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const createColumns = () => {
  return [
    {
      title: "會員名字",
      key: "name",
    },
    {
      title: "查看會員",
      key: "memberCheck",
      render(row) {
        return h(
          NButton,
          {
            size: "small",
            onClick: () => member(row._id),
          },
          { default: renderIcon(SearchIcon) }
        );
      },
    },
    // {
    //   title: "動作",
    //   key: "actions",
    //   render(row) {
    //     return h(
    //       NButton,
    //       {
    //         size: "small",
    //         onClick: () => sendEmail(row._id),
    //       },
    //       { default: () => "Send Email" }
    //     );
    //   },
    // },
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

const users = reactive([]);

const member = (id) => {
  router.push("/admin/admin-member-search/" + id);
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
        await apiAuth.delete("/users/" + id);
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
    const { data } = await apiAuth.get("./users/all");
    users.push(...data.result);
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