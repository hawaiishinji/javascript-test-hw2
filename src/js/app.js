require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('../css/custom.css');

$(document).ready(function () {

  var cart = [];

  $('input[name=qty]').on('change', function () {
    cart = [];
    handleInputChange();
  });

  function handleInputChange(){
    $('.product').each(function () {
      var qty = $(this).find('input').val();
      cart.push({
        qty: qty
      })
    });
    var totalPrice = cart.reduce((s, i) => s += 100 * i.qty, 0);
    var uniqueQty = cart.reduce((s, i) => s += Math.min(1, i.qty), 0);
    var rate = 1;
    if (uniqueQty == 2){
      rate = 0.95;
    }
    else if (uniqueQty == 3){
      rate = 0.9;
    }
    else if (uniqueQty == 4){
      rate = 0.8;
    }
    else if (uniqueQty == 5){
      rate = 0.75;
    }
    $('#price').text(totalPrice * rate);
  }
});
