<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="navbar1">
      <a class="navbar-brand" href="#">Navbar</a>
  </div>
  <div>
    <b-button id="show-btn" @click="showModal" v-if='!isLogin'>Login</b-button>
    <button class="btn-primary" @click='logout' v-else>Logout</button>
    <b-modal ref="my-modal" hide-footer title="play with us">
      <div class="d-block text-center">
        <input type="text" v-model='username' placeholder="username">
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close</b-button>
      <b-button class="mt-3" variant="outline-danger" block @click="goRoom">Go</b-button>
    </b-modal>
  </div>
</nav>
</template>

<script>
export default {
  data () {
    return {
      username: null
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('name');
      localStorage.removeItem('admin');
      this.$store.state.isAdmin = false;
      this.$store.state.isLogin = false;
      this.$router.push('/')
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    showModal() {
      this.$refs['my-modal'].show()
    },
    goRoom () {
      if(this.username == 'ericsudhartio') {
        this.$store.state.isAdmin = true;
        this.$store.state.isLogin = true;
        localStorage.setItem('admin', this.username)
        localStorage.setItem('name', this.username)
      } else {
        localStorage.setItem('name', this.username)
        this.$store.state.isLogin = true;
      }
      this.hideModal()
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  created () {
    this.$store.dispatch('checkLogin')
  }
}
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between
}
</style>