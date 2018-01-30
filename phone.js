
 $(document).ready(function() { // do this when the document is loaded
 $("#dialer").show(); // show the element with ID "element"
 $("#content_dialer").show(); // show element
 $("#content_list").hide(); // hide the element with ID "otherElement"
 $("#content_add").hide();
});

//When the Dialer is clicked
  $("#dialer").click(function() { // when "button_id" is clicked
  $("#content_dialer").show(); // show element
  $("#content_list").hide(); // show element
  $("#content_add").hide(); // hide other element
  });

// When the Contact List is clicked
  $("#contact_list").click(function() { // when "button_id" is clicked
  $("#content_dialer").hide(); // show element
  $("#content_list").show(); // show element
  $("#content_add").hide(); // hide other element
  });

//When Add Contact is clicked
  $("#add_contact").click(function() { // when "button_id" is clicked
  $("#content_dialer").hide(); // show element
  $("#content_list").hide(); // show element
  $("#content_add").show(); // hide other element
 });

//Number Pad
 var audio = $("#click")[0];
 $("li").click(function() {
   audio.play();
 });

 $('.keys').on('click', 'li', function() {
   var num = $(this).data('number')
   $("#telnumber").append(num);
 });

