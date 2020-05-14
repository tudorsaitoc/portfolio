module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"/Users/ts/dev/g/portfolio/node_modules/@christiandavid/gatsby-theme-byfolio/src/utils/typography"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Tudor Saitoc","short_name":"2D","description":"This cool App contains information about my work experience as a software developer.","lang":"en","start_url":"/","background_color":"#000","theme_color":"#fff","display":"standalone","icon":"src/images/icon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-transition-link/gatsby-browser.js'),
      options: {"plugins":[],"layout":"/Users/ts/dev/g/portfolio/node_modules/@christiandavid/gatsby-theme-byfolio/src/layout/index.js"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"showSpinner":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingIds":["UA-151335375-1"],"gtagConfig":{"anonymize_ip":true,"cookie_expires":0,"send_page_view":true,"cookie_name":"christianibarguen.com"},"pluginConfig":{"head":false,"respectDNT":false}},
    }]
