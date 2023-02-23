export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data,
    }
} 

export const deleteTodo = (name) => {
    return {
        type: 'todoList/deleteTodo',
        payload: name,
    }
} 

