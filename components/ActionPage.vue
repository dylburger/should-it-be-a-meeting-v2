<template lang="pug">
  div.container.mx-auto.flex.flex-col.min-h-screen
    div.header
    div.content.flex-grow
      div.p-6
        div.max-w-2xl
          h1.text-3xl.font-extrabold.mb-10.text-center Good news! You should not schedule a meeting 🎉
          div.rounded.overflow-hidden.shadow-2xl.bg-white.border.border-gray-300.p-8
            slot
        StartOver
    Footer
</template>
