var apikey = "1";

function getApi() {
// replace `octocat` with anyone else's GitHub username
	
var userSearch = $("#search-input").val();
	console.log(userSearch);
    var requestUrl = `https://themealdb.com/api/json/v1/1/search.php?s=${userSearch}`;
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })}
	  ;

$("#search-button").on("click", function(){
	event.preventDefault()

	getApi();

  // save recipe array to local storage - loop through array
  // key = name of recipe
  // value = recipe

  // generate options for user to select recipe

  //depending on option selected, calls that recipe from local storage and displays
});