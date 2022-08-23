<template>
  <div class="container">
    <!-- LOGO -->
    <section id="header" class="section">
      <h1><a href="#">喜樂芽牙醫科診所</a></h1>
      <!-- NAVBAR -->
      <div class="menu">
        <!-- RWD-MENU -->
        <div class="small-menu">
          <h2>MENU</h2>
          <n-dropdown trigger="hover" :options="menuOptions" size="huge">
            <n-button text class="hamburger">
              <n-icon>
                <layout-list-icon />
              </n-icon>
            </n-button>
          </n-dropdown>
        </div>
        <!-- PC-MENU -->
        <div class="big-menu">
          <n-menu
            mode="horizontal"
            :options="menuOptions"
            dropdown-placement="top-end"
          />
        </div>
        <!-- 登入登出大頭貼 -->
        <div class="log_res_btn">
          <n-button
            type="primary"
            color="#64C1C6"
            @click="LoginShowModal = true"
            class="login_btn"
            v-if="!isLogin"
          >
            登入
          </n-button>
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
          <!-- 登入表單 -->
          <n-modal
            v-model:show="LoginShowModal"
            class="custom-card"
            preset="card"
            :style="bodyStyle"
            size="huge"
            :bordered="false"
            v-if="ReShowModal === false"
          >
            <template #header>
              <img src="../../assets/LOGO.png" />
            </template>
            <n-form
              ref="formRef"
              :model="loginform"
              :rules="rules"
              label-placement="left"
              label-width="auto"
              require-mark-placement="right-hanging"
              @submit.prevent="login"
            >
              <n-form-item label="帳號" path="account">
                <n-input
                  v-model:value="loginform.account"
                  placeholder="請輸入帳號"
                />
              </n-form-item>
              <n-form-item label="密碼" path="password">
                <n-input
                  @input="handlePasswordInput"
                  type="password"
                  v-model:value="loginform.password"
                  placeholder="請輸入密碼"
                />
              </n-form-item>
              <n-row :gutter="[0, 24]">
                <n-col :span="24">
                  <div style="display: flex; justify-content: flex-end">
                    <n-spin :show="show">
                      <button
                        type="submit"
                        class="res_btn"
                        @click="show = !show"
                      >
                        登入
                      </button>
                    </n-spin>
                  </div>
                </n-col>
              </n-row>
            </n-form>
            <template #footer>
              <a href="#" @click="ReShowModal = true" class="aaa"
                >沒有帳號，點擊註冊帳號</a
              >
            </template>
          </n-modal>
          <!-- 註冊表單 -->
          <n-modal
            v-model:show="ReShowModal"
            class="custom-card"
            preset="card"
            :style="bodyStyle"
            size="huge"
            :bordered="false"
            v-if="ReShowModal === true"
          >
            <template #header>
              <img src="../../assets/LOGO.png" />
            </template>
            <n-form
              ref="formRef"
              :model="Resform"
              :rules="rules"
              label-placement="left"
              label-width="auto"
              require-mark-placement="right-hanging"
              @submit.prevent="register"
            >
              <n-form-item label="姓名" path="name">
                <n-input
                  v-model:value="Resform.name"
                  maxlength="20"
                  minlength="1"
                  placeholder="請輸入姓名"
                />
              </n-form-item>
              <n-form-item label="帳號" path="account">
                <n-input
                  v-model:value="Resform.account"
                  maxlength="20"
                  minlength="4"
                  placeholder="請輸入帳號"
                />
              </n-form-item>
              <n-form-item label="密碼" path="password">
                <n-input
                  @input="handlePasswordInput"
                  type="password"
                  v-model:value="Resform.password"
                  maxlength="20"
                  minlength="4"
                  placeholder="請輸入密碼"
                />
              </n-form-item>
              <n-form-item
                ref="rPasswordFormItemRef"
                first
                path="reenteredPassword"
                label="確認密碼"
              >
                <n-input
                  v-model:value="Resform.reenteredPassword"
                  :disabled="!Resform.password"
                  type="password"
                  placeholder="請再一次輸入密碼"
                />
              </n-form-item>
              <n-form-item label="信箱" path="email">
                <n-input
                  v-model:value="Resform.email"
                  minlength="4"
                  placeholder="請輸入信箱"
                />
              </n-form-item>
              <n-form-item label="手機號碼" path="phoneNr">
                <n-input
                  v-model:value="Resform.phoneNr"
                  maxlength="20"
                  minlength="4"
                  placeholder="請輸入手機號碼"
                />
              </n-form-item>
              <n-row :gutter="[0, 24]">
                <n-col :span="24">
                  <div style="display: flex; justify-content: flex-end">
                    <n-spin :show="show">
                      <button
                        type="submit"
                        class="res_btn"
                        @click="show = !show"
                      >
                        註冊
                      </button>
                    </n-spin>
                  </div>
                </n-col>
              </n-row>
            </n-form>
          </n-modal>
        </div>
      </div>
    </section>
    <!-- 路由 -->
    <div>
      <router-view></router-view>
    </div>
    <!-- 立即預約 -->
    <section class="bg" id="footer1">
      <div class="now section">
        <h2>立即預約</h2>
        <h3>登入會員，填寫表單</h3>
        <n-button
          type="primary"
          color="#64C1C6"
          size="large"
          @click="member(isLogin)"
        >
          預約表單
        </n-button>
      </div>
    </section>
    <!-- FOOTER -->
    <section class="bg1" id="footer2">
      <div class="section footer2-wrap">
        <div class="copyright">
          <p>©喜樂芽牙醫診所 2022</p>
        </div>
        <div class="contact">
          <p>
            <n-icon><phone-alt-icon /></n-icon>(02)8509-2410
          </p>
          <p>
            <n-icon><map-marker-alt-icon /></n-icon
            >台北市松山區八德路四段245巷33號
          </p>
          <p class="link">
            <a
              href="https://www.facebook.com/pages/category/Dentist---Dental-Office/%E5%96%9C%E6%A8%82%E8%8A%BD%E7%89%99%E9%86%AB%E8%A8%BA%E6%89%80-105752884273045/"
              ><n-icon><facebook-icon /></n-icon
            ></a>
            <a href="https://line.me/ti/p/~85092410">
              <n-icon><line-icon /></n-icon>
            </a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { h, ref, reactive } from "vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

