<template lang="pug">
  .hello
    img(v-show="!profile.name" src="../assets/logo.png")
    img.img-circle(v-show="profile.name" :src="profilePic" alt="Img")
    h2(v-html="msg")
</template>

<script>
  export default {
    props: {
      profile: Object
    },
    computed: {
      msg() {
        if (this.profile.name) {
          return `Welcome ${this.profile.name}`
        } else {
          return 'Login Facebook to enjoy the app'
        }
      },
      profilePic() {
        return (this.profile.id) ? `https://graph.facebook.com/${this.profile.id}/picture?width=300` : `../assets/logo.png`
      }
    }
  }
</script>