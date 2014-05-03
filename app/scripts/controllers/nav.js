'use strict';

app.controller('NavCtrl', function ($scope, Post) {
	$scope.posts = Post.all;
	$scope.post = {
		url : 'http://',
		title: ''
	};
	$scope.submitPost = function () {
		Post.create($scope.post).then( function (ref) {
			$scope.post = {
				url: 'http://',
				title: ''
			};
			$location.path('/posts/'+ref.name);
		});
	};
	$scope.removePost = function (postId) {
		Post.delete(postId);
	};
});