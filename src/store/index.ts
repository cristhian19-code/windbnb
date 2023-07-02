import { defineStore } from 'pinia'
import { Stay } from '../interfaces/stays'

import data from "../data/stays.json";

interface JourneyState {
    locations: Stay[];
    list: string[];
    location: string | null;
    guests: string | null;
}

export const useJourney = defineStore('jouney', {
    state: (): JourneyState => ({
        locations: [],
        list: [],
        location: null,
        guests: null,
    }),
    actions: {
        // slice the stays array
        sliceStays(start: number = 0, end: number = data.length) {
            this.locations = data.slice(start, end) as Stay[];
        },

        // slice the stays array
        staysByCityAndCountry(location: string[], guests: number) {
            const city = location[0];
            const country = location[1];

            this.location = `${city}, ${country}`;
            this.guests = `${guests} guests`;

            this.locations = data.filter((stay) => stay.city === city && stay.country === country && stay.maxGuests >= guests) as Stay[];
        },

        // list name of the stays
        listStays(location: string = "") {
            let filteredStays = data.filter((stay) => `${stay.city}, ${stay.country}`.toLowerCase().includes(location.toLowerCase()));

            const newArr = filteredStays.map((stay) => `${stay.city}, ${stay.country}`);
            this.list = [...new Set(newArr)];
        }
    },
    getters: {
        getStays(): number {
            return data.length - this.locations.length;
        }
    }
})