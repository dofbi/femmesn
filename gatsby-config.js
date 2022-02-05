module.exports = {
    siteMetadata: {
      title: `Femmes et Numérique`,
      description: `Le programme de formation «Femmes et Numérique» est destiné à la promotion et l’autonomisation des jeunes filles et femmes dans  l’économie numérique en République de Djibouti.`,
      author: `@dofbi`,
      siteUrl: `https://femmes-numerique.ctid-djibouti.org`,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-styled-components`,
        options: {
          minify: false, // Breaks styles if not set to false
        },
      },
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `common`,
          path: `${__dirname}/src/common/assets/`,
        },
      },
      `gatsby-transformer-json`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `data`,
          path: `${__dirname}/src/common/data/`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Femmes et Numérique`,
          short_name: `FemmesNum`,
          start_url: `/`,
          background_color: `#2b2080`,
          theme_color: `#2b2080`,
          display: `minimal-ui`,
          icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        },
      },
    ]
}