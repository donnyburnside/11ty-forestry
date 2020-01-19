module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    // Copy the `media/` directory
    eleventyConfig.addPassthroughCopy('uploads/**/!(.gitkeep)');

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