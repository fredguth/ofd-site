<template lang="pug">
main
  header.ofd-header.-fix
        a.logo(href="/") <span>One</span> Final Doc
  section.section-thankyou
        .content
          h2 Check your email!

          p  We've emailed a magic link to <em><span id="recipient">{{recipient}}</span></em>. Click the link to confirm your address and get started.
          p  Wrong email? Please <a href="/#signup">re-enter your address</a>.
          p  &nbsp;
          h3
            a(href='/') Go Back
</template>
<script>
import { confetti } from 'dom-confetti'
export default {
  name: 'CheckEmail',
  computed: {
    recipient() {
      return this.$route.query.email
    }
  },
  mounted() {
    const target = document.getElementById('recipient')
    confetti(target)
  }
}
</script>
<style scoped lang="sass">

</style>
