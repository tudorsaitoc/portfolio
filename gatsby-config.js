module.exports = {
  plugins: [
    {
      resolve: `@christiandavid/gatsby-theme-byfolio`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        iconFile: `src/images/icon.png`,
        siteTitle: `Portfolio ala Tudor Saitoc`,
        siteUrl: `https://www.tudorsaitoc.netlify.app`,
        siteName: `Portfolio ala Tudor Saitoc`,
        siteShortName: `TS`,
        siteDescription: `Responsive web app to showcase my experience and current projects.`,
        siteKeywords: `Husband, Son, Brother, Dog Dad, Cat Dad, Fencer, Techie, Blogger, Family, Growth, Truth, Developer, Designer, Yogi, Challenger, Gamer, Learner`,
        useMozJpeg: true,
        menuLinks: [
          // title = Link text
          // color = Animation background color on click
          { name: `home`, title: `Home`, color: `#000`, link: `` },
          {
            name: `experience`,
            title: `Experience`,
            color: `#3a3d98`,
            link: ``,
          },
          { name: `skills`, title: `Skills`, color: `#d52d43`, link: `` },
          { name: `aboutMe`, title: `About Me`, color: `#fff`, link: `` },
        ],
        email: `tudor@saitoc.me`,
        social: {
          // Usernames
          twitter: `tudorsaitoc`,
          gitHub: `tudorsaitoc`,
          stackOverflow: `6006892/tudorsaitoc`,
          linkedIn: `in/tudorsaitoc/`,
          resumeInPdf: `/CV-19.pdf`, // url or local link
        },
        homePage: {
          availableToHire: true,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Hi! I'm Tudor Saitoc`,
          h2Text: `I'm an epeé Fencer training for the 2024 Olympics in Paris.  I've had a full career as an enterprise sales
                    leader in technology and currently focused on learning, designing, and developing new technology.`,
          typewriter: [
            `Mens sano in corpero sano 😎`,
            `I'm a 🥦 lover`,
            `Failing and learning fast is part of my process 🤓`,
            `One of my core values is <strong>creating simple solutions to complex problems<strong>`,
            `I like to share what I know 👨‍🏫`,
            `While not training or working on my projects, I'm with family ❤️`,
            `<span style='color: #27ae60;'>Occasionally</span> I play video games 🎮`,
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#171616", hover: "#fff" },
          shape1: {
            color: `#413f46`,
            opacity: `0.7`,
          },
          shape2: {
            color: `#e6e5ea`,
            opacity: `0.7`,
          },
          shape3: {
            color: `#fff`,
            opacity: `0.7`,
          },
        },
        footer: `heart`,
      },
    },
  ],
}
