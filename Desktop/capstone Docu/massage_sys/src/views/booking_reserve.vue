<script>
import Dashboard_Cust from "./Dashboard_Cust.vue";

export default{
  name:"booking_reserve",
  components:{
  Dashboard_Cust,
},
data(){
    return{

step:1,

     daysOfWeek:[ 'Sun', 'Mon', 'Tue' , 'Wed', 'Thu', 'Fri', 'Sat' ],
     currentDate: new Date(),
     };
    },
    computed:{
currentMonth(day){
  const options = {month: 'long', year:'numeric'};
  return this.currentDate.toLocaleDateString('en-US', options);
  
},

isCurrentDate(){
  return(day) =>{
const currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(),day);
const today = new Date();
return currentDate.toDateString() === today.toDateString();
  };
},
calendarRows() {
  const firstDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);

  const daysInMonth = lastDayOfMonth.getDate();
  const firstDayOfWeek = firstDayOfMonth.getDay();

  let calendarRows = [];
  let dayCounter = 1;

  for (let i = 0; i < 6; i++) {
    let week = [];

    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDayOfWeek) || dayCounter > daysInMonth) {
        // Pushing objects with necessary properties when it's another month
        const prevMonthLastDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 0).getDate();
        const day = prevMonthLastDay - firstDayOfWeek + j + 1;
        week.push({ date: day, isOtherMonth: true });
      } else {
        week.push({ date: dayCounter, isOtherMonth: false });
        dayCounter++;
      }
    }

    calendarRows.push(week);
  }

  return calendarRows;
},

    },
methods:{
  nextStep(){
  this.step++;
  },
  prevStep(){
  this.step--;
  },
  submitForm(){
  alert("succcessfully submit");
  },
  prevMonth() {

  const currentMonth = (this.currentDate || new Date()).getMonth();
  this.currentDate = new Date((this.curentDate || new Date()).getFullYear(),currentMonth - 1, 1);
  
  },
   nextMonth() {
   const currentMonth = (this.currentDate || new Date()).getMonth();
  this.currentDate = new Date((this.curentDate || new Date()).getFullYear(),currentMonth + 1, 1);
  },
}
}
</script>

<template>

<Dashboard_Cust/>
<div class="main bg-light">
<img src="./img/backgroundFrom.jpeg" class="backform">
<div class='form-container ' style="display:flex;flex-direction:column !important;">
<div class="form-header text-center mb-5">
<h1 class="text-black"> Make an Appointment </h1>
</div>


<div class="form-sett">

<div class='form-disp1'>
<i class="bi bi-person-vcard icon-detail"></i>
<h2>Enter Information</h2>
<p>Please provide you contact  details saw we can send you a confirmation and other contact info</p>

<div class="pagnation-btn">
<div class="first-step"></div>
<div class="second-step"></div>
<div class="third-step"></div>
<div class="fourth-step"></div>
</div>
</div>

<div id="app" class="container">
    <transition name="slide" mode="out-in">
    <div :key="step">
 <form v-if="step === 1" key="step1" @submit.prevent="nextStep">

<div class="header-info">

<h2>Service Selection</h2>
</div>
<div class='step1'>

<div class="mb-3">
<select class="form-control">
<option>Single Services</option>
<option>Full Body Massage</option>
<option>Foot Reflex</option>
<option>Foot Spa</option>
<option>Earcandle</option>
<option>Milk Bodyscrub</option>
<option>30mins Footreflex</option>
<option>Hotel and Home Services</option>
</select>
</div>

<div class="mb-3">
<select class="form-control">
<option>Packages</option>
<option>Ventosa w/1hr Massage</option>
<option>Hotstone w/1hr Massage</option>
<option>Bodyscrub w/1hr Massage</option>
<option>Foot Spa w/1hr Massage</option>
<option>Earcandle w/1hr Massage</option>
<option>Footreflex w/1hr Massage</option>
</select>
</div>

<div class="mb-3">
<select class="form-control">
<option>Combo Packages</option>
<option>C1 1hr massage + Hotcompress + Free Earcandle</option>
<option>C2 1hr massage + Hotcompress + Free Earcandle</option>
<option>C3 1hr 1/2 massage + Hotcompress + Free Earcandle</option>
<option>C4 Earcandle + Footreflex + Massage</option>
<option>C5 Ventosa and Hotcompresss or Hotstone + Bodyscrub + Earcandle + 1hr Massage</option>
<option>VIP Room</option>
<option>VIP Couple</option>
<option>Add On</option>
<option>Hotcompress</option>
<option>Earcandle</option>
</select>
</div>

</div>
</form>
<form class='form-disp2' v-else-if="step === 2" @submit.prevent="nextStep">
<div class="header-info">
<h2>Agent Selection</h2>
</div>
<div class='step2'>
<div class="d-flex">
<div class="agent1 btn btn-light">
<i class="bi bi-person"></i>
<label>Yunjin</label>
</div>

<div class="agent1 btn btn-light">
<i class="bi bi-person"></i>
<label>Maviel</label>
</div>

<div class="agent1 btn btn-light">
<i class="bi bi-person"></i>
<label>Xiaolang</label>
</div>
</div>

</div>
</form>

<form class='form-disp2' v-else-if="step === 3"  @submit.prevent="nextStep">

<div class="header-info">
<h2>Date & Time Selection</h2>
</div>
<div style="display:flex;flex-direction:row;overflow:hidden;flex-wrap:no-wrap;width:580px;">
 


