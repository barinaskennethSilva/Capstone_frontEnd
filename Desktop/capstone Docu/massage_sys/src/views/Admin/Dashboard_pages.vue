<script>
import Header from "./Header.vue";
export default{
  name:"Dashboard_Pages",
components:{
	Header,
},
}

</script>

<template>
<Header/>
<div class="main bg-light">
<img src="./AdminPic/JillieJens01.png" style="width:84%;height:91vh;position:relative;bottom:5px;margin-left:195px;" alt="dashAdmin" />
<div class="container">
 

</div>




</div>

</template>
<style scoped>
@media screen and (min-width:360px) and (max-width:480px){
.main{
  with:90%;
  height:100vh;
  
}
.card img{
height:130px;
}

}
@media screen and (min-width:1024px){
.main{
	with:90%;
	height:100vh;
	
}
.card img{
height:130px;
}
.chart-row{
	display:flex;
	flex-direction:row;
}
.container{
	height:250px;
	width:100%;
	background-color:#fff;
	left:81px;
  position:absolute;
  bottom:0px;
}
 .SaleStock .record-form{
 font-size:20px;
 font-weight:700;
 text-align:center;
 padding:10px;
 }
 }
</style>