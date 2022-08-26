<template>
  <div class="container">
    <section id="articlelook">
      <div class="articleWrap section">
        <div class="title">
          <h2>{{ articles.title }}</h2>
          <p>{{ new Date(articles.date).toLocaleDateString() }}</p>
        </div>
        <div class="articlePic">
          <img :src="articles.image" />
        </div>
        <div class="articleText">
          <h3>{{ articles.description }}</h3>
          <p v-html="articles.editor"></p>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { api } from "@/plugins/axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";

const router = useRoute();
const articles = reactive({
  _id: "",
  date: Date.now(),
  image: [],
  description: "",
  editor: "",
  category: "",
  title: "",
});

const init = async () => {
  try {
    const { data } = await api.get("/articles/catch/" + router.params.id);
    articles._id = data.result._id;
    articles.date = data.result.date;
    articles.image = data.result.image;
    articles.description = data.result.description;
    articles.editor = data.result.editor;
    articles.category = data.result.category;
    articles.title = data.result.title;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "失敗",
      text: error.isAxiosError ? error.response.data.message : error.message,
    });
  }
};
init();
</script>