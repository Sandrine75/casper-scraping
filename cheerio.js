const request = require('request');
const cheerio = require('cheerio');

request('https://deercoders.com', (err, res, html) => {
    const $ = cheerio.load(html);
    console.log('email', $("#email").text());
});