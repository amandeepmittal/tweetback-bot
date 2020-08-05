'use strict';

// Dependencies
const config = require('../config/index');
const Twit = require('twit');
const schedule = require('node-schedule');
const ArticlesFromMedium = require('my-medium-articles-api');

const T = new Twit(config);

// indicate the bot is running 👋
console.log('Tweet-back Bot is running');

/**
 * Tweet Medium Articles
 */

function tweetMediumArticles() {
  let Article = ArticlesFromMedium;
  T.post('statuses/update', { status: Article }, (err, data, response) => {
    if (err) {
      console.error(
        `========= ERROR! Cannot Send Tweet due to:\n${err}\n=========`
      );
    }
    console.log(
      `========= SUCCESS! Daily Medium Article Shared on Twitter =========`
    );
  });
}

// tweet randomly and in every 24 hours
setInterval(tweetMediumArticles, 1000 * 60 * 60 * 20);
// tweetMediumArticles();
