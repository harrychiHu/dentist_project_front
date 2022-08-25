import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import pinia from './plugins/pinia'

// import './assets/main.css'
import './style/css/style.css'

//文字編輯器
// import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

//路由轉頁特效動畫
// import VuePageTransition from 'vue-page-transition'

createApp(App)
  // .use(createPinia())
  .use(pinia)
  .use(router)
  .mount('#app')
  // .use(VuePageTransition)
  // .component('QuillEditor', QuillEditor)
