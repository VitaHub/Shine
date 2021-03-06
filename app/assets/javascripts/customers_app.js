var app = angular.module(
	'customers',
	[
		'ngRoute',
		'ngResource',
		'templates'
	]);

app.config(["$routeProvider",
	function($routeProvider) {
		$routeProvider.when("/", {
			controller: "CustomerSearchController",
			templateUrl: "customer_search.html"
		}).when("/:id", {
			controller: "CustomerDetailController",
			templateUrl: "customer_detail.html"
		});
	}
]);

app.controller("CustomerCreditCardController", [ 
          "$scope","$resource",
  function($scope , $resource) {
    var CreditCardInfo = $resource('/fake_billing.json')
    $scope.creditCard = CreditCardInfo.get({ "cardholder_id": 1234})
  }
]);

app.controller("CustomerDetailController", ["$scope", "$resource", "$routeParams", function($scope, $resource, $routeParams) {

	var customerId = $routeParams.id;
	var Customer = $resource('/customers/:customerId.json');
	$scope.customer = Customer.get({"customerId": customerId});

}]);

app.controller("CustomerSearchController", ["$scope", "$http", "$location",
	function($scope, $http, $location) {
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

		$scope.viewDetails = function(customer) {
			$location.path("/" + customer.id);
		}	
	}
]);