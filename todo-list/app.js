const app = angular.module('app', []);

app.controller('todoController', function ($scope) {
  // variable for input value
  $scope.todoInput = '';

  // todos array
  $scope.todos = [
    { id: 1, text: 'Workout', isCompleted: true },
    { id: 2, text: 'Breakfast', isCompleted: false },
  ];

  //   function to add new todo
  $scope.addNewTodo = function () {
    $scope.todos = [
      ...$scope.todos,
      {
        id: $scope.todos.length + 1,
        text: $scope.todoInput,
        isCompleted: false,
      },
    ];
    $scope.todoInput = '';
  };

  // function to delete a todo
  $scope.handleDeleteTodo = function (id) {
    $scope.todos = $scope.todos.filter((t) => t.id !== id);
  };

  // function to change isCompleted value
  $scope.handleToggleComplete = function (id) {
    $scope.todos = $scope.todos.map((t) =>
      t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
    );
  };
});
