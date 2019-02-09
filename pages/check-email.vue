<template lang="pug">
main
  header.ofd-header.-fix
        a.logo(href="/") <span>One</span> Final Doc
  section.section-thankyou
        .content
          h2 Check your email!

          p  We've emailed a magic link to <em><span id="recipient">fred@onefinaldoc.com</span></em>. Click the link to confirm your address and get started.
          p  Wrong email? Please <a href="/">re-enter your address</a>.
          p  &nbsp;
          h3
            a(href='/') Go Back
</template>
<script>
import { confetti } from 'dom-confetti'
export default {
  name: 'CheckEmail',
  mounted() {
    const target = document.getElementById('recipient')
    // const consola = require('consola')
    confetti(target)
  }
}
</script>
<style scoped lang="sass">

</style>
