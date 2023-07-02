<script setup lang="ts">
import { toRefs, watch } from "vue";

import { useCounter } from "../composables/useCounter";
import { useVModel } from "../composables/useModel";

interface Props {
  title: string;
  description: string;
  suffix: string;
  modelValue: string | number | 0;
}

const emit = defineEmits(["update:modelValue"]);
const props = defineProps<Props>();

const model = useVModel(props);
const { count, add, subtract } = useCounter();

const { title, description } = toRefs(props);


watch(
  () => count.value,
  (value) => {
    model.value = value;
  }
);


</script>
<template>
  <div title="Adults" description="Ages 13 or above">
    <p class="text-md font-semibold">{{ title }}</p>
    <p class="text-gray-400 mb-3">{{ description }}</p>
    <div class="flex gap-2">
      <button
        @click="subtract()"
        class="w-8 border border-zinc-500 rounded-md flex justify-center items-center"
      >
        <i class="ri-subtract-line"></i>
      </button>
      <input
        v-model="count"
        class="w-5 text-center outline-none"
        disabled
      />
      <button
        @click="add()"
        class="w-8 border border-zinc-500 rounded-md flex justify-center items-center"
      >
        <i class="ri-add-line"></i>
      </button>
    </div>
  </div>
</template>