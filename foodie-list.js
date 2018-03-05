
//xhr request to get the url to use as data
// let $ = require('jquery');
let databaseURL = "https://foodie-list-51d5f.firebaseio.com/cities.json"; 
let citiesData = [];
let dropDown = document.getElementById("yourCity");


let databaseURLrestaurants = "https://foodie-list-51d5f.firebaseio.com/restaurants.json";
var restaurantsData = [];
let box = document.getElementsByClassName("box");


//now get the data from the url using ajax, call the function
function getData(taco){
    return $.ajax({
        url: taco,
        type: 'GET',
    })
    .then((data) => {
        // console.log(data);
        data.forEach((cities) => {
            dropDown.innerHTML += `<option>${cities.city}</option>`;
            citiesData.push(cities);
        });
    })
}
getData(databaseURL);



//get the data from restaurants json
function getRestaurants(getRestaurantsURL){
    return $.ajax({
        url: getRestaurantsURL,
        type: 'GET',
    })
    .then((dataArray) => {
        // console.log(dataArray);
        dataArray.sort(function(a, b){
            return a.my_rating - b.my_rating;
        });
        dataArray.forEach((restaurant) => {
            //Put on page here for show all restaurants
            
            // box.innerHTML += `<div>${restaurantsData.restaurant}</div>`;
            restaurantsData.push(restaurant);
        });
    })
}
getRestaurants(databaseURLrestaurants);
console.log(restaurantsData);


// When the user first visits the page, all restaurants should be listed in order of their rating(ratings are from 1 to 10). The restaurants are displayed from highest rated to lowest rated.
//order the data by rating, sort that data












//when city is selected, get the id from that list of cities and compare that id to the city id in the restaurants array, and return only the restaurants that have only that city id, ids from cities need to match city-id from restaurant,


//put city names in dropdown/display the names **
//need to know what to access, how to access every key and value of every object in that array, a type of for loop to iterate over objects, append to the loop to add the items to the drop down append means to sticky note the items to the place they will be shown at, use a for in loop *

//the top is where you set up, this is your job and the data that you're having, declaration and then execute

//think like developer = loops, ifs, get and send data and manipulate data