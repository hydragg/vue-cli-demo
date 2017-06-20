<template lang="pug">
  .container
    .row
      .col-2(v-if="!authorized")
        hello(:profile="profile")
        button.btn.btn-outline-success(type="button" @click="login") Login
      .col-2(v-if="authorized")
        hello(:profile="profile")
        button.btn.btn-outline-success(type="button" @click="logout") Logout
</template>

<script>
  import hello from '@/components/hello'
  export default {
    data() {
      return {
        profile: {},
        authorized: false
      }
    },
    components: { hello },
    methods: {
      login() {
        FB.login(response => {
          this.statusChangeCallback(response)
        },{
          scope: 'email, public_profile',
          return_scope: true
        })
      },
      getProfile() {
        FB.api('me?fields=name,id,email', response => {
          this.$set(this, 'profile', response)
        })
      },
      logout() {
        FB.logout(response => {
          this.statusChangeCallback(response)
        })
      },
      statusChangeCallback(response) {
        if (response.status === 'connected') {
          this.authorized = true
          this.getProfile()
        } else if (response.status === 'not_authorized') {
          this.authorized = false
        } else if (response.status === 'unknown') {
          this.authorized = false
          this.profile = {}
        } else {
          this.authorized = false
        }
      }
    },
    mounted() {
      // facebook init
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '1354881471246989',
          cookie     : true,
          xfbml      : true,
          version    : 'v2.8'
        })
        FB.AppEvents.logPageView()
        // Get FB Logic Status
        FB.getLoginStatus(response => {
          console.log(response)
        })
      }
    }
  }
</script>

<style lang="sass">

</style>
