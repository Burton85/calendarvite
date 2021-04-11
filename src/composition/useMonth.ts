import { ref,getCurrentInstance  } from 'vue';

export default function(context:any) {

    const monthDayList=['M','T','W','T','F','S','S']

    const monthHideHandler = () => {
        context.emit('hideMonth');
    };
    return {
        monthHideHandler,
        monthDayList
    };
}