/* ICON ----------------------------------------------------------------------------- */
import { PhoneAlt as PhoneAltIcon } from "@vicons/fa";
import { MapMarkerAlt as MapMarkerAltIcon } from "@vicons/fa";
import { Facebook as FacebookIcon } from "@vicons/fa";
import { Line as LineIcon } from "@vicons/fa";
import { LayoutList as LayoutListIcon } from "@vicons/tabler";
import { api } from "@/plugins/axios";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import { User as UserIcon } from "@vicons/fa";
import { SettingsSharp as SettingsSharpIcon } from "@vicons/ionicons5";

/* 登入註冊部分 ------------------------------------------------------------------------- */
let LoginShowModal = ref(false);
let ReShowModal = ref(false);
const bodyStyle = { width: "600px" };
const rPasswordFormItemRef = ref(null);

const show = ref(false);
const router = useRouter();
const formRef = ref(null);

/* 註冊及登入空白資料 ---------------------------------------------------------- */
const Resform = reactive({
  email: "",
  account: "",
  password: "",
  reenteredPassword: "",
  name: "",
  phoneNr: "",
});
const loginform = reactive({
  account: "",
  password: "",
});
/* 註冊及登入REST --------------------------------------------------------- */
const restform = () => {
  (Resform.email = ""),
    (Resform.account = ""),
    (Resform.password = ""),
    (Resform.reenteredPassword = ""),
    (Resform.name = ""),
    (Resform.phoneNr = "");
};

const restform1 = () => {
  (loginform.account = ""), (loginform.password = "");
};

/* 不知為啥一定要有的model ---------------------------------------------------------------------------------------------------- */

