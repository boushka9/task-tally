const API_KEY = 'h037C02e7gcSnjrPpLPt7g==CaOU09qBsjKkkMyn'

import React from 'react';

// create Http request for quote
const request = require('request');
var category = 'success';
request.get({
  url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
  headers: {
    'X-Api-Key': 'h037C02e7gcSnjrPpLPt7g==CaOU09qBsjKkkMyn'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});
// Build react page load
function QuoteCard() {
  return (
    <body className="App-quote">
    <p></p>
    </body>
  );
}

export default QuoteCard;