<template lang="pug">
  div.container.mx-auto.flex.flex-col.min-h-screen
    div.header
    div.content.flex-grow
      div.p-6
        div
          h1.text-3xl.font-extrabold.mb-12.text-center Great! Do it 👩‍💻
          div.rounded.overflow-hidden.shadow-2xl.bg-white.border.border-gray-300.p-12
            p.text-2xl.font-bold.mb-6 Avoid scheduling a formal meeting for later
            p.mb-12 You’ll invite fewer people, and you’ll come to a decision more quickly (
              a.text-blue-500(href="https://en.wikipedia.org/wiki/Parkinson%27s_law") here’s why
              | ).
            Gif(gifUrl="https://shoulditbeameeting.com/assets/gifs/office-space-that-was-easy.gif" gifAlt="That was easy")
          p.mt-24
            NuxtLink(to="/")
              button.font-bold.text-lg.text-blue-500.py-3.px-6.border-2.border-blue-500.rounded-md(class="hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5") START OVER
    Footer
</template>
