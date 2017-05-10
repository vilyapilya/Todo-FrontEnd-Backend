export const fetchTodos = function(){
  return $.ajax({
    url: "api/todos",
    type: "GET"
  });
};

export const createTodo = function(todo){
  console.log(todo);
  return $.ajax({
    type: "POST",
    data: todo,
    url: "api/todos"
  });
};
