<template lang="pug">
  transition(name="modal")
    div.modal-mask(v-show="show" @click="closeModal")
      div.modal-container(@click.stop)
        p Did you know the average office worker spends
          span.special-text 45%
          | of their week in meetings? That's over
          span.special-text 3 months per year
          | 😳
        p Are you willing to spend
          span.special-text 30 seconds
          | to get some of that time back? 🙋‍♀
        p.font-bold Answer a few questions to figure out if your next meeting really needs to be a meeting 🙌
        button.font-bold.text-lg.text-blue-500.py-3.px-6.border-2.border-blue-500.rounded-md(class="hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5" @click="closeModal()") Let's Go
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  mounted() {
    // Close the modal if Esc is pressed
    document.addEventListener('keydown', (e) => {
      if (this.show && e.keyCode === 27) {
        this.closeModal()
      }
    })
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

p {
  @apply text-2xl mb-10;
}

.special-text {
  @apply text-purple-600 font-bold;
  margin-left: 0.375rem;
  margin-right: 0.375rem;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-container {
  text-align: center;
  margin: 40px auto 0;
  @apply py-10 px-10 max-w-6xl;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

/* See https://vuejs.org/v2/guide/transitions.html */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
