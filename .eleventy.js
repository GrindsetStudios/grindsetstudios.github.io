module.exports = function(eleventyConfig) {
    // Копирование статических файлов из указанных папок
    eleventyConfig.addPassthroughCopy("*.txt");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("scripts");

    // Вернуть конфигурацию
    return {
        dir: {
            input: ".", // папка с исходниками (по умолчанию)
            output: "_site", // папка для выходных файлов
        }
    };
};
