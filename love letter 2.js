$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var btn_letter_close = $("#letter-close");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });
  
  // Close button inside the letter
  $(document).on("click", "#letter-close", function (e) {
    e.preventDefault();
    e.stopPropagation();
    close();
    return false;
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    $("body").addClass("letter-open");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
    $("body").removeClass("letter-open");
  }
});
