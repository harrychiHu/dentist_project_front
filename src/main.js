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

createApp(App)
  // .use(createPinia())
  .use(pinia)
  .use(router)
  .mount('#app')
  // .component('QuillEditor', QuillEditor)
