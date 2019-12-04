<template>
    <div>
        <div>{{today}}</div>
        <div>{{getFutureDate(1)}}</div>
    </div>
</template>

<script>
export default {
    data:()=>({
        month_olympic: [31,29,31,30,31,30,31,31,30,31,30,31],
        month_normal: [31,28,31,30,31,30,31,31,30,31,30,31],
        month_name: ["January","Febrary","March","April","May","June","July","Auguest","September","October","November","December"],
        week_show: ["日","一","二","三","四","五","六"],

        current_day: '',
        current_year: '',
        current_month: '',
        current_date: '',
        current_week: '',

        today:'',
    
    }), 
    mounted(){
        this.current_day = new Date();
        this.current_year = this.current_day.getFullYear();
        this.current_month = (this.current_day.getMonth()+1);
        this.current_date = this.current_day.getDate();
        this.current_week = this.current_day.getDay();

        this.today = this.current_month + '月' + this.doHandleMonth(this.current_date) + '日' + '(' + this.week_show[this.current_week] + ')'
    },
    methods:{
        getFutureDate(day){
            let t_day = new Date();
            let millseconds = t_day.getTime() + 1000*60*60*24*day
            t_day.setTime(millseconds)
            let t_year = t_day.getFullYear();
            let t_month = t_day.getMonth();
            let t_date = t_day.getDate();
            t_month = this.doHandleMonth(t_month + 1)
            t_date = this.doHandleMonth(t_date)
            return t_month + '月' + t_date + '日'
        },
        doHandleMonth(m){
            if(m.toString().length == 1){
            m = "0" + m;
            }
            return m;
        }
        // refreshDate(current_day,current_year,current_month,current_date){
        //     let str = "";
        //     let totalDay = daysMonth(current_month, current_year); //获取该月总天数
        //     let firstDay = dayStart(current_month, current_year); //获取该月第一天是星期几
        //     let myclass;
        //     for(let i=1; i<firstDay; i++){ 
        //         str += "<li></li>"; //为起始日之前的日期创建空白节点
        //     }
        //     for(let i=1; i<=totalDay; i++){
        //         if((i<current_day && current_year==current_date.getFullYear() && current_month==current_date.getMonth()) || current_year<current_date.getFullYear() || ( current_year==current_date.getFullYear() && current_month<current_date.getMonth())){ 
        //             myclass = " class='lightgrey'"; //当该日期在今天之前时，以浅灰色字体显示
        //         }else if (i==current_day && current_year==current_date.getFullYear() && current_month==current_date.getMonth()){
        //             myclass = " class='green greenbox'"; //当天日期以绿色背景突出显示
        //         }else{
        //             myclass = " class='darkgrey'"; //当该日期在今天之后时，以深灰字体显示
        //         }
        //         str += "<li"+myclass+">"+i+"</li>"; //创建日期节点
        //     }
        //     holder.innerHTML = str; //设置日期显示
        //     ctitle.innerHTML = month_name[current_month]; //设置英文月份显示
        //     cyear.innerHTML = current_year; //设置年份显示
        // }
    }
}
</script>

<style>

</style>