module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/sass/');

  eleventyConfig.addPassthroughCopy('./src/js');

  eleventyConfig.addPassthroughCopy('./src/fonts');

  return {
    dir: {
      input: 'src',
      output: 'build',
    },
  };
};
