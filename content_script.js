var removeProjectSidebar = function() {
  $(".js-project-columns").css({ "cssText": "padding-right: 0 !important" });
  $(".js-project-card-details-pane").css({ "cssText": "width: 0 !important" });
};

var showLoading = function() {
  $("body").append("<div id='loading' />");
};

var hideLoading = function() {
  $("#loading").remove();
};

var hookOnClickIssueCard = function() {
  $(document).on("click", ".issue-card a", function (e) {
    var url = e.target.href;

    if (url.indexOf("/issues/") != -1 || url.indexOf("/pull/") != -1) {
      showLoading();
      openIssueInModal(url);

      return false;
    }
  });
};

var openIssueInModal = function(url) {
  $.ajax({
    type: "GET",
    url: url,
  }).done(function (msg) {
    var html = msg.replace(/<script.*?<\/script>/g, "");
    html = $(html).find(".new-discussion-timeline");
    html = $(html).prepend("<div style='margin-top: 24px'>");

    $.colorbox({
      width: "85%",
      height: "95%",
      transition: "none",
      html: html,
      onComplete: function () {
        hideLoading();

        // add Title link
        var issueTitle = $("#cboxLoadedContent .js-issue-title").first().text();
        $("#cboxLoadedContent .js-issue-title").replaceWith("<a href=\""+url+"\">"+issueTitle+"</a>");
      }
    });
  });
};

var openModalLinkToOtherWindow = function() {
  $(document).on("click", "#cboxLoadedContent a", function (e) {
    var url = e.target.href;
    window.open(url);
    return false;
  });
};

var initialize = function() {
  removeProjectSidebar();
  hookOnClickIssueCard();
  openModalLinkToOtherWindow();
};

initialize();
