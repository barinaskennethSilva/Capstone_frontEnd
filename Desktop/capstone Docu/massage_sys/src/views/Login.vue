<script>
export default{
  name:"Login",
  methods:{
  Login(){
  this.$router.replace('Dash_Home');
  }
  }

}
</script>

<template>
<div class="background"></div>
<div class="mainForm shadow">

<div class="content">
<h2>jillie jen's Massage Spa</h2>
<p>We offer quality massage services for elaxing and stress free</p> 
<div class="text-sci">
<h2> Welcome!<br><span> To our massage spa</span> </h2>
  </div>
  <p>We offer a wide range of services, including massages, body treatments, and skincare services, all at affordable prices. Our team of experienced therapists is dedicated to providing high-quality services and personalized attention to each client. </p>

  <div class="social-icons">
<a href="#" class="soc-a"><i class="bi bi-facebook"></i></a>
<a href="#"><i class="bi bi-envelope-at"></i></a>
<a href="#"><i class="bi bi-twitter-x"></i></a>
  </div>
</div>

<div class='form-container'>
 <form class="myform"  @submit.prevent="Login()">
<h1>Login Account</h1>


  <div class="form-input">
    <i class="icon bi bi-envelope"></i>
   <input type="email" class="input-field" required/>
   <label>Email Address</label>
  </div>
 
  <div class="form-input">
   
       <input type="password" class="input-field" required/>
   <label>Password</label>
    <i class=" icon bi bi-key"></i>

  </div>


  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
  </div>
  <div class="mt-3">
  <div class="alert_msg" role="alert">
  A simple danger alert—check it out!
</div>
</div>
<div class="mt-3">
  <button type="submit" class="btnForm">Login</button>
</div>
<div class="login-register ">

  <span class="changeForm">Have not yet account?<RouterLink to="/Register" class="linkform">Sign up</RouterLink></span>
</div>
</form>

</div>





 
</div>
</template>
<style>
/* smartphones, iPhone, portrait 480x320 phones */
 @media screen and (min-width:320px) and (max-width:480px){
.background{
  height:100vh;
  width:100%;
  position:absolute;
  top:0px !important;
  left:0px;
   background-image:url("./img/BackFormPic.jpg");
  background-size:cover;
  background-position:center;
 filter:blur(10px);
 z-index:-50;
}
.form-container{
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100%;
  background:transparent;
  backdrop-filter:blur(20px);
  background-top-right-radius:10px;
  background-bottom-right-radius:10px;
  color:#e4e4e4;
  z-index:-50;
}
.mainForm{
  display:flex;
  flex-direction:row;
  width:85%;
  height:550px;
  top:50%;
  left:50%;
transform:translate(-50%,-50%);
  border-radius:10px;
  position:absolute;
  background-image:url("./img/BackFormPic.jpg");
  background-size:cover;
  background-position:center; 
   margin-top:20px;
   z-index:-50;
}
.mainForm .content{
 position:absolute;
 top:o;
 left:0;
 width:78%;
 height:100%;
 background:transparent;
 padding:80px;
 color:#e4e4e4;
 display:flex;
 justify-content:center;
 flex-direction:column;
 display:none;
 }
.text-sci h2{
  font-size:40px;
  line-height:1;
}
.text-sci h2 span{
  font-size:25px;
}
.text-sci p{
  font-size:16px;
  margin:20px 0;
}
.social-icons a i{
  font-size:22px;
  color:#e4e4e4;
  margin-right:10px;
  transition: .5s ease;
}
.social-icons a:hover i{
transform: scale(2.2) !important;
}
 .mainForm .form-container{
 height:100%;
 border-top-right-radius:10px;
 border-bottom-right-radius:10px;
 }

.myform h1{
  font-size:32px;
  text-align:center;
}
.myform p{
  font-size:12px;
  text-align:center;
}
.form-container .form-input{
 position:relative;
  width:340px;
  height:50px;
  border-bottom:2px solid #e4e4e4;
  margin:30px 0;
}
.form-input input{
  width:100%;
  height:100%;
  background:transparent;
  border:none;
  outline:none;
  font-size:16px;
  color:#e4e4e4;
  font-weight:500;
  padding:28px;
}
.form-input label{
  position:absolute;
  top:50%;
  left:0;
  transfrom:translateY(-50%);
  font-size:16px;
  font-weight:500;
  pointer-events:none;
  transition: .5s ease;
}
.input-field:focus + label, .input-field:valid + label{
  top: -5px !important;
}

.form-input .icon{
  position:absolute;
  top:13px;
  right:0;
  font-size:19px;
}
.alert_msg{
  color:red;
}
.btnForm{
  width:100%;
  height:45px;
  background-color:#c4103d;
  border:none;
  outline:none;
  border-radius:4px;
  cursor:pointer;
  font-weight:500;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  color:#e4e4e4;
}
.login-register {
font-size:14.5px;
font-weight:500;
text-align:center;
margin-top:25px;
}
.linkform{
  text-decoration:none;
  margin-left:10px;
  color:#e4e4e4 !important;
  font-weight:600;

}
.linkform:hover{
  text-decoration:underline;
}
 }

