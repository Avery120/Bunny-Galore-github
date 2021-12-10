// A $( document ).ready() block.
$(document).ready(function () {
  //console.log( "ready!" );

  ///code for dropdown - T-shirt size///
  $("#custom").hide();
  $(document).on("change", "#t-shirt", chkTshirt);

  function chkTshirt() {
    var tshirt = $("#t-shirt").val();
    //alert(tshirt);

    if (tshirt == "CUSTOM") {
      // alert(tshirt);
      $("#custom").removeAttr("disabled");
      $("#custom").attr("required", true);
      $("#custom").show();
    } else {
      $("#custom").hide();
      $("#custom").attr("disabled", true);
      $("#custom").removeAttr("required");
      $("#custom").val("");
    }
  } //end of chkTshirt functions
  ///code for dropdown - T-shirt size///

  ///code for the Time of day checkboxes///
  ////////////////////////code for the Time of day checkboxes//////////////////////
  // this solves the issue of having only one checkbox with the required attribute
  $(document).on("click", ".submit, .checkbox", chkCheckboxes);

  function chkCheckboxes() {
    var i = 0;
    $(".checkbox").each(function () {
      //var checkbox_value = $(this).val();

      if ($(this).is(":checked")) {
        i = i + 1;
        //alert(i);

        $(".checkbox").removeAttr("required");
      } else {
        if (i < 1) {
          $(".checkbox").attr("required", true);
        }
      } //end else if checkbox not checked
    }); //each
  } //function
  ////////////////////////code for the Time of day checkboxes//////////////////////
  ///code for the Time of day checkboxes///
});

///

///

///

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
