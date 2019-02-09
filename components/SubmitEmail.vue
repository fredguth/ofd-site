<template lang="pug">
div
  form.form-cta#sendmagic
    input.input(type="text", name="email", placeholder="sarah@hopeful.com", v-model="email")
    button.ofd-button.-yellow(@click="send") {{ text }}
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
    return { email: null }
  },
  methods: {
    send: function (e) {
      e.preventDefault()
      this.$router.push({ name: 'check-email' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
// component sass could be here.  with import of mixins
</style>
