// Require packages needed for scraping
const cheerio = require("cheerio");
const request = require("request");
// Require the models
const Article = require("../models/Article");
const Note = require("../models/Note");

const scrapedNews = () => {
    // Make a request for the world news section
    request("https://www.wsj.com/news/world", function (error, response, html) {
        const genre = 'world';
        // Load the html body from request into cheerio
        var $ = cheerio.load(html);
        // For each article element with a "buckets-bottom" class
        $("div.buckets-bottom article").each(function (i, element) {
    
          // Initiate an empty entry object
          var data = {};
    
          // Add the title, url, content and image to the object
          data.headline = $(this).children('header.hedgroup').children('h2').children('a').text();
          data.content =$(this).children('div.text-wrapper').children('p').text();
          data.link =  $(this).children('header.hedgroup').children('h2').children('a').attr('href');
          data.image = $(this).children('.media-wrapper').children('.image-wrapper').children('a').children('img').attr('src');
          data.genre = genre;
    
          // Create a new entry using the Article Schema
          var entry = new Article(data);
        
          entry.save(function(error, doc){
            if (error) {
              console.log(`Sorry, we have encountered an error: ${error}`)
            }
            // or log the doc
            else {
              console.log(`
              Your article: ${doc}`)
            }
          });
        });
    
      });
      
}

exports.scrapedNews = scrapedNews;