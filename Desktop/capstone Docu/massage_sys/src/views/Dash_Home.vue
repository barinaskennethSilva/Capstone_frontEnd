<template>
<Dashboard_Cust/>
<div class="main bg-light">
<div class="right-container bg-dark">


<div class="calendar shadow">
  <div class="topFormCal">
    <div class="navigation">
      <button class="previousMonth" @click="previousMonth" title="Previous Month"><i class="bi bi-chevron-left"></i></button>
    </div>
    <h2>{{ currentMonth }}</h2>
    <div class="navigation">
      <button @click="nextMonth" class="nextMonth" title="Next Month"><i class="bi bi-chevron-right"></i></button>
    </div>
  </div>
  <table class="table-cal">
    <thead>
      <tr>
        <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(week, index) in calendarRows" :key="index" >
        <td  v-for="(day, idx) in week" :key="idx" :class="{ 'current-date': isCurrentDate(day), 'prev-next-month': isPrevNextMonth(day) }" ><div v-if="day !== null" style="width:58px;">
            <span>{{ day }}</span>
            <div v-if="appointments[day]" class="appointment" :style="{ backgroundColor: primaryColor }">
              {{ appointments[day] }}
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>



<div class="col mt-2" >
      <div class="card">
  <div class="card-body">
    <p class="card-text text-white fw-bold">Single Services</p>
    <button class=" btn bg-primary fw-bold text-white">View Packages</button>
</div>
</div>
   <div class="">
       <div class="card">
  <div class="card-body">
    <p class="card-text text-white fw-bold"> Double Packages</p>
     <button class=" btn bg-primary fw-bold text-white">View Packages</button>
  </div>
    </div>
    </div>

    <div class="col">
       <div class="card">
  <div class="card-body">
    <p class="card-text text-white fw-bold"> Combo package</p>
     <button class=" btn bg-primary fw-bold text-white">View Packages</button>
  </div>
    </div>
 </div>
  </div>


</div>

<div class="left-container">


<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="./img/massage_pic1.jpg" class="d-block w-100" alt="slider1">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="./img/massage_pic.jpg" class="d-block w-100" alt="slider2">
    </div>
    <div class="carousel-item">
      <img src="./img/massage_pic1.jpg" class="d-block w-100" alt="slider3">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="container" style="position:relative;top:-80px;width:100%;">

<table class="table table-hover">
  <thead class="bg-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Package Type</th>
      <th scope="col">Service Type</th>
      <th scope="col">Price</th>
       <th scope="col">Hour</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th s>1</th>
      <td>Single Services</td>
      <td>1hr foot reflex</td>
      <td>300</td>
        <td>2</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Single Services</td>
      <td>Foot Spa</td>
      <td>500</td>
      <td>1</td>
    </tr>
 <tr>
      <th scope="row">3</th>
      <td>Single Services</td>
      <td>EarCandle</td>
       <td>300</td>
        <td>2</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Single Services</td>
      <td>Milk Bodyscrub</td>
       <td>300</td>
        <td>2</td>
    </tr>
   <tr>
      <th scope="row">5</th>
      <td>Single Services</td>
      <td>Footflex</td>
       <td>300</td>
        <td>2</td>
    </tr>
       <tr>
      <th scope="row">5</th>
      <td>Single Services</td>
      <td>Hotel & Home Services</td>
       <td>300</td>
        <td>2</td>
    </tr>
  </tbody>
</table>
</div>
</div>
  </div>
</template>

<script>
import Dashboard_Cust from "./Dashboard_Cust.vue";

