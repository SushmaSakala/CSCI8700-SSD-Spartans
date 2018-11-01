$(document).ready(function () {

  $('.color-choose input').on('click', function () {
    var headphonesColor = $(this).attr('data-image');

    $('.active').removeClass('active');
    $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
    $(this).addClass('active');
  });


  $(".cart-btn").on("click", function (e) {
    e.preventDefault();

    var list = [];

    if (sessionStorage.getItem("cart")) {
      list = JSON.parse(sessionStorage.getItem("cart"));
    }

    if (list.indexOf($(this).attr("id")) != -1) {
      $(this).next().html("This product is already present in cart.")
    } else {
      list.push($(this).attr("id"));
      $(this).next().html(" Added this product to Cart.")
    }

    sessionStorage.setItem("cart", JSON.stringify(list))

  });




});
