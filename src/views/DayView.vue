<template>
    <week-day></week-day>
    <ul class="week day">
        <li class="day_item" v-for="(item, index) in 25 * 2" :key="item">
            <h2 class="day_item_title" v-if="index % 2 == 0">
                {{ index / 2 < 12 ? index / 2 + ':00am' : index / 2 - 12 + ':00pm' }}
            </h2>
        </li>
    </ul>
    <div class="calendarvite_btn_container">
        <button class="calendarvite_btn" @click="useState.showMonth()">+新增預約</button>
    </div>
    <month v-if="state.isMonthShow == true"></month>
</template>
<script lang='ts'>
import { defineComponent,inject } from 'vue';
import WeekDay from '../components/WeekDay.vue';
import Month from '../components/MonthView.vue';
export default defineComponent({
    name: 'DayView',
    components: {
        WeekDay,
        Month,
    },
    setup() {
        const state:any= inject('state')
        const useState: any = inject('useState')

        return {
            state,
            useState
        };
    },
});
</script>
