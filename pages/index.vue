<template lang="pug">
  div.container.p-6
    div
      h1.text-3xl.font-bold.-mt-48.mb-12 Is there a specific decision that needs to be made?
      button.font-extrabold.text-lg.text-white.bg-purple-600.py-3.px-6.rounded-md.mr-12(class="hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5") Yes
      button.font-extrabold.text-lg.text-white.bg-purple-600.py-3.px-6.rounded-md(class="hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5") No
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: #f8f8f8;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
