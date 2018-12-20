var expanded = false;

function showCheckboxes() {
var checkboxes = document.getElementById("checkboxes");
if (!expanded) {
checkboxes.style.display = "block";
expanded = true;
} else {
checkboxes.style.display = "none";
expanded = false;
}
}
$(document).ready(function() {
  $("form.ingredients").submit(function(event) {
    var ing1 = $("input:radio[name=one]:checked").val();
    var ing2 = $("input:radio[name=two]:checked").val();
    var ing3 = $("input:radio[name=three]:checked").val();
    var ing4 = $("input:radio[name=four]:checked").val();
    var ing5 = $("input:radio[name=five]:checked").val();
    var result = parseInt(ing1) + parseInt(ing2) + parseInt(ing3) + parseInt(ing4) + parseInt(ing5) +;
    $("#result").text("YOUR BURGER WILL COST KSH" + result +);

    $("button").click(function() {
      $("#result-showing").toggle();
      $(".ingredients-hidden").toggle();
    });
    $("form.ingredients").hide();
    $("#result").show();
    event.preventDefault();
  });

});
