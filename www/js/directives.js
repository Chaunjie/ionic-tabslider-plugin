angular.module('starter.directives', [])
    .directive('sliderTabs', ['$ionicScrollDelegate', '$timeout', function ($ionicScrollDelegate, $timeout) {
        return {
            restrict : 'A, E, C',
            link: function (scope, element, attrs) {
                console.log(scope);
                console.log(scope.$last);
            }
        };
    }])
;