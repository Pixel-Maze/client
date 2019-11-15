<template>
  <div class=" mt-2 d-flex justify-content-center align-items-center flex-column">
    <div class="board">
      <!-- <div :style="`top: ${p1.top}px; left: ${p1.left}px; transform: rotate(${p1.deg}deg)`" class="player d-flex justify-content-center align-items-center ">
        <img class="tank" src="../assets/tank1.png" style="transform: rotate(270deg)" alt="">
        <div :style="`left: ${p1.bullet}px;`" class="bullet"></div>
      </div>
      <div :style="`top: ${p2.top}px; left: ${p2.left}px; ; transform: rotate(${p2.deg}deg)`"  class="player  d-flex justify-content-center align-items-center ">
        <img v-if="p2.hit === false" class="tank" src="../assets/tank1.png" style="transform: rotate(270deg)" alt="">
        <div v-if="p2.hit === false" :style="`left: ${p2.bullet}px;`" class="bullet"></div>
        <img class="ledakan" v-if="p2.hit === true" :style="`top: ${p2.top}px; left: ${p2.left}px;`" src="../assets/ledakan.gif" alt="">
      </div> -->
      <div :style="`top: ${top}px; left: ${toLeft}px; transform: rotate(${deg}deg)`" class="player">
        <img class="tank" src="../assets/tank1.png" alt="" style='transform: rotate(0 deg)'>
        <img class="ledakan" v-if="hit === true" :style="`top: ${top}px; left: ${toLeft}px;`" src="../assets/ledakan.gif" alt="">
        <div :style="`left: ${bullet}px;`" class="bullet"></div>

      </div>

      <enemy v-for="(enemy,index) in enemyPosition" :key="index" :enemy="enemy"></enemy>

      <div class="obsc"></div>
  </div>
    <div> 
      
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import enemy from '../components/Enemy.vue'
export default {
  name: 'game',
  components: {
    enemy
  },
  data () {
    return {
      // bulletPos: {
      //   top: 20,
      //   toLeft: 25
      // },
      // p1: {
      //   top: 0,
      //   left: 0,
      //   deg: 0,
      //   hit: false,
      //   bullet: 25
      // },
      // p2: {
      //   top: 200,
      //   left: 500,
      //   deg: 0,
      //   hit: false,
      //   bullet: 25
      // }
      socket: io.connect('http://serverpixel.dreamcarofficial.com'),
      hit: false,
      top: 0,
      toLeft: 0,
      deg: 0,
      playername: 'Owl',
      id: null,
      enemy: false,
      enemyPosition: [],
      name: localStorage.getItem('name'),
      bullet:0
    }
  },
  methods: {

//     down(){
// <<<<<<< HEAD
    //   if(this.top + 3 <= 516){
    //     this.top+= 3
    //     this.socket.emit('top', {
    //       top: this.top,
    //       id: this.id
    //     })
    //   }
    // },
    // up(){
    //   if(this.top - 3 >= 0){
    //     this.top-= 3
    //     this.socket.emit('top', {
    //       top: this.top,
    //       id: this.id
    //     })
    //   }
    // },
    // left(){
    //   if(this.toLeft + 3 <= 1266){
    //     this.toLeft+= 3
    //     this.socket.emit('toLeft', {
    //       toLeft: this.toLeft,
    //       id: this.id
    //     })
    //   }
    // },
    // right(){
    //   if(this.toLeft - 3 >= 0){
    //     this.toLeft-= 3
    //       this.socket.emit('toLeft', {
    //       toLeft: this.toLeft,
    //       id: this.id
    //     })
    //   }
    // },
    // rotateClock(){
    //   this.deg+=3
    //   this.socket.emit('deg', {
    //     deg: this.deg,
    //     id: this.id
    //   })

    // },
    // rotateRevClock(){
    //   this.deg-=3
    //   this.socket.emit('deg', {
    //     deg: this.deg,
    //     id: this.id
    //   })
    // },

    // getPlayerPosition () {
    //   this.socket.emit('getPlayerPosition')
    // },

    //   },

    // down(){  
    //   if(this.p1.top + 3 <= 516){
    //     this.p1.top+= 3
    //   }
    // },
    // up(){
    //   if(this.p1.top - 3 >= 0){
    //     this.p1.top-= 3
    //   }
    // },
    // left(){
    //   if(this.p1.left + 3 <= 1266){
    //     this.p1.left+= 3
    //   }
    // },
    // right(){
    //   if(this.p1.left - 3 >= 0){
    //     this.p1.left-= 3
    //   }
    // },
    // rotateClock(){
    //   if(this.p1.deg +3 > 360){
    //     this.p1.deg = 0
    //   } else {
    //     this.p1.deg+=90
    //   }
    // },
    // rotateRevClock(){
    //   if(this.p1.deg -3 < -360 ){
    //     this.p1.deg = 0
    //   }
    //   this.p1.deg-= 90
    // },
    fire(){
      for (let i = this.bullet; i < 1384; i++) {
            setTimeout(() => {
              this.bullet++
            }, 110);
      }
      setTimeout(() => {
        // FROM TOP (this.toLeft > (100 - 25) && this.toLeft < (100 + 30) && (this.deg == 90 || this.deg == -270) && this.top <  (100 - 30)
        // FROM RIGHT this.top > (this.top > (this.p2.top - 25) && this.top < (this.p2.top + 25) && (this.deg == 0 || this.deg == 360)
        // FROM BOTTOM ( this.toLeft > (this.p2.left - 25) && this.toLeft < (this.p2.left + 25) && this.top > this.p2.top && (this.deg == -90 || this.deg == 270) )
        // if( this.p1.top < (this.p2.top + 25)  && this.p1.top > (this.p2.top - 25 )  && this.p1.left > this.p2.left && ( this.p1.deg == 180 || this.p1.deg == -180 ) || (this.p1.left > (this.p2.left - 25) && this.p1.left < (this.p2.left + 25) && this.p1.top > this.p2.top && (this.p1.deg == -90 || this.p1.deg == 270) ) || (this.p1.top > (this.p2.top - 25) && this.p1.top < (this.p2.top + 25) && (this.p1.deg == 0 || this.p1.deg == 360) && this.p1.left < (this.p2.left)) || (this.p1.left > (this.p2.left - 25) && this.p1.left < (this.p2.left + 30) && (this.p1.deg == 90 || this.p1.deg == -270) && this.p1.top < (this.p2.top - 30))){
        //   this.p2.hit = true
        // }
        this.bullet = 25
        setTimeout(() => {
          this.hit = true
        }, 2000);
      }, 400);
    },
    down(){
      if(this.top + 3 <= 516){
        this.top+= 3
        this.socket.emit('top', {
          top: this.top,
          id: this.id,
          name: this.name
        })
      } else {
        this.hit = true;
      }
    },
    up(){
      if(this.top - 3 >= 0){
        this.top-= 3
        this.socket.emit('top', {
          top: this.top,
          id: this.id,
          name: this.name
        })
      } else {
        this.hit = true;
      }
    },
    left(){
      if(this.toLeft + 3 <= 1266){
        this.toLeft+= 3
        this.socket.emit('toLeft', {
          toLeft: this.toLeft,
          id: this.id,
          name: this.name
        })
      } else {
        this.hit = true;
      }
    },
    right(){
      if(this.toLeft - 3 >= 0){
        this.toLeft-= 3
          this.socket.emit('toLeft', {
          toLeft: this.toLeft,
          id: this.id,
          name: this.name
        })
      } else {
        this.hit = true;
      }
    },
    rotateClock(){
      this.deg+=3
      this.socket.emit('deg', {
        deg: this.deg,
        id: this.id,
        name: this.name
      })

    },
    rotateRevClock(){
      this.deg-=3
      this.socket.emit('deg', {
        deg: this.deg,
        id: this.id,
        name: this.name
      })
    },

    getPlayerPosition () {
      this.socket.emit('getPlayerPosition')
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

  },  
  created() {
    
    if (this.id == null) {

      // let topper = Math.floor(Math.random()*450)
      // let lefter = Math.floor(Math.random()*1000)
      // let deger = Math.floor(Math.random()*300)
      this.socket.emit('newUser', {
        top: this.top,
        toLeft: this.toLeft,
        deg: this.deg,
        name: this.name
      })

      this.socket.on ('sendId', (data) => {
        this.id = data
      })
      this.socket.on('enemyPosition', (data) => {
        this.enemyPosition = data
      })
    //new

      // this.socket.on('topPos', (data) => {
      //   this.player1.top = data.top;
      //   this.id = data.id
      // })
      
      // this.socket.on('downPos', (data) => {
      //   this.player1.top = data.top;
      //   this.id = data.id
      // })

      // this.socket.on('leftPos', (data) => {
      //   this.player1.toLeft = data.toLeft
      //   this.id = data.id
      // })

      // this.socket.on('rightPos', (data) => {
      //   this.player1.toLeft = data.toLeft
      //   this.id = data.id
      // })

      // this.socket.on('rotateClock', (data) => {
      //   this.deg = data.deg;
      //   this.id = data.id;
      // })
      // }
    }
  }

  //     this.socket.on('rotateRevClock', (data) => {
  //       this.deg = data.deg;
  //       this.id = data.id
  //     })
  //   }//end if

    

  //   }//end else
  //   // this.getPlayerPosition()


  // }
    // else {
    //   this.socket.emit('myPosition', {
    //     top: this.top,
    //     toLeft: this.toLeft,
    //     deg: this.deg,
    //     id: this.id
    //   })
    //   this.socket.on('enemyPosition', (data) => {
    //     this.enemyPosition = data
    //   })
    // }

    

    
  //end export default

    // }//end if

    

    
  }

</script>

<style>

.board {
  overflow: hidden;
  position: relative;
  width: 1266px;
  height: 516px;
  border: 2px solid black;
  background-image: url(../assets/pixelMap.jpg)
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
  width: 250px;
  height: auto;
}

</style>