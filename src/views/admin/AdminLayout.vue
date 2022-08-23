<template>
  <div class="container">
    <section id="adminContent">
      <div class="adminLeft">
        <div class="logo">
          <h1><a href="#">喜樂芽牙醫科診所</a></h1>
        </div>
        <div>
          <n-menu :options="menuOptions" />
        </div>
      </div>
      <div class="adminRight">
        <div class="avatarList">
          <p class="avatarText">歡迎您，{{ name }}</p>
          <n-popover placement="bottom" trigger="hover" v-if="isLogin">
            <template #trigger>
              <n-button circle color="#fff" class="avatar">
                <n-avatar round size="small" :src="avatar" />
              </n-button>
            </template>
            <ul>
              <li>
                <a href="#information"
                  ><n-icon><user-icon /></n-icon>會員資料</a
                >
              </li>
              <li>
                <a href="#admin" v-if="isLogin && isAdmin"
                  ><n-icon><settings-sharp-icon /></n-icon>管理</a
                >
              </li>
              <li>
                <n-button size="medium" color="#64C1C6" @click="logout">
                  登出</n-button
                >
              </li>
            </ul>
          </n-popover>
        </div>
        <div class="adminWrap">
          <div class="adminSection">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { h } from "vue";
import { User as UserIcon } from "@vicons/fa";
import { SettingsSharp as SettingsSharpIcon } from "@vicons/ionicons5";

const user = useUserStore();
const { logout } = user;
const { isLogin, isAdmin, avatar, name } = storeToRefs(user);

const menuOptions = [
  {
    label: () =>
      h(
        "a",
        {
          href: "#admin",
        },
        "會員管理"
      ),
    key: "admin-member-setting",
  },
  {
    label: () =>
      h(
        "a",
        {
          href: "#admin/admin-reserve-setting",
        },
        "預約管理"
      ),
    key: "admin-reserve-setting",
  },
  {
    label: () =>
      h(
        "a",
        {
          href: "#admin/admin-doctor-setting",
        },
        "醫生管理"
      ),
    key: "admin-doctor-setting",
  },
  {
    label: () =>
      h(
        "a",
        {
          href: "#admin/admin-article-setting",
        },
        "文章管理"
      ),
    key: "article-setting",
  },
  {
    label: () =>
      h(
        "a",
        {
          href: "#admin/admin-home-setting",
        },
        "首頁管理"
      ),
    key: "home-setting",
  },
];
</script>