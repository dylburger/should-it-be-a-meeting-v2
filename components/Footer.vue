<template lang="pug">
  div
    button.mb-12.font-extrabold.text-lg.text-purple-600.py-3.px-6.border-2.border-purple-600.rounded-md(class="hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5" @click="openModal()") How does this work?
    InfoModal(:show="showIntroModal" @close="closeModal()")
    div.bg-grey-300.font-mono.mb-12
      p.mb-6
        a.text-blue-500(href="https://drive.google.com/file/d/1Eyzu-F3DKL_QfQB4HyIEOuRSlYzVnLR8/view?usp=sharing") Download the flowchart
      p Made with ❤️ by
        a.text-blue-500.ml-2.mr-2(href="https://dannyroosevelt.com/") Danny
        span and
        a.text-blue-500.ml-2(href="https://dylburger.com/") Dylan
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    showModalOnLoad: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  computed: {
    showIntroModal() {
      return this.$store.state.introModal.show
    },
  },
  methods: {
    ...mapMutations({
      closeModal: 'introModal/close',
      openModal: 'introModal/open',
    }),
  },
}
</script>
