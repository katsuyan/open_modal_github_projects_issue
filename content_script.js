$(document).on("click", ".issue-card a", function(e) {
  var url = e.target.href;
  if ( url.indexOf('/issues/') != -1 || url.indexOf('/pull/') != -1 ) {

    $.ajax({
      type: "GET",
      url: url,

    }).done(function(msg) {
      var html = msg.replace(/<script.*?<\/script>/g, "");
      $.colorbox({
        width:"1140",
        height:"85%",
        html:html,
        speed:0,
        onComplete: function() {
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
