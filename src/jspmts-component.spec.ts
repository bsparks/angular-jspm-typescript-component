import angular from 'angular';
import 'angular-mocks';
import './jspmts-component.dir';

describe('jspmts base component', function() {
    let $compile,
        $rootScope;

    beforeEach(angular.mock.module('jspmts.ui.component'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('Replaces the element with the appropriate content', function() {
        let element = $compile('<jspmts-component></jspmts-component>')($rootScope);

        $rootScope.$digest();

        expect(element.html()).toContain('hello');
    });
});