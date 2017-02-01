'use strict';


// Dependencies
const config = require('../config/index');
const articles = require('./articles');
const Twit =  require('twit');
const uniqueRandomArray = require('unique-random-array');
const stoicapi = require('stoic-api').random();

const T = new Twit(config);

// indicate the bot is running
console.log('Tweet-back Bot is runnning');

/**
 * Tweet Technical Articles
 */
function tweetTechArticles () {
    let techArticles = uniqueRandomArray(articles.tech);
    let message = techArticles();

    T.post('statuses/update', {status: message}, (err, data, response) => {
        if (err) {
            console.error('CANNOT SEND TWEET' + err);
        }
        console.log('TWEETED SUCCESSFULLY: Technical Article');
    });
}

// tweet randomly and in every 12 hours
tweetTechArticles();
setInterval(tweetTechArticles, 1000 * 60 * 60 * 12);

/**
 * Tweet Other Medium Stories
 */

function tweetOtherMediumArticles () {
    let otherMediumArticles = uniqueRandomArray(articles.otherMediumStories);
    let message = otherMediumArticles();

    T.post('statuses/update', {status: message}, (err, data, response) => {
        if (err) {
            console.error('CANNOT SEND TWEET' + err);
        }
        console.log('TWEETED SUCCESSFULLY: Other Medium Article');
    });
}
// tweet randomly and in every 12 hours
tweetOtherMediumArticles();
setInterval(tweetOtherMediumArticles, 1000 * 60 * 60 * 12);

/**
 * TODO: Tweet Book Blog posts
 */


/**
 * Tweet Daily Stoicism
 */

function tweetDailyStoic () {
    let message = stoicapi;

    T.post('statuses/update', {status:message}, (err, data, response) => {
        if (err) {
            console.error('CANNOT SEND TWEET' + err);
        }
        console.log('TWEETED SUCCESSFULLY: Daily Stoic Quote');
    });
}

// tweet randomly and in every 24 hours
tweetDailyStoic();
setInterval(tweetDailyStoic, 1000 * 60 * 60 * 24);