<template>
    <div class="month">
        <div class="nav">
            <div class="nav_item">
                <button class="weekday_item_icon">
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
                <h1 class="nav_text">選擇日期</h1>
            </div>
            <div class="nav_item">
                <div class="nav_item_close" @click="monthHideHandler()">&times;</div>
            </div>
        </div>
        <ul class="weekday">
            <li class="weekday_item_title"> 
                <button class="weekday_item_title--prev" @click="prevMonth()">&lt;</button> 
                {{mYear+'/'+(mMonth+1)}}
                <button class="weekday_item_title--next" @click="nextMonth()">&gt;</button>     
            </li>
            <li v-for="(day, index) in monthDayList" class="weekday_item">
                <span class="weekday_item_Day">{{ day }}</span>
            </li>
        </ul>
        <ul class="month_container">
            <li class="month_container_item" :class="selectedDate.date==item?'month_container_item--active':''" v-for="(item, index) in monthCalendar" :key="item" @click="dateSelecter(mYear,mMonth,item)">
                <h2 class="month_container_item_title " :class="mYear==toyear&&mMonth==tomonth-1&&item==today?'today':''">
                    {{item}}
                </h2>
            </li>
        </ul>
    </div>
    <div class="calendarvite_btn_container">
        <button class="calendarvite_btn">選擇</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useMonth from '../composition/useMonth';
export default defineComponent({
    name: 'Month',
    props: {
        today: Number,
        toyear:Number,
        tomonth:Number
    },
    setup(props, context) {
        return useMonth(props,context);
    },
});
</script>
