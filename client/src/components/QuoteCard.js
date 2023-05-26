import React, { useEffect, useState } from 'react';


const QuoteCard = () => {
  // State variable to hold the fetched quote
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    // Function to fetch the quote from the API
    const fetchQuote = async () => {
      try {
        const category = 'success';
        // Make the API request
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: {
            'X-Api-Key': apiKey
          }
        });
        // Check for errors in the API response
        if (!response.ok) {
          throw new Error('Error: ' + response.status);
        }
        // Extract the JSON data from the response
        const data = await response.json();
        // Set the fetched quote as the state value
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        console.log(quote)
      } catch (error) {
        console.error('Request failed:', error);
      }
    };

    // Call the fetchQuote function
    fetchQuote();
  }, []);

  return (
    <div className="quote-card">
      <p>"{quote}"</p>
      <p>- {author}</p>
    </div>
  );
};

export default QuoteCard;
