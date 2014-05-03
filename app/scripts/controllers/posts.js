'use strict';

app.controller('PostsCtrl', function ($scope, Post) {
	$scope.posts = Post.all;
	$scope.post = {
		url : 'http://',
		title: ''
	};
	$scope.removePost = function (postId) {
		Post.delete(postId);
	};
});