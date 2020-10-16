window.onload = function() {
  document.getElementById("movieSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("movieInput").value;

    if (value === "") return;

    const url = "https://www.omdbapi.com/?s=" + value + "&apikey=b447d707";

    fetch(url, {
        mode: 'cors'
      })
      .then(function(response) {
        return response.json();
      }).then(function(json) {

        if (json.response == "error") {
          document.getElementById("movieTitle").innerHTML = "Movie '" + value + "' Not Found";
        } else {
          document.getElementById("movieTitle").innerHTML = "List of Movies" + "<hr>";
        }

        let output = "";
        if (json.totalResults > 0) {
          output += addObjectToOutput(json.Search);
        }
        else {
          output = "Movie '" + value + "' Not Found";
        }

        document.getElementById("movieResults").innerHTML = output;
      });
  });



  function addObjectToOutput(data) {
    debugger
    let output = '';

    for (let i = 0; i < data.length; i++) {
      var list = data[i];
      output += '<div class="item">';
      output += '<img src="' + list["Poster"] +'" alt="' + list["Title"] +'">';
      output += '<div class="itemText">';
      output += '<h3>' + list["Title"] + '</h3>';
      output += '<p>'+ list["Year"] + '</p>';
      output += '</div>';
      output += '</div>';
    }
    return output;
  }

}
