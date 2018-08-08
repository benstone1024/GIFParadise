// create a variable array named "topics" for the activity
//add the giphy path to link the page to. 
//create a loop to attach the array elements to a button on the webpage. 


// Array of superheros//

var topics =["Batman","Superman","Wonder Woman","Green Lantern","The Flash"];

function displayHeroInfo() {

    var hero = $(this).attr("data-name");
    var queryUrl ="https://api.giphy.com/v1/gifs/search?q="+ topics +"api_key=XS3HBtZtPDEDnNwmfWFlz7wHKueD5n9q";

//AJAX call for the superhero button clicked
$.ajax({
    url:queryUrl,
    method:"Get"
}) .then(function(response){

    var heroDiv = $("<div classs='hero'>");

    var pOne = $("<p>").text("Rating: " + rating);

    var rating = response.Rated;

    heroDiv.append(pOne);

    var imgURL = response.Poster;

    var image = $("<img>").attr("src", imgURL);

    $("#movies-view").prepend(movieDiv);

    });

}

function renderButtons() {

    $("#buttons-view").empty();

    for (var i =0; i < topics.length; i++) {

        var a =$("<button>");

        a.addClass("hero-btn");

        a.attr("data-name",topics[i]);

        a.text(topics[i]);

        $("#buttons-view").append(a)
    }
}

$("#add-hero").on("click",function(event) {
event.preventDefault();

var hero = $("#Hero-input").val().trim();

topics.push(hero);

renderButtons();


});

$(document).on("click",".hero-btn",displayHeroInfo);

renderButtons();
