var app = angular.module('customers',[]);

app.controller("CustomerSearchController", ["$scope", "$http",
	function($scope, $http) {
		var page = 0;

		$scope.customers = [];
		$scope.search = function(searchTerm) {
			$http.get("/customers.json",
					{ "params": { "keywords": searchTerm, "page": page } }
				).then(function(response) {
					$scope.customers = response.data;
					$scope.totalCustomers = response.data.length;
				},function(response) {
					alert("There was a problem: " + response.status);
				}
			);
		}

		$scope.previousPage = function() {
			if (page > 0) {
				page = page - 1;
				$scope.search($scope.keywords);
			}
		}

		$scope.nextPage = function() {
			if ($scope.totalCustomers < 10) {} else {
				page = page + 1;
				$scope.search($scope.keywords);
			}
		}	
	}
]);