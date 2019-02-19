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
<style scoped lang="sass">
  @import "assets/styles/ambience"
  .ofd-header
    +container-width
    background-color: transparent
    position: absolute
    top: 0
    right: 0
    left: 0
    display: flex
    justify-content: space-between
    height: $space-deca
    align-items: center
    opacity: 1
    z-index: 100
    transition: none
    z-index: 9

    > .logo
      opacity: 0
      font-weight: 700
      +typography-sizes($font-size-base, $line-height-deci)
      > span
        position: relative
        // TODO: Refact border-bottom to pseudo-element so it can be positioned
        border-bottom: 2px solid currentColor

    &.-fix
      background-color: $color-ofd-yellow
      box-shadow: 0 4px 12px rgba(#000, 0.1)
      position: fixed
      transition: all 0.6s ease
      > .logo
        opacity: 1

    &.-hide
      opacity: 0

    > .nav > .ofd-button
      margin-left: $space-milli
      +media-mediumdown
        padding-top: $space-micro
        padding-bottom: $space-micro
        padding-left: $space-micro
        padding-right: $space-micro
        font-size: $font-size-centi
        line-height: $line-height-milli
</style>