export default {
  name: 'calendar',
    components:{
  Dashboard_Cust,
},
 data() {
  return {
    currentDate: new Date(),
    primaryColor: 'dodgerblue', // Primary color for appointment background
    appointments: {
      5: 'Appoint', // Example appointment on 5th day of the month
      15: 'Appoint', // Example appointment on 15th day of the month
    },
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // Fixed day names
  };
},
computed: {
  currentMonth() {
    const options = { month: 'long', year: 'numeric' };
    return this.currentDate.toLocaleDateString('en-US', options);
  },
  daysInMonth() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  },
  weeks() {
    const daysInMonth = this.daysInMonth;
    const firstDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1).getDay(); // 0-indexed, 0 is Sunday
    const totalDays = daysInMonth + firstDayOfMonth - 1; // total days including padding
    const totalWeeks = Math.ceil(totalDays / 7);
    const weeks = [];

    let currentDay = 1 - firstDayOfMonth;
    for (let week = 0; week < totalWeeks; week++) {
      const days = [];
      for (let i = 0; i < 7; i++) {
        if (currentDay > 0 && currentDay <= daysInMonth) {
          days.push(currentDay);
        } else {
          days.push(null); // placeholder for days outside the current month
        }
        currentDay++;
      }
      weeks.push(days);
    }
    return weeks;
  },
  daysOfWeek() {
    return this.dayNames;
  },
  calendarRows() {
    const firstDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1).getDay();
    const totalDays = this.daysInMonth.length + firstDayOfMonth - 1;
    const totalWeeks = Math.ceil(totalDays / 7);
    const calendarRows = [];

    let currentDay = 1 - firstDayOfMonth;
    for (let week = 0; week < totalWeeks; week++) {
      const days = [];
      for (let i = 0; i < 7; i++) {
        if (currentDay > 0 && currentDay <= this.daysInMonth.length) {
          days.push(currentDay);
        } else {
          days.push(null); // placeholder for days outside the current month
        }
        currentDay++;
      }
      calendarRows.push(days);
    }
    return calendarRows;
  },
},
methods: {
  isCurrentDate(day) {
    const today = new Date();
    return this.currentDate.getMonth() === today.getMonth() && day === today.getDate();
  },
  isPrevNextMonth(day) {
    return day === null;
  },
  nextMonth() {
    const newDate = new Date(this.currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    this.currentDate = newDate;
  },
  previousMonth() {
    const newDate = new Date(this.currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    this.currentDate = newDate;
  },
},
}

</script>

<style>
 @media screen and (min-width:320px) and (max-width:480px){

.main{
  width:100% !important;
  height:100vh !important;
  position:absolute !important;
  left:0px !important;
  overflow-y:auto;
  overflow-x:hidden;
  padding:0;
  margin:0;

}
.carousel{
  height:60%;
  width:100% !important;
  border-radius:0px !important;
}
.carousel-item img{
  height:330px !important;
  width:100%;
    border-radius:0px !important;
}
.container{
  position:absolute;
  width:100% !important;
  top:50px;
  left:0px;
  display:none;
}
.container table{
  width:100% !important;
}
  .right-container{
  width:100% !important;
  height:100vh;
  padding:20px;
  position:absolute;
 bottom:-450px;
}
.left-container{
  display:block;
  width:100% !important;
}
}

.main{
  width:84%;
  height:92.5vh !important;
  position:relative;
  left:242px;
  overflow-y:auto;
  overflow-x:hidden;
}
.right-container{
  width:40%;
  height:100vh;
  float:right;
  padding:20px;
} 
.left-container{
  width:60%;
  height:100vh;
  float:left;
  padding:20px;
}
 .right-container .calendar{
 width:100%;
 background-color:#111;
 }
.table-cal {
  border-collapse: collapse;
  width:20% !important;
  height:20%;
}
.topFormCal{
  background-color:dodgerblue;
  display:flex;
  justify-content: center; 
  align-items: center;
  text-align:center;
}
.topFormCal h2{
  font-weight:600;
  font-size:28px;
  width:300px;
  color:#fff;
  font-family:san Serif;
  margin-top:10px;
}
th, td {
  padding: 4px;
  border: 1px solid #ccc;
  background-color:#111;
  text-align:center;
  color:#fff;
}

th {
  background-color: transparent;
  padding:5px;
  font-size:14px !important;
}
.carousel{
  height:60%;
  width:100%;
  border-radius:20px;
   position:relative;
  bottom:10px;
}
.carousel-control-next ,.carousel-control-prev{
  postion:relative;
  bottom:80px;
}
.carousel-item img{
  height:330px !important;
  width:100%;
    border-radius:20px;
}
.left-container1{
   margin:10px 10px;
}
.card{
  width: 100%;
  height:15vh;
  background-color:#111;
  border-radius:10px !important;
  text-align:center;
  margin-bottom:10px;
}

.previousMonth{
  margin-right:20px;
  background-color:transparent;
  border:none;
  outline:none;
  font-size:30px;
  font-weight:700;
  color:#fff;
}
.nextMonth{
    margin-left:20px;
  background-color:transparent;
  border:none;
  outline:none;
  font-size:30px;
  font-weight:700;
  color:#fff;
  position:relative;
  top:5px;
}


</style>
