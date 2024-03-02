<script>
import Header from "./Header.vue";
import chat from "../chatFolder/chat.js";
export default{
 name:"Message",
  mixins: [chat],
  components:{
	Header,
},
};

</script>
<template>
<Header/>
<div class="main bg-light">
<!----- This temporary only and under delete if backend connected already ---->
<div v-if="!joined" class="parent-container">
 
 <input type="text" class="user-name" v-model="currentUser" placeholder="Name"/>
<button class="join-button btn btn-primary fw-bold" v-on:click="join">Join</button>

</div>
<!----- This temporary only and under delete if backend connected already ---->


<div class="temporaryDelete text-input" v-if="joined">


<div class="main-footer shadow">
<div class="main-data">
<div class="profile">
<img src='./AdminPic/massage_pic1.jpg' alt="profile"/>
</div>
<div class='sender-data'>
<label>Kenneth Barinas</label>
<span>kbarinas2gmail.com</span>
</div>
</div>
 </div>

<div class='text-container shadow'>
<div v-for="message in messages" :key="message.id">
<div class="sender-smg">
<div class="profile">
<img src='./AdminPic/massage_pic1.jpg' alt="profile"/>
</div>
<div class="smg-text">
<template v-if="message.text">
<span>{{message.user}}</span>
<span>{{message.text}}</span>
<span style='font-size:12px;text-align:center;margin-top:10px;'>January 20 2024</span>
</template>
</div>
</div>
</div>
</div>

<div class='input-msgContainer'>
<div class="input-msg shadow">
<input type="text" v-model="text" @input="showHide" class="myinput" placeholder='Type message...'>
<button class="button-send" type="submit" v-if="text.length > 0" v-on:click="sendMessage">
<i class="bi bi-send"></i>
</button>
<button class="button-send"  v-show="showLikeButton">
<i class="bi bi-camera"></i>
</button>
</div>
</div>

 <div class="msg-notif">
 <div class="footer">
<h1>Messages</h1>
<div class="search">
<i class="bi bi-search"></i>
<input type="text" placeholder="Search...">
 </div>
</div>

<button class="sender" @click="hideChat">
<div class='profile'>
<img src='./AdminPic/massage_pic1.jpg' alt="profile"/>
</div>
<div class="info-sender">
<label>Kenneth Barinas</label>
<span>Hello can you help me</span>
</div>
</button>


