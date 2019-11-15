<template>
  <div class=" mt-2 d-flex justify-content-center align-items-center flex-column">
    {{ allPlayer }}
    <div class="board">
      <div :style="`top: ${top}px; left: ${toLeft}px; transform: rotate(${deg}deg)`" class="player">
        <img class="tank" src="../assets/tank1.png" alt="">
        {{player1.name}}
      </div>

      <!-- <div :style="`top: ${top}px; left: ${toLeft}px; transform: rotate(${deg}deg)`" class="player">
        <img class="tank" src="../assets/tank1.png" alt="">
        {{playername}}
      </div> -->

      <!-- <div v-for="(enemy,index) in allPlayer" :key="index" >
        <enemy :enemy="enemy"></enemy>
      </div> -->

      <div class="obsc"></div>
      <input type='text' @keyup='playGame'>
      <input type='text' @keyup='playGame2'>
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
      socket:  io.connect("http://localhost:3000"),
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
      playGame (e) {
        console.log(e)
        if(e.key == 'w' && this.player1.top - 3 >= 0) {
          console.log('masuk atas')
          this.player1.top-= 3
          this.socket.emit('downPos', {
            top: this.player1.top
          })
        }
        if(e.key == 's' && this.player1.top + 3 <= 516 ) {
          this.player1.top+= 3
          this.socket.emit('topPos', {
            top: this.player1.top
          })
        }
        if(e.key == 'd' && this.player1.toLeft + 3 <= 1266) {
          this.player1.toLeft+= 3
          this.socket.emit('leftPos', {
            toLeft: this.player1.toLeft
          })
        }
        if(e.key == 'a' && this.player1.toLeft - 3 >= 0) {
          this.player1.toLeft-= 3
          this.socket.emit('rightPos', {
            toLeft: this.player1.toLeft
          })
        }
      },
      // playGame2 (e) {
      //   if(e.key == 'up' && this.enemy.name == localStorage.getItem('name')) {
      //     console.log('masuk atas')
      //     if(this.enemy.top - 3 >= 0){
      //       this.enemy.top-= 3
      //       this.socket.emit('downPos', {
      //         top: this.enemy.top
      //       })
      //     }
      //   } else if(e.key == 's' && this.enemy.name == localStorage.getItem('name')) {
      //     if(this.enemy.top + 3 <= 516 ){
      //       this.enemy.top+= 3
      //       this.socket.emit('topPos', {
      //         top: this.enemy.top
      //       })
      //     }
      //   } else if(e.key == 'd' && this.enemy.name == localStorage.getItem('name')) {
      //     if(this.enemy.toLeft + 3 <= 1266){
      //       this.enemy.toLeft+= 3
      //       this.socket.emit('leftPos', {
      //         toLeft: this.enemy.toLeft
      //       })
      //     }
      //   } else if(e.key == 'a' && this.enemy.name == localStorage.getItem('name')) {
      //     if(this.enemy.toLeft - 3 >= 0 && this.enemy.name == localStorage.getItem('username')){
      //       this.enemy.toLeft-= 3
      //       this.socket.emit('rightPos', {
      //         toLeft: this.enemy.toLeft
      //       })
      //     }
      //   }
      // },
    // down(){
    //   if(this.top + 3 <= 516){
    //     this.top+= 3
    //     this.socket.emit('topPos', {
    //       top: this.top,
    //       id: this.id
    //     })
    //   }
    // },
    // up(){
    //   if(this.top - 3 >= 0){
    //     this.top-= 3
    //     this.socket.emit('downPos', {
    //       top: this.top,
    //       id: this.id
    //     })
    //   }
    // },
    // left(){
    //   if(this.toLeft + 3 <= 1266){
    //     this.toLeft+= 3
    //     this.socket.emit('leftPos', {
    //       toLeft: this.toLeft,
    //       id: this.id
    //     })
    //   }
    // },
    // right(){
    //   if(this.toLeft - 3 >= 0){
    //     this.toLeft-= 3
    //     this.socket.emit('rightPos', {
    //       toLeft: this.toLeft,
    //       id: this.id
    //     })
    //   }
    // },
    // rotateClock(){
    //   this.deg+=3
    //   this.socket.emit('rotateClock', {
    //     deg: this.deg,
    //     id: this.id
    //   })
    // },
    // rotateRevClock(){
    //   this.deg-=3,
    //   this.socket.emit('rotateRevClock', {
    //     deg: this.deg,
    //     id: this.id,
    //   })
    // },

    // getPlayerPosition () {
    //   this.socket.emit('getPlayerPosition')
    //   this.socket.on('sendPlayerPosition', data => {
    //     this.enemyPosition = data
    //   })
    // }

  },

  // mounted(){
  //   window.addEventListener('keypress', e => {
  //      if ( String.fromCharCode(e.keyCode) == 'w') { 
  //        this.up(); 
  //      }
  //      if ( String.fromCharCode(e.keyCode) == 's') { 
  //        this.down(); 
  //      }
  //      if ( String.fromCharCode(e.keyCode) == 'd') { 
  //        this.left(); 
  //      }
  //      if ( String.fromCharCode(e.keyCode) == 'a') { 
  //        this.right(); 
  //      }
  //      if ( String.fromCharCode(e.keyCode) == ']') {
  //        this.rotateClock(); 
  //      }
  //      if ( String.fromCharCode(e.keyCode) == '[') { 
  //        this.rotateRevClock(); 
  //      }
  //      if ( String.fromCharCode(e.keyCode) == ' ') { 
        
  //      }
  //   })
  //     this.socket.emit('getPlayerPosition')
  //     this.socket.on('sendPlayerPosition', data => {
  //       this.enemyPosition = data
  //     })

      
    

  // },
  computed: {
    allPlayer () {
      return this.$store.state.playerInGame
    },
    player1 () {
      return this.$store.state.playerInGame[0]
    },
    player2 () {
      return this.$store.state.playerInGame[1]
    }
  },
  created() {
    this.socket.emit('enemyPosition', {
      top: this.top,
      toLeft: this.left,
      deg: this.deg
    })
    this.socket.on('enemyPosition', data => {
      this.enemyPosition.push(data)
    })

    this.socket.emit('playerId', {
      top: this.top,
      toLeft: this.toLeft,
      deg: this.deg,
      playername: this.player
    })
    this.socket.on('numberId', data => {
      this.id = data
    })

    this.socket.on('getEnemy', data => {
      this.enemyPosition = data
    })
    

    // this.getPlayerPosition()


    //new

    this.socket.on('topPos', (data) => {
      this.player1.top = data.top;
      this.id = data.id
    })
    
    this.socket.on('downPos', (data) => {
      this.player1.top = data.top;
      this.id = data.id
    })

    this.socket.on('leftPos', (data) => {
      this.player1.toLeft = data.toLeft
      this.id = data.id
    })

    this.socket.on('rightPos', (data) => {
      this.player1.toLeft = data.toLeft
      this.id = data.id
    })

    this.socket.on('rotateClock', (data) => {
      this.deg = data.deg;
      this.id = data.id;
    })

    this.socket.on('rotateRevClock', (data) => {
      this.deg = data.deg;
      this.id = data.id
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