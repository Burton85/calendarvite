<template>
    <week-day :today="today" :tmpdate="tmpDate" @showMonth="showMonthHandlerParent()"></week-day>
    <ul class="week">
        <li class="week_item" v-for="(item, index) in 25 * 8" :key="item">
            <h2 class="week_item_title" v-if="index % 8 == 0">
                {{ index / 8 < 12 ? index / 8 + ':00am' : index / 8 - 12 + ':00pm' }}
            </h2>
        </li>
    </ul>
    <div class="calendarvite_btn_container">
        <button class="calendarvite_btn" @click="showMonthHandlerParent()">+新增預約</button>
    </div>
    <month v-if="showMonth == true" @hideMonth="hideMonthHandlerParent()" :today="today" :toyear="toyear" :tomonth="tomonth"></month>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import WeekDay from '../components/WeekDay.vue';
import Month from '../components/MonthView.vue';
import useWeek from '../composition/useWeek';
export default defineComponent({
    name: 'WeekView',
    components: {
        WeekDay,
        Month,
    },
    setup() {
        return useWeek();
    },
});
</script>
