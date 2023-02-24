export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data,
    }
} 

export const deleteTodo = (id) => {
    return {
        type: 'todoList/deleteTodo',
        payload: id,
    }
} 

