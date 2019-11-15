<template>
  <div class=" mt-2 d-flex justify-content-center align-items-center flex-column">
    <div class="board">
      <div :style="`top: ${top}px; left: ${toLeft}px; transform: rotate(${deg}deg)`" class="player">
        <img class="tank" src="../assets/tank1.png" alt="">
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
      socket: {},
      top: 0,
      toLeft: 0,
      deg: 0,
      playername: 'Owl',
      id: null,
      enemy: false,
      enemyPosition: []
    }
  },
  methods: {

    down(){
      if(this.top + 3 <= 516){
        this.top+= 3
        this.socket.emit('top', {
          top: this.top,
          id: this.id
        })
      }
    },
    up(){
      if(this.top - 3 >= 0){
        this.top-= 3
        this.socket.emit('top', {
          top: this.top,
          id: this.id
        })
      }
    },
    left(){
      if(this.toLeft + 3 <= 1266){
        this.toLeft+= 3
        this.socket.emit('toLeft', {
          toLeft: this.toLeft,
          id: this.id
        })
      }
    },
    right(){
      if(this.toLeft - 3 >= 0){
        this.toLeft-= 3
          this.socket.emit('toLeft', {
          toLeft: this.toLeft,
          id: this.id
        })
      }
    },
    rotateClock(){
      this.deg+=3
      this.socket.emit('deg', {
        deg: this.deg,
        id: this.id
      })

    },
    rotateRevClock(){
      this.deg-=3
      this.socket.emit('deg', {
        deg: this.deg,
        id: this.id
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
       }
    })

  },  
  created() {
    this.socket = io("http://localhost:3000")

    if (this.id == null) {
      this.socket.emit('newUser', {
        top: this.top,
        toLeft: this.toLeft,
        deg: this.deg,
      })

      this.socket.on ('sendId', (data) => {
        this.id = data
      })

      this.socket.on('enemyPosition', (data) => {
        this.enemyPosition = data
      })

    }//end if

    

    }//end else
  }

</script>

<style>

.board {
  position: relative;
  width: 1300px;
  height: 550px;
  border: 2px solid black;
  background-image: url(../assets/pixelMap.jpg)
}

.player{
  position: absolute;
  transition: 100ms;
}

.player .tank{
  width: 50px;
  height: auto;
}

</style>