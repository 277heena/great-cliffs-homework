$(document).ready(function () {
  $("body").append(`
    <div id="image-popup" style="
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      z-index: 9999;
      text-align: center;
    ">
      <img id="popup-img" src="" alt="Popup Image" style="
        max-width: 80%;
        max-height: 80%;
        margin-top: 5%;
        border: 4px solid white;
        border-radius: 10px;
      ">
    </div>
  `);

  $(".cliff-card img").click(function () {
    var imageSrc = $(this).attr("src");
    $("#popup-img").attr("src", imageSrc);
    $("#image-popup").fadeIn(500);
  });

  $("#image-popup").click(function () {
    $(this).fadeOut(500);
  });
});