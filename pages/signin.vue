<template lang="pug">
main
  header.ofd-header.-fix
        a.logo(href="/") <span>One</span> Final Doc
  section.section-thankyou
        .content
          h2 Please, sign-in:
          p <SubmitEmail text="Sign in"/>
</template>
<script>
import SubmitEmail from '@/components/SubmitEmail.vue'
export default {
  name: 'SignIn',
  components: {
    SubmitEmail
  }
}
</script>
<style scoped lang="sass">

</style>
