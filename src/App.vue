<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
// import io from 'socket.io-client'

export default {
  components: {
    NavBar
  },
  created () {
      this.$store.dispatch('fetchingRoom')
  }
  // data () {
  //   return {
  //     socket: io.connect('http://localhost:3000')
  //   }
  // },
  // created() {
  //   this.socket.emit('send', 'hai')

  //   this.socket.on('send', (data) => {
  //     console.log(data)
  //   })
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
