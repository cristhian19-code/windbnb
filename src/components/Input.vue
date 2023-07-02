<script setup lang="ts">
import { toRefs } from "vue";
import { useVModel } from "../composables/useModel";

interface Props {
  label?: string | "label";
  type?: string | "text";
  modelValue: string | number | "";
}

const props = defineProps<Props>();

const emit = defineEmits(["focus", "update:modelValue"]);

const model = useVModel(props);

const { label, type } = toRefs(props);

const onFocus = () => {
  emit("focus");
};
</script>

<template>
  <div class="w-full md:w-[400px] relative">
    <p class="absolute top-2 left-3 text-xs">{{ label }}</p>
    <input
      @focus="onFocus()"
      v-model="model"
      class="w-full shadow h-14 outline-none px-3 pt-4 rounded-lg focus: border-zinc-800 focus:border"
      :type="type"
    />
  </div>
</template>
