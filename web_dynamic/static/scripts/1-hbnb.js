$(document).ready(function(){
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
});
