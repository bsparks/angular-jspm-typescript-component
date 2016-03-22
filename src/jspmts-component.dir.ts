import template from './jspmts-component.html!text';
import JspmtsComponentController from './jspmts-component.ctrl';

const templatePath = 'jspmts/ui/templates/jspmts-component.html';

angular.module('jspmts.ui.component.templates', [])
    .run(['$templateCache', function($templateCache) {
        $templateCache.put(templatePath, template);
    }]);

function jspmtsComponentDirective() {
    let config = {
        restrict: 'E',
        templateUrl: templatePath,
        controller: JspmtsComponentController,
        controllerAs: 'jspmtsComponentCtrl'
    };

    return config;
}

angular.module('jspmts.ui.component', ['jspmts.ui.component.templates'])
    .directive('jspmtsComponent', jspmtsComponentDirective);
