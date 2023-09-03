(function($) {
  'use strict';

  if ($(".js-example-basic-single").length) {
    $(".js-example-basic-single").select2();
  }
  if ($(".js-example-basic-multiple").length) {
    $(".js-example-basic-multiple").select2();
  }
})(jQuery);


$(document).ready(function () {
  $("#tagSelect").on("change", function () {
      var selectedTag = $(this).val();
      if (selectedTag) {
          addSelectedTag(selectedTag);
          $(this).val("");
      }
  });

  $(document).on("click", ".selected-tag", function () {
      $(this).remove();
  });

  function addSelectedTag(tag) {
      var tagElement = $("<span>", {
          class: "selected-tag",
          text: tag
      });
      $("#selectedTags").append(tagElement);
  }
});