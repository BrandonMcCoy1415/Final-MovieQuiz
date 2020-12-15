# What Movie To Watch Quiz

## Description

[Heroku](https://movie-quiz-final.herokuapp.com/index.html)

Target Browsers:

[User Manual Link](#User-Manual)

[Developer Manual Link](#Developer-Manual)

# User Manual

# Developer Manual 
## Installation 
* Download everything and run locally via localhost 3000 with a server running or open index.html in a browser of your choice

## Methods
* For full descriptions of moviedb methods visit the wiki at https://github.com/cavestri/themoviedb-javascript-library
* getCheckedBoxes(chkboxName)
    * This function gets the users selected response from the radio buttons and adds a key and value to localStorage. ( localStorage = { Genre: "genre IDs", Year: "year", Language: "English", Rated: "US certification ratings"})
    * E.G. Storage { Genre: "35|28|18|878|10402|10751", Year: "2020", Language: "English", Rated: "R" data: }
* displayMatches()
    * This function utilizes the discover.GetMovies({}, successCB, errorCB) function present in the moviedb.js library. The API request is sent and returned and stored in localStorage as a JSON. The JSON is parsed and the Results.html page is updated with three results in the format of "Title Year" (e.g. Toy Story 1995-11-16)

## Important Variables
* TMDb uses IDs for the genres. The genres and their associated IDs used in this app are as follows: 
    * Action = 28, Adventure = 12, comedy = 35, drama = 18, sci-fi = 878, musical = 10402, family = 10751, romance = 10749, documentary = 99, horror = 27, thriller = 53
* At the top of the moviedb.js contains modified variables for usage in the generateQuery function, which is used in most of the other functions present in moviedb.js library. Here you can change elements of the string that is always passed to the API such as the language or method of sorting results. Visit https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id for full documentation and example usage

## Bugs and Limitations
* Buttons use hyperlink text to continue to the next webpage, change this so the buttons are real buttons instead of boxes with hyperlink text inside
* User inputs are stored using "window.localStorage". Don't do this, change the implementation to properly utilize HTTP methods to collect user data. The specific functions as designed should work with the appropriate variable name changes, the logic should be sound
* TMDb is not the largest database, searches for specific categories can yield 1 or no results such as searching for movies in the 50s rated PG-13. Generally, searches between the 80s and 2010s have the best result yield
* The database itself is quite inconsistent with searches. The current implementation returns 3 results ordered by year. When attempting to use other API sorting functions like by popularity, the popularity value would often overwrite the year, leading to results where a movie from the wrong decade is returned
* A limitation of the database is that only a single year can be used. The user selects a decade and using a random number generator the specific year is selected (e.g. user selects 2020s, any year between 2020-2029 will be selected). This year will be used for all 3 searches of the database however, a good change would be to make it so it selects three separate years in the decade.
