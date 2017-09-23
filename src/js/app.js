require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('../css/custom.css');

$(document).ready(function () {

  var discountRate = [0, 0.05, 0.1, 0.2, 0.25];

  $('input[name=qty]').on('change', function () {
    handleInputChange();
  });

  function handleInputChange(){

    const cart = getCart();
    var totalPrice = cart.reduce((s, i) => s += 100 * i.qty, 0);
    var uniqueQty = cart.reduce((s, i) => s += Math.min(1, i.qty), 0);
    var discount = discountRate[uniqueQty-1] * uniqueQty * 100;
    setPriceToUI(totalPrice - discount);
  }

  function setPriceToUI(price){
    $('#price').text(price);
  }

  function getCart(){
    var cart = [];
    $('.product').each(function () {
      var qty = $(this).find('input').val();
      cart.push({
        qty: qty
      })
    });
    return cart;
  }
});
