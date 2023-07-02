import { ref } from "vue"

export const useCounter = (initialValue: number = 0) => {
    const count = ref<number>(initialValue)

    const add = () => count.value++

    const subtract = () => count.value > 0 && count.value--

    return {
        count,

        add,
        subtract
    }
}