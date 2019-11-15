<template>
  <div class=" mt-2 d-flex justify-content-center align-items-center flex-column">
    <div class="board">
      <div :style="`top: ${p1.top}px; left: ${p1.left}px; transform: rotate(${p1.deg}deg)`" class="player d-flex justify-content-center align-items-center ">
        <img class="tank" src="../assets/tank1.png" style="transform: rotate(270deg)" alt="">
        <div :style="`left: ${p1.bullet}px;`" class="bullet"></div>
      </div>
      <div :style="`top: ${p2.top}px; left: ${p2.left}px; ; transform: rotate(${p2.deg}deg)`"  class="player  d-flex justify-content-center align-items-center ">
        <img v-if="p2.hit === false" class="tank" src="../assets/tank1.png" style="transform: rotate(270deg)" alt="">
        <div v-if="p2.hit === false" :style="`left: ${p2.bullet}px;`" class="bullet"></div>
        <img class="ledakan" v-if="p2.hit === true" :style="`top: ${p2.top}px; left: ${p2.left}px;`" src="../assets/ledakan.gif" alt="">
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'game',
  data () {
    return {
      bulletPos: {
        top: 20,
        toLeft: 25
      },
      p1: {
        top: 0,
        left: 0,
        deg: 0,
        hit: false,
        bullet: 25
      },
      p2: {
        top: 200,
        left: 500,
        deg: 0,
        hit: false,
        bullet: 25
      }
    }
  },
  methods: {
    down(){
      if(this.p1.top + 3 <= 516){
        this.p1.top+= 3
      }
    },
    up(){
      if(this.p1.top - 3 >= 0){
        this.p1.top-= 3
      }
    },
    left(){
      if(this.p1.left + 3 <= 1266){
        this.p1.left+= 3
      }
    },
    right(){
      if(this.p1.left - 3 >= 0){
        this.p1.left-= 3
      }
    },
    rotateClock(){
      if(this.p1.deg +3 > 360){
        this.p1.deg = 0
      } else {
        this.p1.deg+=90
      }
    },
    rotateRevClock(){
      if(this.p1.deg -3 < -360 ){
        this.p1.deg = 0
      }
      this.p1.deg-= 90
    },
    fire(){
      for (let i = this.p1.bullet; i < 1384; i++) {
            setTimeout(() => {
              this.p1.bullet++
            }, 110);
      }
      setTimeout(() => {
        // FROM TOP (this.toLeft > (100 - 25) && this.toLeft < (100 + 30) && (this.deg == 90 || this.deg == -270) && this.top <  (100 - 30)
        // FROM RIGHT this.top > (this.top > (this.p2.top - 25) && this.top < (this.p2.top + 25) && (this.deg == 0 || this.deg == 360)
        // FROM BOTTOM ( this.toLeft > (this.p2.left - 25) && this.toLeft < (this.p2.left + 25) && this.top > this.p2.top && (this.deg == -90 || this.deg == 270) )
        if( this.p1.top < (this.p2.top + 25)  && this.p1.top > (this.p2.top - 25 )  && this.p1.left > this.p2.left && ( this.p1.deg == 180 || this.p1.deg == -180 ) || (this.p1.left > (this.p2.left - 25) && this.p1.left < (this.p2.left + 25) && this.p1.top > this.p2.top && (this.p1.deg == -90 || this.p1.deg == 270) ) || (this.p1.top > (this.p2.top - 25) && this.p1.top < (this.p2.top + 25) && (this.p1.deg == 0 || this.p1.deg == 360) && this.p1.left < (this.p2.left)) || (this.p1.left > (this.p2.left - 25) && this.p1.left < (this.p2.left + 30) && (this.p1.deg == 90 || this.p1.deg == -270) && this.p1.top < (this.p2.top - 30))){
          this.p2.hit = true
        }
        this.p1.bullet = 25
      }, 400);
    }
  },
  mounted(){
    window.addEventListener('keypress', e => {
       if ( String.fromCharCode(e.keyCode) == 'w') { 
         this.up(); 
       }
       if ( String.fromCharCode(e.keyCode) == 's') { 
         this.down();
       }
       if ( String.fromCharCode(e.keyCode) == 'd') { 
         this.left(); 
       }
       if ( String.fromCharCode(e.keyCode) == 'a') { 
         this.right(); 
       }
       if ( String.fromCharCode(e.keyCode) == ']') {
         this.rotateClock(); 
       }
       if ( String.fromCharCode(e.keyCode) == '[') { 
         this.rotateRevClock(); 
       }
       if ( String.fromCharCode(e.keyCode) == ' ') { 
         this.fire()
       }
    })
  }
}
</script>

<style>

.board {
  overflow: hidden;
  position: relative;
  width: 1300px;
  height: 550px;
  border: 2px solid black;
}


.player{
  position: absolute;
  width: 50px;
  height: 50px;
  border: 2px solid red;
}

.player .tank{
  width: 50px;
  height: auto;
}

.bullet{
  position: absolute;
  width: 10px;
  height: 5px;
  background-color: blue;
  z-index: -1;
}

.ledakan{
  width: 100px;
  height: auto;
}

</style>