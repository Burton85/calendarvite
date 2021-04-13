<template>
    <week-day></week-day>
    <ul class="week">
        <li class="week_item" v-for="(item, index) in 25 * 8" :key="item">
            <h2 class="week_item_title" v-if="index % 8 == 0">
                {{ index / 8 < 12 ? index / 8 + ':00am' : index / 8 - 12 + ':00pm' }}
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
    name: 'WeekView',
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
