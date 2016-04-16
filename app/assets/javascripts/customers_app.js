var app = angular.module('customers',['ngRoute', 'templates']);

app.config(["$routeProvider",
	function($routeProvider) {
		$routeProvider.when("/", {
			controller: "CustomerSearchController",
			templateUrl: "customer_search.html"
		});
	}
]);

app.controller("CustomerSearchController", ["$scope", "$http",
	function($scope, $http) {
		var page = 0;

		$scope.pageNum = 0;
		$scope.customers = [];
		$scope.search = function(searchTerm) {
			if (searchTerm.length < 3) {
				return;
			}

			$http.get("/customers.json",
					{ "params": { "keywords": searchTerm, "page": page } }
				).then(function(response) {
					$scope.customers = response.data;
					$scope.totalCustomers = response.data.length;
					$scope.pageNum = page;
				},function(response) {
					alert("There was a problem: " + response.status);
				}
			);
		}

		$scope.newSearch = function(searchTerm) {
			page = 0;
			$scope.pageNum = page;
			$scope.search(searchTerm);
		}

		$scope.previousPage = function() {
			if (page > 0) {
				page = page - 1;
				$scope.pageNum = page;
				$scope.search($scope.keywords);
			}
		}

		$scope.nextPage = function() {
			if ($scope.totalCustomers < 10) {} else {
				page = page + 1;
				$scope.pageNum = page;
				$scope.search($scope.keywords);
			}
		}	
	}
]);