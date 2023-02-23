const initValue = {
    todoList: [], 
}

const rootReducer = (state = initValue, action) =>{
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload,
                ]
            }
        case 'todoList/deleteTodo':
            return {
                ...state,
                todoList: state.todoList.filter(x => x.name !== action.payload)
            }
        default:
            return state;
    }
}
export default rootReducer;