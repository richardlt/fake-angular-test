module.exports = {
    title: function() {
        return element(by.css('.page-title')).getText();
    }
};
