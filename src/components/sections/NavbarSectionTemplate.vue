<script setup lang="ts">
import { ref, toRefs } from "vue";

// composables
import { useVModel } from "../../composables/useModel";

// components
import Input from "@/components/Input.vue";

interface Props {
  label: string;
  modelValue: string | number | "";
}

const props = defineProps<Props>();
const emit = defineEmits(["focus", "update:modelValue"]);

const model = useVModel(props);

const { label } = toRefs(props);

const onFocusInput = () => {
  emit("focus");
};
</script>
<template>
  <div class="w-full md:w-auto">
    <Input v-model="model" @focus="onFocusInput()" :label="label" />
    <div class="pt-8">
      <slot></slot>
    </div>
  </div>
</template>