/* 登入註冊規則 --------------------------------------------------------------------------------------------------------------- */
const rules = {
  name: [
    {
      required: true,
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
      trigger: ["input", "blur"],
    },
  ],
  account: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error("需要帳號");
        } else if (!/^[a-zA-Z][a-zA-Z0-9_]+$/.test(value)) {
          return new Error("帳號請使用字母開頭，可使用英數及下劃線");
        } else if (value.length <= 4) {
          return new Error("字數不能少於4");
        } else if (value.length >= 20) {
          return new Error("字數不能多於20");
        }
        return true;
      },
      trigger: ["input", "blur"],
    },
  ],
  password: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error("需要密碼");
        } else if (!/^[a-zA-Z][a-zA-Z0-9_]+$/.test(value)) {
          return new Error("密碼請使用字母開頭，可使用英數及下劃線");
        } else if (value.length < 4) {
          return new Error("字數不能少於4");
        } else if (value.length > 20) {
          return new Error("字數不能多於20");
        }
        console.log(value);
        return true;
      },
      trigger: ["input", "blur"],
    },
  ],
  reenteredPassword: [
    {
      required: true,
      message: "請再次輸入密碼",
      trigger: ["input", "blur"],
    },
    {
      validator: validatePasswordStartWith,
      message: "兩次輸入密碼不一致",
      trigger: "input",
    },
    {
      validator: validatePasswordSame,
      message: "兩次輸入密碼不一致",
      trigger: ["blur", "password-input"],
    },
  ],
  email: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error("需要信箱");
        } else if (!/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(value)) {
          return new Error("信箱格式錯誤");
        }
        return true;
      },
      trigger: ["input", "blur"],
    },
  ],
  phoneNr: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error("需要手機號碼");
        } else if (!/^09\d{2}-?\d{3}-?\d{3}$/.test(value)) {
          return new Error("手機格式錯誤");
        }
        return true;
      },
      trigger: ["input", "blur"],
    },
  ],
};
function validatePasswordStartWith(rule, value) {
  return (
    !!Resform.password &&
    Resform.password.startsWith(value) &&
    Resform.password.length >= value.length
  );
}
function validatePasswordSame(rule, value) {
  return value === Resform.password;
}

const handlePasswordInput = () => {
  if (Resform.reenteredPassword) {
    rPasswordFormItemRef.value?.validate({ trigger: "password-input" });
  }
};

const login = () => {
  LoginShowModal.value = false;
  user.login(loginform);
  restform1();
  show.value = false;
};

const register = async () => {
  show.value = true;
  try {
    await api.post("/users", Resform);
    LoginShowModal.value = false;
    ReShowModal.value = false;
    restform();
    await Swal.fire({
      icon: "success",
      title: "成功",
      text: "註冊成功",
    });
    router.push("/");
  } catch (error) {
    LoginShowModal.value = false;
    ReShowModal.value = false;
    restform();
    Swal.fire({
      icon: "error",
      title: "失敗",
      text:
        error.isAxiosError && error.response.data
          ? error.response.data.message
          : "發生錯誤",
    });
  }
  show.value = false;
};
/* 預約表單登入與跳頁 ------------------------------------------------------------------------- */
const member = (isLogin) => {
  if (isLogin) {
    router.push("/member");
  } else {
    LoginShowModal.value = true;
  }
};

/* 登入之後按鈕顯示與否 --------------------------------------------------------------------- */
const user = useUserStore();
const { logout } = user;
const { isLogin, isAdmin, avatar } = storeToRefs(user);

/* RWD MENU ------------------------------------------------------------------------------- */
const menuOptions = [
  {
    label: () =>
      h(
        "a",
        {
          href: "#information",
        },
        "診所資訊"
      ),
    key: "診所資訊",
  },
  {
    label: () =>
      h(
        "a",
        {
          href: "#team",
        },
        "醫師介紹"
      ),
    key: "醫師介紹",
  },
  {
    label: () =>
      h(
        "a",
        {
          href: "#article",
        },
        "保健文章"
      ),
    key: "保健文章",
  },
  {
    label: () =>
      h(
        "a",
        {
          href: "#contact",
        },
        "聯絡我們"
      ),
    key: "聯絡我們",
  },
];
</script>

<style>
</style>