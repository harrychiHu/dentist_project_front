<template>
  <div class="container">
    <section class="bg" id="contact_header">
      <div class="title section">
        <h2>聯絡我們</h2>
        <h3>CONTACT</h3>
      </div>
    </section>
    <section id="contact_content" class="section">
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5152534450663!2d121.56218171544712!3d25.050519643781985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab94341d7d47%3A0xf7a650042222a205!2zMTA15Y-w5YyX5biC5p2-5bGx5Y2A5YWr5b636Lev5Zub5q61MjQ15be3MzPomZ8!5e0!3m2!1szh-TW!2stw!4v1659314511861!5m2!1szh-TW!2stw"
          width="600"
          height="450"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="contact_row">
        <div class="contact_col">
          <n-icon-wrapper
            :size="40"
            :border-radius="20"
            color="#64C1C6"
            class="icon"
          >
            <n-icon :size="20"><map-marker-alt-icon /></n-icon>
          </n-icon-wrapper>
          <p>台北市松山區八德路四段245巷33號</p>
        </div>
        <div class="contact_col">
          <n-icon-wrapper
            :size="40"
            :border-radius="20"
            color="#64C1C6"
            class="icon"
          >
            <n-icon :size="20"><phone-alt-icon /></n-icon>
          </n-icon-wrapper>
          <p>(02)8509-2410</p>
        </div>
        <div class="contact_col">
          <n-icon-wrapper
            :size="40"
            :border-radius="20"
            color="#64C1C6"
            class="icon"
          >
            <n-icon :size="20"><time-icon /></n-icon>
          </n-icon-wrapper>
          <p>週一至週六 10 : 00 – 21 : 00 週三、週日公休</p>
        </div>
        <div class="contact_col">
          <n-icon-wrapper
            :size="40"
            :border-radius="20"
            color="#64C1C6"
            class="icon"
          >
            <n-icon :size="20"><line-icon /></n-icon>
          </n-icon-wrapper>
          <p>ID:85092410</p>
        </div>
        <div class="contact_col">
          <n-icon-wrapper
            :size="40"
            :border-radius="20"
            color="#64C1C6"
            class="icon"
          >
            <n-icon :size="20"><facebook-icon /></n-icon>
          </n-icon-wrapper>
          <a
            href="https://www.facebook.com/pages/category/Dentist---Dental-Office/%E5%96%9C%E6%A8%82%E8%8A%BD%E7%89%99%E9%86%AB%E8%A8%BA%E6%89%80-105752884273045/"
            >喜樂芽牙醫診所粉絲團</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { PhoneAlt as PhoneAltIcon } from "@vicons/fa";
import { MapMarkerAlt as MapMarkerAltIcon } from "@vicons/fa";
import { Line as LineIcon } from "@vicons/fa";
import { Time as TimeIcon } from "@vicons/ionicons5";
import { Facebook as FacebookIcon } from "@vicons/fa";
</script>