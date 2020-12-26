<template lang="pug">
  div.container.mx-auto.flex.flex-col.min-h-screen
    div.header
    div.content.flex-grow
      div.p-6
        div.max-w-2xl
          h1.text-3xl.font-extrabold.mb-10.text-center You might need to schedule a meeting
          Gif.mb-10(gifUrl="https://shoulditbeameeting.com/assets/gifs/lets-have-a-meeting.gif" gifAlt="Let's have a meeting")
          div.rounded.overflow-hidden.shadow-2xl.bg-white.border.border-gray-300.p-12
            p.text-2xl.font-bold.mb-6 1. Create a clear, focused agenda
            p.mb-4 Attach time estimates to each agenda item.
            p Send out the agenda
              span.ml-1.italic before the meeting.
          div.mt-12.rounded.overflow-hidden.shadow-2xl.bg-white.border.border-gray-300.p-12
            p.text-2xl.font-bold.mb-6 2. Keep the guest list small
            p.mb-4 Invite only people critical to the discussion.
            p But don’t leave anyone out whose absence might prevent you from accomplishing the goals.
          div.mt-12.rounded.overflow-hidden.shadow-2xl.bg-white.border.border-gray-300.p-12
            p.text-2xl.font-bold.mb-6 3. Keep it as short as possible
            p.mb-4 15 minutes is often plenty of time.
            p
              a(href="https://medium.com/rate-that-meeting/beware-the-hour-long-meeting-6683086126cc") An hour is almost always too long.
          p.mt-24
            NuxtLink(to="/")
              button.font-bold.text-lg.text-blue-500.py-3.px-6.border-2.border-blue-500.rounded-md(class="hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-5") START OVER
    Footer
</template>
