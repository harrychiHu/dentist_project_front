<template>
  <div class="container">
    <section id="articlelook">
      <div>
        <div>
          <img :src="articles.articlePic" />
        </div>
        <div>
          <h2>{{ articles.articleTitle }}</h2>
          <h3>{{ articles.articleDescription }}</h3>
          <p v-html="articles.articleEditor"></p>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { apiAuth } from "@/plugins/axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";

const router = useRoute();
const articles = reactive({
  _id: "",
  articleDate: Date.now(),
  articlePic: [],
  articleDescription: "",
  articleEditor: "",
  articleCategory: "",
  articleTitle: "",
});

const init = async () => {
  try {
    const { data } = await apiAuth.get("/articles/catch/" + router.params.id);
    articles._id = data.result._id;
    articles.articleDate = data.result.articleDate;
    articles.articlePic = data.result.articlePic;
    articles.articleDescription = data.result.articleDescription;
    articles.articleEditor = data.result.articleEditor;
    articles.articleCategory = data.result.articleCategory;
    articles.articleTitle = data.result.articleTitle;
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