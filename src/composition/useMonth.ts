import { ref,computed  } from 'vue';

const month_olympic = [31,29,31,30,31,30,31,31,30,31,30,31];
const month_normal = [31,28,31,30,31,30,31,31,30,31,30,31];
function daysMonth(month:number, year:number) {
	var tmp = year % 4;
	if (tmp == 0) {
		return (month_olympic[month]);
	} else {
		return (month_normal[month]);
	}
}


export default function(state:any,context:any) {
    const mYear = ref(state.today.toyear)
    const mMonth = ref(state.today.tomonth)
    const firstDayOfMonth = computed(()=>{
        let day=new Date(mYear.value,mMonth.value,1).getDay()
        if(day==0){
            return 7
        }else{
            return day
        }
    })
    

    const monthDayList=['M','T','W','T','F','S','S']

    const monthCalendar=computed(()=>{
        let lastMonthSpace=new Array(firstDayOfMonth.value-1)
        let list =new Array(daysMonth(mMonth.value,mYear.value))
        for(let i=0;i<list.length;i++){
            list[i]=i+1;
        }
        return lastMonthSpace.concat(list)
    })
    const nextMonth=function(){
        if(mMonth.value==11){
            mYear.value++
            mMonth.value=0
        }else{
            mMonth.value++
        }
    }
    const prevMonth=function(){
        if(mMonth.value==0){
            mYear.value--
            mMonth.value=11
        }else{
            mMonth.value--
        }    
    }


    const selectedDate = ref({
        'year':state.today.toyear,
        'month':state.today.month,
        'date':state.today.today
    })
    const dateSelecter=function(yer:number,mon:number,dat:number){
        selectedDate.value={
            'year':yer,
            'month':mon,
            'date':dat
        }
    }
    return {
        mYear,
        mMonth,
        monthCalendar,
        firstDayOfMonth,
        monthDayList,
        prevMonth,
        nextMonth,
        selectedDate,
        dateSelecter
    };
}
