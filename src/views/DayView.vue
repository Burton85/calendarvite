<template>
    <week-day
        :today="today"
        :tmpdate="tmpDate"
        :activeDate="activeDate"
        @dateActived="(val) => (activeDate = val)"
        @showMonth="showMonthHandlerParent()"
    ></week-day>
    <ul class="week day">
        <li class="day_item" v-for="(item, index) in 25 * 2" :key="item">
            <h2 class="day_item_title" v-if="index % 2 == 0">
                {{ index / 2 < 12 ? index / 2 + ':00am' : index / 2 - 12 + ':00pm' }}
            </h2>
        </li>
    </ul>
    <month v-if="showMonth == true" @hideMonth="hideMonthHandlerParent()"></month>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import WeekDay from '../components/WeekDay.vue';
import Month from '../components/MonthView.vue';
import useWeek from '../composition/useWeek';

export default defineComponent({
    name: 'DayView',
    components: {
        WeekDay,
        Month,
    },
    setup() {
        return useWeek();
    },
});
</script>
