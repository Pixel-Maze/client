<template>
<div>
    <div :style="`top: ${enemy.top}px; left: ${enemy.toLeft}px; transform: rotate(${enemy.deg}deg)`" class="player">
        <img class="tank" src="../assets/tank2.png" alt="">
    </div>

</div>
</template>

<script>
import io from 'socket.io-client'

export default {
  data () {
    return {
      // top: 0,
      // toLeft: 0,
      // deg: 0,
      socket: io.connect('http://serverpixel.dreamcarofficial.com'),
    }
  },
    props: ['enemy'],
    methods: {
      // test(){
      //   console.log('masuk')
      // },
      // playGame (e) {
      //   if(e.key == 'up' && this.enemy.name == localStorage.getItem('name')) {
      //     console.log('masuk atas')
      //     if(this.enemy.top - 3 >= 0){
      //       this.enemy.top-= 3
      //       this.socket.emit('downPos', {
      //         top: this.enemy.top,
      //         name: this.enemy.name
      //       })
      //     }
      //   } else if(e.key == 's' && this.enemy.name == localStorage.getItem('name')) {
      //     if(this.enemy.top + 3 <= 516 ){
      //       this.enemy.top+= 3
      //       this.socket.emit('topPos', {
      //         top: this.enemy.top,
      //         name: this.enemy.name
      //       })
      //     }
      //   } else if(e.key == 'd' && this.enemy.name == localStorage.getItem('name')) {
      //     if(this.enemy.toLeft + 3 <= 1266){
      //       this.enemy.toLeft+= 3
      //       this.socket.emit('leftPos', {
      //         toLeft: this.enemy.toLeft,
      //         name: this.enemy.name
      //       })
      //     }
      //   } else if(e.key == 'a' && this.enemy.name == localStorage.getItem('name')) {
      //     if(this.enemy.toLeft - 3 >= 0 && this.enemy.name == localStorage.getItem('username')){
      //       this.enemy.toLeft-= 3
      //       this.socket.emit('rightPos', {
      //         toLeft: this.enemy.toLeft,
      //         name: this.enemy.name
      //       })
      //     }
      //   }
      // },
      // rotateClock(){
      //   this.enemy.deg+=3
      //   this.socket.emit('rotateClock', {
      //     deg: this.enemy.deg,
      //     name: this.enemy.name
      //   })
      // },
      // rotateRevClock(){
      //   this.enemy.deg-=3,
      //   this.socket.emit('rotateRevClock', {
      //     deg: this.enemy.deg,
      //     name: this.enemy.name,
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
      // this.socket.emit('getPlayerPosition')
      // this.socket.on('sendPlayerPosition', data => {
      //   this.enemyPosition = data
      // })

      
    

  // },
  created () {

    // this.socket.on('topPos', (data) => {
    //   this.enemy.top = data.top;
    // })
    
    // this.socket.on('downPos', (data) => {
    //   this.enemy.top = data.top;
    // })

    // this.socket.on('leftPos', (data) => {
    //   this.enemy.toLeft = data.toLeft
    // })

    // this.socket.on('rightPos', (data) => {
    //   this.enemy.toLeft = data.toLeft
    // })

    // this.socket.on('rotateClock', (data) => {
    //   this.enemy.deg = data.deg;
    // })

    // this.socket.on('rotateRevClock', (data) => {
    //   this.enemy.deg = data.deg;
    // })
  }
}
</script>

<style>

</style>