<div class="formDate p-3">
<div class="mb-3  w-100">
    <label for="date" class="form-label">The day you want to come</label>
    <input type="date" class="form-control" id="date" >
 </div>
  <div class="mb-3 w-100">
    <label for="time" class="form-label">Time Interval</label>
    <input type="time" class="form-control " id="time">
  </div>
  
    <div class="mb-3 w-100">
    <label for="time" class="form-label">Time Limit</label>
    <select type="time" class="form-control " id="time">
<option>3 hours</option>
<option>4 hours</option>
<option>2 hours</option>
    </select>
  </div>
</div>
</div>
</form>

<form v-else @s@submit.prevent="submitForm">
<div class="header-info">
<h2>Customer Info</h2>
</div>
<div class='step3'>
  <div class="d-flex">
   <div class="mb-3 w-50">
    <label for="first_name" class="form-label">First Name</label>
    <input type="text" class="form-control" id="first_name">
  </div>
<div class="mb-3 ms-3 w-50">
    <label for="last_name" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="last_name" >
 </div>
  </div>
  <div class="d-flex">
  <div class="mb-3 w-50">
    <label for="email" class="form-label">Email Address</label>
    <input type="email" class="form-control " id="email">
  </div>
<div class="mb-3 ms-3 w-50">
    <label for="contact" class="form-label">Phone Number</label>
    <input type="tel" class="form-control" id="contact" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
  </div>
  </div>
  <div class="mb-3">
    <label for="contact" class="form-label">Do you have medical restrictions that should be takes into account?</label>
    <p>Please help us with more details if any</p>
    <textarea class="form-control" id="med_data"></textarea>
  </div>
  <button type="submit" class="btn btn-primary w-100" style="display:none;">Submit</button>
</div>
</form>
<div class='btn-next'>
 <button v-if="step > 1" class="btn btn-light w-25 me-3 shadow" @click="prevStep"><i class="bi bi-arrow-left me-3" ></i>Back </button>
 <button  v-if="step < 4" class="btn btn-primary w-25 float-end shadow" @click="nextStep">Next Step<i class="bi bi-arrow-right ms-3"></i></button>
<button  v-if="step === 4" class="btn btn-primary w-25 float-end" @click="nextStep">Submit</button>

 </div>
</div>
    </transition>
  </div>







<div class='form-disp3'>
<div class="header-info" style="border-top-right-radius:8px;">
<h2>Summary</h2>
</div>
<div class="custo-details">
<div class='d-flex' style="border-bottom:1px solid #111">
<div class="mb-3 w-50 d-flex flex-column">
<label class="sum-label form-label"> Service</label>
<label>Hydra Therapy</label>
</div>

<div class="mb-3 w-5o ms-3 d-flex flex-column">
<label class="sum-label form-label"> Agent</label>
<label>Yunjin</label>
</div>
</div>

<div class='d-flex' style="border-bottom:1px solid #111">
<div class="mb-3 w-50 d-flex flex-column">
<label class="sum-label form-label"> Date</label>
<label>January 12 2025</label>
</div>

<div class="mb-3 w-5o ms-3 d-flex flex-column">
<label class="sum-label form-label"> Time</label>
<label>8:00 pm</label>
</div>
</div>

</div>
</div>

</div>

 
</div>

</div>
</template>
<style>

.wrapper{
  max-width: 250px;
  margin: 0 auto;
}
.main{
  width:84%;
  height:92.5vh !important;
  position:relative;
  left:242px;
  overflow-y:auto;
  overflow-x:hidden;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}
.backform{
  width:100%;
  height:100%;
  position:absolute;
  top:0px;
  left:0px;

}
.form-sett{
  display:flex;
  flex-direction:row;
  height:58vh;
  background-color:#cbcbcbff;
  width:95%;
  margin-left:30px;
  border-radius:8px;
  z-index:50;
}
.form-disp1{
  background-color:#fff;
  padding:10px;
  width:50%;
  text-align:center;
  border-top-left-radius:8px;
  border-bottom-left-radius:8px;
}
.form-disp1 .icon-detail{
  font-size:45px;
  margin:20px;
}
.pagnation-btn{
  display:flex;
  flex:1;

  justify-content:center;
}
.pagnation-btn div{
  border-radius:50%;
  height:20px;
  width:20px;
  border:1px solid #cdcdcdff;
  margin-left:10px;
}
.first-step{
  background-color:dodgerblue;
}
.form-disp2{
  width:100%;

}

.header-info{
  margin-bottom:10px;
  height:50px;
   background-color:#fff;
    padding:10px;
}
.header-info h2{
  font-size:25px;
  color:dodgerblue;
   text-align:center;
   
}
.step1, .step2, .step3{
  background-color:#fff;
  padding:10px;
  position:relative;
  bottom:7px;
  height:378px;
}
.form-disp3{
  width:50%;
  text-align:center;
  border-top-right-radius:8px;
  border-bottom-right-radius:8px;
}
.custo-details{
  margin-top:10px;
   background-color:#fff;
   height:382px;
   position:relative;
  bottom:7px;
   border-bottom-right-radius:8px;
}
.sum-label{
  font-size:20px;
  font-weight:700;
}
.btn-next{
  position:absolute;
  bottom:79px;
  left:330px; 
  width:620px;
  z-index:70;
}
.slide-enter-active, .slide-leave-active{
  transition:opacity 0.5s;
}
.slide-enter, .slide-leave-to{
  transition:opacity 0;
}
.agent1{
  display:flex;
  flex-direction:column;
  width:200px;
  height:150px;
  border:1px solid lightgrey;
  margin-right:10px;
}
.agent1 i{
font-size:45px;
}
.agent1 label{
  font-weight:700;
}
.formDate{
  background-color:#fff;
  width:100%;
  padding:10px;
  height:375px;
}
</style>