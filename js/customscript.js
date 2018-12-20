$(document).ready(function() {

  var goToCartIcon = function($addTocartBtn) {
    var $cartIcon = $(".my-cart-icon");
    var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({
      "position": "fixed",
      "z-index": "999"
    });
    $addTocartBtn.prepend($image);
    var position = $cartIcon.position();
    $image.animate({
      top: position.top,
      left: position.left
    }, 500, "linear", function() {
      $image.remove();
    });
  }

  $('.my-cart-btn').myCart({
    currencySymbol: 'Ksh',
    classCartIcon: 'my-cart-icon',
    classCartBadge: 'my-cart-badge',
    classProductQuantity: 'my-product-quantity',
    classProductRemove: 'my-product-remove',
    classCheckoutCart: 'my-cart-checkout',
    affixCartIcon: true,
    showCheckoutModal: true,
    numberOfDecimals: 2,
    cartItems: [],
    clickOnAddToCart: function($addTocart) {
      goToCartIcon($addTocart);
    },
    afterAddOnCart: function(products, totalPrice, totalQuantity) {
      console.log("afterAddOnCart", products, totalPrice, totalQuantity);
    },
    clickOnCartIcon: function($cartIcon, products, totalPrice, totalQuantity) {
      console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
    },
    checkoutCart: function(products, totalPrice, totalQuantity) {
      var checkoutString = "Burger Price: " + totalPrice + "\nTotal Ingredients: " + totalQuantity;
      checkoutString += "\n\nAt the moment we only accept Cash on Delivery. Thankyou for making your order, your burger will be delievered to you. Reach us on 0712345678";
      $.each(products, function() {
        checkoutString += ("\n ");
      });
      var confirmString= "Confirm your order";
      var thankOrder = "Thankyou for making your order. Your burger is on the way. Reach us on 0786543211";
            $.each(products, function() {
              checkoutString += ("\n ");
            });
      alert(checkoutString)
      confirm(confirmString)
      alert(thankOrder)
      console.log("checking out", products, totalPrice, totalQuantity);
    },
  });

  $("#btnbun").click(function() {
    $("#meat").show();
    $("#bun").hide();
  });

  $("#btnmeat").click(function() {
    $("#veg").show();
    $("#meat").hide();
  });

  $("#btnveg").click(function() {
    $("#cheese").show();
    $("#veg").hide();
  });

  $("#btncheese").click(function() {
    $("#sauce").show();
    $("#cheese").hide();
  });

  $("#addNewProduct").click(function(event) {
    var currentElementNo = $(".row").children().length + 1;
    $(".row").append('<div class="col-md-3 text-center"><img src="images/img_empty.png" width="150px" height="150px"><br>product ' + currentElementNo + ' - <strong>$' + currentElementNo +
      '</strong><br><button class="btn btn-danger my-cart-btn" data-id="' + currentElementNo + '" data-name="product ' + currentElementNo + '" data-summary="summary ' + currentElementNo + '" data-price="' + currentElementNo +
      '" data-quantity="1" data-image="images/img_empty.png">Add to Cart</button><a href="#" class="btn btn-info">Details</a></div>')
  });
});
