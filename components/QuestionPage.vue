<template lang="pug">
  div.container.mx-auto.text-center.flex.flex-col.min-h-screen
    div.header
    div.content.flex-grow
      div.question.p-6
        div
          h1.text-3xl.font-extrabold.mb-12 {{ text }}
          NuxtLink(:to="yesLink")
            button.font-extrabold.text-lg.text-white.bg-purple-600.py-3.px-6.rounded-md.mr-12(class="hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5") Yes
          NuxtLink(:to="noLink")
            button.font-extrabold.text-lg.text-white.bg-purple-600.py-3.px-6.rounded-md(class="hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5") No
          p.mt-24
            NuxtLink(to="/")
              button.font-bold.text-lg.text-blue-500.py-3.px-6.border-2.border-blue-500.rounded-md(class="hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5") START OVER
    Footer(:showModalOnLoad="showModal")
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default() {
        return ''
      },
    },
    yesLink: {
      type: String,
      default() {
        return ''
      },
    },
    noLink: {
      type: String,
      default() {
        return ''
      },
    },
    showModal: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
}
</script>

<style scoped>
.question {
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
