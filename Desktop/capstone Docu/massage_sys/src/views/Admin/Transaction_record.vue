<script>
import Header from "./Header.vue";
export default{
  name:"Transaction_record",
components:{
	Header,
}
}

</script>

<template>
<Header/>
<div class="main bg-light">

<div class="container">
 <h1>Transaction Record</h1>
 <div class="table-request">
<table class="table">
  <thead>
    <tr>
      <th scope="col">Request Number</th>
      <th scope="col">Full Name</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Services Request</th>
       <th scope="col">Agent Therapist</th>
       <th scope="col">Time Arrival</th>
        <th scope="col">Time Interval</th>
         <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-light">
      <th scope="row">1</th>
      <td>Mark Otto</td>
      <td>098766543211</td>
      <td>Hydra Massage</td>
       <td>Jona Xiaolang</td>
      <td>8:00 am</td>
         <td>3 hours</td>
          <td>Finish</td>
    </tr>
    <tr>
       <th scope="row">1</th>
      <td>Mark Otto</td>
      <td>098766543211</td>
      <td>Hydra Massage</td>
       <td>Jona Xiaolang</td>
      <td>8:00 am</td>
         <td>3 hours</td>
          <td>Finish</td>
    </tr>
    <tr>
        <th scope="row">1</th>
      <td>Mark Otto</td>
      <td>098766543211</td>
      <td>Hydra Massage</td>
       <td>Jona Xiaolang</td>
      <td>8:00 am</td>
         <td>3 hours</td>
          <td>none</td>
    </tr>
     <tr>
        <th scope="row">1</th>
      <td>Mark Otto</td>
      <td>098766543211</td>
      <td>Hydra Massage</td>
       <td>Jona Xiaolang</td>
      <td>8:00 am</td>
         <td>3 hours</td>
          <td>none</td>
    </tr>
     <tr>
        <th scope="row">1</th>
      <td>Mark Otto</td>
      <td>098766543211</td>
      <td>Hydra Massage</td>
       <td>Jona Xiaolang</td>
      <td>8:00 am</td>
         <td>3 hours</td>
          <td>finish</td>
    </tr>
     <tr>
        <th scope="row">1</th>
      <td>Mark Otto</td>
      <td>098766543211</td>
      <td>Hydra Massage</td>
       <td>Jona Xiaolang</td>
      <td>8:00 am</td>
         <td>3 hours</td>
          <td>none</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
</template>

<style scoped>
.main{
	with:90%;
	height:100vh;
	text-align:center;
	margin-left:205px;
}
.container{
text-align:center;
padding:10px;
background-color:#fff;
height:80vh;
width:90%;
align-items:center;
justify-content:center;
}
.table-request{
	overflow-y:auto;
	overflow-x:hidden;
	height:80vh;
}
.table{
	margin-top:20px;
}
</style>
