'use strict';

const markdownLinkCheck = require('markdown-link-check');
const { readFileSync } = require('fs');
// const markdownLinkExtractor = require('markdown-link-extractor');

const markdown = readFileSync('README.md',{encoding: 'utf8'});
markdownLinkCheck('', results => {
   /* console.log('what' + err + results);
        if (err) {
            console.error('Error', err);
            console.log('ERR');
            return;
        }*/
        results.forEach(result => {
                console.log('%s is %s', result.link, result.status);
            });
    });