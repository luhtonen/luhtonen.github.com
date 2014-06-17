'use strict';

/* Services */
var ikariamServices = angular.module('ikariamServices', ['ngResource']);

ikariamServices.factory('Research', ['$resource',
  function($resource){
    return $resource('resources/json/research/:researchId.json', {}, {
      query: {method:'GET', params:{researchId:'researches'}, isArray:true}
    });
  }]);
ikariamServices.factory('ResearchMeta', ['$resource',
	function($resource) {
		return $resource('resources/json/research_meta.json', {}, {
			query: {method:'GET', params:{}, isArray:false}
		});
	}]);
ikariamServices.factory('ResearchMap', ['$resource',
    function($resource){
        return $resource('resources/json/research/research_map.json', {}, {
            query: {method:'GET', params:{}, isArray:false}
        });
    }]);
