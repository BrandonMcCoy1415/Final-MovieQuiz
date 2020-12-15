# Final Report
 
## WHICH MOVIE SHOULD YOU WATCH?

## Team Members
* Samantha Barlage
* Chris Davis 
* Conner Houtman
* Brandon McCoy
* Musab Muhie
* Allison Siegel 

## Link to Application
The web application is currently running on a Heroku Server
* https://movie-quiz-final.herokuapp.com/

## Table of Contents
* [Information Problem](##Information-Problem)
* [Targets](##Targets)
    * [Browsers](###Browsers)
    * [Stakeholders](###Stakeholders)
* [Data](##Data)
    * [API](###API)
    * [Libraries](###Libraries)
    * [Library License](###Library-License)
* [Strategies and Solutions](##Strategies-and-Solutions)
* [Technical System Decision](##Technical-System-Decision)
    * [Frontend](###Frontend)
    * [Backend](###Backend)
* [Has the Problem Been Addressed?](##Has-the-Problem-Been-Addressed?)
* [Challenges](##Challenges)
* [Future Work](##Future-Work)



## Information Problem
There is a large selection of currently media avaialable on streaming services leading to Information Overload. This project seeks to solve this problem with a simple web application aimed at users seeking a movie to watch. Decision-making and discovery is hindered by information overload due to the sheer amount of content over multiple platforms. With this application the time spent deciding which movie to watch can be reduced with an easy to use quiz focusing on the user's mood. The ultimate goal of the application is to ease information overload with a lightwweight application to quickly recommend movies targeted by mood and preferences of the user. 

## Targets
### Browsers
* Chrome 87
* Firefox 83 
* Safari 14

### Stakeholders

The primary stakeholders include users of streaming services including but not limited to:
* Amazon Prime Video
* Disney+
* HBO Max
* Hulu
* Netflix

These streaming services themselves are also identified as stakeholders in that they provide the content users will engage with. [The Movie Database](https://www.themoviedb.org) serves as a stakeholder as they are providing the database being accessed by this web application.

## Data
The data is retrived from a database of movies, TV shows and actor images provided by The Movie Database (TMDb). This application uses movie data to deliver results after sorting for the following features:
* Genre
* Year of Release
* Language
* Rating

This information is retrieved based on user input in the quiz with the following relationships (quiz feature -> database feature):
* Mood -> Genre
* Decade of Release -> Year of Release
* Language -> Language
* Age of Watchers -> Rating


### API
This project used The Movie Database (TMDb) API
* https://developers.themoviedb.org/3/getting-started/introduction

### Libraries
The application utilizes the The Movie DB (javascript library) 
* Github Repository for [themoviedb-javascript-library](https://github.com/cavestri/themoviedb-javascript-library/) 
* Credits to Franco Cavestri 
* [Link to license as described verbatim below](https://github.com/cavestri/themoviedb-javascript-library/#licence)

### Library License

The MIT License (MIT)

Copyright (c) Franco Cavestri

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Strategies and Solutions



## Technical System Decision
### Frontend
HTML is used for application structure and application design. CSS is implemented for website styles and presentation.

### Backend
JavaScript is used to handle frontend user input and information retrieval from the API. The application runs scripts from the themoviedb-javascript-library are run to retrieve information from the database based on user clicks. The library utilizes JQuery for this purpose to sort and match metadata within the database to deliver results to the user. 

## Has the Problem Been Addressed?

## Challenges
* We realized that we needed to change API’s from The Open Movie Database to The Movie Database
    * The first API did not have all the functionality that we wanted
    * Could only search for by name of the movie or movie ID
    * Did not have many methods
* Struggled to connect to API and struggled to apply certain resources we had
* Had to rework the quiz questions in order to simplify data that we were able to work with (changed from a text-entry to a checkbox)
    * Limitations of the new API such as only being able to search by individual years and actors requiring IDs
    * Struggled to balance between functionality of our application and how it looked on the frontend

## Future Work
* Provide a cleaner and more visually attractive front-end for users
* Add more variables for users to select to provide more specific recommendations
* Allow more recommendations per result
* Provide similar movies to results to allow more discovery
* Display more metadata on each movie
* Continue exploring libraries and API’s to improve the vision and efficiency of the application
* Note where movies can be watched via streaming



