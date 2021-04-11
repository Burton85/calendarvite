import { ref } from 'vue';

export default function() {
    const menuActive = ref(false);
    const menuActive2 = ref(false);
    const menuChanger = (bol:Boolean) => {
        menuActive.value = !bol;
    };
    const menuChanger2 = (bol:Boolean) => {
        menuActive2.value = !bol;
    };
    return {
        menuActive,
        menuActive2,
        menuChanger,
        menuChanger2,
    };
}
