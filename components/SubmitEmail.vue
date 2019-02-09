<template lang="pug">
div
  form.form-cta#sendmagic
    input.input(type="text", name="email", placeholder="sarah@hopeful.com", v-model="email")
    button.ofd-button.-yellow(@click="send") Get your invitation
  p.-small.-rightaligned * Free. No credit card required.
</template>

<script>
export default {
  name: 'SubmitEmail',
  data() {
    return { email: null }
  },
  methods: {
    send: function (e) {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
// component sass could be here.  with import of mixins
</style>
