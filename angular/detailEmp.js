angular.module('detailEmp', ['ngAnimate','ui.router'])

    .config(function($stateProvider, $urlRouterProvider){
// $urlRouterProvider.otherwise('/home');
     $stateProvider
     .state('home',
      {
      url: '/',
      templateUrl: 'home.html' ,
      controller: "myCntrl"  
    
     });

    })

	.controller('myCntrl', function($scope)
	{
		 $scope.toggle = true ;

			$scope.list = [ {name:'mohan',  age:20 , img:'il.png'},
			{name:'MONU',  age:24 , img:'il.png'},
			{name:'raju',  age:30 , img:'ik.png'},
			{name:'ROHAN',  age:35 , img:'il.png'},
			{name:'alon',  age:26 , img:'ik.png'},
			{name:'sk',  age:74  , img:'ik.png'}
			];
     $scope.addPerson = function() {
     	$scope.list.push({name: $scope.name, age: $scope.age});
     	$scope.name = '';
     	$scope.age = 0;
     }
	})
	.directive('heloWeb', function(){
		return {
			template: 'Hello my web page'
		}
	});