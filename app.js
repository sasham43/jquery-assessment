$(function(){
  var generateClicked = 0;
  // append new container onto document
  $("#generate").on('click',function(){
    // increment click counter
    generateClicked++;
    // create new string with div, two buttons, and span with id generated from number of times generate button was clicked
    var buttonContainer = '<div class=\"container\"><button class=\"delete\">Delete</button><button class=\"change\">Change</button><span id=\"generateClicked' + generateClicked + '\"><span></div>';
    // append above container onto DOM body
    $("body").append(buttonContainer);
    // target the most recently created span
    var spanName = "#generateClicked" + generateClicked;
    // append text to that specific span
    $(spanName).append(generateClicked);
  })

  $(document).on('click', ".delete", function(){
    // remove div container when clicked
    $(this).parent().remove();
  });

  $(document).on('click', ".change", function(){
    // change background color to red when clicked
    $(this).parent().toggleClass("red");
  });
})
