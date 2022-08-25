<template>
  <div class="container">
    <section id="articleHeader" class="bg">
      <div class="title section">
        <h2>保健文章</h2>
        <h3>ARTICLE</h3>
      </div>
    </section>
    <section id="articleContent">
      <div class="article_card section">
        <n-card
          :bordered="false"
          v-for="article in articles"
          :key="article._id"
        >
          <template #cover>
            <img :src="article.articlePic" />
          </template>
          <h2>{{ article.articleTitle }}</h2>
          <h3>
            <span
              >{{ new Date(article.articleDate).toLocaleDateString() }} /
              {{ article.articleCategory }}</span
            >
          </h3>
          <p>
            <n-ellipsis :tooltip="false" line-clamp="3">
              {{ article.articleDescription }}
            </n-ellipsis>
          </p>
          <div class="article_btn">
            <router-link :to="'/article-look/' + article._id">
              <n-button type="primary" color="#64C1C6" size="large">
                Read More
              </n-button>
            </router-link>
          </div>
        </n-card>
      </div>
    </section>
    <!-- <section id="articleContent">
      <div class="article_row section">
        <n-card
          :bordered="false"
          v-for="article in articles"
          :key="article._id"
        >
          <template #cover>
            <img :src="article.articlePic" />
          </template>
          <h2>{{ article.articleTitle }}</h2>
          <p>
            <span>{{
              new Date(article.articleDate).toLocaleDateString()
            }}</span>
          </p>
          <p>
            <n-ellipsis :tooltip="false" line-clamp="3">
              {{ article.articleDescription }}
            </n-ellipsis>
          </p>
          <div class="article_btn">
            <router-link :to="'/article-look/' + article._id">
              <n-button
                type="primary"
                color="#64C1C6"
                size="large"
                @click="team"
              >
                Read More
              </n-button>
            </router-link>
          </div>
          <hr />
        </n-card>
      </div>
    </section> -->
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { api } from "@/plugins/axios";
import Swal from "sweetalert2";

const router = useRouter();
const articles = reactive([]);

const init = async () => {
  try {
    const { data } = await api.get("/articles/allHome");
    articles.push(...data.result);
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "失敗",
      text: "取得文章資料失敗",
    });
    router.go(-1);
  }
};
init();
</script>