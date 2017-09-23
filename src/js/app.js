require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('../css/custom.css');

$(document).ready(function () {


    $('input[name=qty]').on('change', function () {

        $('#price').text('100');
    });
});
