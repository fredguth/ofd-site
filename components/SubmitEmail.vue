<template lang="pug">
div
  form.form-cta#sendmagic
    input.input(type="text", name="email", placeholder="sarah@hopeful.com", v-model="email")
    button.ofd-button.-yellow(@click="send") {{ text }}
  p.-small.-leftaligned.-error {{ errorMessage }}
  p.-small.-rightaligned {{ subtitle }}
</template>

<script>
export default {
  name: 'SubmitEmail',
  props: {
    text: {
      type: String,
      default: 'Send'
    },
    subtitle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      email: null,
      errorMessage: '',
      reg: /^(([^<>()[]\\.,;:\s@"]+(\.[^<>()[]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
  methods: {
    send: function (e) {
      e.preventDefault()
      if (this.email && this.reg.test) {
        const body = JSON.stringify({ email: this.email })
        fetch('https://server.onefinaldoc.com/contacts', {
          method: 'POST',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json'
          },
          body
        })
          .catch((error) => {
            this.$router.push({ name: 'oops', query: { error } })
          })
        this.$router.push({ name: 'check-email', query: { email: this.email } })
      } else {
        this.errorMessage = 'Enter a valid email address.'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  p.-error
    color: #e45d53
</style>
