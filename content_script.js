$(document).on("click", ".issue-card a", function(e) {
  var url = e.target.href;
  if ( url.indexOf('/issues/') != -1 || url.indexOf('/pull/') != -1 ) {
    dispLoading("少々お待ちを〜");

    $.ajax({
      type: "GET",
      url: url,

    }).done(function(msg) {
      var html = msg.replace(/<script.*?<\/script>/g, "");
      $.colorbox({
        width:"1140",
        height:"85%",
        html:html,
        onComplete: function() {
          removeLoading()
          var issue_title = $("#cboxLoadedContent .js-issue-title").text();
          $("#cboxLoadedContent .Header").remove();
          $("#cboxLoadedContent .pagehead").replaceWith('<div>　</div>');
          $("#cboxLoadedContent a[href$='/issues/new']").remove();
          $("#cboxLoadedContent .js-issue-title").replaceWith('<a href="'+url+'">'+issue_title+'</a>');
          $("#cboxLoadedContent .issues-listing").removeAttr("data-pjax");
          $("#cboxLoadedContent a[data-pjax]").removeAttr("data-pjax");
        }
      });
    });
    return false;
  }
});

$(document).on("click", "#cboxLoadedContent a", function(e) {
  var url = e.target.href;
  window.open(url);
  return false;
});

function dispLoading(msg){
  var dispMsg = "<div class='loadingMsg'>" + msg + "</div>";
  $("body").append("<div id='loading'><h3>" + dispMsg + "</h3></div>");
}

function removeLoading(){
  $("#loading").remove();
}
