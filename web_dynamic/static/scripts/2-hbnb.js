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