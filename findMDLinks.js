const { readFileSync } = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');

const markdown = readFileSync('TempEntry.md', {encoding: 'utf8'});

const links = markdownLinkExtractor(markdown);
links.forEach(link => console.log(link));