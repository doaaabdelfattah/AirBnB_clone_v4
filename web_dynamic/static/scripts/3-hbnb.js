$(document).ready(function(){

  // ********************* TASK 1 *************************
  const Amenities = {};
     // Listen for changes on each input checkbox tag
    //  Specifies the function to run when the change event 
    // occurs for the selected elements
    $('.amenities input[type="checkbox"]').change(function(){
        // Check if the checkbox is checked
        if ($(this).is(':checked')){
            // Add new item to Amenities Dict
            Amenities[$(this).attr('data-id')] = $(this).attr('data-name');

        } else {
            delete Amenities[$(this).attr('data-id')]
        }

        // Update the h4 tag inside the .amenities div
      $('.amenities h4').text(Object.values(Amenities).join(', '));

      });

    // ********************* TASK 2 *************************
    $.get('http://127.0.0.1:5001/api/v1/status/', function(data, status) {
      console.log(status);
      console.log(data);
      if (status === 'success') {
          if (data.status === 'OK') {
              $('#api_status').addClass('available');
          } else {
              $('#api_status').removeClass('available');
          }
      }
  });

        // $.get("http://0.0.0.0:5001/api/v1/status/", function(response){
        //   if (response.status == 'OK'){
        //     $('DIV#api_status').addClass('available');
        //   }
        //   else {
        //     $('DIV#api_status').removeClass('available');

        //   }
        // });

});
    // ********************* TASK 3 *************************
    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({}),
        success: function(data) {
            // Loop through the result of the request
            data.forEach(function(place) {
                // Create an article tag representing a Place
                var article = $('<article></article>');
                article.html(`
                    <div class="title_box">
                        <h2>${place.name}</h2>
                        <div class="price_by_night">$${place.price_by_night}</div>
                    </div>
                    <div class="information">
                        <div class="max_guest">
                            ${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}
                        </div>
                        <div class="number_rooms">
                            ${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}
                        </div>
                        <div class="number_bathrooms">
                            ${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}
                        </div>
                    </div>
                    <div class="description">${place.description}</div>
                `);
                // Append the article to the section with class 'places'
                $('.places').append(article);
            });
        },
        error: function(error) {
            console.error('Error fetching places:', error);
        }
    });

});

	
	
