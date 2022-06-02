'use strict';

var markdownLinkCheck = require('markdown-link-check');

markdownLinkCheck('README.md', function (err, results) {
    if (err) {
        console.error('Error', err);
        return;
    }
    results.forEach(function (result) {
        console.log('none');
       // console.log(result.link);
    });
});