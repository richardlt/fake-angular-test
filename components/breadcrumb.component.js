module.exports = {
    one: function() {
         element(by.css('a[href*="#/one"]')).click();
    },
    two: function() {
         element(by.css('a[href*="#/two"]')).click();
    },
    three: function() {
         element(by.css('a[href*="#/three"]')).click();
    }
};
