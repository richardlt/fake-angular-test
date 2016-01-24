var GlobalPage = require('./global.page.js');

module.exports = {
    title: function() {
        return GlobalPage.title();
    },
    input1: function() {
        return element(by.id('input1'));
    },
    input2: function() {
        return element(by.id('input2'));
    },
    click1: function() {
        element(by.buttonText("Click 1")).click();
    }
};
