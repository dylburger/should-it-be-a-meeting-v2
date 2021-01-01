/* eslint-disable */

const GA_MEASUREMENT_ID = 'G-RXQ7CV8XR6'
export default ({ app }) => {
  /*
   ** Only run on client-side and only in production mode
   */
  /* if (process.env.NODE_ENV !== 'production') {
    return
  } */
  // Include gtag script
  ;(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r
    ;(i[r] =
      i[r] ||
      function () {
        ;(i[r].q = i[r].q || []).push(arguments)
      }),
      (i[r].l = 1 * new Date())
    ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
    a.async = 1
    a.src = g
    m.parentNode.insertBefore(a, m)
  })(
    window,
    document,
    'script',
    `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
    'ga'
  )

  // Boilerplate from GA
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }

  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID)

  // Always run without ads consent so Google doesn't set ads cookies
  // https://developers.google.com/gtagjs/devguide/consent
  gtag('consent', 'default', {
    ad_storage: 'denied',
  })

  // Moreover, disable Google's ability to read existing ads cookies
  // https://developers.google.com/gtagjs/devguide/consent#redact_ads_data
  gtag('set', 'ads_data_redaction', true)

  // Fire virtual page view on route changes (including initial page load)
  app.router.afterEach((to, from) => {
    gtag('config', GA_MEASUREMENT_ID, { page_path: to.fullPath })
  })
}
