<script setup lang="ts">
import { toRefs, watch } from "vue";

// composables
import { useStays } from "../composables/useStays";

interface Props {
  location: string;
}

const props = defineProps<Props>();

const emit = defineEmits(["selected"]);
const { location } = toRefs(props);
const { list, listStays } = useStays();

watch(
  () => location.value,
  (value) => {
    listStays(location.value);
  }
);

const onSelected = (location: string) => {
  emit("selected", location);
};
</script>

<template>
  <ul class="pl-3">
    <li
      v-for="(location, index) in list"
      :key="location"
      @click="onSelected(location)"
      :class="index !== list.length - 1 && 'mb-6'"
      class="text-fmd"
    >
      <i class="ri-map-pin-fill" />
      {{ location }}
    </li>
  </ul>
</template>