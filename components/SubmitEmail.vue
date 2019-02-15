<template lang="pug">
  form.submit-email#sendmagic
    .fields
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
  @import "assets/styles/ambience"
  .submit-email
    max-width: 100%
    display: flex
    flex-direction: column
    > .-error
      color: #e45d53
    > .fields
      display: flex
      align-items: stretch
      margin-top: $space-deci
      +media-mediumup
        margin-top: $space-base
      +media-mediumdown
      flex-direction: column
      > .input
        background-color: #fff
        font-family: $font-family-body
        color: #000
        padding-top: $space-milli
        padding-bottom: $space-milli
        padding-left: $space-milli
        padding-right: $space-milli
        transition: all 0.2s ease
        border-radius: 4px
        border: 1px solid hsl(0, 0%, 75%)
        +media-mediumup
          flex-grow: 1
          margin-right: $space-milli
        +media-mediumdown
          margin-bottom: $space-milli
        +placeholder
          color: hsl(0, 0%, 75%)
        &:focus
          box-shadow: 0 0 8px rgba($color-ofd-blue, 0.6)
          border-color: $color-ofd-blue
</style>
