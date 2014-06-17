'use strict';

/* Controllers */

var ikariamControllers = angular.module('ikariamControllers', []);

ikariamControllers.controller('ikariamCtrl', ['$scope', '$modal', 'Research', 'ResearchMeta', 'ResearchMap', 
	function($scope, $modal, Research, ResearchMeta, ResearchMap) {
		$scope.researches = Research.query();
		$scope.researchMeta = ResearchMeta.query();
        $scope.researchMap = ResearchMap.query();
        $scope.showDetails = function(selectedResearch) {
            $scope.researchDetails = $scope.researchMap[selectedResearch.id];
            $scope.showDetailsPanel = true;
            var tableWidth = $('#researchListTable').width() + 30;
            $('#researchPanel').css('left', tableWidth);
            var researchDetailsPanel = $('#researchDetailsPanel');
            researchDetailsPanel.removeClass();
            researchDetailsPanel.addClass('researchDetails');
            researchDetailsPanel.addClass($scope.researchDetails.type);
            $scope.pathById($scope.researchDetails.id);
        };
        $scope.researchById = function(researchId) {
            var res = this.researchMap[researchId];
            if(!!res) return res.name + " (" + res.category + ")";
            return researchId;
        };
        $scope.openPathDialog = function() {
            $modal.open({
                templateUrl: 'research_full_path.html',
                controller: 'ikariamPathCtrl',
                resolve: {
                    researchPath: function () {
                        return $scope.researchPath;
                    }
                }
            });
        };
        $scope.pathById = function(researchId) {
            $scope.researchPath = {
                research: '',
                path: [],
                total: 0
            };
            var queue = [], 
                    path = [],
                    next = $scope.researchMap[researchId];
            $scope.researchPath.research = next;
            path.push(next);
            while(next) {
                if(next.requirements) {
                    $.each(next.requirements, function(i, req) {
                        queue.push($scope.researchMap[req]);
                        if ($.grep(path, function(e) { return e.id === req; }).length === 0) {
                            path.push($scope.researchMap[req]);
                        }
                    });
                }
                $scope.researchPath.total += next.costs;
                next = queue.shift();
            }
            $scope.researchPath.path = path.reverse();
        };
    }
])
.controller('ikariamPathCtrl', ['$scope', '$modalInstance', 'researchPath', 
function ($scope, $modalInstance, researchPath) {
    $scope.researchPath = researchPath;
    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
}])
.directive('ikariamResearchDetails', function() {
    return {
        restrict: 'A',
        templateUrl: 'research_details.html'
    };
})
.directive('ikariamResearchPath', function() {
    return {
        restrict: 'A',
        templateUrl: 'research_path.html'
    };
});