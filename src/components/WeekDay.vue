<template>
    <ul class="weekday">
        <li class="weekday_item">
            <button class="weekday_item_icon" @click="useState.showMonth()">
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                </svg>
            </button>
        </li>
        <li
            v-for="(day, index) in dayList"
            class="weekday_item"
            :class="state.activeDate.date == firstDate + index && $route.path == '/day' ? 'weekday_item--active' : ''"
            @click="useState.setActiveDate(firstDate + index)"
        >
            <span class="weekday_item_Day">{{ day }}</span>
            <span
                class="weekday_item_Date"
                :class="
                    firstDate + index == state.today.today &&
                    state.activeDate.month == state.today.tomonth &&
                    state.activeDate.year == state.today.toyear
                        ? 'today'
                        : ''
                "
            >
                {{ firstDate + index }}
            </span>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
    name: 'WeekDay',
    data() {
        return {
            dayList: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        };
    },
    setup(props, context) {
        const state: any = inject('state');
        const useState: any = inject('useState');
        const firstDate = computed(() => {
            let tmp =
                new Date(state.activeDate.year, state.activeDate.month, state.activeDate.date).getDay() == 0
                    ? 7
                    : new Date(state.activeDate.year, state.activeDate.month, state.activeDate.date).getDay();
            return state.activeDate.date - tmp + 1;
        });

        return {
            firstDate,
            state,
            useState,
        };
    },
});
</script>
