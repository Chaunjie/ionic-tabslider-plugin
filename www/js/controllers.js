angular.module('starter.controllers', [])

    .controller('DashCtrl', ['$scope', function ($scope) {

        console.log(666)
    }])

    .controller('ChatsCtrl', ['$scope', 'Chats', function ($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        };
    }])

    .controller('ChatDetailCtrl', ['$scope', '$stateParams', 'Chats', '$timeout', '$ionicScrollDelegate', function ($scope, $stateParams, Chats, $timeout, $ionicScrollDelegate) {
        $scope.chat = Chats.get($stateParams.chatId);
        $scope.message = [
            {id: 1, name: '收件箱'}, {id: 2, name: '移动箱'}, {id: 3, name: '发件箱'}, {id: 4, name: '草稿箱'}, {id: 5, name: '垃圾箱'}
        ];
        var flexWidth = Math.floor(document.body.clientWidth * $scope.message.length / 4), slider, historyIndex = 0;
        $scope.containerStyle = {width: flexWidth + 'px'};

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
            var scrollLeft = $ionicScrollDelegate.$getByHandle('rootTagsScroll').getScrollPosition().left,
                status = true;
            if (($scope.activeIndex - historyIndex) > 0 || ($scope.activeIndex + historyIndex == 0)) {
                console.log('right');
                status = true;//right
            } else {
                console.log('left');
                status = false;//left
            }

            $timeout(function(){
                console.log(angular.element(".tag").width());
                var width = $('.tag').width(),
                    left = ($('.tag.active').index() + 1) * width + 10,
                    positionLeft = $('.tag.active').index() * width,
                    scrollWidth = 0;
                console.log(positionLeft);
                if(left - scrollLeft > document.body.clientWidth){
                    scrollWidth += width;
                    console.log(scrollWidth);
                    $ionicScrollDelegate.scrollTo(scrollWidth, 0, true);
                }else if(positionLeft - scrollLeft <= 10 && positionLeft!=0 && scrollLeft!=0){
                    scrollWidth -= width;
                    $ionicScrollDelegate.scrollTo(scrollWidth, 0, true);
                }
            },200);


            historyIndex = $scope.activeIndex;

        }
    }])

    .controller('AccountCtrl', ['$scope', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    }])

    .controller('TestCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.doRefresh = function () {
            console.log('refresh complty');
            $scope.$broadcast('scroll.refreshComplete');
        };

        var i = 1;
        $scope.nextPage = function () {
            i++;
            console.log('next page');
            if (i === 2) {
                $timeout(function () {
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                })
            }


        };
    }])

    .controller('TemplateTwoCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.doRefresh = function () {
            console.log('refresh complty');
            $scope.$broadcast('scroll.refreshComplete');
        };

        var i = 1;
        $scope.nextPage = function () {
            i++;
            console.log('next page');
            if (i === 2) {
                $timeout(function () {
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                })
            }


        };
    }])

    .controller('TemplateThirdCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.doRefresh = function () {
            console.log('refresh complty');
            $scope.$broadcast('scroll.refreshComplete');
        };

        var i = 1;
        $scope.nextPage = function () {
            i++;
            console.log('next page');
            if (i === 2) {
                $timeout(function () {
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                })
            }


        };
    }])

    .controller('TemplateFourCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.doRefresh = function () {
            console.log('refresh complty');
            $scope.$broadcast('scroll.refreshComplete');
        };

        var i = 1;
        $scope.nextPage = function () {
            i++;
            console.log('next page');
            if (i === 2) {
                $timeout(function () {
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                })
            }


        };
    }])

    .controller('TemplateFiveCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.doRefresh = function () {
            console.log('refresh complty');
            $scope.$broadcast('scroll.refreshComplete');
        };

        var i = 1;
        $scope.nextPage = function () {
            i++;
            console.log('next page');
            if (i === 2) {
                $timeout(function () {
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                })
            }


        };
    }])

;
