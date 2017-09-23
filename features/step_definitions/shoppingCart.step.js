var { defineSupportCode } = require('cucumber');
var chai = require('chai');
chai.should();

defineSupportCode(function ({ Given, When, Then }) {
  var url = "http://localhost:8080"
  Given('進入購物車頁面', async function () {
    await this.driver.goto(url)
          .viewport(1000, 760);
  });

  Given('選擇第 {string} 集，數量 {string} 一本', async function (index, qty) {
    await this.driver
        .insert(`div.product:nth-child(${index}) input[name=qty]`, false)
        .insert(`div.product:nth-child(${index}) input[name=qty]`, +qty);
  });

  When('選擇完畢，計算價格', async function () {
    var price = await this.driver
        .evaluate(() => document.querySelector('#price').innerText);

    this.actual = +price;
  });

  Then('折扣後價格為 {string} 元', async function (expected) {
    this.actual.should.equal(+expected);
  });
})
