/*
  JSEcoin Sitemap Generator
  npm install sitemap-generator
  node generator.js

  Creates sitemap.xml, sitemap.xml.gz, urllist.txt, sitemap.html
*/
const SitemapGenerator = require('sitemap-generator');
const fs = require("fs");
var zlib = require('zlib');

const sitemapURLs = [];

const generator = SitemapGenerator('https://jsecoin.com', {
  maxDepth: 0,
  filepath: './sitemap.xml',
  maxEntriesPerFile: 50000,
  stripQuerystring: true
});

/*
const additonalURLs = `https://platform.jsecoin.com
https://blockchain.jsecoin.com
https://developer.jsecoin.com
https://jsecoin.com/en/home/
https://jsecoin.com/ar/home/
https://jsecoin.com/bg/home/
https://jsecoin.com/zh/home/
https://jsecoin.com/de/home/
https://jsecoin.com/es/home/
https://jsecoin.com/fi/home/
https://jsecoin.com/fr/home/
https://jsecoin.com/id/home/
https://jsecoin.com/it/home/
https://jsecoin.com/ja/home/
https://jsecoin.com/ko/home/
https://jsecoin.com/ms/home/
https://jsecoin.com/nl/home/
https://jsecoin.com/no/home/
https://jsecoin.com/pt/home/
https://jsecoin.com/ro/home/
https://jsecoin.com/ru/home/
https://jsecoin.com/si/home/
https://jsecoin.com/se/home/
https://jsecoin.com/th/home/
https://jsecoin.com/tw/home/`.split("\n");

for (let i = 0; i < additonalURLs.length; i++) {
  generator.queueURL(additonalURLs[i]);
}
*/

generator.on('add', (url) => {
  const formattedURL = url.split('http://').join('https://');
  if (sitemapURLs.indexOf(formattedURL) == -1) {
    sitemapURLs.push(formattedURL);
    console.log('URL added',formattedURL);
  }
});

// register event listeners
generator.on('done', () => {
  console.log('All Done '+sitemapURLs.length+' URL\'s Included');
  let sitemapData = fs.readFileSync("./sitemap.xml","utf8");
  //console.log(sitemapData,typeof sitemapData);
  sitemapData = sitemapData.split('http://').join('https://');
  fs.writeFileSync("./sitemap.xml", sitemapData);
  fs.writeFileSync("./urllist.txt", sitemapURLs.join("\n"));
  zlib.gzip(sitemapData, function (error, compressed) {
    if (error) throw error;
    fs.writeFileSync("./sitemap.xml.gz", compressed);
  });
  let html = ` <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>JSEcoin HTML Sitemap</title>
    </head>
    <body>
      <h1>JSEcoin HTML Sitemap</h1>
      $content  
    </body>
  </html>`;
  let htmlContent = '';
  for (let i = 0; i < sitemapURLs.length; i++) {
    const sURL = sitemapURLs[i];
    htmlContent += '<a href="'+sitemapURLs[i]+'">'+sitemapURLs[i]+'</a><br>';
  }
  html = html.split('$content').join(htmlContent);
  fs.writeFileSync("./sitemap.html", sitemapData);
});

const crawler = generator.getCrawler();

//crawler.allowedProtocols = ['https'];
crawler.interval = 100;
crawler.maxConcurrency = 9999;
crawler.timeout = 30000;
crawler.scanSubdomains = true;

crawler.addFetchCondition((queueItem, referrerQueueItem, callback) => {
  let allowURL = true;
  if (queueItem.path.indexOf('/tag/') > -1) allowURL = false;
  if (queueItem.path.indexOf('/product-category/identicons/') > -1) allowURL = false;
  if (queueItem.path.indexOf('/sitemap/') > -1) allowURL = false;
  callback(null, allowURL);
});

// start the crawler
generator.start();
