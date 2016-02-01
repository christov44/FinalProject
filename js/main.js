

$(document).ready(function() { 

console.log("Am I working?")

$(function(){
      $(".tag_line").typed({
        strings: ["Introducing a New Way To Find Your Skis", "And Without Looking Like a Gaper"],
        typeSpeed: 0
      });
  });

  $(".database").children('img').click(function() {
    $(".database").fadeOut(5000);
  });

  $(".contact_table").hover(function() {
      $(this).css("border", "5px solid red");
  });

  $(".about_body_copy").click(function() {
    for (i = 0; i < 5; i++) {  
      $(".about_body_copy").fadeOut(1000);
      $(".about_body_copy").fadeIn(1000);
    }
  });


//Trying to figure out how to make a button that Shows/Hides it
//   $("#displayText").click(function toggle() {
//     var ele = document.getElementById("toggleText");
//     var text = document.getElementById("displayText");
//     if(ele.style.display == "block") {
//           ele.style.display = "none";
//       text.innerHTML = "Expand";
//       }
//     else {
//       ele.style.display = "block";
//       text.innerHTML = "About Mayday in Paradise: Our Story (Click Here to hide)";
//     }
// });

  });




   // $("h1").hide(); // Hides the element. Can also do show().
   //  $("h1").fadeIn(5000); // the 5000 describes how long it will take to finish the animation in milliseconds. Note: you can only use animate with CSS properties that take in a numeric value, so couldn't do like color with this. Right now I'm shrinking the width of this thing from 500px to 100px over 5 seconds.
   //  $(".color_block").animate({ width:100 }, 5000, function() {
   //      alert("animation finished!");
   //  }); 

   //  $("h2").click(function() { // This calls the function only after the element was clicked
   //      $("h2").fadeOut(5000);
   //    });
   //  $("h3").hover(function() { //This adds css background color when you hover over the h3 element
   //    $(this).css("background-color", "yellow");
   //  });
   //  $(".picture").click(function() { // will add a border upon a click
   //    $(this).css("border", "5px solid black");
   //    console.log("You clearly want to play basketball");
   //  });
   //  $("h4").hover(function() { // will make the font bigger if you hover over it
   //    $(this).css("font-size", "100px");
   //  });