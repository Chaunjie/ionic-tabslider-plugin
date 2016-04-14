angular.module('starter.directives', [])
    .directive('sliderTabs', ['$ionicScrollDelegate', '$timeout', function ($ionicScrollDelegate, $timeout) {
        return {
            restrict : 'A, E, C',
            link: function (scope, element, attrs) {
                scope.tabs = attrs.tabs;
            },
            controller: function($scope, $attrs, $element, $ionicScrollDelegate){
                var tabs = 4,
                    emitName = $($element).attr('emitName');
                $timeout(function(){
                    tabs = $scope.tabs ? $scope.tabs : 4;
                });
                
                $scope.$on(emitName, function() {
                    var flexWidth = Math.floor(document.body.clientWidth * $scope[$attrs.repeatdata].length / tabs), slider;
                    $scope.containerStyle = {width: flexWidth + 'px'};
                });

                $scope.activeIndex = 0;
                $scope.options = {
                    pagination: false,
                    initialSlide: 0,
                    autoplayDisableOnInteraction: false,
                    lazyLoading: true,
                    onSlideChangeStart: function (swiper) {
                        $timeout(function () {
                            $scope.activeIndex = swiper.activeIndex;
                            translateTags();
                        },100);

                    },

                    onSlideChangeEnd: function (swiper) {

                    },

                    onInit: function (swiper) {
                        slider = swiper;
                    }
                };

                $scope.initActiveIndex = function (index) {
                    $scope.activeIndex = index;
                    slider._slideTo(index);
                };

                function translateTags() {
                    var handle = $($element).find('.scroll-view').attr('delegate-handle');
                    var scrollLeft = $ionicScrollDelegate.$getByHandle(handle).getScrollPosition().left;

                    $timeout(function(){
                        var width = $('.tag').width(),
                            left = ($('.tag.active').index() + 1) * width + 10,
                            positionLeft = $('.tag.active').index() * width;

                        if(left - scrollLeft > document.body.clientWidth){
                            $ionicScrollDelegate.scrollBy(width, 0, true);
                        }else if(positionLeft - scrollLeft <= 10 && positionLeft != 0 && scrollLeft != 0){
                            $ionicScrollDelegate.scrollBy(-width, 0, true);
                        }

                    },200);
                }
            }
        };
    }])

    .directive('onFinishRender', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$emit(attr.onFinishRender);
                    });
                }
            }
        }
    })
;