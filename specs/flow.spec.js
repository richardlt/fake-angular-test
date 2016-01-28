var OnePage = require('../pages/one.page.js'),
    TwoPage = require('../pages/two.page.js'),
    ThreePage = require('../pages/three.page.js');

var Matchers = require('../matchers/matchers.js');

describe('flow', function() {
    beforeEach(function() {
        jasmine.addMatchers(Matchers);
    });

    it('should go through all pages', function() {
        browser.get('http://192.168.99.100:3005');
        expect(OnePage.title()).toEqual('Page 1');
        OnePage.click1();
        expect(TwoPage.title()).toEqual('Page 2');
        browser.wait(function() {
            var deferred = protractor.promise.defer();
            TwoPage.appendElement().isPresent().then(function(isPresent) {
                deferred.fulfill(isPresent);
            });
            return deferred.promise;
        }, 10000);
        expect(TwoPage.appendElement().getText()).toEqual('element');
        expect(TwoPage.appendElement().getText()).toEqualLength(7);
        TwoPage.click1();
        expect(ThreePage.title()).toEqual('Page 3');
    });
});
