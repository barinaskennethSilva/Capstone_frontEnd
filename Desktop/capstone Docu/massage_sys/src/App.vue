<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';




const mobile = ref(true);
const mobileNav = ref(false);

const dashOpen = () => {
  mobileNav.value = !mobileNav.value;
};


</script>

<template>

<div class='app'>
<nav class="navbar navbar-expand-lg navbar-light  " v-if="!$route.meta.hideNavbar">
  <div class="container-fluid">
    <a class="navbar-brand text-white fw-bold" href="#"> Jillie Jen's Massage Spa</a>
   
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link active text-white fw-bold" aria-current="page" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white fw-bold" to="/Services">Services</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white fw-bold" to="/about">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="login-btn" to="/Login">Login</RouterLink>
        </li>
       
      </ul>
    </div>

    <a class='navbar-brand text-white'> <button 
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarToggleExternalContent"
      aria-controls="navbarToggleExternalContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    style="margin-right:10px;color:#fff;">
     <i class="bi bi-justify" @click="dashOpen" v-show="mobile" :class="{'icon-active':mobileNav}"></i>
    </button></a>

    
  </div>
</nav>
    

<transition name="mobile-nav" class="mobileDash">
<ul v-show="mobileNav" class="dropdown-nav">
 <li class="nav-item">
<div class="topdash">
<h2>Welcome in<label>Jillie Jen's Massage</label></h2>
</div>
    </li>
<li class="nav-item">
          <RouterLink class="nav-link active text-white fw-bold nav-dash" aria-current="page" to="/"> <label style="position:relative;right:20px;height:40px;padding:10px;" @click="dashOpen" >Home</label></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white fw-bold nav-dash" to="/Services" @click="dashOpen" ><label class="nav-label" style="position:relative;right:10px;height:40px;padding:10px;">Services</label></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white fw-bold nav-dash" to="/about" @click="dashOpen" ><label class="nav-label ms-4" style="position:relative;right:28px;height:40px;padding:10px">About</label></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="login-btn nav-link text-white fw-bold nav-dash" to="/Login" @click="dashOpen" ><label class="nav-label" style="position:relative;right:15px;height:40px;padding:10px"> Login</label></RouterLink>
        </li>
      

 </ul>
</transition>
        
  <RouterView />
  </div>
</template>

<style scoped>
/*@media (min-width:481px)  { }
@media (min-width:641px)  { }
@media (min-width:961px)  {}
@media (min-width:1281px) { }*/
/* smartphones, iPhone, portrait 480x320 phones */
 @media screen and (min-width:320px) and (max-width:480px){
.navbar{
  z-index:50;
background-color:#111;
}
.navbar-brand{
  font-size:14px;
}

.dropdown-nav{
  padding:0;
}
.navbar-nav{
  position:relative;
right:400px;
}

.topdash{
  height:150px;
  width:100%;
  padding:20px;
color:#fff;
border-bottom:1px solid lightgrey;
}
.nav-item{
  margin-top:30px;
}
.nav-item .nav-link{
  position:relative;
  font-size:16px;
  font-weight:500;
  margin-right:30px;
}
.mobileDash{
  position:relative;
  bottom:10px;
}
.nav-item .nav-dash{
  color:orange;
  width:100%;
}
}
@media (min-width:1025px) { 
.navbar{
  z-index:50;

}
.navbar-nav{
  position:relative;
  left:40px;
}
.nav-item .nav-link{
  position:relative;
  font-size:16px;
  font-weight:500;
  margin-right:30px;
}
.nav-item .nav-link::after{
  content:'';
  position:absolute;
  left:0;
  bottom:-6px;
  width:100%;
  height:2px;
  background:#e4e4e4;
  border-radius:5px;
  transfrom:translateY(10px);
  opacity:0;
  transition: .5s;
}
.nav-item .nav-link:hover::after{
   transfrom:translateY(0px);
   opacity:1;
}
.login-btn{
  border-radius:10px;
  border:2px solid #fff;
  width:80px;
  text-align:center;
  position:relative;
  top:10px;
  left:300px;
  color:#fff !important;
  text-decoration:none;
  padding:10px;
  font-weight:500;
  }

.login-btn:hover{
  background-color:#fff;
  color:#111 !important;
}

.navbar{
  z-index:50;

}
.navbar-nav{
  position:relative;
  left:200px;
}
.nav-item .nav-link{
  position:relative;
  font-size:16px;
  font-weight:500;
  margin-right:30px;
}
.nav-item .nav-link::after{
  content:'';
  position:absolute;
  left:0;
  bottom:-6px;
  width:100%;
  height:2px;
  background:#e4e4e4;
  border-radius:5px;
  transfrom:translateY(10px);
  opacity:0;
  transition: .5s;
}
.nav-item .nav-link:hover::after{
   transfrom:translateY(0px);
   opacity:1;
}
.login-btn{
  border-radius:10px;
  border:2px solid #fff;
  width:80px;
  text-align:center;
  position:relative;
  top:10px;
  left:400px;
  color:#fff !important;
  text-decoration:none;
  padding:10px;
  font-weight:500;
  }

.login-btn::hover{
  background-color:#fff;
  color:#111 !important;
}
}

</style>
