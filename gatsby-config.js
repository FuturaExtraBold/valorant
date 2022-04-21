module.exports = {
  siteMetadata: {
    title: `lorant`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          components: './components',
          images: './images',
          javascripts: './javascripts',
          stylesheets: './stylesheets',
          stylesIndex: './stylesheets/components/index',
          stylesShared: './stylesheets/components/shared',
          videos: './videos',
        },
      },
    },
  ],
};
