$
$(document).ready(function() {
  $("form#myForm").submit(function(event) {

    var scoreOne = parseInt($("#q1").val());
    var scoreTwo = parseInt($("#q2").val());
    var scoreThree = parseInt($("#q3").val());
    var scoreFour = parseInt($("#q4").val());
    var scoreFive = parseInt($("#q5").val());

    var totalScore = (scoreOne + scoreTwo + scoreThree + scoreFour + scoreFive)

    // alert(totalScore); //to check totalScore

    if (totalScore >=30) {
       alert("The Hag");
       $("img").hide();
       $("img#result-kramer").show();
      }  else if (totalScore >= 20 && totalScore < 30 ){
      alert("Sam");
      $("img").hide();
      $("img#result-dwight").show();
      }  else if (totalScore < 20) {
        alert("Skeletor");
        $("img").hide();
        $("img#result-veronica").show();
      }

      event.preventDefault();
  });
});



//display it///

$("#formOne").click(function(event){
  event.preventDefault();
  $("#formOne").text(totalPrice());
})

////////////////////// user Interface///////////////////


$(document).ready(function() {

  $("form#toppings").submit(function(event) {
    event.preventDefault();
    $("#selected-toppings").show();
$("input:checkbox[name=pizza-toppings]:checked").each(function(){
  var selectedPizzaToppings = $(this).val();
  $('#selected-toppings').append(selectedPizzaToppings + "<br>");
});
$('#toppings').hide();

})
})
//});/////////////////////////////////
$(document).ready(function() {
$("form#venue").submit(function(event) {
  event.preventDefault();
  $("#selected-venue").show();
$("input:checkbox[name=venue]:checked").each(function(){
var selectedVenue = $(this).val();
$('#selected-venue').append(selectedVenue + "<br>");
});
$('#venue').hide();
})
})
