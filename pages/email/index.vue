<template lang="pug">
  div.container.mx-auto.flex.flex-col.min-h-screen
    div.header
    div.content.flex-grow
      div.p-6
        div.max-w-2xl
          h1.text-3xl.font-extrabold.mb-12.text-center Good news — you should not schedule a meeting 🎉
          div.rounded.overflow-hidden.shadow-2xl.bg-white.border.border-gray-300.p-12
            p.text-2xl.font-bold.mb-6 You've got plenty of other options
            p.mb-4 Send an email or chat.
            p.mb-4 Write up a doc that others that read and comment on.
            p.mb-12 Have a brief phone call or Zoom.
            Gif(gifUrl="https://shoulditbeameeting.com/assets/gifs/the-office-jim-excited.gif" gifAlt="Hooray!")
          p.mt-24
            NuxtLink(to="/")
              button.font-bold.text-lg.text-blue-500.py-3.px-6.border-2.border-blue-500.rounded-md(class="hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5") START OVER
    Footer
</template>
