import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/apis/server.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInRoom: [],
    allRoom: [],
    inRoom: {},
    isAdmin: false,
    isLogin: false
  },
  mutations: {
    CREATED_ROOM (state, room) {
      state.allRoom.unshift(room)
    },
    FETCH_ROOM (state, rooms) {
      state.allRoom = rooms;
    },
    ROOM_ID (state, room) {
      state.inRoom = room
    },
    CHECK_ADMIN (state, payload) {
      state.isLogin = true;
      state.isAdmin = true;
    },
    CHECK_LOGIN (state, payload) {
      state.isLogin = true;
    }
  },
  actions: {
    joinRoom (context, payload) {
      console.log()
      return new Promise ((resolve, reject) => {
        axios({
          method: 'patch',
          url: `/rooms/join/${payload.id}`,
          data: { name: payload.name }
        })
          .then(({data}) => {
            context.commit('ROOM_ID', data.room)
            resolve(data)
          })
          .catch(reject)
      })
    },
    fetchRoomById (context, id) {
      return new Promise ((resolve, reject) => {
        axios({
          method: 'get',
          url: `/rooms/${id}`
        })
          .then(({data}) => {
            context.commit('ROOM_ID', data.room)
            resolve()
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    createRoom (context, room) {
      return new Promise ((resolve, reject) => {
        axios({
          method: 'post',
          url: '/rooms',
          data: {
            name: room
          }
        })
          .then(({data}) => {
            context.commit('CREATED_ROOM', data.room)
            resolve(data.room)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    checkAdmin (context, payload) {
      if(localStorage.getItem('admin')) {
        context.commit('CHECK_ADMIN')
      }
    },
    fetchingRoom (context, room) {
      axios({
        method: 'get',
        url: '/rooms',
      })
        .then(({data}) => {
          context.commit('FETCH_ROOM', data.rooms)
        })
        .catch(err => {
          this.$awn.warning(err.response.data.msg)
        })
    },
    checkLogin (context, payload) {
      if(localStorage.getItem('name')){
        context.commit('CHECK_LOGIN')
      }
    }
  },
  modules: {
  }
})
