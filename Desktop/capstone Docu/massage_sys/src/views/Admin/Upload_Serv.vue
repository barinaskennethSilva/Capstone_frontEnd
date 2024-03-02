<script>
import Header from "./Header.vue";
export default{
  name:"Upload_Serv",
components:{
	Header,
}
}

</script>

<template>
<Header/>
<div class="main bg-light">
<div class="Upload_container">
<form>
<h1>Upload Services</h1>

<div class="d-flex w-75 ms-5">
 <div class="mb-3 w-50">
    <label for="fname" class="form-label">Types of Services</label>
    <select class="form-control" id="fname" aria-describedby="alertsms">
<option>Single Packages</option>
<option>Packages</option>
<option>Combo Packages</option>
    </select>
    <div id="alertsms" class="form-text text-center text-danger fw-bold">Empty field</div>
  </div>
  <div class="mb-3 w-50 me-2 ms-4">
    <label for="ServeAmount" class="form-label">Services Amount</label>
    <input type="text" class="form-control w-100" id="ServeAmount" aria-describedby="alertsms">
       <div id="alertsms" class="form-text text-center text-danger fw-bold">Empty field</div>
  </div>
</div>

<div class="d-flex w-75 ms-5">
 <div class="mb-3 w-50">
    <label for="ServeOffer" class="form-label">Services Offer</label>
    <input type="text" class="form-control" id="ServeOffer" aria-describedby="alertsms">
    <div id="alertsms" class="form-text text-center text-danger fw-bold">Empty field</div>
  </div>
  <div class="mb-3 w-50 me-2 ms-4">
    <label for="description" class="form-label">Description</label>
    <input type="text" class="form-control w-100" id="description" aria-describedby="alertsms">
       <div id="alertsms" class="form-text text-center text-danger fw-bold">Empty field</div>
  </div>
</div>


<div class="d-flex w-75 ms-5">
 <div class="mb-3 w-50">
    <label for="Imgfile" class="form-label">Upload Images</label>
    <input type="file" accept="images/*" class="form-control" id="Imgfile" aria-describedby="alertsms">
    <div id="alertsms" class="form-text text-center text-danger fw-bold">Empty field</div>
  </div>
  <div class="mb-3 w-50 me-2 ms-4">
    <label for="timeInter" class="form-label">Time Interval</label>
    <input type="text" class="form-control w-100" id="timeInter" aria-describedby="alertsms">
       <div id="alertsms" class="form-text text-center text-danger fw-bold">Empty field</div>
  </div>
</div>

  <button type="submit" class="btn btn-primary w-25 fw-bold">Upload</button>
</form>

</div>
</div>
</template>
<style scoped>
.Upload_container{
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
.Upload_container form{
  width:80%;
  float:right;
  padding:20px;
  background-color:#fff;
   border-bottom-left-radius:30%;
  border-top-left-radius:30%;
}
</style>