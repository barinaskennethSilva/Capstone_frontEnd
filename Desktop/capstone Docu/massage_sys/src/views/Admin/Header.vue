<script>
export default{
  name:"Header",
  data(){
  return{
  mobile:true,
  mobileNav:false,

  }
  },
  methods:{
  dashOpen(){
  this.mobileNav = !this.mobileNav
  },
  }

}
</script>

<template>

<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
   
    <a class='navbar-brand text-white'> <button 
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarToggleExternalContent"
      aria-controls="navbarToggleExternalContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    style="margin-right:10px">
     <i class="bi bi-justify" @click="dashOpen" v-show="mobile" :class="{'icon-active':mobileNav}"></i>
    </button></a>
   



<div class="dropdown">
  <button class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style="background-color:transparent;border:none;color:#fff; ">
     <img
            src="./AdminPic/massage_pic1.jpg"
            class="rounded-circle border border-light me-2"
            height="35"
            width="35"
            alt="Black and White Portrait of a Man"
            loading="lazy"/>
  </button>
  <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1" style="margin-left:-80px;">
    <li><a class="dropdown-item" href="#">My profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Logout</a></li>
  </ul>
</div>


    
  </div>
</nav>

<div>
<transition name="mobile-nav" class="mobileDash">
<div v-show="mobileNav">
<div class="Topdash">
<div class='logo'>
<img src='./AdminPic/massage_pic1.jpg' alt="logo">
</div>
<div style="display:flex;flex-direction:column;margin-left:10px;">
<label style='font-weight:700;font-size:20px;color:#fff;'>Kenneth Barinas</label>
<p style="font-size:15px;color:#fff;">kbarinas0@gmail.com</p>
</div> </div>
<ul  class="dropdown-nav">
<li class="nav-item">
          <RouterLink class="nav-link active text-white fw-bold nav-dash" aria-current="page" to="/Dashboard_Pages"><i class="bi bi-house-door icons"></i> <label style="position:relative;right:20px;">Dashboard</label></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white fw-bold nav-dash" to="/Upload_Serv"><i class="bi bi-bookmarks icons"></i><label class="nav-label" style="position:relative;right:2px;">Upload Services</label></RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link text-white fw-bold nav-dash" to="/Booking_request"><i class="bi bi-book icons"></i><label class="nav-label" style="position:relative;left:5px;"> Booking Request</label></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white fw-bold nav-dash" to="/Transaction_record"><i class="bi bi-bookmarks icons"></i><label class="nav-label ms-4">Transaction Record</label></RouterLink>
        </li>
              <li class="nav-item">
          <RouterLink class="nav-link text-white fw-bold nav-dash" to="/Therapist_reg"><i class="bi bi-bookmarks icons"></i><label class="nav-label" style="position:relative;left:25px;">Therapist Registration</label></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="login-btn nav-link text-white fw-bold nav-dash" to="Message"><i class="bi bi-chat-dots icons"></i><label class="nav-label " style="position:relative;right:22px;"> Messages</label></RouterLink>
        </li>
 
        </ul>
        </div>
</transition>
 </div>


<div class="dashboard">
<div class="topForm">
<div class='logo'>
<img src='./AdminPic/massage_pic1.jpg' alt="logo">
</div>
<h1> ADMIN GWAPO</h1>
</div>
  <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link active text-white fw-bold nav-dash" aria-current="page" to="/Dashboard_Pages"><i class="bi bi-house-door icons"></i> <label style="position:relative;right:13px;font-size:14px;">Dashboard</label></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white fw-bold nav-dash" to="/Upload_Serv"><i class="bi bi-bookmarks icons"></i><label class="nav-label" style="position:relative;left:5px;font-size:14px;">Upload Services</label></RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link text-white fw-bold nav-dash" to="/Booking_request"><i class="bi bi-book icons"></i><label class="nav-label" style="position:relative;left:7px;font-size:14px;"> Booking Request</label></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white fw-bold nav-dash" to="/Transaction_record"><i class="bi bi-bookmarks icons"></i><label class="nav-label" style="position:relative;left:11px;font-size:14px;">Transaction Record</label></RouterLink>
        </li>
                <li class="nav-item">
          <RouterLink class="nav-link text-white fw-bold nav-dash" to="/Therapist_reg"><i class="bi bi-bookmarks icons"></i><label class="nav-label" style="position:relative;left:18px;font-size:14px;">Therapist Registration</label></RouterLink>
        </li>
                 <li class="nav-item">
          <RouterLink class="login-btn nav-link text-white fw-bold nav-dash" to="Message"><i class="bi bi-chat-dots icons"></i><label class="nav-label" style="position:relative;right:25px;font-size:14px;"> Messages</label></RouterLink>
        </li>
       
      </ul>

</div>




</template>

<style scoped>
@media screen and (min-width:360px) and (max-width:480px){
  .navbar-brand{
  display:block;
  }
  .navbar{
width:100%;
z-index:40;
  }
  .dropdown{
  display:none;
  }
.dashboard{
display:none;
}
.mobileDash{
  background-color:#111;
  height:100vh;
  width:75%;
  display:block;
}

.mobileDash .Topdash{
    width:100%;
  height:100px;
  background-color:violet;
  display:flex;
  flex-direction:row;
  padding:20px;
}
.Topdash .logo img{
 width:50px;
 height:50px;
 border-radius:50%;
}
.dropdown-nav{
  text-align:center;
  font-size:17px;
  list-style-type:none;
} 
.dropdown-nav .nav-item{
  margin-top:10px;
}

.nav-dash:hover{
background-color:#98FB98;
}
}
@media screen and (min-width:1024px){
 .navbar-brand{
  display:none;
  }
  .navbar{
width:84%;
float:right;
z-index:40;
  }
   .dropdown{
  position:relative;
  left:880px;
  }
  .mobileDash{
  display:none;
  }
.dashboard{
  position:absolute;
  left:0px;
  top:0px;
  height:100vh;
  width:16%;
  background-color:#111;
  display:block;
 z-index:40;
}
}

.dashboard .topForm{
	width:100%;
	height:100px;
	border-bottom:2px solid #fff;
	padding:10px;
	display:flex;
	flex-direction:row;
}
.topForm h1{
	font-size:18px;
	color:#fefefe;
	margin:10px 5px;
}
.topForm .logo img{
	width:50px;
	height:50px;
	border-radius:50%;
}
.navbar-nav{
	text-align:center;
	margin-top:20px;
	font-size:17px;
}
.nav-dash:hover{
background-color:#98FB98;
}

.icons{
	position:absolute;
	left:10px;
	font-size:20px;
}
</style>