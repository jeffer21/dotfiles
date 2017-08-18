$(document).ready(function () {
  var container = $('div.row');
  var menuNumber = 0;
  // Get Data from JSON
  $.ajax({
    type: 'GET',
    url: 'https://jsonplaceholder.typicode.com/photos?_limit=50',
    dataType: 'json',
    success: function(data) {
      // Variable for how many pages
      var menuNumber = Math.ceil(data.length/10);
      // Variable for how many photo groups
      var p = 0;
      // Variable for buttons to call pages
      var m = 1;
      // Loop to create div for each photo group
      for (i = 1; i < menuNumber +1; i++) {
        if (i === 1){
          container.append("<div id='photo-group-" + i + "' class='picture-group' ></div>")
        }
        else {
          container.append("<div id='photo-group-" + i + "' class='hidden picture-group' ></div>")
        }
        $.each(data, function() {
          // Loop to add 10 pictures to each group. Change the 10 to change the amount per page
          for (p = p; p < i * 10; p++) {
            $('div#photo-group-' + i).append("<div id='' class='col-md-4 col-sm-6 col-xs-12 photo-container'><img src='" + data[p].url + "'></div>");
          }
        });
      }
      // Loop for menu buttons
      for (m = 1; m < menuNumber +1; m++){
        $('div.menu').append("<div id='" + m + "' class = 'btn inline'>" + m + "</div>");
      }
      // Function to switch the pages
      $( ".btn" ).click(function( event ) {
        $(".picture-group").addClass('hidden');
        $( "#photo-group-" + this.id ).removeClass('hidden');
      });
      }
    });
  //
});
