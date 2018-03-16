var gifButtonArray = ["Kitty", "Avacado", "Totoro", "Porcco Rosso", "Ramen", "Costa Rica", "Mace Windu"];
var gifName;
function createButtons() {
    $("#gifButtonView").empty();
    for (var i = 0; i < gifButtonArray.length; i++) {
        var buttonArr = $("<button class='btn btn-info'>");
        buttonArr.addClass("gifButtons");
        buttonArr.attr("data-name", gifButtonArray[i]);
        buttonArr.text(gifButtonArray[i]);
        $("#gifButtonView").append(buttonArr);
    }
}
function displayGif() {
    var gifName = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=UIcheBD4aNnGl9qzv89JH5tOKQIsHky3&limit=5&fmt";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var imageURL = response.data[0].images.fixed_height.url;
        var gifImage = $("<img>");
        var gifRating = response.data[0].rating;
        gifImage.attr("src", imageURL);
        $("#gifImage").append(gifImage);
        $("#gifImage").append("Rating: " + gifRating + "<br>");
        console.log(response.data[0]);
        // $("#gifImage").on("click", function(){
        //     if (imageURL === true) {
        //         var movingURL = response.data[0].images.fixed_height.url
        //         $("#gifImage", "src").empty().attr("src", movingURL);
        //         console.log(click);
        //     }

        // })
    });
      

    
}
$("#addGif").on("click", function (event) {
    event.preventDefault();
    var gifName = $("#gifInput").val().trim();
    gifButtonArray.push(gifName);
    var buttonArr = $("<button class='btn btn-info'>");
    buttonArr.addClass("gifButtons");
    buttonArr.attr("data-name", gifName);
    buttonArr.text(gifName);
    $("#gifButtonView").append(buttonArr);
});
$(document).on("click", ".gifButtons", displayGif);
createButtons();