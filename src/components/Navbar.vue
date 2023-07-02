<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
// components
import NavbarSectionTemplate from "@/components/sections/NavbarSectionTemplate.vue";
import ListStays from "@/components/ListStays.vue";
import ControlInput from "@/components/ControlInput.vue";
import { useStays } from "../composables/useStays";

const { staysByCityAndCountry, location, guests, sliceStays } = useStays();

// vars
const active = ref<boolean>(false);

const adults = ref<number>(0);
const children = ref<number>(0);

const visibleList = ref<boolean>(false);
const visibleControl = ref<boolean>(false);

const total = ref<number>(0);

const locationModel = ref<string>("");

// computed
const totalGuest = computed(() => {
  total.value = adults.value + children.value;
  return `${total.value} guests`;
});

// methods
const toggleDrawer = () => {
  active.value = !active.value;
};

const onActiveList = () => {
  visibleList.value = true;
  visibleControl.value = false;
};

const onActiveControl = () => {
  visibleControl.value = true;
  visibleList.value = false;
};

const onSelectedStay = (location: string) => {
  locationModel.value = location;
};

const handleSearch = () => {
  const locationArr =
    locationModel.value.length === 0
      ? []
      : locationModel.value.split(",").map((item) => item.trim());

  if (locationArr.length > 1 && total.value > 0) {
    staysByCityAndCountry(locationArr, total.value);
    active.value = false;
  } else if (locationArr.length === 0 && total.value === 0) {
    sliceStays(0, 6);
  } else {
    alert("Select a location and at least one guest");
  }
};

// lifecycle
onMounted(() => {
  window.addEventListener("scroll", () => {
    if (active.value) {
      toggleDrawer();
    }
  });
});
</script>
<template>
  <header class="px-5 py-4 flex flex-col md:flex-row justify-between relative">
    <nav class="flex md:items-center md:justify-center">
      <img src="/logo.png" class="w-[120px]" alt="" />
    </nav>
    <nav class="flex items-center md:justify-center mt-4 md:mt-0 gap-1">
      <button
        class="px-3 md:px-5 py-3 shadow rounded-l-md rounded-r-sm"
        :class="guests ? 'text-black font-semibold' : 'text-gray-400'"
      >
        {{ location || "Add location" }}
      </button>
      <button
        class="px-3 md:px-5 py-3 shadow rounded-sm"
        :class="guests ? 'text-black font-semibold' : 'text-gray-400'"
      >
        {{ guests || "Add guests" }}
      </button>
      <button
        @click="toggleDrawer()"
        id="btn-search"
        class="px-5 h-[48px] md:h-full shadow rounded-r-md rounded-l-sm text-orange-500 font-bold text-lg flex justify-center items-center"
      >
        <i class="ri-search-line"></i>
      </button>
    </nav>
  </header>

  <div
    class="-top-full drawer-search fixed transition-all items-start duration-700 left-0 w-full h-full z-30 flex gap-4"
    :class="active && 'visible'"
  >
    <div
      class="bg-white w-full flex flex-col md:flex-row items-start px-4 py-[50px] gap-4 z-50"
    >
      <navbar-section-template
        @focus="onActiveList"
        v-model="locationModel"
        label="LOCATION"
      >
        <list-stays
          v-show="visibleList"
          @selected="onSelectedStay"
          :location="locationModel"
        />
      </navbar-section-template>

      <navbar-section-template
        @focus="onActiveControl"
        v-model="totalGuest"
        label="GUESTS"
      >
        <div v-show="visibleControl">
          <control-input
            v-model="adults"
            title="Adults"
            description="Ages 13 or above"
          />
          <control-input
            v-model="children"
            class="mt-4"
            suffix="guests"
            title="Children"
            description="Ages 2 - 12"
          />
        </div>
      </navbar-section-template>

      <button
        @click="handleSearch()"
        class="py-3 px-5 bg-red-500 text-white rounded-xl gap-3 flex justify-center"
      >
        <i class="ri-search-line"></i>
        Search
      </button>
    </div>
    <div
      @click="toggleDrawer()"
      class="absolute h-full w-full bg-black/30 z-40"
    ></div>
  </div>
</template>

<style>
.visible {
  top: 0 !important;
}
</style>
