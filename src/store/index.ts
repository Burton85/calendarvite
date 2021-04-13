const today ={
    todate:new Date(),
    toyear:new Date().getFullYear(),
    tomonth:new Date().getMonth(),
    today:new Date().getDate(),
    tmpDate:new Date().getDay()==0?7:new Date().getDay()
  }
  import { reactive,readonly,inject } from 'vue'
  const createStore = () => {
    const state=reactive({
      today:{
        todate:today.todate,
        toyear:today.toyear,
        tomonth:today.tomonth,
        today:today.today,
        tmpDate:today.tmpDate
      },
      activeDate:{
        'year':today.toyear,
        'month':today.tomonth,
        'date':today.today,
      },
      isMonthShow:false,
    })

    const setActiveDate=(date:number)=> {
      state.activeDate.date=date;
    }
    const addActiveDate=()=> {
      if(state.activeDate.month==11){
        state.activeDate.year++
        state.activeDate.month=0
      }else{
        state.activeDate.month++
      }
    }
    const reduceActiveDate=()=> {
      if(state.activeDate.month==0){
        state.activeDate.year--
        state.activeDate.month=11
      }else{
          state.activeDate.month--
      }    
    }
    const showMonth=()=>{
      state.isMonthShow=true
    }
    const hideMonth=()=>{
      state.isMonthShow=false
    }
    return {
      state: readonly(state),
      setActiveDate,
      addActiveDate,
      reduceActiveDate,
      hideMonth,
      showMonth
    }
  }
//   export const state = Symbol('state')
//   export const useState = () => inject(state)

export default createStore()

// const state = Symbol()
// export default {state:createStore()}
