<template lang="pug">
main
  //- <OfdHeader />
  section.section-problem
    .content
      h2.title Word™ document collaboration via email is a mess
      .hero-mail.-mobile
        header.header
          h4 <em>To:</em> max@tightschedule.com
          h4 <em>From:</em> jen@glazed.com
          h4 <em>Subject:</em> Important Contract
        hr.rule
        article.body
          p Thanks for sending along contract-<em>final-final-v3</em>.docx.
          p I’ve attached some final changes.
      p Your team wastes thousands of hours sifting edits in long, nerve-racking, email threads.
    .hero-mail.-desktop
      header.header
        h4 <em>To:</em> max@hopeful.com
        h4 <em>From:</em> jen@third-party.com
        h4 <em>Subject:</em> Important Contract
      hr.rule
      article.body
        p Thanks for sending along contract-<em>final-final-v4</em>.docx.
        p I’ve attached some <i>final</i> changes.
  section.section-solution
    #logo.branding.-desktop
      img(src="../assets/logo.svg")

    .content
      h1.title Email friendly Word™ collaboration  for pros.
      //- <span class="-strikethrough">dis</span>control
      .branding.-mobile
        img(src="../assets/logo.svg")
      p Our platform compare versions shared by email to let you spot and prevent unwanted changes. So you can focus on content, finally!
      a.ofd-button(href="#demo") See it in action
      //- <SubmitEmail text='See it in action' subtitle='* Free. No credit card required.'/>

  //- section.section-howto
  //-   .magic
  //-     img(src="../assets/magician.png")
  //-   h2.title Just <i>carbon copy </i> <a mailto="magic@onefinaldoc.com" style="word-wrap: break-word;">magic@onefinaldoc.com</a> and reply-to-all... to doubt your own eyes
  //-     .hero-mail
  //-       header.header
  //-         h4 <em>To:</em> andrew@part-one.com, clara@part-two.com
  //-         h4 <em>From:</em> sarah@reallyhappy.com
  //-         h4 <em>Subject:</em> Important Contract
  //-         h4.animated-highlighter <em>Cc:</em> magic@onefinaldoc.com
  //-     p We auto-upload all documents to your personal repository where is dead simple to identify changes and compare versions.

  section#signup.section-newsletter
    h2.title Say goodbye to chaos 👋
    h3 Company
    p About
    p Press
    p Blog
    p Contact
    h3 Legal
    p Terms of Service
    p Privacy Policy
    p Imprint

    //- <SubmitEmail text='Get your invitation' subtitle='* Free. No credit card required.'/>
    //- p Already a customer? <a href="/signin">Sign in</a>
</template>

<script>
// @ is an alias to /src
import OfdHeader from "@/components/OfdHeader.vue";
import SubmitEmail from "@/components/SubmitEmail.vue";
export default {
  name: "Home",
  components: {
    OfdHeader,
    SubmitEmail
  }
};
</script>