require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('../css/custom.css');

$(document).ready(function () {

  var discountRate = [0, 0.05, 0.1, 0.2, 0.25];

  $('input[name=qty]').on('change', function () {
    handleInputChange();
  });

  function handleInputChange(){

    const qtys = getQtys();
    var totalPrice = qtys.reduce((s, q) => s += 100 * q, 0);
    var uniqueQty = qtys.reduce((s, q) => s += Math.min(1, q), 0);
    var discount = discountRate[uniqueQty-1] * uniqueQty * 100;
    setPriceToUI(totalPrice - discount);
  }

  function setPriceToUI(price){
    $('#price').text(price);
  }

  function getQtys(){
    var qtys = [];
    $('.product').each(function () {
      var qty = $(this).find('input').val();
      qtys.push(qty)
    });
    return qtys;
  }
});
