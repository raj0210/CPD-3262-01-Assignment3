'use strict';

var mail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

angular.module('contactFilters', []).filter('sanitize', function() {
  return function(input) {
    if (input.match(mail))
            return input.replace(/@/, '-AT-').replace(/\./, '-DOT-');
		                          
        else
            return input;
  };
});