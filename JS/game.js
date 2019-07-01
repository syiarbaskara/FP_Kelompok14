function openNav() {
  	document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  	document.getElementById("mySidenav").style.width = "0px";
	x.classList.toggle("change");
}
function Controller($scope) {
	$scope.comments = [];
	$scope.btn_post = function() {
		if ($scope.cmtName != '') {
			$scope.comments.push($scope.cmtName);
			$scope.cmtName = "";
		}
		}
		$scope.post_cmt = function($home) {
		$scope.comments.splice($home, 1);
		}
}
var app = angular.module('App', []);
app.controller('myCtrl', function($scope) {
	$scope.showMe = false;
	$scope.myFunc = function() {
		$scope.showMe = !$scope.showMe;
	}
});
