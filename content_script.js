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
        $("#cboxLoadedContent .Header").remove();
        $("#cboxLoadedContent .pagehead").replaceWith('<a href="'+url+'" class="btn btn-light btn-sm">open new tab</a>');
        $("#cboxLoadedContent a[href$='/issues/new']").remove();
        $('#cboxLoadedContent a').attr('target', '_blank');
      }
    });
    return false;
  }
});
