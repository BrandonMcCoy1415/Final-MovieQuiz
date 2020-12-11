//so what we want to do is match the movies to the answers, this is basically pseudo code rn
//if the movie has the actors in it, choose that movie



//mood - filter the genre
//if the mood is happy - comedy, action, drama, sci-fi, musical, family
//gloomy - comedy, action, adventure, romance, sci-fi, musical, family
//anxiety - comedy, action, adventure, musical, family
//relaxed - documentary, romance, drama
//bored - action, comedy, horror, thriller, sci-fi
//combo - no filter for genre


//for age of watchers - filter the rating
//babies - G
//little kids - G
//preteens - PG
//teens - G, PG, PG-13
//adults, G, PG, PG-13, R


//language filter by language

//decade of movie - filter by year
//50s - movies from 1950-1959
//60s - movies from 1960-1969
//70s - movies from 1970-1979
//80s - movies from 1980-1989
//90s - movies from 1990-1999
//2000s - movies from 2000-2009
//2010s - movies from 2010-2019
//2020s - movies from 2020

function getSelectedCheckboxValues(type) {
    const checkboxes = document.querySelectorAll(`input[type="${type}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}
const preferences = getSelectedCheckboxValues('checkbox')
console.log(preferences)





const btn = document.querySelectorAll('input[id = "results"] :checked');
btn.addEventListener('click', (event) => {
    alert(getSelectedCheckboxValues('checkbox'));
});