<button class="sender" style="background-color:dodgerblue;" @click="hideChat">
<div class='profile'>
<img src='./AdminPic/massage_pic1.jpg' alt="profile"/>
</div>
<div class="info-sender">
<label>Kenneth Barinas</label>
<span>Hello can you help me</span>
</div>
 </button>
 
 </div>
  </div>


    </div>
 </template>
 <style scoped>
 @media screen and (min-width:360px) and (max-width:480px){
 .main-footer{
  background-color:#fff;
    width:100%;
    text-align:center;
    position:relative;
    }
.main-footer .main-data{
  position:relative;
  left:30px;
  display:flex;
  padding:10px;
}
.main-footer .main-data .profile img{
width:50px;
height:50px;
border-radius:50%;
   }
   .main-footer .main-data  .sender-data{
display:flex;
flex-direction:column;
margin-left:20px;
}
.main-footer .main-data  .sender-data label{
  font-size:20px;
  font-weight:600;
}

.msg-notif{
  background-color:#fff;
  position:absolute;
  top:54px !important;
  left:0px;
  height:70vh;
  width:100% !important;
  z-index:90;
}
.footer{
  margin-top:10px;
  text-align:center;
  padding:10px;
  display:flex;
  flex-direction:row;
  border-bottom:1px solid #111;
}
.footer h1{
  font-size:30px;
}
.footer .search{
height:40px;
width:60%;
border-radius:20px;
border:1px solid lightgrey;
background-color:#fff;
margin-left:20px;
}
.footer .search input{
  height:100%;
  width:83%;
  margin-left:5px;
  border:none;
  outline:none;
  background-color:#fff;
}
.footer .search input.active{
  border:none;
  outline:none;

}
.sender{
  display:flex;
  flex-direction:row;
  padding:10px;
  width:100%;
  outline:none;
  border:none;
}
.sender .profile img{
width:40px;
height:40px;
border-radius:50%;
}
.sender .info-sender{
display:flex;
flex-direction:column;
margin-left:10px;
}
.sender .info-sender label{
  color:#111;
  font-weight:600;
}

.main-footer{
  background-color:#fff;
    width:100%;
    text-align:center;
    position:relative;
    top:0px;
}
.main-footer .main-data{
  position:relative;
  left:100px;
  display:flex;
  padding:10px;
}
.CloseChat{
  position:relative;
    right:90px;
    top:5px;
    font-size:20px;
    font-weight:700;
    height:40px;
    border:none;
    outline:none;
    background-color:transparent;
    display:block;
}
.input-msgContainer{
 width:100%;
 background-color:#fff;
 position:absolute;
 bottom:0px;
 height:60px;
 padding:10px;
 }
 .sender-smg{
  display:flex;
  } 
   .sender-smg .smg-text{
 display:flex;
 flex-direction:column;
 margin: 10px 30px;
 background-color:violet;
 padding:10px;
 color:#fff;
 border-radius:10px;
  }
 .sender-smg .profile img{
 height:50px;
 width:50px;
 border-radius:50%;
 }

 .input-msg{
height:40px;
width:80%;
border-radius:20px;
background-color:#fff;
border:1px solid lightgrey;
 height:49px;
 }
 .input-msg input{
height:100%;
  width:75%;
  margin-left:20px;
  border:none;
  outline:none;
 }
  .input-msg input.active{
  border:none;
  outline:none;
  }
 .input-msg .button-send{
position:relative;
top:4px;
left:15px;
font-size:25px;
border:none;
 outline:none;
 background-color:transparent;
 }
.msg-notif{
  background-color:#fff;
  position:absolute;
  top:0px;
  right:0px;
  height:100vh;
  width:20%;
}
.text-container{
 background-color:#fff;
 width:100%;
 height:70vh;
 position:relative;
 top:2px;
 padding:10px;
 }

 }

 @media screen and (min-width:1024px){


.parent-container{
  width:100%;
  height:100vh;
  position:fixed;
  top:0px;
  left:0px; 
  display:flex;
  align-items:center;
  text-align:center;
  justify-content:center;
}

.container{
  background-color:#fff;
  width:100%;
}
.main-footer{
  background-color:#fff;
    width:100%;
    text-align:center;
    position:relative;
    top:50px;
}
.main-footer .main-data{
  position:relative;
  left:300px;
  display:flex;
  padding:10px;
}
 
.main-footer .main-data  .sender-data{
display:flex;
flex-direction:column;
margin-left:20px;
}
.main-footer .main-data  .sender-data label{
  font-size:20px;
  font-weight:600;
}
.main-footer .main-data .profile img{
width:50px;
height:50px;
border-radius:50%;
   }
   .CloseChat{
   display:none;
   }
 .text-container{
 background-color:#fff;
 width:64%;
 height:75vh;
 position:relative;
 top:52px;
 left:245px;
 padding:10px;
 } 
  .sender-smg{
  display:flex;
  } 
   .sender-smg .smg-text{
 display:flex;
 flex-direction:column;
 margin: 10px 30px;
 background-color:violet;
 padding:10px;
 color:#fff;
 border-radius:10px;
  }
 .sender-smg .profile img{
 height:50px;
 width:50px;
 border-radius:50%;
 }
 .input-msgContainer{
 width:66%;
 background-color:#fff;
 position:absolute;
 bottom:0px;
 left:240px;
 height:60px;
 padding:10px;
 }

 .input-msg{
height:40px;
width:50%;
border-radius:20px;
background-color:#fff;
border:1px solid lightgrey;
 height:49px;
 }
 .input-msg input{
height:100%;
  width:80%;
  margin-left:20px;
  border:none;
  outline:none;
 }
  .input-msg input.active{
  border:none;
  outline:none;
  }
 .input-msg .button-send{
position:relative;
top:4px;
left:15px;
font-size:25px;
border:none;
 outline:none;
 background-color:transparent;
 }
.msg-notif{
  background-color:#fff;
  position:absolute;
  top:0px;
  right:0px;
  height:100vh;
  width:20%;
}
.footer{
  margin-top:50px;
  text-align:center;
  padding:10px;
  display:flex;
  flex-direction:column;
  border-bottom:1px solid #111;
}
.footer h1{
  font-size:30px;
}
.footer .search{
height:40px;
width:100%;
border-radius:20px;
border:1px solid lightgrey;
background-color:#fff;
}
.footer .search input{
  height:100%;
  width:83%;
  margin-left:5px;
  border:none;
  outline:none;
  background-color:#fff;
}
.footer .search input.active{
  border:none;
  outline:none;

}
.sender{
  display:flex;
  flex-direction:row;
  padding:10px;
   width:100%;
  outline:none;
  border:none;
}
.sender .profile img{
width:40px;
height:40px;
border-radius:50%;
}
.sender .info-sender{
display:flex;
flex-direction:column;
margin-left:10px;
}
.sender .info-sender label{
  color:#111;
  font-weight:600;
}
}

</style>