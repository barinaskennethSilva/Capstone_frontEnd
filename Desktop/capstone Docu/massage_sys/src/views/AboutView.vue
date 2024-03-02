<template>
 <img src='./img/pic1.jpg' class="mypic" alt="mypic">
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
.mypic{
  height:100vh;
  width:100%;
  position:absolute;
  top:0px !important;
  left:0px;
}
.about {
    min-height: 100vh;
    display: flex;
    align-items: center;
 z-index:50;
  }
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
 z-index:50;
  }
}
</style>
