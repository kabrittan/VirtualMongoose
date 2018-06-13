const Article = require("../models/Article");
const Note = require("../models/Note");
const express = require("express");
const app = express.Router();
const newsScraper = require("../controllers/newsController");

const successMessage = (docs) => {
    console.log(`
    Your article(s): ${docs}
    `)
};

const errorMessage = (err) => {
    console.log(`
    Error: ${err}
    `)
};

// Main route
app.get("/", (req, res) => {
    res.send(index.html);
  });
  
// Scrape data from World section
app.get("/news/world", (req, res) => {
  // Find all results from the scrapedData collection in the db
  newsScraper.scrapedNews((err, docs) => {
    if (err) {
      errorMessage(err)
      } else {
        sucessMessage(docs)
      }

  })

  res.redirect("/news/world")

});

app.get("/news/world", (req, res) => {
  res.send("World")
})
  // newsScraper.scrapedNews.find({}, function(error, found) {
    // Throw any errors to the console
    // if (error) {
    //  console.log(error);
    }
    // If there are no errors, send the data to the browser as json
    // else {
    // res.json(found);
   // }
 // });
//});
/*
// Scrape data from one site and place it into the mongodb db
app.get("/scrape", function(req, res) {
  // Make a request for the news section of ycombinator
  request("https://www.wallstreetjournal.com/", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    // For each element with a "title" class
    $(".title").each(function(i, element) {
      // Save the text and href of each link enclosed in the current element
      var title = $(element).children("a").text();
      var link = $(element).children("a").attr("href");

      // If this found element had both a title and a link
      if (title && link) {
        // Insert the data in the scrapedData db
        db.scrapedData.insert({
          title: title,
          link: link
        },
        function(err, inserted) {
          if (err) {
            // Log the error if one is encountered during the query
            console.log(err);
          }
          else {
            // Otherwise, log the inserted data
            console.log(inserted);
          }
        });
      }
    });
  });
  
    // Send a "Scrape Complete" message to the browser
    res.send("Scrape Complete");
  });*/

  module.exports = app;
