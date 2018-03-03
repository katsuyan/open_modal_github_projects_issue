$(document).on("click", "a", function(e) {
  var url = e.target.href;
  if ( url.indexOf('issues') != -1 ) {
    $.colorbox({
      width:"1140",
      height:"80%",
      href:url,
      speed:200,
      onComplete: function() {
        $("#cboxLoadedContent .Header").remove();
        $("#cboxLoadedContent .pagehead").replaceWith('<div>　</div>')
      }
    });
    return false;
  }
});
