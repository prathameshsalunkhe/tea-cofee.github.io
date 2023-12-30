$(document).ready(function() {
    $('label').click(function() {
      var radioValue = $('input[name=tea_number]:checked').val();
      console.log("Selected value: " + radioValue);
    });
  });