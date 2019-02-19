<template lang="pug">
  header.ofd-header(:class="{ '-fix': showHeader }")
    a.logo(href="/") <span>One</span> Final Doc
    nav.nav
      a.ofd-button(href="#signup") Get your invitation
</template>

<script>
export default {
  name: 'OfdHeader',
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { showHeader: false }
  },
  created() {
    if (!this.fixed) {
      if (typeof window !== 'undefined') {
        // We are in the browser
        const target = document.getElementById('logo')
        const observer = new IntersectionObserver((entries) => {
          const distanceToTop = target.getBoundingClientRect().top
          if (distanceToTop < 0) {
            this.showHeader = !this.showHeader
          }
        }, {
          root: null,
          rootMargin: '0px',
          threshold: 0.5
        })
        observer.observe(target)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  
</style>
