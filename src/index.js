import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");


//Get Joke By id 

let jokeByIdBtn  = document.getElementById("joke_by_id_btn")
let getJokeByIdElements = document.getElementById("joke_id")

jokeByIdBtn.addEventListener('click', (event) => {
    event.preventDefault; 
    let newJokeByIdText = jokes.getJokeById(getJokeByIdElements.value)

    if (newJokeByIdText !== undefined) {
        document.getElementById("joke_id_text").innerHTML = newJokeByIdText 
    } else {
        document.getElementById("joke_id_text").innerHTML = 'No Joke!!'
    }
})


//Add New Joke
let addNewJokeBtn = document.getElementById("ny_joke_btn")
let getNewJokeElement = document.getElementById("ny_Joke")

addNewJokeBtn.addEventListener('click', (event) =>  {
    event.preventDefault
    jokes.addJoke(getNewJokeElement.value)
    const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
    document.getElementById("jokes").innerHTML = allJokes.join("");
})


//Quotes
let GetQuoteofTheHour = document.getElementById("quote_of_the_hour_btn")
let quote = "https://studypoints.info/jokes/api/jokes/period/hour"

GetQuoteofTheHour.addEventListener('click', (event) => {
    event.preventDefault
    getQuotes()



    
})


function getQuotes () {
fetch(quote)
    .then(res => res.json()) //in flow1, just do it
    .then(data => {
    // Inside this callback, and only here, the response data is available
       console.log("data",data); 
       let result = data.joke
        console.log(result)
      document.getElementById('quotes').innerHTML = result 
}) }



// Clover

let cloverDiv = document.getElementById("cloverID")

cloverDiv.addEventListener('click', (event) => {
    event.preventDefault
    const leafPressed = event.target.closest('g')

    document.getElementById('cloverClicked').innerHTML = leafPressed.id
    console.log(leafPressed.id)
    
})


