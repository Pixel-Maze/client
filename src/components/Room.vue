<template>
  <div class="container border">
    <div class="card">
      <form @submit.prevent='createRoom'>
        <input type='text' v-model='roomName' placeholder="room name">
        <input type='submit' value='submit'>
      </form>
    </div>
    <div class="card mt-3">
      <div v-for='(room, i) in rooms' :key='i'>
        <h1>{{room.name}}</h1>
        <button class="btn btn-success btn-md" @click='joinRoom(room._id)'>Join</button>
        <button class="btn btn-warning btn-md" @click='removeRoom(room._id)' v-if='admin'>Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import axios from '@/apis/server.js'

export default {
  data () {
    return {
      roomName: null,
      socket: io.connect('http://serverpixel.dreamcarofficial.com')
    }
  },
  methods: {
    createRoom () {
      this.$awn.asyncBlock(
        this.$store.dispatch('createRoom', this.roomName),
        null,
        null,
        'Creating'
      )
        .then((room) => {
          this.socket.emit('sendroom', room)
        })
        .catch(err => {
          this.$awn.warning(err)
        })
    },
    removeRoom (id) {
      axios({
        method: 'delete',
        url: `/rooms/${id}`
      })
        .then(({data}) => {
          this.socket.emit('deleteroom')
        })
        .catch(err => {
          this.$awn.warning(err.response.data.msg)
        })
    },
    joinRoom (id) {
      const payload = {
        name: localStorage.getItem('name'),
        id
      }
        this.$awn.asyncBlock(
              this.$store.dispatch('joinRoom', payload),
              null,
              null,
              'Join Room'
            )
        .then(data => {
          if(!data) this.$awn.warning('room full')
          else {
            this.$router.push(`/room/${id}`)
            this.$awn.success(data.msg)
            this.socket.emit('join-room', {
              id: data.room._id,
              msg: data.msg
            })
          }
        })
        .catch(err => {
          this.$awn.warning(err)
        })
    }
  },
  computed: {
    rooms () {
      return this.$store.state.allRoom
    },
    admin () {
      return this.$store.state.isAdmin
    }
  },
  created () {
    this.socket.on('sendroom', (data) => {
      this.$store.dispatch('fetchingRoom')
      data = null
    })
    this.socket.on('deleteroom', () => {
      this.$store.dispatch('fetchingRoom')
    })

    if(localStorage.getItem('admin')) {
      this.admin = true;
    }
    
  }
}
</script>

<style>

</style>