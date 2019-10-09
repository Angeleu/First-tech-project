// creating an array of objects where I will store data for my quotes.

var quotes= [

  {
      quote: "If you're always trying to be normal, you will never know how amazing you can be",

      source: "Maya Angelou"
  },

  {
      quote: "Elegance is not about being noticed, it's about being remembered",

      source: "Georgio Armani"
  },

  {
      quote: "Whatever you are, be a good one",

      source: "Abraham Lincoln"
  },

  {
      quote: "Our motto is when they go low we go high",

      source:"Michelle Obama",

      citation: "Democratic National Convention",

      year: "2016"

  },

  {
      quote: "When you are down feeling no one is good to you,be good to yourself",

      source: "Anonymous Thinker"
  }
  ]
    console.log(quotes);

  // Creating a function that generates a random number between 0 and the number of quotes in my array.//

  
  function getRandomQuote(){

      var randomIndex = Math.floor(Math.random() * quotes.length);

  // Use the generated random number as an index to pull out a corresponding random quote. // 

  for (var i = 0; i< quotes.length; i += 1); {

      var randomNum = quotes[randomIndex];

// Return the random quote picked from the array of objects.//

      return randomNum;
  }  
  }
  console.log(getRandomQuote());

  // Declaring a function to print the quotes from the quotes array. //


  function printQuote(){

  // Call the getRandomQuote function and store it in a variable//

      var randomQuotes = getRandomQuote();

      var HTML;

// Concatenate the string properties of my objects to display on the screen the whole quote.//

      HTML += '<p class="quote">' + randomQuotes.quote + '</p>';
      HTML += '<p class="source">' + randomQuotes.source

// Testing if the quote object has a citation and a year, if yes print them on the screen.//

    if ( randomQuotes.citation === true ) {

        HTML += '<span class="citation">' + randomQuotes.citation +'</span>'

 } if ( randomQuotes.year === true) {
     
     HTML += '<span class="year">'+ randomQuotes.year + '</span>'

 }
      
    HTML += '</p>';
  
       document.getElementById('quote-box').innerHTML= HTML
  } 
  
  // Make the button clickable to show quotes picked randomly from the array of objects.

  document.getElementById('loadQuote').addEventListener("click", printQuote, false);
