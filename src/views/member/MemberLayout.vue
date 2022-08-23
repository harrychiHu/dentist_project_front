<template>
  <div class="container">
    <section id="memberContent">
      <n-layout has-sider class="memberLeft">
        <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          show-trigger
        >
          <n-menu
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
          />
        </n-layout-sider>
        <n-layout class="memberRight">
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
                  <a href="#member"
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
          <div class="memberWrap">
            <div class="memberSection">
              <router-view></router-view>
            </div>
          </div>
        </n-layout>
      </n-layout>
    </section>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { h } from "vue";
import { NIcon } from "naive-ui";
import { User as UserIcon } from "@vicons/fa";
import { ClipboardList as ClipboardListIcon } from "@vicons/fa";
import { Search as SearchIcon } from "@vicons/fa";
import { Home as HomeIcon } from "@vicons/fa";
import { SettingsSharp as SettingsSharpIcon } from "@vicons/ionicons5";

const user = useUserStore();
const { logout } = user;
const { isLogin, isAdmin, avatar, name } = storeToRefs(user);

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () =>
      h(
        "a",
        {
          href: "#member",
        },
        "會員資料"
      ),
    key: "member-member-setting",
    icon: renderIcon(UserIcon),
  },
  {
    label: () =>
      h(
        "a",
        {
          href: "#member/member-resever",
        },
        "線上預約"
      ),
    key: "member-resever",
    icon: renderIcon(ClipboardListIcon),
  },
  {
    label: () =>
      h(
        "a",
        {
          href: "#member/member-check-resever",
        },
        "查看預約"
      ),
    key: "member-check-resever",
    icon: renderIcon(SearchIcon),
  },
  {
    label: () =>
      h(
        "a",
        {
          href: "#",
        },
        "回首頁"
      ),
    key: "home",
    icon: renderIcon(HomeIcon),
  },
];
</script>