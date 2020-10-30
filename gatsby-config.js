module.exports = {
  siteMetadata: {
    title: 'Coletiva Bem Viver Floripa',
    titleTemplate: 'Coletiva Bem Viver Floripa | %s',
    description: `Somos uma candidatura coletiva e feminista que ocupará uma cadeira de vereadora em Florianópolis.
      Pela construção do Poder Popular! ✊🐜
      CNPJ: 38.506.600/0001-07
      Na urna somos 50.048 💚
      `,
    url: 'https://coletivabemviverfloripa.org', // No trailing slash allowed!
    // image: '/images/snape.jpg', // Path to your image you placed in the 'static' folder
    // twitterUsername: '@occlumency',
    author: 'Coletiva Bem Viver Floripa 50048',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};
