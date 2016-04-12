angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {
    })

    .controller('ChatsCtrl', function ($scope, Chats) {
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
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })

    .controller('TestCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.doRefresh = function(){
            console.log('refresh complty');
            $scope.$broadcast('scroll.refreshComplete');
        };

        var i = 1;
        $scope.nextPage = function(){
            i++;
            console.log('next page');
            if(i === 2){
                $timeout(function(){
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                })
            }


        };
    }])

    .controller('TemplateTwoCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.doRefresh = function(){
            console.log('refresh complty');
            $scope.$broadcast('scroll.refreshComplete');
        };

        var i = 1;
        $scope.nextPage = function(){
            i++;
            console.log('next page');
            if(i === 2){
                $timeout(function(){
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                })
            }


        };
    }])

    .controller('TemplateThirdCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.doRefresh = function(){
            console.log('refresh complty');
            $scope.$broadcast('scroll.refreshComplete');
        };

        var i = 1;
        $scope.nextPage = function(){
            i++;
            console.log('next page');
            if(i === 2){
                $timeout(function(){
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                })
            }


        };
    }])

    .controller('TemplateFourCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.doRefresh = function(){
            console.log('refresh complty');
            $scope.$broadcast('scroll.refreshComplete');
        };

        var i = 1;
        $scope.nextPage = function(){
            i++;
            console.log('next page');
            if(i === 2){
                $timeout(function(){
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                })
            }


        };
    }])

    .controller('TemplateFiveCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.doRefresh = function(){
            console.log('refresh complty');
            $scope.$broadcast('scroll.refreshComplete');
        };

        var i = 1;
        $scope.nextPage = function(){
            i++;
            console.log('next page');
            if(i === 2){
                $timeout(function(){
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                })
            }


        };
    }])

;
