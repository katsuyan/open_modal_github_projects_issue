$(document).on("click", ".issue-card a", function(e) {
  var url = e.target.href;
  if ( url.indexOf('/issues/') != -1 || url.indexOf('/pull/') != -1 ) {
    $.colorbox({
      width:"0",
      height:"0",
      href:'https://github.com/issues',
      speed:0
    });
    $.colorbox({
      width:"1140",
      height:"85%",
      href:url,
      speed:200,
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
    return false;
  }
});

$(document).on("click", "#cboxLoadedContent a", function(e) {
  var url = e.target.href;
  window.open(url);
  return false;
});
