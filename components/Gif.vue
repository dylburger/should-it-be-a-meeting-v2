<template lang="pug">
  div.gif
    img.mx-auto(:src="gifUrl" :alt="gifAlt")
</template>

<script>
export default {
  props: {
    gifUrl: {
      type: String,
      default() {
        return ''
      },
    },
    gifAlt: {
      type: String,
      default() {
        return ''
      },
    },
  },
}
</script>
