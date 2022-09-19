module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/sass/');

  eleventyConfig.addPassthroughCopy('./src/js');

  eleventyConfig.addPassthroughCopy('./src/fonts');

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'docs',
    },
    pathPrefix: '/blueprint-code/',
  };
};
