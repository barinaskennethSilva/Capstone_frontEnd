<script>
import Dashboard_Cust from "./Dashboard_Cust.vue";
export default{
	name:"transact_record",
	 components:{
	Dashboard_Cust,
},
}


</script>
<template>
<Dashboard_Cust/>
<div class="main bg-light">
<h3>Transaction Record</h3>
<table class="table table-hover" style="position:relative;left:40px;top:20px;width:80%;">
 <thead>
    <tr class="table-danger">
      <th scope="col" class="text-white">Date & Time</th>
      <th scope="col" class="text-white">Time Interval</th>
      <th scope="col" class="text-white">Full name</th>
       <th scope="col" class="text-white">Agent</th>
      <th scope="col" class="text-white">Package Type</th>
      <th scope="col" class="text-white">Payment</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-light">
     <td>September 15, 2030</td>
      <td>3 hours</td>
       <td>Kenneth Barinas</td>
        <td>Xiaolong</td>
      <td>Single Package</td>
      <td>Hydra</td>
    </tr>
    <tr class="table-light">
      <td>September 15, 2030</td>
       <td>3 hours</td>
      <td>Kenneth Barinas</td>
      <td>Xiaolong</td>
      <td>Single Package</td>
  <td>Hydra</td>
    </tr>
    <tr class="table-light">
    <td>September 15, 2030</td>
      <td>3 hours</td>
       <td>Kenneth Barinas</td>
        <td>Xiaolong</td>
      <td>Single Package</td>
      <td>Hydra</td>

    </tr>
  </tbody>
</table>
</div>

</template>