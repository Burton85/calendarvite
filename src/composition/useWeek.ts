import { ref } from 'vue';

export default function() {
    const todate = new Date();
    const toyear = todate.getFullYear();
    const tomonth = todate.getMonth();
    const today = todate.getDate();
    let tmpDate = todate.getDay();
    if(tmpDate==0){
        tmpDate=7;
    }

    const activeDate=ref(today)
    const activeDateHandlerParent=(date:number)=>{
        activeDate.value=date;
    }


    const showMonth=ref(false)
    const showMonthHandlerParent=()=>{
        showMonth.value=true
    }
    const hideMonthHandlerParent=()=>{
        showMonth.value=false
    }
    return {
        showMonth,
        showMonthHandlerParent,
        hideMonthHandlerParent,
        activeDate,
        activeDateHandlerParent,
        toyear,
        tomonth,
        today,
        tmpDate
    };
}
