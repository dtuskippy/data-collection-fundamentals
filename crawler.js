import * as cheerio from "cheerio";
import { gotScraping } from 'got-scraping';

const storeUrl = 'https://www.espn.com/';
// const storeUrl = 'https://warehouse-theme-metal.myshopify.com/collections/sales';

const response = await gotScraping(storeUrl);
const html = response.body;

const $ = cheerio.load(html);

// the cheerio.load(html) is effectively document.querySelectorAll ...
// const links = $('a');
const links = $('a.product-item__title');
for (const link of links) {
  let url = $(link).attr('href');
  console.log(url);
  
}
