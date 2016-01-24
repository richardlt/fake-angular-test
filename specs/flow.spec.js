var OnePage = require('../pages/one.page.js'),
    TwoPage = require('../pages/two.page.js'),
    ThreePage = require('../pages/three.page.js');

describe('flow', function() {
    it('should go through all pages', function() {
        browser.get('http://192.168.99.100:3005');
        expect(OnePage.title()).toEqual('Page 1');
        OnePage.click1();
        expect(TwoPage.title()).toEqual('Page 2');
        TwoPage.click1();
        expect(ThreePage.title()).toEqual('Page 3');
    });
});
