<script setup lang="ts">
import { toRefs } from "vue";

interface Props {
  image: string;
  superHost: boolean;
  title: string;
  stars: number;
  beds: number | null;
  type: string;
}

const props = defineProps<Props>();

const { image, superHost, title, stars, beds, type } = toRefs(props);
</script>

<template>
  <div class="w-[350px] md:w-[400px]">
    <div
      class="w-[350px] md:w-[400px] h-[200px] md:h-[270px] overflow-hidden flex justify-center items-center rounded-2xl"
    >
      <img :src="image" alt="" />
    </div>

    <div class="font-serif flex justify-between items-center mt-2">
      <div class="flex items-center gap-3">
        <div
          v-if="superHost"
          class="font-semibold px-2 py-1 border border-zinc-800 rounded-lg text-xs"
        >
          SUPER HOST
        </div>
        <p class="text-gray-400 text-sm font-semibold">
          {{ type }}. {{ beds }} beds
        </p>
      </div>

      <div class="flex items-center gap-1">
        <i class="text-red-400 ri-star-fill"></i>
        <span class="text-sm font-medium">{{ stars }}</span>
      </div>
    </div>

    <p class="font-semibold mt-2 text-md">{{ title }}</p>
  </div>
</template>