@media (min-width:1025px) { 

.background{
  height:100vh;
  width:100%;
  position:absolute;
  top:0px !important;
  left:0px;
   background-image:url("./img/BackFormPic.jpg");
  background-size:cover;
  background-position:center;
 filter:blur(10px);
}
.form-container{
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100%;
  background:transparent;
  backdrop-filter:blur(20px);
  background-top-right-radius:10px;
  background-bottom-right-radius:10px;
  color:#e4e4e4;
}
.mainForm{
  display:flex;
  flex-direction:row;
  width:75%;
  height:550px;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  border-radius:10px;
  position:absolute;
  background-image:url("./img/BackFormPic.jpg");
  background-size:cover;
  background-position:center;
  margin-top:20px;
}
 .mainForm .content{
 position:absolute;
 top:o;
 left:0;
 width:58%;
 height:100%;
 background:transparent;
 padding:80px;
 color:#e4e4e4;
 display:block;
 justify-content:center;
 flex-direction:column;
 }
.text-sci h2{
  font-size:40px;
  line-height:1;
}
.text-sci h2 span{
  font-size:25px;
}
.text-sci p{
  font-size:16px;
  margin:20px 0;
}
.social-icons a i{
  font-size:22px;
  color:#e4e4e4;
  margin-right:10px;
  transition: .5s ease;
}
.social-icons a:hover i{
transform: scale(2.2) !important;
}
 .mainForm .form-container{
 position:absolute;
 top:0;
 right:0;
 width:calc(100% - 58%);
 height:100%;
 border-top-right-radius:10px;
 border-bottom-right-radius:10px;
 }

.myform h1{
  font-size:32px;
  text-align:center;
}
.myform p{
  font-size:12px;
  text-align:center;
}
.form-container .form-input{
 position:relative;
  width:340px;
  height:50px;
  border-bottom:2px solid #e4e4e4;
  margin:30px 0;
}
.form-input input{
  width:100%;
  height:100%;
  background:transparent;
  border:none;
  outline:none;
  font-size:16px;
  color:#e4e4e4;
  font-weight:500;
  padding:28px;
}
.form-input label{
  position:absolute;
  top:50%;
  left:0;
  transfrom:translateY(-50%);
  font-size:16px;
  font-weight:500;
  pointer-events:none;
  transition: .5s ease;
}
.input-field:focus + label, .input-field:valid + label{
  top: -5px !important;
}

.form-input .icon{
  position:absolute;
  top:13px;
  right:0;
  font-size:19px;
}
.alert_msg{
  color:red;
}
.btnForm{
  width:100%;
  height:45px;
  background-color:#c4103d;
  border:none;
  outline:none;
  border-radius:4px;
  cursor:pointer;
  font-weight:500;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  color:#e4e4e4;
}
.login-register {
font-size:14.5px;
font-weight:500;
text-align:center;
margin-top:25px;
}
.linkform{
  text-decoration:none;
  margin-left:10px;
  color:#e4e4e4 !important;
  font-weight:600;

}
.linkform:hover{
  text-decoration:underline;
}
}
</style>
