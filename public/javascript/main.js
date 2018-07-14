//Ajax when sending predict form 
$("#homePagePostForm").submit(function(e) {
  e.preventDefault();
  e.stopPropagation();
  var sendData = {
        btcAddress: $("#btcAddress").val(),
        vote: $("input[name='btcPrediction']:checked").val()
      };
  console.log(sendData);
  $.ajax({
      url: "/predict",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(sendData)
  }).done(function(result){
      updateHomePage("formColumn", result.message);
  }).fail(function(err){
      console.log(err);
  });
});

//Change the inner HTML
var updateHomePage = function(id, posts){
  document.getElementById(id).innerHTML = posts;
};