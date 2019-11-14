<template>
  <div class=" mt-2 d-flex justify-content-center align-items-center flex-column">
    <div class="board">
      <div :style="`top: ${top}px; left: ${toLeft}px; transform: rotate(${deg}deg)`" class="player">
        <img class="tank" src="../assets/tank1.png" alt="">
      </div>
      <div class="obsc"></div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'game',
  data () {
    return {
      top: 0,
      toLeft: 0,
      deg: 0
    }
  },
  methods: {
    down(){
      if(this.top + 3 <= 516){
        this.top+= 3
      }
    },
    up(){
      if(this.top - 3 >= 0){
        this.top-= 3
      }
    },
    left(){
      if(this.toLeft + 3 <= 1266){
        this.toLeft+= 3
      }
    },
    right(){
      if(this.toLeft - 3 >= 0){
        this.toLeft-= 3
      }
    },
    rotateClock(){
      this.deg+=3
    },
    rotateRevClock(){
      this.deg-=3
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
        
       }
    })
  }
}
</script>

<style>

.board {
  position: relative;
  width: 1300px;
  height: 550px;
  border: 2px solid black;
}

.player{
  position: absolute;
  transition: 100ms;
}

.player .tank{
  width: 30px;
  height: auto;
}

</style>