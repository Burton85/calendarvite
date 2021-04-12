<template>
    <div class="nav">
        <h1 class="nav_text" v-if="$route.path == '/week'">預約行事曆</h1>
        <h1 class="nav_text" v-else>
            <button class="nav_text--prev" @click="reduceActiveDate()">&lt;</button>
            <p class="nav_text_title">
                {{
                    state.activeDate.year +
                    '/' +
                    (state.activeDate.month + 1 < 10
                        ? '0' + (state.activeDate.month + 1)
                        : state.activeDate.month + 1) +
                    '/' +
                    state.activeDate.date
                }}
            </p>
            <button class="nav_text--next" @click="addActiveDate()">&gt;</button>
        </h1>
        <div class="nav_menus">
            <ul class="nav_menu" :class="menuActive ? 'nav_menu--active' : ''" @click="menuChanger(menuActive)">
                <li class="nav_menu_item">
                    <router-link to="/week">周檢視</router-link>
                </li>
                <li class="nav_menu_item">
                    <router-link to="/day">日檢視</router-link>
                </li>
                <h2 class="nav_menu_title">
                    {{ navTitle }}
                </h2>
            </ul>
            <ul
                class="nav_menu nav_menu_2"
                :class="menuActive2 ? 'nav_menu_2--active nav_menu--active' : ''"
                @click="menuChanger2(menuActive2)"
            >
                <li class="nav_menu_item">
                    <router-link to="/week">莉</router-link>
                </li>
                <h2 class="nav_menu_title">莉</h2>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import { useState } from '../store';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import useMenu from '../composition/useMenu';
export default defineComponent({
    name: 'Navigation',
    setup() {
        const { state } = useState();

        return {
            ...useMenu(),
            state,
        };
    },
    computed: {
        navTitle() {
            const route = useRoute();
            if (route.path == '/week') {
                return '周檢視';
            } else {
                return '日檢視';
            }
        },
    },
});
</script>
