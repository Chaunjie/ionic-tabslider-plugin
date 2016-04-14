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
        $timeout(function(){
            $scope.message = [
                {id: 1, name: '收件箱'}, {id: 2, name: '移动箱'}, {id: 3, name: '发件箱'}, {id: 4, name: '草稿箱'}, {id: 5, name: '垃圾箱'}
            ];
        })

        $scope.includePages = ['templates/template1.html',
            'templates/template2.html',
            'templates/template3.html',
            'templates/template4.html',
            'templates/template5.html'];

        $scope.title= '666';

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
