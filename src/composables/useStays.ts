import { computed, ref, toRef } from "vue";

import { useJourney } from "../store/index";

export const useStays = () => {
    const journey = useJourney();

    const locations = computed(() => journey.locations);
    const list = computed(() => journey.list);
    const getStays = computed(() => journey.getStays);

    const location = computed(() => journey.location);
    const guests = computed(() => journey.guests);

    const listStays = (location: string) => journey.listStays(location);
    const staysByCityAndCountry = (location: string[], guests: number) => journey.staysByCityAndCountry(location, guests)
    const sliceStays = (start: number, end: number) => journey.sliceStays(start, end)

    journey.listStays()

    sliceStays(0, 6)
    return {
        locations,
        list,
        getStays,

        location,
        guests,
        sliceStays,
        
        listStays,
        staysByCityAndCountry,
    }
}