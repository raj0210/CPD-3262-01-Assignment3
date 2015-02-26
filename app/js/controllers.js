'use strict';

/* Controllers */

var contactListControllers = angular.module('contactListControllers', []);

contactListControllers.controller('ContactListCtrl', ['$scope', 'Contacts', function($scope, Contacts) {

  $scope.contacts = Contacts.query();
   $scope.orderProp = 'first';
}]);

contactListControllers.controller('ContactDetailCtrl', ['$scope', '$routeParams', 'Contacts',
  function($scope, $routeParams, Contacts) {
     $scope.contact = Contacts.get({contactId: $routeParams.contactId}, function(contact) {
		 $scope.contact = contact.query();
  });
  
	  $scope.doTheBack = function() {
  window.history.back();
};
   // });
  }]);