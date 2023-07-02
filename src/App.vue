<script setup lang="ts">
// layout
import DefaultTemplate from "@/templates/DefaultTemplate.vue";

// components
import Card from "@/components/Card.vue";

// composables
import { useStays } from "./composables/useStays";

//
const { locations, getStays } = useStays();
</script>

<template>
  <default-template>
    <div class="flex justify-between items-end mb-7">
      <h1 class="text-2xl font-bold">Stays in Finland</h1>
      <p class="text-sm text-gray-600">{{ locations.length }}+ stays</p>
    </div>

    <div
      v-if="locations.length > 0"
      class="flex justify-center gap-7 flex-wrap"
    >
      <Card
        v-for="stay in locations"
        :key="stay.title"
        :beds="stay.beds"
        :title="stay.title"
        :type="stay.type"
        :stars="stay.rating"
        :image="stay.photo"
        :superHost="stay.superHost"
      />
    </div>
    <p v-else class="text-center mt-6 text-xl font-bold text-red-400">
      No stays found😥
    </p>
  </default-template>
</template>

<style scoped>
</style>
