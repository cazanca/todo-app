import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore('app', () => {
    const dark = ref(true)

    const update = () => {
        dark.value = !dark.value
    }

    return {
        dark,
        update
    }
})