<script>
import Header from "./Header.vue";
export default{
  name:"Booking_request",
components:{
	Header,
}
}

</script>

<template>
<Header/>
<div class="main bg-light">

<div class='reg-Form'>
<form>
<h1>Register Therapist Agent</h1>
<div class="d-flex w-75 ms-5">

  <div class="mb-3 w-50">
    <label for="fname" class="form-label">First Name</label>
    <input type="text" class="form-control" id="fname" aria-describedby="alertsms">
    <div id="alertsms" class="form-text text-center text-danger fw-bold">Empty field</div>
  </div>
  <div class="d-flex  w-75 ms-5">
  <div class="mb-3 w-50">
    <label for="lname" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="lname" aria-describedby="alertsms">
      <div id="alertsms" class="form-text text-center text-danger fw-bold">Empty field</div>
  </div>
  <div class="mb-3 w-50 me-2 ms-4">
    <label for="email" class="form-label">Email Address</label>
    <input type="email" class="form-control w-100" id="email" aria-describedby="alertsms">
       <div id="alertsms" class="form-text text-center text-danger fw-bold">Empty field</div>
  </div>
</div>


  <div class="mb-3 w-50 me-2 ms-4">
    <label for="ContNum" class="form-label">Contact Number</label>
    <input type="tel" maxlength="11" class="form-control" id="ContNum" aria-describedby="alertsms">
     <div id="alertsms" class="form-text text-center text-danger fw-bold">Empty field</div>
  </div>
</div>


<div class="d-flex  w-75 ms-5">
  <div class="mb-3 w-50">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" aria-describedby="alertsms">
     <div id="alertsms" class="form-text text-center text-danger fw-bold">Empty field</div>
  </div>

 <div class="mb-3 w-50 ms-4 me-2">
    <label for="position" class="form-label">Position</label>
    <input type="text" class="form-control" id="position" aria-describedby="alertsms">
         <div id="alertsms" class="form-text text-center text-danger fw-bold">Empty field</div>
  </div>
</div> 
<div class="mb-3 w-50 ms-4 text-start">
 <label for="gender" class="form-label">Gender</label>
<div class="d-flex">
  <div class=" form-check">
    <input type="checkbox" class="form-check-input" id="gender01">
    <label class="form-check-label" for="gender">Male</label>
  </div>
  <div class=" ms-3 form-check">
    <input type="checkbox" class="form-check-input" id="gender02">
    <label class="form-check-label" for="gender">Female</label>
  </div>
  </div>
  </div>
  <button type="submit" class="btn btn-primary w-25 fw-bold">Register</button>
</form>
</div>

</div>

</template>
<style scoped>
.reg-Form{
	background-color:dodgerblue;
	width:80%;
	
}
.main{
  position:relative;
  top:0px;
  left:211px;
  width:86%;
  height:92vh;
  text-align:center;
  display:flex;
  align-items:center;
  justify-content:center;
  flex:no-wrap;
  flex-direction:column;
}
.reg-Form form{
  width:80%;
  float:right;
  padding:20px;
  background-color:#fff;
   border-bottom-left-radius:30%;
  border-top-left-radius:30%;
}
</style>