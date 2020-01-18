module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    // Copy the `media/` directory
    eleventyConfig.addPassthroughCopy('media/**/!(.gitkeep)');

    return {
        // Directories
        dir: {
            input: './content',
            data: '../data',
            includes: '../snippets',
            layouts: '../layouts',
            output: './dist'
        }
    }
  };