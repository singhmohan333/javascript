	var myapp = angular.module("Mohan",[]);
		myapp.controller("myctrl", function($scope){
			$scope.employee = [
			{empname:'Anil Kumar', empid:001, gender:'Male', compname:'HTC', deptname:'IT', contact:8930068008, address:'Faridabad' },
			 {empname:'Mohan Kumar',  empid:0601, gender:'Male', compname:'SAMSUNG', deptname:'HR', contact:1234567890, address:'Gurgaon'}, 
			 {empname:'SURESH', empid:7801, gender:'Male', compname:'MOTORS', deptname:'SERVICE', contact:8930068008, address:'Delhi'}];
			 $scope.submit = function(){
			 	console.log($scope.empname,$scope.empid);
			 	$scope.employee.push(
			 		 
			 		 angular.copy($scope.emp) ) 

					// {empname:$scope.empname,
					//  empid:$scope.empid,
					//   gender:$scope.gender,
					//    compname:$scope.compname, 
					//    deptname:$scope.deptname, 
					//    contact:$scope.contact,
					//     address:$scope.address})
			 
			 $scope.emp.empname = "";
			 $scope.emp.gender = "";
			 $scope.emp.empid = "";
			 $scope.emp.compname = "";
			 $scope.emp.contact = "";
			 $scope.emp.address= "";
			 $scope.emp.deptname = "";
			 		 	
			 }
			 $scope.deleterec = function(index){
			 	$scope.employee.splice(index,1);
			 }
			 $scope.editrec = function(index){
			 $scope.emp = angular.copy($scope.employee[index])
			 }

		})