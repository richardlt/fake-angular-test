var OnePage = require('../pages/one.page.js'),
    TwoPage = require('../pages/two.page.js'),
    ThreePage = require('../pages/three.page.js'),
    BreadcrumbComponent = require('../components/breadcrumb.component.js');

describe('breadcrumb', function() {
    it('should go through all pages with breadcrumb', function() {
        browser.get('http://192.168.99.100:3005');
        expect(OnePage.title()).toEqual('Page 1');
        BreadcrumbComponent.two();
        expect(TwoPage.title()).toEqual('Page 2');
        BreadcrumbComponent.three();
        expect(ThreePage.title()).toEqual('Page 3');
        BreadcrumbComponent.one();
        expect(OnePage.title()).toEqual('Page 1');
    });
});
