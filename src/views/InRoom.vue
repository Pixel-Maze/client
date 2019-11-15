<template>
  <div class="container">
    <b-alert variant="success" show v-if='joinRoom'>{{ message }}</b-alert>
    <button class="btn-btn-outline-success" @click='backhome(id)'>back</button>

    <div class="mainRoom">
      {{createds}} {{roomList}}
      <div class='mt-3'>
        <div class="mt-2 mb-2">
          <h2>Room {{ roomList.name }}</h2>
        </div>
        {{roomList.space}}
        <div class='card players' v-for='(player, i) in roomList.space' :key='i'>
          <div>
            Player {{ i+1 }}
          </div>
          <div>
            :
          </div>
          <div>
            {{ player }}
          </div>
        </div>
      </div>
      <div class="btnStart">
        <button class="btn-lg btn-outline-info btn" @click='playGame(roomList._id)' v-if='isMaster'>
          START GAME
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import axios from '@/apis/server.js'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      socket: io.connect(`http://localhost:3000`),
      joinRoom: false,
      message: null,
      isMaster: false
    }
  },
  methods: {
    playGame (id) {
      const payload = {
        id,
        players: this.roomList.space
      }
      this.socket.emit('play-game', payload)
      setTimeout(() => {
        this.$router.push(`/game/${id}`)
      }, 1500);
    },
    backhome (id) {
      let tempMsg
      axios({
        method: 'patch',
        url: `/rooms/out/${id}`,
        data: {
          name: localStorage.getItem('name')
        }
      })
        .then(({data}) => {
          tempMsg = data.msg
          return this.$store.dispatch('fetchRoomById', id)
        })
        .then(() => {
          const payload = {
            id,
            msg: tempMsg
          }
          this.socket.emit('leaving-room', payload)
          this.$router.push('/')
        })
        .catch(err => {
          this.$awn.warning(err.response.data.msg)
        })
    },
    checkMaster () {
      if(this.createds == localStorage.getItem('name')) {
        this.isMaster = true;
      }
    }
  },
  computed: {
    roomList () {
      return this.$store.state.inRoom
    },
    id () {
      return this.$route.params.id
    },
    createds () {
      return this.$store.state.created
    }
  },
  created () {
    setTimeout(() => {
      this.checkMaster()
    }, 1000);
    this.socket.on('play-game', (data) => {
      this.$store.commit('PLAYER_INGAME', data)
      this.$router.push(`/game/${data.id}`)
    })
    this.socket.on('join-rooms', (data) => {
      if(data.id == this.$route.params.id) {
        this.joinRoom = true;
        this.message = data.msg
        this.$store.dispatch('fetchRoomById', this.$route.params.id)
          .then(() => {
            console.log('dari join room')
          })
          .catch(console.log)
        data = null;
        setTimeout(() => {
          this.joinRoom = false
        }, 2000);
      } else {
        this.$store.dispatch('fetchRoomById', this.$route.params.id)
      }
    })
    this.socket.on('leaving-rooms', (data) => {
      if(data.id == this.$route.params.id) {
        this.joinRoom = true;
        this.message = data.msg;
        this.$store.dispatch('fetchRoomById', this.$route.params.id)
        data = null;
        setTimeout(() => {
          this.joinRoom = false
        }, 2000);
      } else {
        this.$store.dispatch('fetchRoomById', this.$route.params.id)
      }
    })
    

    this.$store.dispatch('fetchRoomById', this.$route.params.id)
    .then(() => {
      
    })
    .catch(err => {
      this.$awn.warning(err)
    })
  },
}
</script>

<style>
.players {
  display: flex;
  flex-direction: row;
  justify-content: space-around
}
.mainRoom {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35vw;
}
</style>