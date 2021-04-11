<template>
    <ul class="weekday">
        <li class="weekday_item">
            <button class="weekday_item_icon" @click="monthShowHandler()">
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
            :class="activeDate == firstDate + index ? 'weekday_item--active' : ''"
            @click="activeDateHandlerChild(firstDate + index)"
        >
            <span class="weekday_item_Day">{{ day }}</span>
            <span class="weekday_item_Date" :class="firstDate + index == today ? 'today' : ''">
                {{ firstDate + index }}
            </span>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, emit } from 'vue';

export default defineComponent({
    name: 'WeekDay',
    props: {
        activeDate: {
            type: Number,
            default: 0,
        },
        today: {
            type: Number,
            default: 1,
        },
        tmpdate: {
            type: Number,
            default: 1,
        },
    },
    data() {
        return {
            dayList: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        };
    },
    computed: {
        firstDate() {
            return this.today - this.tmpdate + 1;
        },
    },
    setup(props, context) {
        const activeDateHandlerChild = (date) => {
            context.emit('dateActived', date);
        };
        const monthShowHandler = () => {
            context.emit('showMonth');
        };
        return {
            activeDateHandlerChild,
            monthShowHandler,
        };
    },
});
</script>
