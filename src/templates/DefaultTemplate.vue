<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import FooterCustom from "@/components/Footer.vue";
</script>

<template>
  <navbar />

  <section class="px-5 mt-10">
    <slot></slot>
  </section>

  <footer-custom />
</template>