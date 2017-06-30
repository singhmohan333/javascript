angular.module('myapplication', [])
	.controller('myapplicationController', function($scope)
	{
			$scope.list = [ {name:'mohan',  age:20},
			{name:'monu',  age:24},
			{name:'raju',  age:30},
			{name:'rohan',  age:35},
			{name:'alon',  age:26},
			{name:'sk',  age:74}
			];

		$scope.addPerson = function 
		    $scope.list.push({name:$scope.name, age:$scope.age) {
			
		}



	});